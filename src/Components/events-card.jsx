import Image from 'next/image'
import React from 'react'

export const EventsCard = (props) => {
  return (
    <div className={`font-sans text-white p-[20px] flex flex-col md:gap-8 sm:gap-6 gap-3 md:w-[528px] rounded-[15px] w-full h-auto ${props.background}`}>
      <div className='flex flex-col gap-[10px]'>
        <h1 className='font-black md:text-8xl sm:text-7xl text-6xl md:py-4 sm:py-2'>{props.dateNumber}</h1>
        <h2 className='font-medium md:text-5xl sm:text-4xl text-3xl md:py-2'>{props.dateMonth}</h2>
        <hr className='sm:border-2 border-[1.5px] w-[20%] border-[#001220]'/>
      </div>
    <h3 className="md:text-[40px] sm:text-3xl text-2xl font-bold md:w-[484.645px] w-[50vw]">{props.title}</h3>
      <p className='md:text-3xl sm:text-2xl text-lg font-medium'>{props.description}</p>
      <Image className='max-h-[254px] w-full' src={props.image} alt={props.imageAlt} />
    </div>
  )
}

