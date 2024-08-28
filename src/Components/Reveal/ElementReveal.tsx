import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  initialX?: number;
  initialY?: number;
  animateX?: number;
  animateY?: number;
  delay?: number;
  zIndex?: number;
}

const ElementReveal = ({
  children,
  initialX = 0,
  initialY = 0,
  animateX = 0,
  animateY = 0,
  delay = 0,
  zIndex = 0,
}: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const animationControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
      return;
    }
    animationControls.start("hidden");
  }, [isInView]);

  return (
    <motion.div style={{zIndex:zIndex}} ref={containerRef} className="flex relative">
      <motion.div
        variants={{
          hidden: {
            x: initialX,
            y: initialY,
            opacity: 0,
          },
          visible: {
            x: animateX,
            y: animateY,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={animationControls}
        className="relative"
        transition={{ delay: delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ElementReveal;
