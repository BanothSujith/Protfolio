import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsNavclickcked } from "../Redux/slice";

export default function useInView(threshold = 0.4, margin = "0px") {
  const ref = useRef(null); 
  const pageView = useRef(null); 
  const [isVisible, setIsVisible] = useState(false);
 const isNavclickcked = useSelector((state) => state.storeSlice.isNavclickcked);
  const dispatch = useDispatch();
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
    if(!isNavclickcked){
    if (isVisible && pageView.current) {
      // window.scrollTo({
      //   top: pageView.current.offsetTop,
      //   behavior: "smooth",
      // });
      pageView.current.scrollIntoView({ behavior: "smooth" });

    }
  } else {
   const timer = setTimeout(() => {
      dispatch(setIsNavclickcked(false));
    }, 500);
    return () => {clearTimeout(timer)};
  };
  }, [isVisible, isNavclickcked]);

  return [ref, isVisible, pageView];
}

