import { useEffect, useRef, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { motion, useInView } from "framer-motion";

interface Props {
  animatedValue: number;
}

const AnimatedNumber = ({ animatedValue }: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const [value, setValue] = useState(0);
  value

  useEffect(() => {
    if (isInView) {
      setValue(animatedValue);
      return;
    }
    setValue(0);
  }, [isInView]);

  return (
    <motion.div className="w-fit flex" transition={{ delay: 0.1 }} ref={containerRef}>
      <AnimatedNumbers
        includeComma
        transitions={() => ({
          duration: 0.4,
        })}
        animateToNumber={2}
      />
    </motion.div>
  );
};

export default AnimatedNumber;
