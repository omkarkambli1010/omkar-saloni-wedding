"use client";
import { useState, useRef, useEffect } from "react";

export default function MusicButton() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.55;

    // Try immediate autoplay
    const tryPlay = () => a.play().catch(() => {});
    tryPlay();

    // Fallback: play on first user gesture if autoplay was blocked
    const onGesture = () => {
      if (a.paused) tryPlay();
      document.removeEventListener("click", onGesture, true);
      document.removeEventListener("touchstart", onGesture, true);
      document.removeEventListener("keydown", onGesture, true);
    };
    document.addEventListener("click", onGesture, true);
    document.addEventListener("touchstart", onGesture, true);
    document.addEventListener("keydown", onGesture, true);

    return () => {
      document.removeEventListener("click", onGesture, true);
      document.removeEventListener("touchstart", onGesture, true);
      document.removeEventListener("keydown", onGesture, true);
    };
  }, []);

  function toggleMute() {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.muted = false;
      if (a.paused) a.play().catch(() => {});
      setMuted(false);
    } else {
      a.muted = true;
      setMuted(true);
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/aaj-sajeya.mp3" type="audio/mpeg" />
      </audio>
      <button
        className={`music-btn visible${muted ? "" : " playing"}`}
        onClick={toggleMute}
        title={muted ? "Unmute Music" : "Mute Music"}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
      >
        <i className={muted ? "fas fa-volume-xmark" : "fas fa-volume-high"} />
      </button>
    </>
  );
}
