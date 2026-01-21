
import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(req) {
  try {
    const data = await req.json();

    const firstItem = data.items[0];

   await emailjs.send(
  process.env.EMAILJS_SERVICE_ID,
  process.env.EMAILJS_TEMPLATE_ID,
  {
    name: data.customer.name,
    email: data.customer.email,
    phone: data.customer.phone,
    product: firstItem.title,
    quantity: firstItem.quantity,
    size: firstItem.size || "N/A",
    customText: firstItem.customText || "—",
  },
  {
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    blockHeadless: false,   // 🔥 ADD THIS
    limitRate: false        // 🔥 ADD THIS
  }
);


    return NextResponse.json({ success: true });



  } 
  
  catch (error) {
  console.error("EMAILJS FULL ERROR 👉", error);
  return NextResponse.json(
    { error: error?.text || error?.message || "Email failed" },
    { status: 500 }
  );
}

}
