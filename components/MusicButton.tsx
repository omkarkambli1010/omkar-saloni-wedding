"use client";
import { useState } from "react";

interface Props {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function MusicButton({ audioRef }: Props) {
  const [muted, setMuted] = useState(false);

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
    <button
      className={`music-btn visible${muted ? "" : " playing"}`}
      onClick={toggleMute}
      title={muted ? "Unmute Music" : "Mute Music"}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
    >
      <i className={muted ? "fas fa-volume-xmark" : "fas fa-volume-high"} />
    </button>
  );
}
