
//Assets
import banner from "../../../assets/banner.jpg";
import { GoContainer } from "react-icons/go";

//Components
import AnimatedNumber from '../../../Components/AnimatedNumber/AnimatedNumber';

const ClientsSection = () => {
  return (
    <div className="w-full h-[400px]  pb-[300px] relative">
      <div className="w-full h-full absolute z-[6]">
        <img
          draggable={false}
          src={banner}
          className="w-full h-[380px] object-cover "
        />
      </div>
      {/* Shade */}
      <div className="w-full h-[380px] absolute bg-[#0000008a] z-[7]"></div>
      {/* Content */}
      <div className="w-full h-[380px] flex justify-between  items-center z-[9] relative text-[white] pl-[60px]
      pr-[60px]">
        <div className="flex justify-center items-center gap-[6px]">
          <GoContainer size={50} />
          <p className="text-[60px] font-[100]">/</p>
          <div className="flex flex-col items-center">
            <p className="text-[30px] font-[600]"><AnimatedNumber  animatedValue={1284}/></p>
            <p className="text-[18px] font-[600]">Completed Delivery</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[6px]">
          <GoContainer size={50} />
          <p className="text-[60px] font-[100]">/</p>
          <div className="flex flex-col items-center">
            <p className="text-[30px] font-[600]"><AnimatedNumber  animatedValue={754}/></p>
            <p className="text-[18px] font-[600]">Completed Delivery</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[6px]">
          <GoContainer size={50} />
          <p className="text-[60px] font-[100]">/</p>
          <div className="flex flex-col items-center">
            <p className="text-[30px] font-[600]"><AnimatedNumber  animatedValue={754}/></p>
            <p className="text-[18px] font-[600]">Completed Delivery</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[6px]">
          <GoContainer size={50} />
          <p className="text-[60px] font-[100]">/</p>
          <div className="flex flex-col items-center">
            <p className="text-[30px] font-[600]"><AnimatedNumber  animatedValue={754}/></p>
            <p className="text-[18px] font-[600]">Completed Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
