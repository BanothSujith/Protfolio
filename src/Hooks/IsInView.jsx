import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.4, margin = "0px") {
  const ref = useRef(null); 
  const pageView = useRef(null); 
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin: margin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, margin]);

  useEffect(() => {
    if (isVisible && pageView.current) {
      window.scrollTo({
        top: pageView.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [isVisible]);

  return [ref, isVisible, pageView];
}

