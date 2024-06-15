import React from "react";
import Image from "next/image";
import { FEATURES } from "@/constants";
const Features = () => {
  return (
    <div className="my-10 flex flex-row items-center justify-around gap-32" id="services">
      <div className=" p-10 hidden lg:block ">
        {" "}
        <Image src="/phones.webp" width={400} height={400} className="h-auto w-[100%]" />
      </div>
      <div>
        <div>
          {" "}
          <Image src="/camp.svg" width={32} height={32} className="-mb-3" />
          <h2 className="font-extrabold  text-4xl">Our Features</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 ">
          {FEATURES.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="bg-green-500 w-12 lg:w-14 flex items-center lg:py-3 py-2 rounded-full my-5 justify-center text-center">
                <Image src={`${item.icon}`} width={32} height={32} />
              </div>
              <h2 className="font-extrabold text-1xl">{item.title}</h2>
              <p className="text-gray-600  font-bold">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
