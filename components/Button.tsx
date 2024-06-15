"use client";
import React from "react";
import Image from "next/image";
const ButtonComponent = ({ label, icon, colors }) => {
  return (
    <div className={` rounded rounded-4xl flex gap-2 cursor-pointer text-center items-center`}>
      {" "}
      <div className={` ${colors} rounded-2xl flex gap-2 cursor-pointer text-center items-center`}>
        {icon && (
          <span>
            <Image src={icon} alt="button icon" width={24} height={24} />
          </span>
        )}
        {label}
      </div>
    </div>
  );
};

export default ButtonComponent;
