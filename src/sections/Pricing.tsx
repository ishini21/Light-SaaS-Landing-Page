"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-lightbg dark:bg-darkbg">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text custom-bg">
            Pricing
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] light-blue-text mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              // <div
              //   className={twMerge("p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
              //     inverse === true && 'border-black bg-black text-white dark:bg-white dark:text-lighttext')}
              //   key={`tier-${index}`}>
              <div
                className={twMerge(
                  "p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full dark:bg-gray-900 dark:text-white",
                  clsx({
                    "border-black bg-black text-white dark:bg-black dark:text-white":
                      inverse === true,
                  })
                )}
                key={`tier-${index}`}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50 dark:text-white ",
                      inverse === true && "text-white/60 dark:text-white"
                    )}
                  >
                    {title}
                  </h3>

                  {popular == true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50 dark:text-white">
                    /month
                  </span>
                </div>
                {/* <button
                  className={twMerge(
                    "bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight dark:bg-white dark:text-black w-full mt-[30px]",
                    inverse === true && "bg-white text-black "
                  )}
                > */}
                <button
                  className={twMerge(
                    clsx(
                      "px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight w-full mt-[30px]",
                      inverse
                        ? "bg-white text-black"
                        : "bg-black text-white dark:bg-white dark:text-black"
                    )
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, featureIndex) => (
                    <li
                      className="text-sm flex items-center gap-4"
                      key={`feature-${index}-${featureIndex}`}
                    >
                      <Check className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
