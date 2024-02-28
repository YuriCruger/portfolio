"use client";

import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 500;
      if (isButtonVisible !== shouldShow) {
        setIsButtonVisible(shouldShow);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isButtonVisible]);

  return (
    <div>
      {isButtonVisible && (
        <div className="fixed bottom-4 right-4 z-50 h-10 w-10 rounded-full bg-zinc-800 p-2 text-white shadow-md dark:bg-zinc-700">
          <button onClick={scrollToTop}>
            <ArrowUpIcon />
          </button>
        </div>
      )}
    </div>
  );
}
