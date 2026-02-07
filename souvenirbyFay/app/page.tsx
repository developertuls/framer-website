

// import Hero from "@/components/Hero"
import Featured from "@/components/Featured"
import Overly from "@/components/Overly"
import CustomerReviews from "@/components/CustomerReviews";

import Hero2 from "@/components/Hero2"




export default function Home() {
  return (
    <div>
      {/* <h1 className="text-red-500">fatima</h1> */}
      {/* <Hero/> */}
      <Hero2/>
      <Overly/>
     
      <Featured/>
       <CustomerReviews />
    </div>
    
        
  );
}
