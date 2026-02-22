
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";


export const sendOrderEmails = async (orderPayload) => {
  console.log("EMAIL FUNCTION CALLED");
  console.log(orderPayload);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // const adminTemplate = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE;
  const userTemplate = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE;
  
  // 🧾 items list (FIXED: item.title)
 const itemsText = orderPayload.items
  .map((item, index) => {
    const addonsText = item.addons?.length
      ? item.addons.map((a) => a.label).join(", ")
      : "None";

    return `
${index + 1}. ${item.title}
Size: ${item.size || "N/A"}
Quantity: ${item.quantity}
Custom Text: ${item.customText || "None"}
Special Request: ${item.specialRequest || "None"}
Add-ons: ${addonsText}
----------------------------------------
`;
  })
  .join("\n");

  const templateParams = {
    customer_name: orderPayload.customer.name,
    customer_email: orderPayload.customer.email,
    customer_phone: orderPayload.customer.phone,
    customer_address: orderPayload.customer.address,

    email: orderPayload.customer.email, // user template এর জন্য

    order_items: itemsText,
    payment_method: orderPayload.payment.method,
    payment_status: orderPayload.payment.status,
    order_date: new Date(
      orderPayload.createdAt
    ).toLocaleDateString(),
  };

  // 📧 Admin Email (FULL DETAILS)
  // await emailjs.send(
  //   serviceId,
  //   adminTemplate,
  //   templateParams,
  //   publicKey
  // );

  // 📧 User Email (SHORT SUMMARY)
  await emailjs.send(
    serviceId,
    userTemplate,
    templateParams,
    publicKey
  );



};
