import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import swiperCore from 'swiper/core';

//Components
import LogoCard from "../../../Components/LogoCard/LogoCard";

//assets
import { IoLogoCodepen } from "react-icons/io";
import { IoLogoDribbble } from "react-icons/io";
import { IoLogoVimeo } from "react-icons/io";
import { useState } from "react";

const PartnersSections = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper:swiperCore) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="w-full pl-[50px] pr-[50px] pb-[40px] bg-offWhite">
      <Swiper
        loop
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <LogoCard activeIndex={activeIndex} index={0} icon={<IoLogoCodepen size={140} />} />
        </SwiperSlide>
        <SwiperSlide>
          <LogoCard activeIndex={activeIndex} index={1} icon={<IoLogoDribbble size={140} />} />
        </SwiperSlide>
        <SwiperSlide>
          <LogoCard activeIndex={activeIndex} index={2} icon={<IoLogoVimeo size={140} />} />
        </SwiperSlide>
        <SwiperSlide>
          <LogoCard activeIndex={activeIndex} index={3} icon={<IoLogoCodepen size={140} />} />
        </SwiperSlide>
        <SwiperSlide>
          <LogoCard activeIndex={activeIndex} index={4} icon={<IoLogoCodepen size={140} />} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PartnersSections;
