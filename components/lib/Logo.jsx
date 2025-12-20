import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="#Topbar">
      <Image src="/assets/TestLogo.png" width={200} height={45} alt="" />
    </Link>
  );
};

export default Logo;
