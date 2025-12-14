"use client";
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
        <ul className="flex gap-12 text-white capitalize">
          {links.map((link, indx) => {
            return (
              <li className="font-semibold px-4 py-2 rounded hover:text-brand-yellow hover:opacity-90">
                <ScrollLink
                  to={link.path}
                  smooth
                  spy
                  className="cursor-pointer"
                  activeClass="text-accent"
                >
                  {link.name}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
export default Header;
