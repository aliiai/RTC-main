//Components
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

//Assets
interface Props {
  icon: JSX.Element;
  index: number;
  activeIndex: number;
}

const LogoCard = ({ icon, index, activeIndex }: Props) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const animationControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
      return;
    }
    animationControls.start("hidden");
  }, [isInView]);

  return (
    <motion.div ref={containerRef}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ delay: 0.2 }}
        style={{
          color: index === activeIndex ? "black" : "#7c7c7c6f",
        }}
        className=" w-full h-[200px] flex justify-center items-center "
      >
        <div className="hover:!text-[black] transition-all duration-[300ms] cursor-pointer">
          {icon}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogoCard;
