import React from "react";
import Image from "next/image";
const Slider = () => {
  return (
    <div>
      <div className="lg:flex flex-col lg:flex-row md:flex-row  sm:gap-4 lg:gap-3 overflow-x-auto w-full  no-scrollbar mt-20 ">
        <div
          className="flex flex-col justify-between bg-cover bg-center bg-no-repeat h-64 w-[100%] rounded-md mb-7"
          style={{ backgroundImage: "url('/supper3.jpg')" }}
        >
          <div className="flex gap-3 justify-start m-5 items-center">
            <div className="bg-green-600 text-white p-3 rounded-full">
              <Image src="/folded-map.svg" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-2 text-slate-800">
              <h2 className="font-bold text-xl">Putuk Truno Camp</h2>
              <p>Prigen, Pasuruan</p>
            </div>
          </div>
          <div className="flex m-5 items-center">
            <Image src="/person-1.webp" width={30} height={30} />
            <Image src="/person-2.webp" width={30} height={30} className="-mx-2" />
            <Image src="/person-4.webp" width={30} height={30} className="-mx-1" />
            <Image src="/person-1.webp" width={30} height={30} className="-mx-1" />
            <h2 className="font-extrabold text-slate-900 ml-10">50+ Joined</h2>
          </div>
        </div>
        <div
          className="flex flex-col justify-between bg-cover bg-center bg-no-repeat h-64 w-[100%] rounded-md"
          style={{ backgroundImage: "url('/teamwork2.jpg')" }}
        >
          <div className="flex gap-3 justify-start m-5 items-center">
            <div className="bg-green-600 text-white p-3 rounded-full">
              {" "}
              <Image src="/folded-map.svg" width={24} height={24} />
            </div>
            <div className="flex flex-col gap-2 text-slate-800">
              <h2 className="font-bold text-xl">Mountain View Camp</h2>
              <p>Somewhere in the Wilderness</p>
            </div>
          </div>
          <div className="flex m-5 items-center">
            {" "}
            <Image src="/person-1.webp" width={30} height={30} />
            <Image src="/person-2.webp" width={30} height={30} className="-mx-2" />
            <Image src="/person-4.webp" width={30} height={30} className="-mx-1" />
            <Image src="/person-1.webp" width={30} height={30} className="-mx-1" />
            <h2 className="font-extrabold text-slate-900 ml-10">50+ Joined</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center lg:-mt-20 mt-10">
        <div className="bg-green-600 text-white rounded-xl md:w-96 w-96  lg:m-5 py-4 px-5">
          <h2 className="text-2xl font-bold">Feeling Lost And Not Knowing The Way?</h2>
          <p>
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting
            lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
