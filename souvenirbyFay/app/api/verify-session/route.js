
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { session_id } = await req.json();

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["customer_details"],
  });

  if (session.payment_status !== "paid") {
    return Response.json({ success: false }, { status: 400 });
  }

  // 🔥 THIS is your orderPayload
  const orderPayload = {
    customer: {
      name: session.customer_details.name,
      email: session.customer_details.email,
      phone: session.customer_details.phone || "",
      address: session.customer_details.address?.line1 || "",
    },
    items: session.metadata?.items
      ? JSON.parse(session.metadata.items)
      : [],
    payment: {
      method: session.payment_method_types[0],
      status: session.payment_status,
    },
    createdAt: Date.now(),
  };

  return Response.json({
    success: true,
    orderPayload,
  });
}
