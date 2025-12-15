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
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";

const NabMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="text-white flex items-center justify-center text-3xl">
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent side="right">
        <div className="bg-primary border-none text-white">Content</div>
      </SheetContent>
    </Sheet>
  );
};

export default NabMobile;
