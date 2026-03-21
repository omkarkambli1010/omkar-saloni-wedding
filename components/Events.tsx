"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const events = [
  {
    cls: "haldi", icon: "fas fa-sun", name: "Haldi Samarambh",
    date: "Friday, April 17, 2026", dateSub: "Haldi Ceremony",
    time: "6:30 PM onwards", venue: "At the Groom's Residence", venueSub: "",
    dress: "Yellow & Festive Colours",
  },
  {
    cls: "wedding", icon: "fas fa-ring", name: "Shubha Vivah",
    date: "Sunday, April 19, 2026", dateSub: "Main Wedding Ceremony",
    time: "11:00 AM (Muhurta 34 min)", venue: "Shri Laxmashi Nappu Hall", venueSub: "Matushri Velbhai Sabhagruha, Matunga",
    dress: "Traditional / Ethnic Formal",
  },
  {
    cls: "lunch", icon: "fas fa-utensils", name: "Welcome Reception & Lunch",
    date: "Sunday, April 19, 2026", dateSub: "Swagat Samarambh & Sneh Bhojan",
    time: "1:00 PM – 3:00 PM", venue: "Shri Laxmashi Nappu Hall, Matunga", venueSub: "",
    dress: "Traditional Indian Attire",
  },
  {
    cls: "puja", icon: "fas fa-om", name: "Satyanarayan Puja",
    date: "Tuesday, April 21, 2026", dateSub: "Post-Wedding Puja",
    time: "10:00 AM onwards", venue: "At the Groom's Residence", venueSub: "",
    dress: "Traditional / Casual Ethnic",
  },
];

export default function Events() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100);
    camera.position.z = 6;

    // — Drifting particles —
    const COUNT = 280;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 2);
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 2]     = (Math.random() - 0.5) * 0.004;
      vel[i * 2 + 1] = (Math.random() - 0.5) * 0.003;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const ptMat = new THREE.PointsMaterial({ color: 0xc9a96e, size: 0.055, transparent: true, opacity: 0.55 });
    const points = new THREE.Points(geo, ptMat);
    scene.add(points);

    // — Torus rings —
    const mkRing = (r: number, tube: number, opacity: number, color: number) =>
      new THREE.Mesh(
        new THREE.TorusGeometry(r, tube, 8, 120),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity })
      );

    const ring1 = mkRing(3.6, 0.014, 0.13, 0xc9a96e);
    scene.add(ring1);
    const ring2 = mkRing(5.6, 0.009, 0.07, 0xedd9a3);
    ring2.rotation.x = 0.55;
    scene.add(ring2);
    const ring3 = mkRing(1.8, 0.01, 0.1, 0xc9a96e);
    ring3.rotation.y = 0.4;
    scene.add(ring3);

    // — Wireframe octahedra —
    const mkOcta = (s: number, x: number, y: number, opacity: number) => {
      const m = new THREE.Mesh(
        new THREE.OctahedronGeometry(s),
        new THREE.MeshBasicMaterial({ color: 0xc9a96e, wireframe: true, transparent: true, opacity })
      );
      m.position.set(x, y, 0);
      return m;
    };
    const oct1 = mkOcta(0.28, 4.5,  2,  0.32);
    const oct2 = mkOcta(0.18, -4.5, -2, 0.22);
    const oct3 = mkOcta(0.14, 3,   -3,  0.18);
    scene.add(oct1, oct2, oct3);

    // — Resize —
    const resize = () => {
      const w = section.offsetWidth;
      const h = section.offsetHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

    // — Animate —
    let t = 0;
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.007;

      // drift particles
      const arr = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        arr[i * 3]     += vel[i * 2];
        arr[i * 3 + 1] += vel[i * 2 + 1];
        if (arr[i * 3]     >  13) arr[i * 3]     = -13;
        if (arr[i * 3]     < -13) arr[i * 3]     =  13;
        if (arr[i * 3 + 1] >   9) arr[i * 3 + 1] =  -9;
        if (arr[i * 3 + 1] <  -9) arr[i * 3 + 1] =   9;
      }
      geo.attributes.position.needsUpdate = true;

      ring1.rotation.z = t * 0.12;
      ring1.rotation.y = t * 0.07;
      ring2.rotation.z = -t * 0.09;
      ring2.rotation.x = 0.55 + t * 0.04;
      ring3.rotation.z = t * 0.2;
      ring3.rotation.x = t * 0.15;

      oct1.rotation.y = t * 1.1;
      oct1.rotation.x = t * 0.7;
      oct2.rotation.y = -t * 0.9;
      oct2.rotation.z = t * 0.6;
      oct3.rotation.y = t * 1.3;
      oct3.rotation.x = -t * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
      geo.dispose();
      ptMat.dispose();
    };
  }, []);

  return (
    <section id="events" className="ev2-section" ref={sectionRef}>
      <canvas ref={canvasRef} className="ev2-canvas" />

      <div className="ev2-inner">
        <div className="ev2-header">
          <span className="ev2-label" style={{ fontFamily: "var(--font-great-vibes)" }}>Celebrations</span>
          <h2 className="ev2-title" style={{ fontFamily: "var(--font-cormorant)" }}>Wedding Events</h2>
          <div className="ev2-ornament"><span>✦</span></div>
        </div>

        <div className="ev2-grid">
          {events.map((ev) => (
            <div key={ev.cls} className={`ev2-card ev2-${ev.cls}`}>
              <div className="ev2-top-bar" />
              <div className="ev2-card-top">
                <div className="ev2-icon-box">
                  <i className={ev.icon} />
                </div>
                <div>
                  <h3 className="ev2-name" style={{ fontFamily: "var(--font-cormorant)" }}>{ev.name}</h3>
                  <p className="ev2-sub">{ev.dateSub}</p>
                </div>
              </div>
              <div className="ev2-divider" />
              <div className="ev2-rows">
                <div className="ev2-row">
                  <i className="fas fa-calendar-alt" />
                  <span>{ev.date}</span>
                </div>
                <div className="ev2-row">
                  <i className="fas fa-clock" />
                  <span>{ev.time}</span>
                </div>
                <div className="ev2-row">
                  <i className="fas fa-map-marker-alt" />
                  <div>
                    <span>{ev.venue}</span>
                    {ev.venueSub && <span className="ev2-venue-sub">{ev.venueSub}</span>}
                  </div>
                </div>
              </div>
              <div className="ev2-dress-pill">
                <i className="fas fa-star" />
                <span>{ev.dress}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
