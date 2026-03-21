"use client";
import { useState, useRef, useEffect } from "react";

export default function MusicButton() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.55;

    // Seek to 1:11 after play() resolves (required on iOS — seek before play is ignored)
    const startFrom71 = () =>
      a.play()
        .then(() => { a.currentTime = 71; })
        .catch(() => {});

    // Try immediate autoplay (works on desktop/Android)
    startFrom71();

    // Mobile fallback: unlock audio on first touch/click
    const unlock = () => {
      if (a.paused) startFrom71();
      document.removeEventListener("touchstart", unlock, true);
      document.removeEventListener("click", unlock, true);
    };
    document.addEventListener("touchstart", unlock, true);
    document.addEventListener("click", unlock, true);

    return () => {
      document.removeEventListener("touchstart", unlock, true);
      document.removeEventListener("click", unlock, true);
    };
  }, []);

  function toggleMute() {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.muted = false;
      if (a.paused) a.play().then(() => { a.currentTime = 71; }).catch(() => {});
      setMuted(false);
    } else {
      a.muted = true;
      setMuted(true);
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
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
