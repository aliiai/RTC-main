//Assets
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="w-full flex flex-col   bg-black2 pt-[24px] font-Poppins
    text-[white] gap-[34px]"
    >
      {/* Section1 */}
      <div className="w-full flex flex-col gap-[34px] pl-[100px] pr-[100px]">
        {/* Logo */}
        <div className="flex items-center gap-[7px]">
          <AiOutlineGlobal
            className="translate-y-[-1px]"
            color="#b29358"
            size={40}
          />
          <p className="text-[20px]  font-[600]">RTC</p>
        </div>
        {/* Site map */}
        <div className="flex items-center justify-evenly">
          <div className="flex  gap-[40px]">
            {/* map1 */}
            <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] font-[600]">About Company</p>
              <p className="max-w-[250px] text-gray text-[15px] font-[500]">
                We work with passion of taking challenges and creating new ones
                in advertising any ready more sector.
              </p>
            </div>
            {/* map2 */}
            
          </div>
          <div className="flex flex-col gap-[20px]">
              <p className="text-[20px] font-[600]">someone@example.com</p>
              <p className="max-w-[250px] text-gray text-[15px] font-[500]">
                523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA
              </p>
            </div>
          {/* Row2 */}
          <div className="flex flex-col gap-[20px]">
            <p className="text-[20px] font-[600]">Our Services</p>
            <div className="flex flex-col gap-[10px]">
              <p className="max-w-[250px] text-gray text-[15px] font-[500]">
                Just-In-Time delivery
              </p>
              <p className="max-w-[250px] text-gray text-[15px] font-[500]">
                Time based service levels
              </p>
              <p className="max-w-[250px] text-gray text-[15px] font-[500]">
                Ware housing
              </p>
              <p className="max-w-[250px] text-gray text-[15px] font-[500]">
                stock transparency
              </p>
              <p className="max-w-[250px] text-gray text-[15px] font-[500]">
                Transport consolidation
              </p>
            </div>
          </div>
          {/* Row 3 */}
      
          {/* Row 4 */}
        
        </div>
      </div>

      {/* Section2 */}
      <div
        className="w-full flex border-t-[#acacac] border-t-[1px] pl-[100px] pr-[100px] items-center  pt-[20px]
      pb-[20px] justify-between"
      >
        <div>
          <p className="text-gray font-[500]">
            <span className="text-gold">RTC </span>@2024. All Rights Reserved.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
