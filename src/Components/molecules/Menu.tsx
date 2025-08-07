import React from 'react'
import Items from "../atoms/Items"

const NavMenu: React.FC = () => {
  const navLinks = [
    { label: "Home", href: "#agenda" },
    { label: "Shop", href: "/Login" },
    { label: "Shop Detail", href: "#speakers" },
    { label: "Pages", href: "#registro" },
    { label: "Contact", href: "/GalLery" },
    { label: "footer", href: '#footer' },
  ];
  return (
    <>

    <nav className="">

      <div className="mx-auto flex justify-center items-center px-6 py-4 gap-4 bg-gray-600">
        <div>
          
        </div>
        <ul className="flex gap-6 ">
          {navLinks.map((link) => (
            <Items key={link.href} label={link.label} href={link.href} />
          ))}
        </ul>
          <div>
            
          </div>
      </div>

    </nav>

    </>
  );
};
export default NavMenu;