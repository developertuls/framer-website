
"use client";

export default function StickyVideoSection() {
  return (
    <section className="relative h-[200vh] bg-white">

      {/* STICKY VIDEO */}
      <div className="sticky top-0 h-[80vh] w-full overflow-hidden">
        <video
          src="/souvevd.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* overlay for readability */}
        <div className="absolute inset-0 " />
      </div>

      {/* SCROLLING CONTENT OVER VIDEO */}
      <div className="relative -mt-[100vh] z-10">

        {/* SECTION 1 */}
        <div className="h-screen text-white flex items-center justify-center px-4 text-center">
          <div className="bg-[#2c145d]/40  rounded-2xl p-6 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Handcrafted with Love
            </h2>
            <p className="">
              Every piece is thoughtfully made to celebrate your most meaningful moments
              with faith, beauty, and care.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="h-screen text-white flex items-center justify-center px-4 text-center">
          <div className="bg-[#301760]/40 rounded-2xl p-6 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Designed for Your Memories
            </h2>
            <p className="">
              From engagements to weddings, our designs hold emotions that last forever.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
