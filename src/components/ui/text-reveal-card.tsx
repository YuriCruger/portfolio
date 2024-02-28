"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { MotionValue, motion, motionValue } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/utils/cn";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | any>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: any) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }
  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn("relative w-full overflow-hidden rounded-lg", className)}
    >
      {children}
      <div className="relative  flex h-40 items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 bg-slate-300 text-center will-change-transform dark:bg-slate-900"
        >
          <p
            style={{
              textShadow: "4px 4px 15px ",
            }}
            className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text py-10 text-base font-bold leading-10 text-zinc-800/50 dark:text-zinc-300 sm:text-[3rem]"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform dark:via-zinc-300"
        ></motion.div>

        <div className="mx-auto overflow-hidden ">
          <p className="bg-[#323238] bg-clip-text py-10  text-[3rem] font-bold text-transparent dark:text-zinc-300/70 ">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("mb-2 text-lg text-white", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-sm text-[#a9a9a9]", className)}>{children}</p>
  );
};

type Star = {
  key: string;
  animate: {
    top: string;
    left: string;
    opacity: number;
    scale: number[];
  };
  transition: {
    duration: number;
    repeat: number;
    ease: string;
  };
  style: {
    position: MotionValue<string>;
    top: string;
    left: string;
    width: string;
    height: string;
    backgroundColor: string;
    borderRadius: string;
    zIndex: number;
  };
};

const Stars = () => {
  const [stars, setStars] = React.useState<Star[]>([]);

  React.useEffect(() => {
    const randomMove = () => Math.random() * 4 - 2;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();

    const newStars = [...Array(140)].map((_, i) => ({
      key: `star-${i}`,
      animate: {
        top: `calc(${random() * 100}% + ${randomMove()}px)`,
        left: `calc(${random() * 100}% + ${randomMove()}px)`,
        opacity: randomOpacity(),
        scale: [1, 1.2, 0],
      },
      transition: {
        duration: random() * 10 + 20,
        repeat: Infinity,
        ease: "linear",
      },
      style: {
        position: motionValue("absolute"),
        top: `${random() * 100}%`,
        left: `${random() * 100}%`,
        width: `2px`,
        height: `2px`,
        backgroundColor: "white",
        borderRadius: "50%",
        zIndex: 1,
      },
    }));

    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map(({ key, ...star }) => (
        <motion.span key={key} {...star} className="inline-block"></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
