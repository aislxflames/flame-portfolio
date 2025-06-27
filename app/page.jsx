"use client"
import { useEffect, useState } from "react";
import About from "@/sections/About";
import Home from "@/sections/Home";
import Portfolio from "@/sections/Portfolio";
import Contact from "@/sections/Contact";
import SplashScreen from "@/components/ui/SplashScreen";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);     // for opacity fade
  const [shouldRender, setShouldRender] = useState(true); // for unmounting

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsVisible(false), 2000); // start fade
    const removeTimer = setTimeout(() => setShouldRender(false), 3000); // remove from DOM

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll relative">
      {shouldRender && <SplashScreen visible={isVisible} />}
      <div className={`${shouldRender ? "pointer-events-none" : "pointer-events-auto"}`}>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
};

export default App;

