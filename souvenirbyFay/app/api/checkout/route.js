
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { items } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json(
      { error: "No items provided" },
      { status: 400 }
    );
  }

  const line_items = items.map((item) => ({
    price_data: {
      currency: "usd", // ✅ client requirement
      product_data: {
        name: `${item.title} (${item.size || ""} inch)`,
      },
      unit_amount: Math.round(item.price * 100), // ✅ USD cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items,
    metadata: {
      items: JSON.stringify(items),
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });

  return NextResponse.json({ url: session.url });
}
