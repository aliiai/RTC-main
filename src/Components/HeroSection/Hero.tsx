import React from "react";

export default function Hero(props: any) {
  return (
    <div
      className="w-full h-[60vh]"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-[100%] bg-[#110E00D9] flex items-center justify-center ">
<h1 className="text-offWhite font-[600] text-[8rem]" style={{textShadow: '0px 0px 4px #ffc800'}}>{props.title}</h1>
      </div>
    </div>
  );
}
