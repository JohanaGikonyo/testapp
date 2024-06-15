import React from "react";
import Image from "next/image";
const Guide = () => {
  return (
    <div className="my-10" id="about">
      <div>
        {" "}
        <Image src="/camp.svg" width={32} height={32} className="-mb-3" />
        <h2 className="text-green-600 uppercase text-2xl">We are Here For You</h2>
      </div>
      <div className="font-extrabold text-4xl my-3">
        <h2>Guide You to Easy Path</h2>
      </div>
      <div>
        <p className="text-gray-500 my-4 ">
          Only with the hilink application you will no longer get lost and get lost again, because we already support
          offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to
          have fun in the wilderness through the valley and reach the top of the mountain
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat h-52 md:h-72 lg:h-80 w-[100%] rounded-md mb-7 p-5"
        style={{ backgroundImage: "url('/supper3.jpg')" }}
      >
        <div className="bg-white flex flex-row gap-2 items-center justify-around h-64 w-64 rounded-2xl">
          <div>
            {" "}
            <Image src="/meter.svg" width={32} height={32} className="-mb-3" />
          </div>
          <div className="flex flex-col gap-3   justify-between">
            <div className="flex flex-col gap-2">
              <span className="flex justify-between">
                <p className="text-gray-500 ">Destination</p>
                <p className="text-green-600 font-bold">48 min</p>
              </span>
              <h2 className=" font-bold text-xl">Aguas Calientes</h2>
            </div>
            <div className="flex flex-col gap-2">
              <span>
                <p className="text-gray-500 ">Start track</p>
              </span>
              <h2 className=" font-bold text-xl">Wonorejo Pasuruan</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
