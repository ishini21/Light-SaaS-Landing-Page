"use client";

//import Image from "next/image";
import startImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import { motion, useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
   const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target : sectionRef,
     offset: ["start end", "end start"],
  });
   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section  ref={sectionRef} className="bg-lightbg dark:bg-darkbg py-25 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text custom-bg">Sign up for free today</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] light-blue-text mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
       <motion.img  src={startImage.src} alt="Start Image" width={360} className="absolute -left-[350px] -top-[137px] 
       "
       style={{
          translateY,
         }}/>
       <motion.img  src={springImage.src} alt="spring Image" width={360} className="absolute -right-[331px] -top-[19px] "
       style={{
          translateY,
         }}/>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight dark:bg-white dark:text-black">Get for free</button>
          <button className=" px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-lighttext dark:text-darktext bg-transparen gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5 text-lighttext dark:text-darktext" />
            {/* <ArrowRight/> */}
          </button>
        </div>
      </div>
    </section>
  );
};
