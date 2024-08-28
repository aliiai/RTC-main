//Components
import Button from "@mui/material/Button";
import ElementReveal from "../../../Components/Reveal/ElementReveal";

//Assets
import about1 from "../../../assets/about-1.png";
import about2 from "../../../assets/about-2.png";

const AboutSection = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-row pb-[70px] ">
      <div className="flex flex-1 flex-row border-[gray] pl-[70px] pt-[60px] sc1485:pl-[20px]">
        <ElementReveal initialX={-200} animateX={0} delay={0} zIndex={10}>
          <div className="relative z-[10]">
            <img draggable={false} src={about2} className="rounded-full" />
          </div>
        </ElementReveal>
        <ElementReveal initialX={-200} animateX={0} delay={0.1} zIndex={9}>
          <div className=" pt-[90px] translate-x-[-50px] relative z-[9]">
            <img draggable={false} src={about1} />
          </div>
        </ElementReveal>
      </div>
      <div className="flex flex-1 flex-col  justify-center gap-[70px] sc1485:pt-[80px]">
        <div className="flex flex-col gap-[16px] pr-[70px] sc1485:pr-[50px]">
          <ElementReveal delay={0.1} initialY={50} animateY={0}>
            <p className="text-[#ff131d] text-[20px] font-[500]">
              WE SPECIALISE IN THE TRANSPORTATION
            </p>
          </ElementReveal>
          <ElementReveal delay={0.1} initialY={50} animateY={0}>
            <p className="text-[55px] leading-[80px] font-[600] sc1485:text-[40px] ">
              Manage your Complex Logistics as can Focus
            </p>
          </ElementReveal>
          <ElementReveal delay={0.1} initialY={50} animateY={0}>
            <p className="text-[gray] text-[20px] leading-[40px]">
              Transmax is the world’s driving worldwide coordinations supplier
              we uphold industry and exchange the worldwide trade of about dummy
              merchandise through land transport.
            </p>
          </ElementReveal>
        </div>
        <div>
          <ElementReveal delay={0.1} initialY={50} animateY={0}>
            <Button
              sx={{
                backgroundColor: "#161c1a",
                padding: 2,
              }}
              variant="contained"
            >
              Discover more
            </Button>
          </ElementReveal>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
