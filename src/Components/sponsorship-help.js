import Image from "next/image";
import React from "react";

export const SponsorshipHelp = (props) => {
  return (
    <div className="flex lg:gap-[80px] gap-[60px] md:flex-row flex-col">
      <div className="mt-3 flex items-center justify-center lg:min-w-[200px] min-w-[150px] lg:h-[200px] h-[150px] sponsorship-square-bg rounded-md">
        <h1 className="font-black lg:text-[96px] text-[64px] text-white">
          {props.number}
        </h1>
      </div>
      <p className="lg:text-[28px] md:text-[24px] text-[20px] text-white">
        {props.text}
      </p>
    </div>
  );
};
