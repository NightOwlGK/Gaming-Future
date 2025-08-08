import { useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {

    const animatedVideo = useRef();
    const [index, setIndex] = useState(0);

    const videoClicked = () => {

        let timeLine = gsap.timeline();

        timeLine.to(animatedVideo.current, {
            width: window.innerWidth,
            height: window.innerHeight,
            duration: 1,
            borderRadius:0,
            onStart: () => {
                animatedVideo.current.style.pointerEvents = "none";
                animatedVideo.current.style.cursor = "default";
            },
            onComplete: () => {
                animatedVideo.current.style.pointerEvents = "auto";
                animatedVideo.current.style.cursor = "pointer";
                setIndex((index+1)%4);
            }
        });

        timeLine.set(animatedVideo.current, {
            width: "10rem",
            height: "10rem",
            borderRadius:15,
        });

    }

    let videoList = [
        './videos/hero-1.mp4',
        './videos/hero-2.mp4',
        './videos/hero-3.mp4',
        './videos/hero-4.mp4',
    ];

    return (
        <section className="w-full h-screen relative text-white overflow-hidden">
            <div className="absolute z-20 top-5 left-10">
                <h1 className="text-9xl font-[zentry-regular]">REDEFINE</h1>
                <p>Enter the Metagame</p>
                <p>Unleash the Play Economy</p>
            </div>
            <div className="absolute size-full">
                <video src={videoList[index]} autoPlay loop muted className="size-full object-cover absolute" preload="auto"></video>
            </div>
            <div ref={animatedVideo} onClick={videoClicked} className="w-40 h-40 absolute z-10 top-1/2 left-1/2 -translate-1/2 cursor-pointer rounded-2xl overflow-hidden">
                <video src={videoList[(index+1)%4]} className="size-full object-cover" preload="auto"></video>
            </div>
            <h1 className="text-9xl font-[zentry-regular] absolute z-20 right-10 bottom-10">GAMING</h1>
        </section>
    );
}

