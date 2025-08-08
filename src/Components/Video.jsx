import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useRef } from "react"

function Video({ isNormal, video, space }) {

    const videoTag = useRef();
    const videoDiv = useRef();

    useGSAP(() => {
        if(isNormal){
            gsap.from(videoDiv.current, {
                scrollTrigger: {
                    trigger: videoDiv.current,
                    toggleActions: "play none none reset",
                },
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
            });
        }
    });

    const onMouseLeave = () => {
        if (isNormal) {
            videoTag.current.autoPlay = false;
            videoTag.current.muted = false;
            videoTag.current.loop = false;
            videoTag.current.pause();
        }
        gsap.to(videoDiv.current, {
            scale: 1,
            duration: 0.3,
        });
    }

    const onMouseEnter = () => {
        if (isNormal) {
            videoTag.current.autoPlay = true;
            videoTag.current.muted = true;
            videoTag.current.loop = true;
            videoTag.current.play();
        }
        gsap.to(videoDiv.current, {
            scale: 0.95,
            duration: 0.3,
        });

    }

    return (
        isNormal ? 
        <div ref={videoDiv} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`relative ${space} rounded-2xl overflow-hidden`}>
            <video ref={videoTag} className="size-full object-cover" src={video} preload="auto"></video>
        </div> : 
        <div ref={videoDiv} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`relative p-10 bg-[#5542FF] rounded-2xl overflow-hidden text-6xl font-[zentry-regular]`}>
            <h1>MORE</h1>
            <h1>COMING</h1>
            <h1>SOON...</h1>
        </div>
    )
}

export default Video