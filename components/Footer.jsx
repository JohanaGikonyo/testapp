"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";
const Footer = () => {
  return (
    <div id="contact" className=" py-8 lg:grid lg:grid-cols-4 md:grid-cols-2 rounded-md mt-20">
      <div className="px-3">
        <h1>
          <Image src="/hilink-logo.svg" width={64} height={42} />
        </h1>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-2 px-3">
        {FOOTER_LINKS.map((links, index) => (
          <div key={index}>
            <h2 className="font-extrabold my-3">{links.title}</h2>
            <div>
              {links.links.map((link, index) => (
                <div key={index}>
                  <Link href="#" className="text-gray-500">
                    {" "}
                    {link}
                  </Link>
                </div>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>
      <div className="mx-3">
        <h2 className="font-extrabold my-3">{FOOTER_CONTACT_INFO.title}</h2>
        <div>
          {FOOTER_CONTACT_INFO.links.map((link, index) => (
            <div key={index}>
              <Link href="#" className="flex gap-4 text-gray-500">
                <p>{link.label}</p>
                <p>{link.value}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-3">
        <h2 className="font-extrabold my-3">{SOCIALS.title}</h2>
        <div className="flex gap-2 items-center flex-wrap">
          {SOCIALS.links.map((link, index) => (
            <div key={index}>
              <Image src={link} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
