


import OrderForm from "@/components/OrderForm";

export default function CustomOrderPage() {
  return (
    <div className=" craft-overly   px-4 py-20">

      <h1 className="md:mt-5  text-4xl  mb-10 text-center">
        Custom Order
      </h1>
 <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-[#C9A24D]" />
 

      <OrderForm mode="custom" />
    </div>
  );
}
