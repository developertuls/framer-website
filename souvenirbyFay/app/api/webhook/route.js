
import Stripe from "stripe";
import { headers } from "next/headers";
import { sendOrderEmails } from "@/lib/sendOrderEmails";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // 🛑 safety: no double process
    if (session.metadata?.processed === "true") {
      return new Response("Already processed", { status: 200 });
    }

    let items = [];
    try {
      items = JSON.parse(session.metadata?.items || "[]");
    } catch {
      items = [];
    }

    const orderPayload = {
      customer: {
        name: session.customer_details?.name || "N/A",
        email: session.customer_details?.email,
        phone: session.customer_details?.phone || "N/A",
        address:
          session.customer_details?.address?.line1 || "N/A",
      },

      items,

      payment: {
        method: "Stripe",
        status: "Paid",
        session_id: session.id,
      },

      createdAt: new Date().toISOString(),
    };

    try {
      await sendOrderEmails(orderPayload);
      console.log("✅ Order confirmed & emails sent");
    } catch (error) {
      console.error("❌ Email failed:", error);
      return new Response("Processing failed", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
