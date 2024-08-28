import Header from "../../Components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import slides from "../../Data/HomeSwiper";
import { Autoplay } from "swiper/modules";
import { v4 } from "uuid";
// Import Swiper styles
import "swiper/css/bundle";

//Components
import HomeSliderCard from "../../Components/HomeSliderCard/HomeSliderCard";
import AboutSection from "./HomeComponents/AboutSection";
import ServicesSection from "./HomeComponents/ServicesSection";
import Footer from "../../Components/Footer/Footer";
import PartnersSections from "./HomeComponents/PartnersSections";
import ClientsSection from "./HomeComponents/ClientsSection";

const Home = () => {
  return (
    <div className="w-[100%] overflow-x-hidden  flex flex-col font-Poppins">
      <Header />
      <div className="w-full flex flex-col gap-[0px]">
        <div>
          <Swiper
            modules={[Autoplay]}
            speed={1000}
            loop
            autoplay
            slidesPerView={1}
          >
            {slides.map((item) => {
              return (
                <SwiperSlide key={v4()} style={{ height: 600, width: "100%" }}>
                  {({ isActive }) => (
                    <HomeSliderCard
                      image={item.image}
                      title={item.title}
                      slogan={item.slogan}
                      isActive={isActive}
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* //About us */}
        <AboutSection />
        {/* Services */}
        <ServicesSection />
        {/* Partners */}
        <PartnersSections />
        {/* Clients Section */}
        <ClientsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
