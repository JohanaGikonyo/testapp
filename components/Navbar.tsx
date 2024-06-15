import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ButtonComponent from "./Button";
import TemporaryDrawer from "./Drawer";
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-4 px-2  top-0 sticky z-40 bg-white shandow-lg">
      <div>
        <h1>
          <Image src="/hilink-logo.svg" width={64} height={42} />
        </h1>
      </div>
      <div className="hidden lg:flex  flex-row justify-between gap-4 items-center ">
        {NAV_LINKS.map((link) => (
          <div key={link.key}>
            <Link href={link.href} className="hover:bold text-slate-600 ">
              {link.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <ButtonComponent label="LogIn" icon="/user.svg" colors="border text-white bg-slate-90 px-8 py-2 bg-slate-900" />
      </div>
      <div className="lg:hidden block">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
