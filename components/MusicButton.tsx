"use client";
import { useState, useRef } from "react";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (!a.src || a.src === window.location.href) {
      alert("To enable music, add a music file and update the src in MusicButton.tsx");
      return;
    }
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().catch(()=>{}); setPlaying(true); }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        {/* <source src="/music/wedding.mp3" type="audio/mpeg" /> */}
      </audio>
      <button
        className={`music-btn visible${playing ? " playing" : ""}`}
        onClick={toggle}
        title="Toggle Music"
        aria-label="Toggle background music"
      >
        <i className={playing ? "fas fa-pause" : "fas fa-music"} />
      </button>
    </>
  );
}
