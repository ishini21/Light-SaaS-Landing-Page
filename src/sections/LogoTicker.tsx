"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <>
      <div className="py-8 bg-white dark:bg-gray-500 md:py-12">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat:Infinity,
                ease:"linear",
                repeatType:"loop",
              }}
            >
              <Image
                src={acmeLogo}
                alt="acmeLogo"
                className="h-8 w-auto text-lighttext dark:text-darktext"
              />
              <Image
                src={quantumLogo}
                alt="quantumLogo"
                className="h-8 w-auto"
              />
              <Image src={echoLogo} alt="echoLogo" />
              <Image
                src={celestialLogo}
                alt="celestialLogo"
                className="h-8 w-auto"
              />
              <Image
                src={pulseLogo}
                alt="pulseLogo"
                className="h-8 w-auto"
              />
              <Image
                src={apexLogo}
                alt="apexLogo"
                className="h-8 w-auto"
              />

              {/* second set of logos  */}
               <Image
                src={acmeLogo}
                alt="acmeLogo"
                className="h-8 w-auto"
              />
              <Image
                src={quantumLogo}
                alt="quantumLogo"
                className="h-8 w-auto"
              />
              <Image src={echoLogo} alt="echoLogo" />
              <Image
                src={celestialLogo}
                alt="celestialLogo"
                className="h-8 w-auto"
              />
              <Image
                src={pulseLogo}
                alt="pulseLogo"
                className="h-8 w-auto"
              />
              <Image
                src={apexLogo}
                alt="apexLogo"
                className="h-8 w-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
