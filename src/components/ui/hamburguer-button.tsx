import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

interface AnimatedHamburgerButtonProps {
  projectIndex: number;
}

export const AnimatedHamburgerButton = ({
  projectIndex,
}: AnimatedHamburgerButtonProps) => {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-12 w-12"
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute h-1 w-8  ${projectIndex % 2 === 0 ? "bg-white" : "bg-zinc-800"}`}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute h-1 w-8  ${projectIndex % 2 === 0 ? "bg-white" : "bg-zinc-800"}`}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute h-1 w-4 ${projectIndex % 2 === 0 ? "bg-white" : "bg-zinc-800"}`}
          style={{
            x: "-65%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.div>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["15%", "10%", "54%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
