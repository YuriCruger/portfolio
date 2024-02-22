"use client";

import { ArrowUpIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) {
      setShow(true);
    }
    if (show && window.scrollY < 500) {
      setShow(false);
    }
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {show && (
        <div className="fixed bottom-4 right-4 z-50 h-10 w-10 rounded-full bg-zinc-700 p-2 text-white shadow-md">
          <button onClick={scrollToTop}>
            <ArrowUpIcon />
          </button>
        </div>
      )}
    </div>
  );
}
