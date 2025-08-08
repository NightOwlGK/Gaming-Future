import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function About() {

  const heading = useRef();

  useGSAP(()=>{
    gsap.from(heading.current,{
      x:100,
      y:100,
      opacity:0,
      scrollTrigger:{
        trigger:"#section2",
        start:"50% 100%",
        end:"50% 100%",
        toggleActions:"play none none reset"
      }
    });
  },[]);

  return (
    <section id="section2" className='w-full flex flex-col items-center pt-10 pb-32 gap-10 overflow-hidden'>
      <p className="text-xs">WELCOME TO ZENTRY</p>
      <div ref={heading} className="text-8xl font-[zentry-regular] text-center">
        <h1>Discover the world's</h1>
        <h1>largest shared adventure</h1>
      </div>
    </section>
  )
}

export default About