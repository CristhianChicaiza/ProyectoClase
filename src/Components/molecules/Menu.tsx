import React from 'react'
import Items from "../atoms/Items"

const NavMenu: React.FC = () => {
  const navLinks = [
    { label: "Information", href: "#agenda" },
    { label: "Login", href: "/Login" },
    { label: "Design", href: "#speakers" },
    { label: "Catalog", href: "#registro" },
    { label: "Galery", href: "/GalLery" },
    { label: "footer", href: '#footer' },
  ];
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex justify-center items-center px-6 py-4 gap-4">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <Items key={link.href} label={link.label} href={link.href} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavMenu;