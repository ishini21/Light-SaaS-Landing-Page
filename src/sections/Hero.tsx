"use client";

//import Image from "next/image";
//import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import cylinder from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // useMotionValueEvent
  // useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
  // console.log(latestValue)
  // );
  // console.log(CogImage);
  return (
    // <section
    //   ref={heroRef}
    //   className="pt-8 pb-20 pl-5 md:pt-5 md:pb-10 bg-lightbg overflow-x-clip dark:bg-darkbg"
    // >
   <section
  ref={heroRef}
  className="
    pt-8 pb-20 pl-5
    md:pt-5 md:pb-10
    overflow-x-clip
     bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]
    custom-dark-radial-bg
  "
>
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[678px]">
            <div className="text-sm inline-flex border border-darkbg dark:border-lightbg px-3 py-1 rounded-lg tracking-tight dark:text-darktext">
              Version 2.0 is here
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 custom-bg">
              Pathway to productivity
            </h1>
            <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] light-blue-text mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your success
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight dark:bg-white dark:text-black">
                Get for free
              </button>
              <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight  text-lighttext bg-transparent gap-1 dark:text-darktext">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5 text-lighttext dark:text-darktext" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="cog_image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinder.src}
              alt="cylinder_image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="noodleimage"
              width={220}
              height={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                // rotate:30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
