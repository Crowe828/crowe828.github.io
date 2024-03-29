import { useState, useEffect, useRef, MutableRefObject } from "react";
import { motion, useAnimation } from "framer-motion";
import "./reveal.css";

function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin: string = "0px"
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    let currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
}

const Reveal = ({ children }: { children: any }) => {
  const controls = useAnimation();
  // Ref for the element that we want to detect whether on screen
  const ref: any = useRef<HTMLDivElement>();
  // Call the hook passing in ref and root margin
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-10%");

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);

  return (
    <motion.div
      className="reveal-div"
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
