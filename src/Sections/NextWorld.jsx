import { useGSAP } from "@gsap/react"
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NextWorld() {

  const imageAnimation = useRef();

  useGSAP(()=>{
    gsap.to(imageAnimation.current,{
      width:window.innerWidth,
      height:window.innerHeight,
      borderRadius:0,
      scrollTrigger:{
        trigger:"#nextworld",
        start:"0 0",
        scrub:1,
        pin:true,
      }
    });
  },[]);

  return (
    <section id="nextworld" className="w-full h-screen relative flex justify-center">
      <img src="./img/stones.webp" alt="" className="absolute top-0 left-0"/>
      <div ref={imageAnimation} className="w-60 h-96 rounded-xl overflow-hidden">
        <img src="./img/about.webp" alt="" className="size-full object-cover"/>
      </div>
    </section>
  )
}

export default NextWorld