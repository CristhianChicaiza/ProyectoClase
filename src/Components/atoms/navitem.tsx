import { Link } from "react-router-dom";

interface NavItemProps {
  name: string;
  href: string;
}

const NavItem = ({ name, href }: NavItemProps) => {
  return (
    <li>
      <Link
        to={href}
        className="text-white hover:underline font-semibold tracking-wide"
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
