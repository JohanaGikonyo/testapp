import React from "react";
import Image from "next/image";
import ButtonComponent from "./Button";
const Welcome = () => {
  return (
    <div className="max-w-[1440px]  px-2 py-4 my-4">
      <div className="lg:flex items-center gap-4 ">
        <div>
          <Image src="/camp.svg" alt="image" width={30} height={30} className="-mb-2" />
          <h1 className="font-bold text-4xl">Putuk Truno Camp Area</h1>
          <p className="text-gray-500 my-8">
            We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of
            nature. We can help you on an adventure around the world in just one app
          </p>
          <div className="flex gap-4">
            <span className="flex gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <Image src="/star.svg" alt="image" width={24} height={24} />
                </div>
              ))}
            </span>
            <p>
              <span className="font-bold m-2">198k</span>
              Excellent Reviews
            </p>
          </div>{" "}
          <div className="flex my-4 flex-wrap gap-4 items-center justify-center">
            <ButtonComponent label="Download App" colors="border text-white bg-green-500 px-8 py-4 " />
            <ButtonComponent label="How We Work?" colors="font-bold text-black  px-8 py-2 " icon="/play.svg" />
          </div>
        </div>
        <div className="bg-slate-800 text-white lg:mr-10 lg:ml-10 w-60 h-auto p-4  lg:flex-end lg:justify-end rounded-xl">
          <p className="flex justify-between text-gray-300">
            Location{" "}
            <span>
              {" "}
              <Image src="/close.svg" alt="image" width={24} height={24} />
            </span>
          </p>
          <h2 className="font-extrabold">Aguas Calientes</h2>
          <div className="my-4">
            <span className="flex justify-between text-gray-400">
              <p>Distance</p>
              <p>Elevation</p>
            </span>
            <span className="flex justify-between font-extrabold">
              <h2>173.28 min</h2>
              <h2>2.040 km</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
