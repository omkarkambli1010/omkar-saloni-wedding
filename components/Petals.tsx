"use client";
import { useEffect, useRef } from "react";

export default function Petals() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const colors = ["#F9C5D1","#FFCBA4","#FAD7A0","#F8BBD9"];
    const timers: ReturnType<typeof setTimeout>[] = [];

    function spawn() {
      if (!container) return;
      const el = document.createElement("div");
      el.className = "petal";
      const size = Math.random() * 9 + 7;
      const dur = Math.random() * 10 + 10;
      const delay = Math.random() * 4;
      el.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${dur}s;animation-delay:${delay}s;`;
      container.appendChild(el);
      const t = setTimeout(() => { el.remove(); spawn(); }, (dur + delay) * 1000);
      timers.push(t);
    }

    for (let i = 0; i < 18; i++) {
      const t = setTimeout(() => spawn(), i * 350);
      timers.push(t);
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  return <div id="petals" ref={ref} />;
}
