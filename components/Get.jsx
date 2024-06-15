import React from "react";
import ButtonComponent from "./Button.tsx";
import Image from "next/image";
const Get = () => {
  return (
    <div
      className="my-10 flex flex-row items-center justify-around gap-10 text-white bg-black py-10 rounded"
      id="price"
    >
      <div className="flex flex-col gap-5 justify-around">
        <h2 className="text-4xl font-extrabold">Get for free now!</h2>
        <p>Available on iOS and Android</p>
        <div className="flex gap-5 flex-wrap">
          {" "}
          <ButtonComponent label="App Store" colors="font-bold bg-white text-green-500  px-8 py-2 " icon="/apple.svg" />
          <ButtonComponent label="Play Store" colors="font-bold text-white  px-8 py-2 " icon="/android.svg" />
        </div>
      </div>
      <div className=" p-10 hidden lg:block ">
        {" "}
        <Image src="/phones.webp" width={400} height={400} className="h-auto w-[100%]" />
      </div>
    </div>
  );
};

export default Get;
