  "use client"
  
  import React, { useState, memo , useEffect, Suspense , useRef} from 'react';
  import PropTypes from 'prop-types';
  import DownloadBtn from '../Container/DownloadBtn';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import {Autoplay } from 'swiper/modules';
  import 'swiper/css';
  // import { AiOutlineArrowRight } from 'react-icons/ai'; // Default icon
  import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
  // import { Link } from 'react-router-dom'; // For routing
  import Link from "next/link";
  import clsx from 'clsx'


  const useCanHover = () => {
    const [canHover, setCanHover] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
      setCanHover(mediaQuery.matches);
  
      const handler = (e) => setCanHover(e.matches);
      mediaQuery.addEventListener('change', handler);
  
      return () => mediaQuery.removeEventListener('change', handler);
    }, []);
  
    return canHover;
  };



  const formatTitle = (text) => {
    const words = text.split(" ");
    if (words.length <= 2) return text;
  
    return (
        <>
      <span className="block">{words.slice(0, 2).join(" ")}</span>
      <span className="block text-xs md:text-sm leading-tight">
        {words.slice(2,7).join(" ")}
      </span>
      <span className="block text-xs md:text-sm leading-tight">
        {words.slice(7).join(" ")}
      </span>
    </>
    );
  };


  // Optimized Card Component
  const Card = memo(({ title, imageSrc, hoverImageSrc, buttonText, link ,hovericonImageSrc , iconimageSrc , onMouseEnter, onMouseLeave , headline = "India #1 Digital Marketing Course"}) => {
    const [isHovered, setIsHovered] = useState(false);
    const canHover = useCanHover();

  const normalizedLink = link.startsWith("/") ? link : `/${link}`;


    return (
      <div
        // className="sm:max-w-[900px] sm:bg-[url('/images/card/bg/black.webp')] sm:hover:bg-[url('/images/card/bg/white.webp')] bg-no-repeat bg-cover bg-center rounded-2xl p-6 shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:bg-[#324865] relative z-30 hover:z-50 hover:scale-105 group"
        className={clsx(
          "sm:max-w-[900px] min-h-[220px] bg-no-repeat bg-cover bg-center rounded-2xl p-6 shadow-lg overflow-hidden border border-gray-200 relative z-30",
          canHover && [
            "group",
            "transition-transform",
            "hover:scale-105",
            "hover:z-50",
            "hover:bg-[#324865]",
            "sm:bg-[url('/images/card/bg/black.png')]",
            "sm:hover:bg-[url('/images/card/bg/white.png')]"
          ]
        )}
        
        // onMouseEnter={(e) => 
        //   {setIsHovered(true) 
        //   if (onMouseEnter) onMouseEnter(e);
        //   }}
        // onMouseLeave={(e) => {
        //   setIsHovered(false)
        //   if (onMouseLeave) onMouseLeave(e);
        // }} 
        onMouseEnter={(e) => {
          if (!canHover) return;
          setIsHovered(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (!canHover) return;
          setIsHovered(false);
          onMouseLeave?.(e);
        }}
      >
            <Link href={normalizedLink} className="w-max mt-4 block z-50">
        <div className="flex flex-row justify-between items-start">
          <div className="flex-1 flex flex-col justify-between">
            <div>
            {/* <h1 className="uppercase px-2 py-1 bg-[#fdd85b] font-extrabold text-[#192b43] text-sm md:text-lg inline-block font-Berlin tracking-wide">
              {title}
            </h1> */}
            <h1 className="uppercase px-2 py-1 bg-[#fdd85b] font-extrabold text-[#192b43] text-sm md:text-sm inline-block font-Berlin tracking-wide">
  {formatTitle(title)}
</h1>
            {/* <h1 className="uppercase px-2 py-1 bg-[#fdd85b] mt-1 font-extrabold text-[#192b43]  text-sm md:text-lg  inline-block font-Berlin">
              mba level program
            </h1> */}
            {/* <p className='mt-2 text-[#192b43] text-xs group-hover:text-white'> */}
            <p className={clsx(
    "mt-2 text-[#192b43] text-xs",
    canHover && "group-hover:text-white"
  )}
>
              {headline}
            </p>
            </div>
            <div className='mt-[10%]'>
              <button
                onClick={(e) => {
                  if (onClick) onClick(e);
                }}
                className="flex flex-row space-x-2 items-center"
              >
                {/* <div className="w-6 h-6 p-1 rounded-full bg-[#324865] group-hover:bg-white flex items-center justify-center"> */}
                <div
  className={clsx(
    "w-6 h-6 p-1 rounded-full bg-[#324865] flex items-center justify-center",
    canHover && "group-hover:bg-white"
  )}
>
                  <img
                    // src={isHovered ? hovericonImageSrc : iconimageSrc}
                    src={canHover && isHovered ? hovericonImageSrc : iconimageSrc}
                    alt={title}
                    className="w-full h-full -rotate-45 group-hover:rotate-0"
                    loading="lazy"
                  />
                </div>
                <span className="text-[#192b43] hover:text-[#2e4d77] group-hover:text-white font-semibold text-sm">{buttonText}</span>
              </button>
            </div>
            
          </div>

          {/* Image container with fixed size but no absolute positioning */}
          <div className="flex-shrink-0 ml-4">
            <img
              // src={isHovered ? hoverImageSrc : imageSrc}
              src={canHover && isHovered ? hoverImageSrc : imageSrc}
              alt={title}
              className="absolute bottom-3 right-3 w-[30%] pointer-events-none z-10"
              loading="lazy"
            />
          </div>
        </div>
      </Link>
      </div>

      
    );
  });

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    hoverImageSrc: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  };


  // Main Section
  const BoxCardSection = ({coursedata}) => {

  const swiperRefs = useRef([]);


    const [categories , setcategories] = useState(coursedata || [])
    const swiperRef= useRef(null);

    useEffect(()=>{
       if (!coursedata) {
      import("./data/BoxCardSection.js").then((m) => {
        setcategories(m.default);
      });
    }else{
      setcategories(coursedata)
    }
    },[coursedata])


    return (

      <div className="container mx-auto px-4 py-12 h-full w-full">
        


{categories.map((category, idx) => (
  <div key={idx} className="relative mb-16 max-w-6xl mx-auto h-full overflow-visible">
    <h2 className="text-lg md:text-2xl font-semibold mb-6 text-gray-900 inline-block rounded-full outline outline-1 outline-blue-500 px-6 py-2">
      {category.title}
    </h2>

    <Swiper
      onSwiper={(swiper) => (swiperRefs.current[idx] = swiper)}
      modules={[Autoplay]}
      spaceBetween={5}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 3 },
      }}
    >
      {category.cards.map((card, i) => (
        <SwiperSlide key={i} className="my-6 px-2 h-full">
          <Card {...card} />
        </SwiperSlide >
      ))}
    </Swiper>

    {/* Mobile buttons */}
    <div className="absolute top-1/2 w-full flex justify-between md:hidden -translate-y-1/2 z-50 mt-9">
      <button
        onClick={() => swiperRefs.current[idx]?.slidePrev()}
        className="bg-blue-500 text-white p-2 rounded-full shadow-lg"
      >
        <AiOutlineArrowLeft size={20} />
      </button>
      <button
        onClick={() => swiperRefs.current[idx]?.slideNext()}
        className="bg-blue-500 text-white p-2 rounded-full shadow-lg"
      >
        <AiOutlineArrowRight size={20} />
      </button>
    </div>
  </div>
))}
      </div>
    );
  };

  export default BoxCardSection;