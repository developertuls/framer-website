

import Hero from "@/components/Hero"
import Featured from "@/components/Featured"
import Overly from "@/components/Overly"
import StickyVideoSection from "@/components/StickyVideoSection";





export default function Home() {
  return (
    <div>
      {/* <h1 className="text-red-500">fatima</h1> */}
      <Hero/>
      
      <Overly/>
       <StickyVideoSection/>
      <Featured/>
     
    </div>
    
        
  );
}
