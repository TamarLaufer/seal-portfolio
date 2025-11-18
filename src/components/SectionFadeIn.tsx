import { motion, useAnimation } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type FadeInPropsType = {
  children: ReactNode;
};

export function SectionFadeIn({ children }: FadeInPropsType) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
