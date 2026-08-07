"use client";

import React,{lazy , Suspense} from 'react';
import { useState , useEffect } from 'react';

import {
  FaHandHoldingHeart,
  FaGlobe,
  FaUsers,
  FaCertificate,
  FaBriefcase
} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
const WhyChooseCard = lazy(()=>import('./AboutCmpnt/WhyChooseCard'))
const CareerForm = lazy(()=>import('../../Container/CareerForm'))
const AboutUsTimeline = lazy(()=>import('./AboutCmpnt/AboutUsTimeline'))
const MeetOurExpert = lazy(()=>import('./AboutCmpnt/MeetOurExpert'))
const LearnSupport = lazy(()=>import('./AboutCmpnt/LearnSupport'))
const Timeline = lazy(()=>import("./AboutCmpnt/Timeline"))

const About = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: 'Mumbai', course: 'Digital Marketing' });

  const cardData = [
    {
      img:"/images/Icons/whyicons/modul.webp",
      hoverImg:'images/Icons/whyicons/moduleh.webp',
      iconClass: "group-hover:rotate-180",
      icon : <FaBriefcase/>,
      title: "100% Placement Guarantee",
      content: "Get exciting jobs at the top digital agencies across the country."
    },
    {
      icon: <FaHandHoldingHeart/>,
      title: "Post-course Support",
      content: "Digifine is here to help you even after you have graduated from the institute. Get the best assistance and help without hesitation from a friendly and encouraging team at any time."
    },
       
    {
      icon: <FaCertificate/>,
      title: "Highly Experienced In-house & Visiting Faculty",
      content: "Let industry experts with years of expertise in the digital field guide your learning process."
    },
    {
      icon: <FaGlobe/>,
      title: "Placement Support",
      content: "Get assistance with portfolio-building, resume-building & mock interviews."
    },
    {
      icon: <FaHandHoldingHeart/>,
      title: "Practical Training",
      content: "Learn through a 20% theoretical and 80% practical approach. Gain industry exposure with live projects and hands-on training."
    },
    
    {
      icon: <FaUsers/>,
      title: "One-of-its-kind courses",
      content: "with curriculums designed by industry experts and comprising unique modules"
    },
    {
      icon: <FaCertificate/>,
      iconClass: "group-hover:scale-110", // scale on hover
      title: "Professional & International Certifications",
      content: "from IBMI Institute in Berlin."
    },
   

    
    {
      icon: <FaBriefcase/>,
      title: "Global Recognition",
      content: "Find industry-recognized courses meeting international standards."
    },
    {
      icon: <FaHandHoldingHeart/>,
      title: "India’s 1st Institute to Launch the Most Unique Programs",
      content: "like the integrated MBA in Digital Marketing and many more"
    }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
 "/images/aboutus/banner_image/class1.webp",
 "/images/aboutus/banner_image/class2.webp",
 "/images/aboutus/banner_image/class3.webp",
 "/images/aboutus/banner_image/class4.webp",
 "/images/aboutus/banner_image/class5.webp",
];

   // Change image every 3 seconds
   useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const [isVisible, setIsVisible] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);
    const [formBtnText, setFormBtnText] = useState('Apply Now'); 
  
    useEffect(() => {
      const timeout = setTimeout(() => setIsVisible(true), 100); // small delay for smoother entrance
      return () => clearTimeout(timeout);
    }, []);
  
    const openFormModal = (btnText) => {
    setFormBtnText(btnText); // set dynamic text
    setShowFormModal(true);
  };
    const closeFormModal = () => setShowFormModal(false);

  return (
    <div className="text-gray-800">

      

<section className="max-w-10xl mx-auto relative bg-gradient-to-br py-16 md:py-24 px-4 md:px-10 overflow-hidden">

    {/* Background Image */}
<div className="absolute inset-0 z-0">
    <img
      src="https://img.freepik.com/free-vector/abstract-watercolor-colorful-texture_1035-19481.webp"
      alt="Background"
      style={{filter: 'blur(3px)'}}
      className="w-full h-full object-cover rounded-xl opacity-10 select-none pointer-events-none"
      loading="lazy"
      draggable={false}
    />
  </div>

  {/* Background Gradients */}
  <div className="absolute w-96 h-96 opacity-30 rounded-full -left-20 top-10 blur-3xl z-0"></div>
  <div className="absolute w-72 h-72 bg-blue-300 opacity-20 rounded-full right-10 bottom-0 blur-2xl z-0"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Text Content */}
    <div className="text-center md:text-left max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
        About <span className="text-blue-500">Digifine</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6 mx-auto md:mx-0">
      Digifine Academy of Digital Education (D.A.D.E.) is a globally recognized digital marketing institution with over 7+ years of expertise in the training and placements of thousands of students. We are a team of determined individuals who excel in providing the right guidance to aspiring digital professionals and helping them build exceptional careers in the industry. Our vision is to redefine the digital space with updated technologies and top-notch training.
      </p>
      <div className="flex justify-center md:justify-start">
        <button onClick={() => openFormModal('Apply Now')}  
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md">
          Know More
        </button>
      </div>
    </div>
 
{/* click to see form  */}


{showFormModal && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/30 backdrop-blur-sm ">
  {/* Modal Card */}
  <div
    className={`
      relative bg-white rounded-[20px] shadow-xl
      w-full max-w-3xl
      p-6
      overflow-y-auto
      max-h-[90vh]
    `}
  >
    {/* Close button */}
    <button
      onClick={closeFormModal}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {/* CareerForm with fixed width inside modal */}
    <div className="w-full md:w-[600px] mx-auto">
      <Suspense fallback={<div>loading...</div>}>
      <CareerForm courseTitle='Get a Call to Know More About Us' btntext='Know More'/>
    </Suspense>
    </div>
  </div>
</div>
)}





<div className="relative w-full max-w-md md:max-w-lg h-96 rounded-xl shadow-lg overflow-visible mx-auto">
  {images.map((src, index) => {
    // Calculate relative position from currentImage with wrap-around
    let relPos = index - currentImage;
    if (relPos < 0) relPos += images.length;

    // Only show first 3 positions, hide others
    if (relPos > 2) return null;

    // Styles for positions 0 (front), 1 (second), 2 (third)
    const stylesByPos = [
      {
        opacity: 1,
        zIndex: 3,
        transform: "scale(1.05) translate(0, 0) rotate(0deg)",
        boxShadow: "0 25px 40px rgba(0,0,0,0.35)",
      },
      {
        opacity: 0.6,
        zIndex: 2,
        transform: "scale(0.9) translate(40px, 40px) rotate(-5deg)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      },
      {
        opacity: 0.4,
        zIndex: 1,
        transform: "scale(0.8) translate(70px, 70px) rotate(-10deg)",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      },
    ];

    const style = stylesByPos[relPos];

    return (
      <div
        key={index}
        className="absolute w-full h-full rounded-xl overflow-hidden 
  transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
  will-change-transform will-change-opacity will-change-shadow"
        style={style}
      >
      <img
          src={src}
          loading="lazy"
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover rounded-xl select-none pointer-events-none"
          draggable={false}
      />
      </div>
    );
  })}
</div>


  </div>
</section>

    {/* <Suspense fallback={<div className="py-20 text-center">Loading Experts...</div>}>
        <MeetOurExpert />
      </Suspense> */}

      <Suspense fallback={<div className="py-20 text-center">Loading Timeline...</div>}>
        {/* <AboutUsTimeline /> */}
      <Timeline/>
      </Suspense>



{/* <section className="py-20 px-4 md:px-10 bg-gray-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
      Meet Our <span className="text-blue-600">Experts</span>
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden shadow-md group bg-white hover:shadow-xl transition duration-300"
        >
          {/* Expert Image */}
          {/* <div className="h-full w-full overflow-hidden">
            <img
              loading="lazy"
              src={`/images/experts/expert${i + 1}.webp`}
              alt={`Expert ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Gradient Overlay */}
        {/*   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Content */}
         {/* 
          <div className="absolute bottom-0 p-6 text-white z-10">
            <h3 className="text-xl font-semibold mb-1">Expert {i + 1}</h3>
            <p className="text-sm font-light mb-1">
              Experience: {5 + i * 3}+ years
            </p>
            <p className="text-sm leading-snug">
              Specialized in delivering industry-ready training.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
 */}

{/* <section className="bg-gray-50 py-20 px-6" id="learner-success">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
    
    {/* Left Sticky Heading Block */}
   {/* <div className="md:w-1/2 sticky top-24 self-start space-y-6 px-4">
      <h2 className="uppercase text-sm font-medium tracking-wide text-gray-500">Learner Support & Success</h2>
      <h3 className="text-4xl font-bold leading-tight text-gray-900">
        What gives us <span className="text-blue-600">an edge?</span>
      </h3>
      <p className="text-lg text-gray-600">
        Digifine empowers students with globally recognised skills and industry exposure for success in the digital economy.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition">
        Get Started with Digifine
      </button>
    </div>

    {/* Right Features Grid */}
   {/* <div className="md:w-1/2 grid sm:grid-cols-2 gap-6 px-2">
      {[
        {
          count: "1000+",
          title: "Students Placed",
          desc: "Empowering learners with top-notch placements.",
          img: "https://www.upgrad.com/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FhIRING%20partner-20429f5c04764bf698efb92d476bf677.webp&w=1920&q=75",
          wide: false,
        },
        {
          count: "50+",
          title: "Hiring Partners",
          desc: "Top brands actively recruit from Digifine.",
          img: "https://www.upgrad.com/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FrESume%20Templates-46ea4b38623b40e48ea7438a8db0f0e2.webp&w=1920&q=75",
          wide: false,
        },
        {
          count: "10+",
          title: "Global Certifications",
          desc: "Earn industry-recognized international certificates.",
          img: "https://www.upgrad.com/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FIndustry%20experts-70ed62c3b17d42f9ac829699ffa79878.webp&w=1920&q=75",
          wide: true,
        },
        {
          count: "200+",
          title: "Live Sessions",
          desc: "Interactive classes with experts to sharpen your skills.",
          img: "https://www.upgrad.com/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FinDUSTRY%20pROBLEM-f961d13a84514c2a85ed90526f2ffc07.webp&w=1920&q=75",
          wide: false,
        },
      ].map(({ count, title, desc, img, wide }, i) => (
        <div
          key={i}
          className={`relative bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between min-h-[200px] ${
            wide ? "col-span-2" : ""
          }`}
        >
          <div>
            <h4 className="text-3xl font-bold text-gray-800">{count}</h4>
            <h5 className="text-xl font-semibold mt-1 text-gray-900">{title}</h5>
            <p className="text-gray-600 text-sm mt-2">{desc}</p>
          </div>
          <div className="absolute bottom-4 right-4 w-16 h-16">
            <img src={img} alt={title} loading="lazy" className="w-full h-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}

<Suspense fallback={<div className="py-20 text-center">Loading Learner Success...</div>}>
        <LearnSupport/>
      </Suspense>
 
      {/* Teacher Experience Highlight */}
      <section className="bg-black py-16 text-center relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x800)' }}></div>
  
  <div className="relative z-10">
    {/* Heading */}
    <h2 className="text-4xl font-semibold text-white mb-4">High-Caliber Teaching Staff</h2>
    
    {/* Description */}
    <p className="text-lg text-gray-300 mb-8">Our faculty comprises professionals with 10+ years of hands-on industry experience.</p>

    {/* Instagram Button */}
    <a href="https://www.instagram.com/digifine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium text-lg rounded-full shadow-md hover:bg-pink-600 transition-all duration-300">
      {/* <i className="fab fa-instagram mr-2"></i> */} 
      <div className='flex flex-row gap-3 items-center'>
      <FaInstagram/>
      Follow us on Instagram 
    </div>
    </a>
  </div>
</section>

      {/* Placement Flow */}
      {/*
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Placement Flow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["Training", "Assessment", "Placement"].map((step, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Step {i + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>
      */}



      {/* Why Choose Digifine */}

      <Suspense fallback={<div>loading...</div>}>
      <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Why Choose <span className='text-blue-500 '>Digifine?</span></h2>
  
  {/* Main container for all the cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {cardData.map((card, index) => {
      let gridSpanClass = '';

      // Set unique grid spans for different cards
      if (index === 0) gridSpanClass = 'lg:col-span-1'; // 2 columns
      else if (index === 1) gridSpanClass = 'lg:col-span-2'; // 3 columns
      else if (index === 2) gridSpanClass = 'lg:col-span-2'; // Full width
      else if (index === 3) gridSpanClass = 'lg:col-span-1';
      else if (index === 4) gridSpanClass = 'lg:col-span-1';
      else if (index === 5) gridSpanClass = 'lg:col-span-1';
      else if (index === 8) gridSpanClass = 'lg:col-span-2';
      else gridSpanClass = 'lg:col-span-1'; // Default for other cards

      return (
        <div
          key={index}
          // className={`group relative transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] hover:bg-blue-500 hover:text-white hover:border-blue-500 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-2xl ${gridSpanClass}`}
          className={`group relative transition-transform duration-300 ease-in-out transform 
md:hover:translate-y-[-10px] md:hover:bg-blue-500 md:hover:text-white md:hover:border-blue-500 
border border-gray-200 rounded-lg p-6 shadow-md md:hover:shadow-2xl ${gridSpanClass}`}
        >
          <div className="absolute inset-0 bg-blue-500 opacity-0 md:group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
          
          <div className="z-10">
            <div className="flex justify-start items-center space-x-4 mb-4">
              <div className="bg-white p-3 rounded-full shadow-md">
              <span className={`transition-all duration-300 md:group-hover:text-blue-500 ${card.iconClass}`}>{card.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 md:group-hover:text-white">{card.title}</h3>
            </div>
            <p className="text-gray-700 md:group-hover:text-white text-sm">{card.content}</p>
          </div>
        </div>
      );
    })}
  </div>
</section>
</Suspense>


      {/* Who Are We + Form */}

      <Suspense fallback={<div>Loading....</div>}>
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">Digifine Academy was founded with one mission: to bring accessible, affordable, engaging, and highly effective higher education to the world. We believe that higher education is a basic human right, and we seek to empower our students to advance their education and careers. Since then, the growth of our team and student community has only helped us in continuing to uphold the standards of excellence and impart premium digital education.</p>
            <p> Our commitment to a two-fold training approach and efficacious student support is reflected in the learners’ competency to step into the professional realm with utmost confidence.</p>
          </div>
          
          <CareerForm courseTitle = "Enquire to learn more."/>
          {/* <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">Enquiry Form</h3>
            <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} className="w-full p-2 border rounded" />
            <select name="city" onChange={handleChange} className="w-full p-2 border rounded">
              <option>Mumbai</option>
              <option>Navi Mumbai (Vashi)</option>
              <option>Pune</option>
            </select>
            <select name="course" onChange={handleChange} className="w-full p-2 border rounded">
              <option>Digital Marketing</option>
              <option>Full Stack Development</option>
              <option>Data Analytics</option>
              <option>Data Science</option>
              <option>Graphic Design</option>
              <option>Video Editing & Animation</option>
            </select>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">Download Brochure</button>
          </form> */}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg">Got Questions? <span className="font-semibold">Connect with our expert counselor</span> and get your queries answered immediately!</p>
        </div>
      </section>
      </Suspense>

    </div>
  );
};

export default About;