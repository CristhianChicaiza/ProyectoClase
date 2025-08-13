import React from 'react';
import Items from "../atoms/Items";

const NavMenu: React.FC = () => {
  const navLinks = [
    { label: "Home", href: "/homepages" },
    { label: "Shop", href: "/shop" },
    { label: "Shop Detail", href: "/shopdetail" },
    {
      label: "Pages",
      href: "#",
      subItems: [
        { label: "Registro", href: "#registro" },
        { label: "Perfil", href: "/profile" },
        { label: "FAQ", href: "/faq" }
      ]
    },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className="">
      <div className="mx-auto flex justify-start items-center px-6 py-4 gap-4 bg-gray-600">
        <ul className="flex gap-6 relative">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <div className="cursor-pointer">
                <Items label={link.label} href={link.href} />
              </div>

              {link.subItems && (
                <div className="absolute top-full left-0 mt-1 w-max hidden group-hover:flex flex-col bg-yellow-400 shadow-lg rounded-md z-10">
                  {link.subItems.map((sub) => (
                    <div
                      key={sub.href}
                      className="px-4 py-2 hover:bg-gray-100 text-black font-bold whitespace-nowrap"
                    >
                      <Items label={sub.label} href={sub.href} />
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
