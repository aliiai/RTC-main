import { FC } from "react";

interface Props {
  index: number;
  title: string;
  location: string;
}

const NavItem: FC<Props> = ({ index, title, location }) => {
  index
  location
  return (
    <div className="hover:text-gold font-[500] transition-all cursor-pointer">{title}</div>
  );
};

export default NavItem;
