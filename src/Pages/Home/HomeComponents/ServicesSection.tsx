//Components
import ServiceCard from "../../../Components/ServiceCard/ServiceCard";
import ElementReveal from "../../../Components/Reveal/ElementReveal";

//Assets
// import serviceImage1 from "../../../assets/service-1.jpg";
import serviceImage2 from "../../../assets/service-2.jpg";
// import serviceImage3 from "../../../assets/service-3.jpg";
import { TbTruckDelivery } from "react-icons/tb";
import { LuPlane } from "react-icons/lu";
import { FaTrainSubway } from "react-icons/fa6";

const ServicesSection = () => {
  return (
    <div
      className="w-full flex flex-col  font-Poppins bg-offWhite pt-[60px] gap-[50px]
    pb-[100px]
        "
    >
      <div className="w-full flex flex-col pl-[70px]">
        <ElementReveal delay={0.1} initialY={50} animateY={0}>
          <p className="text-[27px] text-red font-[500]">SHIPPING SERVICES</p>
        </ElementReveal>
        <ElementReveal delay={0.2} initialY={50} animateY={0}>
          <p className="text-[46px] text-offBlack font-[600] max-w-[500px]">
            Specialist Logistics Services
          </p>
        </ElementReveal>
      </div>
      <div className="w-full flex flex-row gap-[9px] pl-[16px] pr-[50px]">
        <ServiceCard
          delay={0.1}
          title="Rail Transportation"
          description="Air freight is the fastest way to any transport can any deliver works."
          image={serviceImage2}
          icon={<LuPlane color="white" size={34} />}
        />
        <ServiceCard
          delay={0.2}
          title="Rail Transportation"
          description="Air freight is the fastest way to any transport can any deliver works."
          image={serviceImage2}
          icon={<TbTruckDelivery color="white" size={38} />}
        />
        <ServiceCard
          delay={0.3}
          title="Rail Transportation"
          description="Air freight is the fastest way to any transport can any deliver works."
          image={serviceImage2}
          icon={<FaTrainSubway color="white" size={34} />}
        />
                <ServiceCard
          delay={0.3}
          title="Rail Transportation"
          description="Air freight is the fastest way to any transport can any deliver works."
          image={serviceImage2}
          icon={<FaTrainSubway color="white" size={34} />}
        />
      </div>
    </div>
  );
};

export default ServicesSection;
