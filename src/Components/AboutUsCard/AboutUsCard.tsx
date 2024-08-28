import React from 'react';

interface AboutUsCardProps {
  title: string;
  description: string;
  img: string;
  reverse?: string;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ title, description, img, reverse = false }) => {
  return (
    <>
      <div className={`w-full h-[50vh] px-20 my-20 flex ${reverse ? 'flex-row-reverse' : ''}`}>
        <div className="w-[50%] h-full">
          <img
            className="rounded-l-[5%] h-full w-full object-cover"
            src={img}
            alt={title}
          />
        </div>

        <div className="flex flex-col items-start justify-center text-left ml-[20px] w-[50%] h-full rounded-r-[5%]">
          <h1 className="font-bold text-[40px] text-black">{title}</h1>
          <p className="py-[20px]">
            {description}
          </p>
          <button className="font-bold text-[30px] text-[#b29358]">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsCard;
