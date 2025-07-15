import React from "react";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => (
  <li className="whitespace-nowrap">
    <a
      href={href}
      className="text-gray-800 hover:text-red-600 transition-colors"
    >
      {label}
    </a>
  </li>
);

export default NavItem;