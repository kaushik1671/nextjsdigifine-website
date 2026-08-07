import React ,{lazy , Suspense,useCallback, useEffect,useState } from 'react'
import { Link } from 'react-router';
import { useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { usePageTracking } from '../../../hooks/usePageTracking';
// import HeroSection from "../../Sections/HeroSection"
// import GoalLinks from '../../Container/GoalLinks';
// import CommunityStats from '../../Container/CommunityStats';
import FieldSelector from "../../Sections/FieldSelector"
import SearchBar from '../../Container/SearchBar';
import SectionTitle from "../../CourseComponents/SectionTitle/SectionTitle";
// import cardData from "./data/cardData";
import Locations from '../../CourseComponents/Location/Locations';
import cardData from "./data/cardData"
// import BoxCardSection from "../../Sections/BoxCardSection"
const MyComponent = lazy(()=>import("../../Container/MyComponent"))
const LogoSliding = lazy(()=>import("../../Sections/LogoSliding"))
const BoxCardSection = lazy(()=>import("../../Sections/BoxCardSection"))
const Courses = lazy(()=>import("../../Sections/Cources"))
const WhyChoose = lazy(()=>import("../../CourseComponents/WhyChoose/WhyChoose"))
const OurVision = lazy(()=>import("../../Sections/OurVision"))
const FAQsSection = lazy(()=>import("../../CourseComponents/FAQsSection/FAQsSection"))
const WhatDoes = lazy(()=>import("../../CourseComponents/WhatDoes/WhatDoes"))
const WhoDigifineFor = lazy(()=>import("../../CourseComponents/WhoDigifneFor/WhoDigifineFor"))
// const SectionTitle = lazy(()=>import("../../CourseComponents/SectionTitle/SectionTitle"))
// import HeroImage from '../../Container/HeroImage';
// const HeroSection = lazy(()=>import("../../Sections/HeroSection"))
// const cardData = lazy(()=>import("./data/cardData"))
// const LogoSlider = lazy(()=>import("../../Sections/LogoSlider"))
// const FieldSelector = lazy(()=>import("../../Sections/FieldSelector"))
// const Banner = lazy(()=>import("../../Sections/Banner"))
// const CardSection = lazy(()=>import("../../Sections/CardSection"))
// const CourseFAQs = lazy(()=>import("../../Sections/CourseFAQs"))



 const goals = [ 
  { text: '100% guaranteed placement' },
  { text: 'Industry expert trainers'},
  { text: 'Internationally recognized certifications' },
  { text: 'One-of-its-kind curriculum'},
  { text: 'Unique and industry-relevant modules'},
  { text: 'Hands-on training'},
  { text: 'Global exposure'},
  { text: 'Flexible payment options' },
];

const images = [
  "/images/banner-image/home/HI.webp",
  "/images/banner-image/home/HI2.webp",
  "/images/banner-image/home/HI3.webp"
];


function Home() {


  const [faqs, setFaqs] = useState([]);
  const [WhoDigifine, setWhoDigifien] = useState([]);

  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }; 

useEffect(()=>{
  import("./data/faqs").then((m) => setFaqs(m.default));
  import("./data/WhoDigifine").then((n)=>setWhoDigifien(n.default))
},[])


const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex(prev => (prev + 1) % images.length);
  //   }, 3000); // change slide every 3 sec

  //   return () => clearInterval(interval);
  // }, []);


  useEffect(() => {
  const timer = setTimeout(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, 2000);

  return () => clearTimeout(timer);
}, []);


  const handleSearch = useCallback((query) => {
    console.log('Searching for:', query);
  }, []);
  return (
    <>
    
  <Helmet>
    <link rel="icon" type="image/svg+xml" href="/images/logo/fevicon/SVG/feviconblue.svg" />
        <title>Top Digital Marketing Courses With Placement in Mumbai | Digifine
        </title>
        <meta name='description' content='Digifine Digital Education Institute in Mumbai provides certified graphic design courses, data science courses & digital marketing courses with guaranteed placement.'/>
        <link rel="canonical" href="https://digifine.in/"></link>
      </Helmet>
      {/* <FieldSelector /> */}
      {/* <HeroSection
        title="Master tomorrow's skills today."
        subtitle="Excel with India’s top upskilling platform."
        searchPlaceholder="Tell us what you're looking to learn"
        goals={goals}
        learnerCount="1,809,832"
        imageSrc="https://d2o2utebsixu4k.cloudfront.net/1sr%20persona-d3d4f120e8b2439a99ec96449bbdb5be.webp"
        imageAlt="Persona 1"
      /> */}
      {/* <Link to="/admin" className="w-max">
      <button
          onClick={(e) => { if (onClick) onClick(e); }}
          className="flex items-center px-9 py-3 text-white group-hover:text-custom-btn font-semibold rounded-full group-hover:bg-white transition duration-300 bg-custom-btn outline outline-2 outline-offset-4 outline-custom-btn group-hover:outline-custom-bg-div hover:text-custom-btn-hover hover:bg-white"
        >
          Admin Page
 {/* The icon next to the text */}
        {/*</button>
        </Link> */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-10 my-6 md:my-12 max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Side - Content */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            
            {/* Heading */}


              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
              Learn today, Grow tomorrow, with Digifine.
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
              Redefining Digital Space, One Course at a Time.
              </h2>


            {/* Search Bar */}
            {/* <div className="mt-4">
              <SearchBar 
                placeholder="Tell us what you're looking to learn"

                onSearch={handleSearch}
              />
            </div> */}

            {/* Goals Section */}
            <div className="flex flex-col gap-3 mt-4">
            
             <div className="flex items-center gap-3 flex-wrap">
  <p className="text-sm font-medium whitespace-nowrap">
    In Association With:
  </p>

  <div className="flex items-center gap-3">
    <img
      src="/images/gvr-logo/nsdc.webp"
      alt="NSDC Logo"
      className="h-24 object-contain"
    />
    <img
      src="/images/gvr-logo/Skill-India.webp"
      alt="Skill India Logo"
      className="h-24 object-contain"
    />
  </div>
</div>
              <div className="flex flex-wrap gap-4">
      {goals.map((goal, index) => (
        <a
          key={index}
          href={goal.link}
          className="whitespace-nowrap px-3 py-2 text-captionNormal font-medium border border-gray-300 rounded-8 hover:bg-gray-100 transition-colors"
        >
          {goal.text}
        </a>
      ))}
    </div>
            </div>

            {/* Community Stats 
            <div className="mt-6 md:mt-4">
              {/* <CommunityStats learnerCount="1,809,832" /> 
              <div className="flex items-center text-captionNormal text-greyscale-1">
      Join the community of &nbsp;
      <span className="text-primary-main font-medium">1,809,832</span>
      &nbsp; learners.
    </div>
            </div> */}
          </div>

          {/* Right Side Image */}
          <div className="justify-center">
            {/* <HeroImage
              imageSrc='https://d2o2utebsixu4k.cloudfront.net/1sr%20persona-d3d4f120e8b2439a99ec96449bbdb5be.webp'
              altText='heroimage'
              // loading="lazy"
            /> */}

            <div className="m-4 md:w-96 xs:w-full md:h-full md:rounded-2xl relative drop-shadow-[0_25px_35px_rgba(0,0,0,0.30)] xs:px-4 md:px-0 rounded-lg">
                  {/* <div className="relative">
                    <div className="md:pt-8 xs:pt-7 xs:pb-5 xs:px-2">
                      <img
                        src="https://d2o2utebsixu4k.cloudfront.net/1sr%20persona-d3d4f120e8b2439a99ec96449bbdb5be.webp"
                        alt='hero_image'
                        className="rounded-lg mx-auto xs:rounded-xl md:rounded-lg xs:border-4 xs:border-white xs:shadow-lg"
                        // loading="lazy"
                        style={{
                          width: '95%',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div> */}

<div className="relative overflow-hidden w-full flex justify-center rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out rounded-lg"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <div className="relative before:absolute before:inset-0 before:bg-gradient-to-t 
                before:from-black/20 before:to-transparent before:z-10 rounded-lg">
              <img
                src={img}
                alt="slider_image"
                 loading="eager"
  fetchPriority="high"
                className="rounded-lg mx-auto xs:rounded-xl md:rounded-lg xs:border-4 xs:border-white xs:shadow-lg"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

                </div>
          </div>
        </div>
      </section>


<Suspense fallback = {<div>Loading ......</div>}>

            <SectionTitle sectionTitle='Why Digifine' classs="my-8"/>


          <MyComponent/>

</Suspense>
<Suspense fallback = {<div>Loading ......</div>}>

            <SectionTitle sectionTitle='Get Placed with Top Brands'/>
          <LogoSliding/>

          <div ref={coursesRef}>
          <BoxCardSection/>
          </div>

            
          <Courses />
</Suspense>
<Suspense fallback = {<div>Loading ......</div>}>

          <OurVision/>


            <SectionTitle sectionTitle='Why Choose Digifine'/>
          <WhyChoose cardData={cardData} /> 

            <SectionTitle sectionTitle='What does Digifine offer?'/>
            <WhatDoes onViewCourses={scrollToCourses}/>
</Suspense>
          {/* <div className='bg-custom-btn-hover md:p-6 py-4'>
          <Suspense>
            <SectionTitle sectionTitle='Who are the Digifine courses for?' classstyle={"text-white text-[1.1rem]"}/>
          </Suspense>
          <Suspense>
            <WhoDigifineFor WhoDigifine={WhoDigifine}/>
          </Suspense>
          </div> */}
<Suspense fallback = {<div>Loading ......</div>}>
          
          <FAQsSection
      sectionTitle="Frequently Asked Questions"
      faqData={faqs}
      />

     <Locations/>

     </Suspense>
    </>
  )
}

export default Home
