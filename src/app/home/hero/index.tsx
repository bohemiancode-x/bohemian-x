"use client";

import heroStyles from "./hero.module.scss";

import { fadeIn, fadeInContainer } from "@/utils/variants";
import buttonAnimation from "@/lotties/button.json";
import clsx from "clsx";
import Lottie from "lottie-react";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomeHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.3, 0]);
  return (
    <section ref={ref} id="hero" className={clsx(heroStyles.hero)} data-theme="dark">
      <m.div 
        className={heroStyles["bg-image"]}
        style={{ y: backgroundY }}
      />
      <m.div 
        className={heroStyles["bg-overlay"]} 
        style={{ opacity: overlayOpacity }}
      />

      <div className={clsx(heroStyles.container, "container")}>
        <div className={heroStyles["shine-container"]}>
          <div className={heroStyles["shine"]}>
            <div className={heroStyles["circle-yel"]} />
          </div>
        </div>

        <m.div
          variants={fadeInContainer(0, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={clsx(heroStyles.main)}
        >
          <m.h1
            variants={fadeIn}
            className={clsx(heroStyles.heading, "font-sans")}
          >
            I&apos;M EMMANUEL
          </m.h1>
          <m.p
            variants={fadeIn}
            className={clsx(heroStyles["sub-heading"], "font-mono")}
          >
            <span>Fullstack Developer</span>
            <span>|</span>
            <span>React & Next.js Expert</span>
            <span>|</span>
            <span>Problem Solver</span>
          </m.p>
          <m.button
            aria-label="scroll to next section"
            variants={fadeIn}
            className={clsx(heroStyles["scroll"], "button")}
            onClick={() => {
              document
                .querySelector("#expertise")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Lottie animationData={buttonAnimation} loop size={20} />
          </m.button>
        </m.div>
      </div>
    </section>
  );
}
