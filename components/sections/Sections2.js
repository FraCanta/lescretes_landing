import Image from "next/image";
import React from "react";
import Family from "@/public/assets/lc3a.webp";
import Link from "next/link";

const Sections2 = ({ translation }) => {
  return (
    <div className="w-full min-h-screen py-[90px] 3xl:py-[10rem]  gap-[50px] flex flex-col">
      <div className="w-[90%] mx-auto flex flex-col gap-4 3xl:gap-10">
        <h2 className="text-3xl font-bold text-main md:text-5xl 3xl:text-7xl ">
          {translation?.title}
        </h2>
        <p className="text-xl 2xl:w-2/3 3xl:w-3/4 md:text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-normal text-main">
          {translation?.descrizione}
        </p>
      </div>
      <div className="w-[90%] mx-auto gap-[20px] flex flex-col lg:flex-row">
        <div className="relative w-full aspect-square lg:h-[80vh]">
          <Image
            src={Family}
            alt="famiglia charrere"
            fill
            className="object-cover rounded-sm "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Sections2;
