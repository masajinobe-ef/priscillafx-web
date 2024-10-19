import Image from "next/image";
import { FC } from "react";

const NavBar: FC = () => {
  const navItems = [
    { href: "/", label: "Home", icon: "icon-home.svg" },
    { href: "/info/blog", label: "Blog", icon: "icon-blog.svg" },
    { href: "/shop/software", icon: "icon-software.svg", label: "Software" },
    { href: "/shop/custom", label: "Custom", icon: "icon-custom.svg" },
    { href: "/shop/mods", label: "Mods", icon: "icon-mods.svg" },
    { href: "/info/artists", label: "Artists", icon: "icon-artists.svg" },
    { href: "/info/faq", label: "F.A.Q.", icon: "icon-faq.svg" },
    { href: "/info/about", label: "About", icon: "icon-about.svg" },
  ];

  return (
    <header className="flex justify-between bg-purple-800 p-3 relative z-20">
      <nav>
        <ul className="flex space-x-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-white p-2 hover:text-black">
                <Image
                  src={`/images/icons/${item.icon}`}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="inline-block mr-1 filter brightness-0 invert"
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
