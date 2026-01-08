
"use client";





import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedHeading from "@/components/AnimatedHeading";





const collections = [
  {
    id: 1,
    title: "Wedding Keepsakes",
    slug: "wedding-keepsakes",
    image: "/fu-11.jpeg",
  },
  {
    id: 2,
    title: "Islamic Calligraphy",
    slug: "islamic-calligraphy",
    image: "/fu-14.jpeg",
  },
  {
    id: 3,
    title: "Wedding Keepsakes",
    slug: "custom-resin-art",
    image: "/fu-16.jpg",
  },
  {
    id: 4,
    title: "Wedding Keepsakes",
    slug: "custom-resin-art",
    image: "/fu-10.jpeg",
  },

  {
    id: 5,
    title: "Wedding Keepsakes",
    slug: "custom-resin-art",
    image: "/fu-17.jpg",
  },
  {
    id: 6,
    title: "Custom Resin Art",
    slug: "custom-resin-art",
    image: "/image-3.jpg",
  },

  // {
  //   id: 4,
  //   title: "Wedding Keepsakes",
  //   slug: "custom-resin-art",
  //   image: "/hero-2.jpeg",
  // },
];


export default function FeaturedCollections() {
  const { t } = useLanguage();





  return (
    <div>
  

   <h2 className="text-center text-4xl font-serif">
        {t.featured}
      </h2>





    <section className="py-20 px-4 md:px-12 mt-[-30]">
    {/* <h2 className="featured  text-center text-4xl md:text-6xl font-bold mb-6 ">
Featured <span className="text-[#f31c6b]">
  Collections
</span>

</h2> */}

<div className="flex justify-center items-center 
 mt-[-60] gap-4 py-16 overflow-hidden perspective-[1000px]
transition-all duration-700 ease-out


">
  <h2 className="bg-[#fff] p-5 featured text-center text-4xl md:text-6xl font-bold flex gap-4 drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]
  transition-all duration-700 ease-out
  transform-gpu
  -translate-y-6
 shadow-md
  "
  
    style={{
    textShadow: "0 6px 18px rgba(0,0,0,0.25)",
    transform: "translateY(-40px) translateZ(40px)",
  }}
  >
    
    <AnimatedHeading direction="left">
      Featured
    </AnimatedHeading>

    <AnimatedHeading direction="right">
      <span className="text-[#f31c6b] ">Collections</span>
    </AnimatedHeading>

  </h2>
</div>






<div
 className=
 "grid gap-8 sm:grid-cols-2 mt-[-70] lg:grid-cols-3 md:grid-cols-3 shadow-b-md p-9 w-full">
       {collections.map((item) => (
        
  <Link
    key={item.id}
    href={`/collections/${item.slug}`}
    className="group relative overflow-hidden rounded-xl
               shadow-md hover:shadow-2xl transition-all duration-500"
  >
    <div className="relative h-[428px] w-full overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        fill
      
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40
                    transition-colors duration-500 flex items-end">
      <div className="w-full bg-white/95 p-5 text-center
                      translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className=" text-xl text-gray-900">
          {item.title}
        </h3>
      </div>
    </div>
  </Link>
))}
      </div>
    </section>
    </div>
  );
}
