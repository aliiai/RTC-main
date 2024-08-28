import NavItem from "./NavItem";
import { v4 } from "uuid";

const Header = () => {
  const navItems = [
    {
      title: "Home",
      location: "/",
    },
    {
      title: "About Us",
      location: "/about-us",
    },
    {
      title: "Services",
      location: "/services",
    },

    {
      title: "Clients",
      location: "/clients",
    },
    {
      title: "Contact us",
      location: "/contact-us",
    },
  ];

  return (
    <div
      className="w-screen bg-offBlack min-h-[80px] flex items-center
  pl-[40px] pr-[100px] text-[white] font-Poppins justify-between"
    >
      <div className="text-gold text-[30px] font-[600]">RTC</div>
      <div className="flex gap-[30px]">
        {navItems.map((item, index) => {
          return (
            <NavItem
              key={v4()}
              index={index}
              title={item.title}
              location={item.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
