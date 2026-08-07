
import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
import Link from "next/link";
import Icon from '../Container/Icon';

const FieldSelector = () => {
  const scrollRef = useRef(null);

  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     const scrollAmount = 200; // adjust if needed
  //     scrollRef.current.scrollBy({
  //       left: direction === 'left' ? -scrollAmount : scrollAmount,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

const scroll = (direction) => {
  if (!scrollRef.current) return;

  const container = scrollRef.current;
  const scrollAmount = 200;

  const maxScrollLeft = container.scrollWidth - container.clientWidth;
  const nextScrollLeft =
    direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

  container.scrollTo({
    left: Math.max(0, Math.min(nextScrollLeft, maxScrollLeft)),
    behavior: 'smooth',
  });
};



  const fields = [
    {
      src: '/images/Icons/DGHI-07.svg',
      hoverSrc:'/images/Icons/DGHI-08.svg',
      alt: 'MBA ICON',
      text: 'MBA',
      link: 'ai-powered-digital-marketing-course-in-mumbai',
    },
    {
      src: '/images/Icons/DGHI-05.svg',
      hoverSrc:'/images/Icons/DGHI-06.svg',
      alt: 'Digital Marketing Icon',
      text: 'Digital Marketing',
      link: 'digital-marketing-course-in-mumbai', 
    },
    {
      src: '/images/Icons/DGHI-03.svg',
      hoverSrc:'/images/Icons/DGHI-04.svg',
      alt: 'Graphic Design icon',
      text: 'Graphic Design',
      link: 'multimedia-course-animation-classes',
    },
    {
      src: '/images/Icons/DGHI-01.svg',
      hoverSrc:'/images/Icons/DGHI-02.svg',
      alt: 'Video Editing icon',
      text: 'Video Editing',
      link: 'online-video-editing-course',
    },
    {
      src: '/images/Icons/DGHI-09.svg',
      hoverSrc:'/images/Icons/DGHI-10.svg',
      alt: 'Data Analytics icon',
      text: 'Data Analytics',
      link: 'data-analytics-course-in-mumbai',
    },
    {
      src: '/images/Icons/DGHI-11.svg',
      hoverSrc:'/images/Icons/DGHI-12.svg',
      alt: 'DS ML icon',
      text: 'DS ML & AI',
      link: 'data-science-machine-learning-ai-course/',
    },
    {
      src: '/images/Icons/DGHI-13.svg',
      hoverSrc:'/images/Icons/DGHI-14.svg',
      alt: 'Full Stack developer icon',
      text: 'Full Stack Developer',
      link: 'full-stack-developer-course/',
    },
  ];

  return (
    <section className="px-3 py-1 relative">
      
      {/* ✅ Left Arrow (mobile only) */}
      <button
        onClick={() => scroll('left')}
        className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-[5] bg-white shadow px-2 py-1 rounded-full"
      >
        ◀
      </button>

      {/* ✅ Right Arrow (mobile only) */}
      <button
        onClick={() => scroll('right')}
        className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-[5] bg-white shadow px-2 py-1 rounded-full"
      >
        ▶
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar py-4 items-left justify-left sm:justify-center"
      >
        <div className="px-2 flex flex-nowrap gap-12">
          {fields.map((field, index) => (
            <Link href={field.link} key={index}>
              <Icon
                src={field.src}
                hoverSrc={field.hoverSrc}
                alt={field.alt}
                text={field.text}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldSelector;