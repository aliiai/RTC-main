import { FC } from "react";

//Componnets
import Reveal from "../Reveal/TextReveal";

interface Props {
  image: string;
  title: string;
  slogan: string;
  isActive: boolean;
}

const HomeSliderCard: FC<Props> = ({ image, title, slogan, isActive }) => {
  return (
    <div className="w-full h-full relative bg-[import { connect } from 'react-redux']">
      <div className="absolute w-full h-full left-0 top-0 z-[10]">
        <img
          draggable={false}
          src={image}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-full flex flex-col justify-center  z-[20] left-[100px]">
        <Reveal isActive={isActive} delay={0.3}>
          <p
            style={{ textShadow: "0px 3px 2px rgba(0,0,0,0.9)" }}
            className="text-[white] text-[60px] font-[500]"
          >
            {title}
          </p>
        </Reveal>
        <Reveal isActive={isActive} delay={0.5}>
          <p
            style={{ textShadow: "0px 3px 2px rgba(0,0,0,0.6)" }}
            className="text-[white] text-[30px] font-[500]"
          >
            {slogan}
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default HomeSliderCard;
