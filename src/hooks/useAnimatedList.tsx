import gsap from "gsap";
import { useState, useEffect } from "react";

export const useAnimatedList = (items: any, listClass: string) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (items && items.length > 0 && !isMounted && listClass) {
      setMounted(true);

      const elements = document.querySelectorAll("." + listClass);

      gsap.from(elements, {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        ease: "elastic",
        force3D: true,
      });
    }
  }, [items, listClass]);
};
