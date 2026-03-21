"use client";
import { useState, useRef, useEffect } from "react";

export default function MusicButton() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Autoplay as soon as component mounts (fires after user taps "Open Invitation")
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.55;
    a.play().catch(() => {
      // Autoplay blocked — user can tap the button manually
    });
  }, []);

  function toggleMute() {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.muted = false;
      // If it was paused due to a previous block, try resuming
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
