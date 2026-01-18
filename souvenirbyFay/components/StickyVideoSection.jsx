"use client";









export default function StickyVideoSection() {
  return (
    <section className="relative h-[200vh] bg-white">

      <div className="sticky top-0 h-screen w-full">
        <video
  src="/souvevd.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="w-full h-full object-cover scale-95"
/>
        <div className="absolute inset-0 " />
      </div>

      <div className="relative h-[70vh]  bg-[#3B3B98]/30 rounded-md mx-auto   text-white z-10 h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className=" text-6xl font-bold mb-4">
            Handcrafted with Love
          </h2>
          <p className="  max-w-xl mx-auto">
          Every piece is thoughtfully made to celebrate your most meaningful moments with faith, beauty, and care.
          </p>

        


        </div>
      </div>

    </section>
  );
}
