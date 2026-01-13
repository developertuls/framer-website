
"use client"

import React ,{useState,useEffect} from "react";
import wedding from "@/data/wedding";
import islamic from "@/data/islamic";
import resin from "@/data/resin";
import CollectionGrid from "@/components/CollectionGrid";
import PricingGate from "../../../components/PricingGate";





const collectionMap = {
  "wedding-keepsakes": wedding,
  "islamic-calligraphy": islamic,
  "custom-resin-art": resin,
};

export default  function CollectionDetails({ params }) {
  const { slug } =  React.use(params);

  const title = slug.replace(/-/g, " ");
  const images = collectionMap[slug] || [];
  const [showPricing, setShowPricing] = useState(false); 



 useEffect(() => {
    const timer = setTimeout(() => {
      setShowPricing(true);
    }, 1200); // 1.2 second delay

    return () => clearTimeout(timer);
  }, []);

  return (

 <>
      {/* Pricing Gate */}
      <PricingGate
        open={showPricing}
        onClose={() => setShowPricing(false)}
      />

      {/* Page Content */}
      <section
        className={`max-w-7xl mx-auto px-4 md:px-10 py-24 transition ${
          showPricing ? "pointer-events-none blur-sm" : ""
        }`}
      >
        <h2 className="text-4xl mb-14 capitalize text-center">
          {title}
        </h2>


     


        <CollectionGrid images={images} title={title} />
      </section>
    </>


  );
} 
