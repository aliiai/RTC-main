import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  delay?: number;
  isActive?: boolean;
}

const Reveal = ({ children, delay = 0, isActive = true, }: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const animationControls = useAnimationControls();

  useEffect(() => {
    if (isInView && isActive) {
      animationControls.start("visible");
      return;
    }
    animationControls.set("hidden");
  });

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationControls}
      ref={containerRef}
      transition={{ delay: delay }}
      
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
