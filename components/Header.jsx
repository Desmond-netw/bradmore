"use client";
import { RiArrowRightUpLine } from "react-icons/ri";
// imports
import { Link as ScrollLink } from "react-scroll";

//const links
const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about",
    path: "about",
  },
  {
    name: "serivces",
    path: "serivces",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "contact",
    path: "contact",
  },
];
export const Header = () => {
  return (
    <header className="bg-primary py-4 sticky top-0 z-50">
      <div className="container mx-auto ">
        <div className="w-full flex items-center justify-between">
          {/* logo */}
          <div>logo</div>
          {/* Navigation */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex ">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="
                  text-white
                  text-sm
                  font-semibold
                  px-2 py-1
                  border-b-2 border-transparent
                  hover:border-brand-yellow
                  hover:text-brand-yellow
                  uppercase
                  tracking-[1.2px]
                  transition
                  after:content-['/'] after:mx-4 after:text-accent 
                "
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    className="cursor-pointer"
                    activeClass="text-accent border-brand-yellow"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className=" group w-[200px] min-w-[200px] h-[54px] px-6 flex items-center justify-center bg-white rounded hover:opacity-90 ">
              <div className="flex-1 text-center text-primary font-primay font-bold text-sm uppercase">
                get a quote
              </div>
              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
