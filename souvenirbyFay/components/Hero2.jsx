import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-2.jpeg"
        alt="Handcrafted Resin Art"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="  absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Handcrafted Resin Art
            </h1>

            <p className="mt-4 text-lg text-white/90">
              Made to Preserve Your Memories
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/collections"
                className="rounded-full bg-[#e6c28a] px-6 py-3 text-sm font-medium text-black hover:bg-[#d9b172] transition"
              >
                Explore Collection
              </Link>

              <Link
                href="/custom-order"
                className="rounded-full border border-white px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition"
              >
                Custom Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
