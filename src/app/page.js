"use client";

import Button from "@/components/Button";
import Link from "next/link";
import Footer from "@/components/Footer";
import HomeButton from "@/components/HomeButton";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─── tiny helpers ─── */
const rand = (min, max) => Math.random() * (max - min) + min;

/* ─── letter split animation ─── */
const LETTERS = ["A", "D", "R", "I"];

const letterVariants = {
  hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const ringVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.05 * i,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

const navLinkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─── twinkling star ─── */
function Star({ top, left, delay }) {
  return (
    <motion.div
      className="absolute w-[3px] h-[3px] rounded-full bg-white"
      style={{ top: `${top}%`, left: `${left}%` }}
      animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
      transition={{
        duration: rand(2.5, 5),
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

/* ─── pulsing blip on a ring ─── */
function RadarBlip({ ringSize, angle }) {
  const rad = (angle * Math.PI) / 180;
  const r = ringSize / 2;
  const x = r * Math.cos(rad);
  const y = r * Math.sin(rad);

  return (
    <motion.div
      className="absolute w-[5px] h-[5px] rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]"
      style={{
        left: `calc(50% + ${x}px - 2.5px)`,
        top: `calc(50% + ${y}px - 2.5px)`,
      }}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
      transition={{
        duration: rand(2, 3.5),
        repeat: Infinity,
        delay: rand(0, 4),
        ease: "easeInOut",
      }}
    />
  );
}

export default function Home() {
  /* ─── rings ─── */
  const rings = [];
  let radius = 1500;
  let gap = 25;
  for (let i = 0; i < 22; i++) {
    rings.push(radius);
    radius -= gap;
    gap += 5;
  }

  /* ─── stars (stable — generated once) ─── */
  const [stars] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      top: rand(0, 100),
      left: rand(0, 100),
      delay: rand(0, 5),
    }))
  );

  /* ─── radar blips (stable) ─── */
  const [blips] = useState(() =>
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      ringSize: rings[Math.floor(rand(2, 10))],
      angle: rand(0, 360),
    }))
  );

  const colors = [
    "border-cyan-400/20",
    "border-blue-400/20",
    "border-purple-400/20",
  ];

  /* ─── mouse parallax ─── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const heroRef = useRef(null);

  const glowX = useTransform(smoothX, [-1, 1], ["-20px", "20px"]);
  const glowY = useTransform(smoothY, [-1, 1], ["-20px", "20px"]);
  const radarX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const radarY = useTransform(smoothY, [-1, 1], [-8, 8]);

  function handleMouseMove(e) {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set((e.clientX - cx) / (rect.width / 2));
    mouseY.set((e.clientY - cy) / (rect.height / 2));
  }

  /* ─── scroll-driven ring scale ─── */
  const { scrollY } = useScroll();
  const ringScale = useTransform(scrollY, [0, 400], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ─── NAV ─── */}
      <motion.nav
        className="flex justify-between items-center p-6 fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(6px)",
          background: "rgba(0,0,0,0.35)",
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl font-bold tracking-widest"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ letterSpacing: "0.2em", transition: { duration: 0.3 } }}
        >
          ADRI
        </motion.h1>

        <div className="flex gap-6 text-sm">
          {["About", "Research", "Projects", "Team"].map((label, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={navLinkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={`/${label.toLowerCase()}`}
                className="relative group text-gray-300 hover:text-white transition-colors duration-200"
              >
                {label}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[1px] bg-cyan-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.25 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* ─── HERO ─── */}
      <motion.section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{ opacity: heroOpacity }}
        className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        {/* stars */}
        {stars.map((s) => (
          <Star key={s.id} top={s.top} left={s.left} delay={s.delay} />
        ))}

        {/* radar + rings */}
        <motion.div
          className="relative mb-16 flex items-center justify-center"
          style={{ x: radarX, y: radarY, scale: ringScale }}
        >
          {/* glow blobs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
            style={{ x: glowX, y: glowY }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[100px]"
            style={{ x: glowX, y: glowY }}
          />

          {/* radar sweep */}
          <motion.div
            className="radar-sweep absolute"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* rings */}
          {rings.map((size, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={ringVariants}
              initial="hidden"
              animate="visible"
              className={`
                absolute rounded-full border-2
                ${colors[index % 3]}
                shadow-[0_0_10px_rgba(255,255,255,0.05)]
                hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                transition-shadow duration-500
              `}
              style={{ width: `${size}px`, height: `${size}px` }}
            />
          ))}

          {/* radar blips */}
          {blips.map((b) => (
            <RadarBlip key={b.id} ringSize={b.ringSize} angle={b.angle} />
          ))}

          {/* ADRI letters */}
          <motion.h1
            className="relative z-10 flex tracking-[0.25em] font-extrabold text-[14rem] drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]"
            initial="hidden"
            animate="visible"
          >
            {LETTERS.map((char, i) => (
              <motion.span
                key={char}
                custom={i}
                variants={letterVariants}
                whileHover={{
                  scale: 1.08,
                  textShadow: "0 0 60px rgba(255,255,255,0.9)",
                  transition: { duration: 0.2 },
                }}
                className="inline-block cursor-default"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* subtitle lines */}
        <motion.p
          className="text-gray-400 text-xl max-w-2xl mb-4 tracking-wide"
          custom={0.9}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Atreus Defence Research and Innovation
        </motion.p>

        <motion.p
          className="text-gray-500 text-lg max-w-2xl mb-8"
          custom={1.1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Building next-generation autonomous defence systems and intelligent
          battlefield technologies.
        </motion.p>

        {/* subtle scroll cue */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2 text-gray-600 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-transparent to-cyan-500/60"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          Scroll
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}
