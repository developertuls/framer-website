
import wedding from "@/data/wedding";
import islamic from "@/data/islamic";
import resin from "@/data/resin";
import CollectionGrid from "@/components/CollectionGrid";

const collectionMap = {
  "wedding-keepsakes": wedding,
  "islamic-calligraphy": islamic,
  "custom-resin-art": resin,
};

export default async function CollectionDetails({ params }) {
  const { slug } = await params;

  const title = slug.replace(/-/g, " ");
  const images = collectionMap[slug] || [];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-24 ">
      <h2 className="text-4xl  mb-14 capitalize text-center ">
        {title}
        
      </h2>
       
      <CollectionGrid images={images} title={title} />
    
    </section>
  );
} 
