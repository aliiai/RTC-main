import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../../Components/HeroSection/Hero";
import Header from "../../Components/Header/Header";
import image from "../../assets/slider1.jpg";
import Footer from "../../Components/Footer/Footer";
export default function SingleService() {
  const { id } = useParams();

  return (
    <div className="w-full h-auto">
      <Header />
      <Hero title={"Single services"} img={image} />
      <div className="w-full h-[100vh] flex flex-row items-center justify-around">
        <img src={image} alt="" className="w-[40%] rounded-[10px] " />
        <div className="w-[50%] h-[70%] flex flex-col items-start justify-center">
          <h1 className="text-[2rem] font-[500] mb-[1rem]">Lorem ipsum dolor</h1>
          <p className=" text-[#292929] font-[1rem] text-start max-w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            voluptates quibusdam laborum molestias ullam aliquid officiis
            excepturi placeat odio? Eaque commodi natus deserunt ut incidunt
            laudantium ab fuga libero maxime!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
            voluptates quibusdam laborum molestias ullam aliquid officiis
            excepturi placeat odio? Eaque commodi natus deserunt ut incidunt
            laudantium ab fuga libero maxime!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
