"use client";

import { useState, useEffect } from "react"; 

import Hero from '../../CourseComponents/Placementscmp/Hero';
import PlacementCell from '../../CourseComponents/Placementscmp/PlacementCell';
import StatsBar from '../../CourseComponents/Placementscmp/StatsBar';
import CompanyMarquee from '../../CourseComponents/CompanyMarquee/CompanyMarquee';
import StudentPlacedAt from '../../CourseComponents/StudentPlacedAt/StudentPlacedAt';
import Testimonal from "../../CourseComponents/Testimonal/Testimonal";

const marqueeTopLogos = [
  "/images/company_logo/dm/1.webp",
  "/images/company_logo/dm/2.webp",
  "/images/company_logo/dm/3.webp",
  "/images/company_logo/dm/4.webp",
  "/images/company_logo/dm/5.webp",
  "/images/company_logo/dm/6.webp",
  "/images/company_logo/dm/7.webp",
  "/images/company_logo/dm/8.webp",
  "/images/company_logo/dm/9.webp",
  "/images/company_logo/dm/10.webp",
  "/images/company_logo/dm/11.webp",
  "/images/company_logo/dm/12.webp",
  "/images/company_logo/dm/13.webp",
];

const marqueeBottomLogos = [
  "/images/company_logo/it/1.jpg",
  "/images/company_logo/it/2.jpg",
  "/images/company_logo/it/3.jpg",
  "/images/company_logo/it/4.jpg",
  "/images/company_logo/it/5.jpg",
  "/images/company_logo/it/6.jpg",
  "/images/company_logo/it/7.jpg",
  "/images/company_logo/it/8.jpg",
  "/images/company_logo/it/9.jpg",
  "/images/company_logo/it/10.jpg",
  "/images/company_logo/it/11.jpg",
  "/images/company_logo/it/12.jpg",
  "/images/company_logo/it/13.jpg",
];

const mbaPlacementsData = [
  { id: 1, logo: "/images/placement/student1.webp", alt: "Santhana Pandian" },
  { id: 2, logo: "/images/placement/student2.webp", alt: "Piyush Gurav" },
  { id: 3, logo: "/images/placement/student3.webp", alt: "Ayushi Mehta" },
  { id: 4, logo: "/images/placement/student4.webp", alt: "Dhruv Narwani" },
  { id: 5, logo: "/images/placement/student5.webp", alt: "Student 5" },
  { id: 6, logo: "/images/placement/student6.webp", alt: "Student 6" },
  { id: 7, logo: "/images/placement/student7.webp", alt: "Student 7" },
  { id: 8, logo: "/images/placement/student8.webp", alt: "Student 8" },
  { id: 9, logo: "/images/placement/student9.webp", alt: "Student 9" },
];

export default function PlacementsPage() {
  // Hooks belong inside the React component function body
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    import("../../CourseComponents/Placementscmp/data/testimonal")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
  }, []);

  return (
    <main>
      <Hero />
      <StatsBar />
      <PlacementCell />
      <CompanyMarquee 
        tagline="Our Placements"
        title="Where Our "
        highlightTitle="Students Go"
        topLogos={marqueeTopLogos}
        bottomLogos={marqueeBottomLogos}
      />  
      <StudentPlacedAt 
        companiesData={mbaPlacementsData} 
        btntext="Know More" 
        redirectlink="/course-brochures" 
      />     
      <Testimonal 
        title='What Our'
        bluetitle='Students Have To Say:'
        testimonial={testimonials}
        paragraph="Still wondering what your career will look like after studying at Digifine? Whether it's Digital Marketing, Graphic Design, or IT — hear directly from our students about their journey, practical training, and placement success!" 
      />        
    </main>
  );
}