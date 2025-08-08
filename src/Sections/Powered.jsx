import { useGSAP } from "@gsap/react";
import { use, useRef } from "react"
import gsap from "gsap";

function Powered() {

    const innerSquare = useRef();
    const outerRef = useRef();

    useGSAP(()=>{
        gsap.to(innerSquare.current,{
            rotate:90,
            duration:1,
            repeat:-1,
        });
        gsap.to(outerRef.current,{
            rotate:-90,
            duration:1,
            repeat:-1,
        });
    });

    return (
        <section className="w-full h-screen bg-[#EDFF66] relative">
            <div className="text-8xl font-[zentry-regular] absolute top-10 left-10">
                <h1>THE UNIVERSE</h1>
                <h1>POWERED BY ZENT</h1>
            </div>
            <div className="w-96 h-96 absolute right-0 bottom-0">
                <div ref={innerSquare} className="w-32 h-32 bg-black absolute top-1/2 left-1/2 -translate-1/2 z-10"></div>
                <div ref={outerRef} className="w-52 h-52 bg-red-700 absolute top-1/2 left-1/2 -translate-1/2"></div>
            </div>
        </section>
    )
}

export default Powered