import React, { useState, useRef } from 'react';
import { EventsCard } from './events-card';
import Tailwind from '/public/events/tailwind_events.png'
import ReactBackend from '/public/events/card-image2.png'
import Test from '/public/events/card-image3.png'

export default function Events() {
  //MAKE CARDS DRAGGABLE
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setIsDown(true);
    sliderRef.current.classList.add('active');
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
    console.log(walk);
  };

  return (
    <div className='w-full bg-[#001220] sm:pl-[10%] pl-[5%] md:py-[195px] py-[100px]'>
      <h1 className="sm:text-5xl text-4xl font-sans font-black w-[720px] title-text sm:pb-[77px] pb-[50px]">&lt; <span className='font-bold'>Our Events</span> /&gt;</h1>
      <div className="flex md:gap-[62px] sm:gap-[32px] gap-[16px] overflow-x-scroll hide-scroll rounded-[15px]" ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
        <EventsCard dateNumber={"09"} dateMonth={"Nov"} title={"React & Tailwind Tutorial"} description={"Join us in Law Room 2 at 7 PM, Nov 9th as we learn React and Tailwind CSS!"} image={Tailwind} background={"card-bg-green"}/>
        <EventsCard dateNumber={"16"} dateMonth={"Nov"} title={"React & Backend"} description={"This week we are learning about React and backend!! Join us from 7-8pm in Law Room 2 !!!"} image={ReactBackend} background={"card-bg-blue"}/>
        <EventsCard dateNumber={"24"} dateMonth={"Nov"} title={"React & Tailwind Tutorial"} description={"Join us in Law Room 2 at 7 PM, Nov 9th as we learn React and Tailwind CSS!"} image={Test} background={"card-bg-blue"}/>
        <EventsCard dateNumber={"09"} dateMonth={"Nov"} title={"React & Tailwind Tutorial"} description={"Join us in Law Room 2 at 7 PM, Nov 9th as we learn React and Tailwind CSS!"} image={Tailwind} background={"card-bg-green"}/>
        <EventsCard dateNumber={"16"} dateMonth={"Nov"} title={"React & Backend"} description={"This week we are learning about React and backend!! Join us from 7-8pm in Law Room 2 !!!"} image={ReactBackend} background={"card-bg-blue"}/>
        <EventsCard dateNumber={"24"} dateMonth={"Nov"} title={"React & Tailwind Tutorial"} description={"Join us in Law Room 2 at 7 PM, Nov 9th as we learn React and Tailwind CSS!"} image={Test} background={"card-bg-blue"}/>
        <EventsCard dateNumber={"09"} dateMonth={"Nov"} title={"React & Tailwind Tutorial"} description={"Join us in Law Room 2 at 7 PM, Nov 9th as we learn React and Tailwind CSS!"} image={Tailwind} background={"card-bg-green"}/>
        <EventsCard dateNumber={"16"} dateMonth={"Nov"} title={"React & Backend"} description={"This week we are learning about React and backend!! Join us from 7-8pm in Law Room 2 !!!"} image={ReactBackend} background={"card-bg-blue"}/>
        <EventsCard dateNumber={"24"} dateMonth={"Nov"} title={"React & Tailwind Tutorial"} description={"Join us in Law Room 2 at 7 PM, Nov 9th as we learn React and Tailwind CSS!"} image={Test} background={"card-bg-blue"}/>
      </div>
    </div>
  );
}