import React from 'react'

const process = () => {
  return (
    <div className='w-full bg-[#001220] md:pb-[195px] pb-[100px]'>
      <div className='sm:pl-[10%] pl-[5%] '>
        <h1 className="sm:text-5xl text-4xl font-sans font-black w-[820px] title-text sm:pb-[50px] pb-[35px]">&lt; <span className='font-bold'>Our Process</span> /&gt;</h1>
        <p anchor className='font-sans font-normal md:text-3xl sm:text-2xl text-xl md:leading-10 text-white lg:w-[80%] w-full lg:pr-0 sm:pr-[10%] pr-[5%] max-w-[1200px]'>QWEB members are sorted into design teams and then given a real world customer to consult with. The customer plays an integral role while iterating through the development process. Experienced members lead development teams of members of varying abilities. We do both design and coding!</p>
      </div>

    <div className='relative w-full lg:h-[700px] flex items-center justify-center lg:pt-0 md:pt-[80px] sm:pt-[60px] pt-[40px]'>
      <img src="/process/cross waves.png" alt="" className='absolute w-full'/>
      <div className='flex w-full justify-center max-w-[1440px]'>
        <div className='blob-grid justify-between lg:w-[90%]'>
          <div className='relative w-fit lg:translate-y-[25%] min-w-max md:scale-100 scale-50'>
            <h2 className='absolute top-[43%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase font-black text-white text-[40px] blob-text-shadow'>consult</h2>
            <img className='' src="/process/blob1.png" alt=""/>
            <img className='absolute w-[77px] lg:right-[50px] lg:bottom-[-60px] right-[300px] bottom-[40%] md:block hidden' src="/process/people-arrows-solid 1.png" alt="" />
          </div>
          <div className='relative w-fit lg:-translate-y-[25%] min-w-max md:scale-100 scale-50'>
            <h2 className='absolute top-[35%] left-[50%] translate-x-[-50%] lg:translate-y-[-50%] translate-y-[-25%] uppercase font-black text-white text-[40px] blob-text-shadow'>design</h2>
            <img className='' src="/process/blob2.png" alt=""/>
            <img className='absolute lg:left-[55px] lg:top-[-50px] left-[300px] bottom-[50%] md:block hidden' src="/process/wand-magic-sparkles-solid 1.png" alt="" />
            <img className='absolute left-[-70px] bottom-[100px] lg:block hidden' src="/process/arrow1.png" alt="" />
            <img className='absolute min-[1100px]:right-[-120px] bottom-[130px] right-[-95px] lg:block hidden' src="/process/arrow2.png" alt="" />
          </div>
          <div className='relative w-fit lg:translate-y-[40%] lg:-translate-x-[5%] min-w-max md:scale-100 scale-50'>
            <h2 className='absolute top-[55%] left-[50%] translate-x-[-50%] lg:translate-y-[-50%] uppercase font-black text-white text-[40px] blob-text-shadow'>develop</h2>
            <img className='' src="/process/blob3.png" alt=""/>
            <img className='absolute lg:right-[50px] lg:bottom-[-40px] right-[300px] bottom-[40%] md:block hidden' src="/process/code-solid 1.png" alt="" />
            <img className='absolute min-[1100px]:right-[-110px] bottom-[80px] min-[1720px]:bottom-[40px] right-[-90px] lg:block hidden' src="/process/arrow3.png" alt="" />
          </div>
          <div className='relative w-fit lg:-translate-y-[35%] min-w-max md:scale-100 scale-50'>
            <h2 className='absolute top-[45%] left-[50%] translate-x-[-50%] lg:translate-y-[-50%] uppercase font-black text-white text-[40px] blob-text-shadow'>test</h2>
            <img className='' src="/process/blob4.png" alt=""/>
            <img className='absolute lg:left-[0px] lg:top-[-40px] left-[300px] top-[35%] md:block hidden' src="/process/list-check-solid 1.png" alt="" />
            <img className='absolute right-[-90px] bottom-[65px] min-[1720px]:bottom-[35px] min-[1720px]:right-[-80px] lg:block hidden' src="/process/arrow4.png" alt="" />
          </div>
          <div className='relative w-fit lg:translate-y-[45%] lg:-translate-x-[15%] min-w-max lg:pt-0 pt-11 md:scale-100 scale-50'>
            <h2 className='absolute top-[43%] left-[50%] translate-x-[-50%] lg:translate-y-[-50%] translate-y-[30%]  uppercase font-black text-white text-[40px] blob-text-shadow'>deploy</h2>
            <img className='' src="/process/blob5.png" alt=""/>
            <img className='absolute lg:left-[10px] lg:bottom-[-20px] left-[-120px] bottom-[30%] md:block hidden' src="/process/globe-solid 1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default process