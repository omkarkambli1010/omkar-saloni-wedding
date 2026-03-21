"use client";
import { useState } from "react";
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

  return (
    <>
      {!opened && <OpeningScreen onOpen={() => setOpened(true)} />}
      {opened && <Petals />}
      {opened && <MusicButton />}
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
