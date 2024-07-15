"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Card = {
  id: string;
  title: string;
  description: string;
  image: string;
  className: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] | undefined }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  return (
    <div className="mx-auto grid min-h-screen-80 max-w-7xl grid-cols-1 gap-4 p-10 md:grid-cols-3 ">
      {cards?.map((card) => (
        <div key={card.id} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden shadow-lg",
              selected?.id === card.id
                ? "absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2"
                : lastSelected?.id === card.id
                  ? "z-40 h-full w-full rounded-xl bg-white"
                  : "h-full w-full rounded-xl bg-white",
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage
              card={card}
              selected={selected}
              setSelected={setSelected}
              setLastSelected={setLastSelected}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const BlurImage = ({
  card,
  selected,
  setSelected,
  setLastSelected,
}: {
  card: Card;
  selected: Card | null;
  setSelected: (card: Card | null) => void;
  setLastSelected: (card: Card | null) => void;
}) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        imageRef.current &&
        !imageRef.current.contains(event.target as Node)
      ) {
        setLastSelected(selected);
        setSelected(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selected, setLastSelected, setSelected]);

  return (
    <Image
      ref={imageRef}
      src={card.image}
      height="0"
      width="0"
      sizes="100vw"
      onLoad={() => setLoaded(true)}
      className={cn(
        "absolute inset-0 h-full w-full cursor-pointer object-cover object-top transition duration-200",
        loaded ? "blur-none" : "blur-md",
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex h-full w-full cursor-default flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 z-10 h-full w-full bg-black opacity-60"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative z-[70] overflow-auto px-8 pb-4"
      >
        <div className="flex flex-col text-center">
          <p className="text-4xl font-bold text-white">
            {selected?.title.toLocaleUpperCase()}
          </p>
          <p className="my-4 font-normal text-neutral-200">
            {selected?.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
