import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { Button } from "@mui/material";

interface Props {
  image: string;
  title: string;
  description: string;
  delay?: number;
  icon: JSX.Element;
}

const ServiceCard = ({ title, description, image, delay = 0, icon }: Props) => {
  const [viewAmount, setViewAmount] = useState<undefined | number>(0.3);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: viewAmount });
  const animationControls = useAnimationControls();

  console.log(isInView);

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
      setViewAmount(undefined);
      return;
    }
    animationControls.start("hidden");
  }, [isInView]);

  return (
    <motion.div ref={containerRef} className="flex w-[25%]">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ delay: delay, duration: 0.2 }}
        className="flex flex-col bg-[white]  pb-[30px] pl-[10px] pr-[10px] pt-[20px] rounded-[12px]
        w-full"
      >
        <div className="relative">
          <img
            draggable={false}
            src={image}
            className="w-full h-full min-h-[300px] max-h-[300px] object-cover rounded-[12px]"
          />
          {/* Card Icon */}
          <div className="absolute size-[90px] bg-[white] rounded-full right-[50px] bottom-[-30px] p-[5px]">
            <div className="w-full h-full rounded-full bg-offBlack flex justify-center items-center">
              {icon}
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-[50px] pl-[10px] gap-[50px]">
          <div className="flex flex-col gap-[10px] pl-[20px] pr-[30px]">
            <p className="text-offBlack text-[30px] font-[700]">{title}</p>
            <p className="text-gray text-[15px] font-[500]">{description}</p>
          </div>
          <div className="pl-[20px]">
            <Button sx={{ backgroundColor: "#161c1a" }} variant="contained">
              Read more
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
