"use client";
import { useState, useRef } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import Petals from "@/components/Petals";
import MusicButton from "@/components/MusicButton";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Couple from "@/components/Couple";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Venue from "@/components/Venue";
import Share from "@/components/Share";
import Footer from "@/components/Footer";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function handleOpen() {
    // This runs inside the "Open Invitation" click — guaranteed user gesture
    // so audio.play() is always allowed by the browser (including iOS Safari)
    const a = audioRef.current;
    if (a) {
      a.play()
        .then(() => { a.currentTime = 71; })
        .catch(() => {});
    }
    setOpened(true);
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/aaj-sajeya.mp3" type="audio/mpeg" />
      </audio>
      {!opened && <OpeningScreen onOpen={handleOpen} />}
      {opened && <Petals />}
      <MusicButton audioRef={audioRef} />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Couple />
        <Story />
        <Events />
        <Venue />
        <Share />
      </main>
      <Footer />
    </>
  );
}
