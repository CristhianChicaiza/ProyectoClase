import React from "react";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => (
  <li className="whitespace-nowrap">
    <a
      href={href}
      className="text-gray-100 hover:text-yellow-300 transition-colors"
    >
      {label}
    </a>
  </li>
);

export default NavItem;