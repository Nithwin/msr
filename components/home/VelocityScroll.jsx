"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller flex flex-nowrap whitespace-nowrap" style={{ x }}>
        <span className="block mr-8 md:mr-24">{children} </span>
        <span className="block mr-8 md:mr-24">{children} </span>
        <span className="block mr-8 md:mr-24">{children} </span>
        <span className="block mr-8 md:mr-24">{children} </span>
      </motion.div>
    </div>
  );
}

export default function VelocityScroll() {
  return (
    <section className="py-12 bg-black text-[#e8e8e8] overflow-hidden border-y border-white/5 relative z-20">
      <ParallaxText baseVelocity={-5}>
        <span className="text-4xl md:text-7xl font-bold uppercase tracking-tighter opacity-80">
          Premium Pre-Owned • Best in Kolathur, Mettur, Salem • Quality Assured • Best Prices • 
        </span>
      </ParallaxText>
      <div className="h-4 md:h-8"></div>
      <ParallaxText baseVelocity={5}>
        <span className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-[var(--color-primary)] opacity-80">
          MSR Consulting • Dream Bikes • Easy Finance • Quick Delivery •
        </span>
      </ParallaxText>
    </section>
  );
}
