"use client";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import Header from "./Header";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "lucide-react";

const NabMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-white flex items-center justify-center text-3xl">
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent side="right">
        <div className="bg-primary border-none text-white">
          {/* Navbar header */}
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <SheetDescription className="sr-only">NavigationBar</SheetDescription>
          <ul>
            {links.map((link, indxsd) => {
              return <ScrollLink to={link.path}>{link.name}</ScrollLink>;
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NabMobile;
