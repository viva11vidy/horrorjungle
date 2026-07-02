"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const container = document.querySelector(".right-bottom");
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
}


// this is for scroll position restore inside right-bottom class or else whole website got scrolled up strangely