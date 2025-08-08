import Hero from "./Sections/Hero";
import About from "./Sections/About";
import NextWorld from "./Sections/NextWorld";
import Powered from "./Sections/Powered";
import GameVideos from "./Sections/GameVideos";
import GameIntro from "./Sections/GameIntro";
import OpenAIUniverse from "./Sections/OpenAIUniverse";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <NextWorld />
      <GameIntro />
      <GameVideos />
      <OpenAIUniverse />
      <Powered />
    </>
  );
}