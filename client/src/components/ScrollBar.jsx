import { cloneElement, useEffect, useRef, useState } from "react";

export default function ScrollBar({ children }) {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.overflowY = "auto";
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return cloneElement(children, {
    ref: scrollContainerRef,
    className: isScrolling ? "scrolling" : "",
  });
}
