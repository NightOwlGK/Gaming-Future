import Video from "../Components/Video";

export default function GameVideos(){
    return(
        <section id="videoSection" className="w-full h-[200vh] bg-black grid grid-cols-2 grid-rows-4 px-36 gap-8">
            <Video isNormal={true} video={"./videos/feature-1.mp4"} color={"bg-red-500"} space={"col-span-2"}/>
            <Video isNormal={true} video={"./videos/feature-2.mp4"} color={"bg-pink-500"} space={"row-span-2"}/>
            <Video isNormal={true} video={"./videos/feature-3.mp4"} color={"bg-blue-500"}/>
            <Video isNormal={true} video={"./videos/feature-4.mp4"} color={"bg-amber-500"}/>
            <Video isNormal={false} color={"bg-red-500"}/>
            <Video isNormal={true} video={"./videos/feature-5.mp4"} color={"bg-yellow-500"}/>
        </section>
    );
}

