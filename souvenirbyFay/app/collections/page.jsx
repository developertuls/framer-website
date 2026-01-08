
import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "Wedding Keepsakes",
    slug: "wedding-keepsakes",
    image: "/images/wedding/1.jpg",
  },
  {
    title: "Islamic Art",
    slug: "islamic-art",
    image: "/images/islamic/1.jpg",
  },
  {
    title: "Custom Resin",
    slug: "custom-resin",
    image: "/images/resin/1.jpg",
  },
];

export default function CollectionsPage() {
  return (
    <section className="py-20 px-10">
      <h2 className="text-3xl mb-10 font-serif">Featured Collections</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {collections.map((item) => (
          <Link
            key={item.slug}
            href={`/collections/${item.slug}`}
            className="group relative rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-xl font-serif">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
