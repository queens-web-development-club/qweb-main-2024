import React, { useState } from "react";
import CompanySlider from "@/Components/company-slider";
import { company } from "@/pages/sponsorship/company";


export default function Sponsorship() {


  return (
    <div className="sponsorship-container">
        <h1 className="sponsorship-heading">{'< Sponsorships />'}</h1>
        
        <div className="flex flex-col gap-[24px] w-full">
            <CompanySlider cards={company} slideLeft={true} />
        </div>
    </div>
  );
}