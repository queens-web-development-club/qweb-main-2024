import React, { useState } from "react";
import Image from "next/image";
import Blob1 from '/public/sponsors/hero-blob-sponsor.png'
import Blob2 from '/public/sponsors/hero-blob-sponsor-bottom.png'
import { SponsorshipHelp } from './sponsorship-help';


export default function Sponsorship() {
  return (
    <div className='w-ful bg-[#001220] pb-[200px] relative'>
      <Image className='absolute max-w-[500px] md:right-0 top-0 md:w-[31%] w-[45%] right-[-10%]' src={Blob1} alt="blob" />
      <div className="w-full flex justify-center sm:py-[100px] py-[50px] mb-[25px] sm:mb-0">
        <h1 className="sponsorship-heading z-[1]">{'< Sponsorships />'}</h1>
      </div>
    
      <div className="sm:px-[10%] px-[5%] z-[1] relative">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-sans font-black md:w-[1520px] w-[1020px] title-text sm:pb-[77px] pb-[30px]">&lt; <span className='font-bold'>What QWEB<br className="min-[481px]:hidden visible"></br> can offer you</span> /&gt;</h1>
        <div className="flex flex-col md:gap-[80px] gap-[35px]">
          <SponsorshipHelp number="01" text="Exceptional Recruitment Opportunities: At QWeb, we are a hub for the most talented student developers across Queen's University campus. By partnering with us, you gain direct access to this pool of high-caliber talent. This collaboration allows you to build personal connections with our members, providing you with a unique opportunity to identify and recruit the ideal candidates tailored to your company's needs. You'll be at the forefront of sourcing tomorrow's tech leaders today." />
          <SponsorshipHelp number="02" text="Enhanced Branding and Presence: In today's competitive market, establishing a strong brand presence is crucial. QWeb acts as a powerful conduit to your target demographic. The upcoming generations of web developers, eager to learn about innovative companies and technologies, are within our community. By aligning with us, you can significantly boost your brand awareness among students who are not just passionate about technology but are also the future of this industry. This partnership facilitates a deeper connection with the community and positions your brand at the heart of technological innovation." />
          <SponsorshipHelp number="03" text="Advertisement and Product Promotion: Imagine the impact of placing your product or API in the hands of hundreds of eager, tech-savvy students. QWeb offers the perfect platform for product demonstrations and promotions. Witness firsthand the creative applications these students can develop using your products, and receive instant, invaluable feedback. This interaction not only provides you with essential insights into your product's market fit but also offers extensive exposure among a highly engaged audience." />
        </div>
      </div>
      
      <Image className='absolute md:bottom-[-15%] bottom-[-120px] -rotate-[26.62°] sm:w-1/3 w-1/2 md:w-[500px]' src={Blob2} alt="blob" />
    </div>
  );
}
