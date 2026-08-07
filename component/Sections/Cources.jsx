import React, { Suspense, useState , useEffect} from 'react';
import DownloadBtn from '../Container/DownloadBtn';
import CheckBadgeIcon from '../CourseComponents/Icons/CheckBadgeIcon';


const CourseCard = ({ imageSrc, hoverImageSrc, courses = [] , title , courselink}) => {
  const [isHovered, setIsHovered] = useState(false);  // State should be inside the component
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mediaQuery.matches);

    const handler = (e) => setCanHover(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Hover style for the card
  const hoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // transparent white
    backgroundImage: 'linear-gradient(45deg, #000000 40%, #429AFF 100%)',
  };

  const defaultStyle = {}; // Default style can be an empty object or defined with other styles if needed

  // Text color change on hover
  const textHoverStyle = isHovered ? { color: 'white' } : {};

  return (
    <div
      className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden py-12 px-4 transition-transform transform md:hover:scale-105 border border-[#e4e3e7] flex flex-col justify-between"
      style={isHovered ? { ...defaultStyle, ...hoverStyle } : {}}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => canHover && setIsHovered(true)}
      onMouseLeave={() => canHover && setIsHovered(false)}
    >
      {/* Image at the top */}
      <img
        src={isHovered ? hoverImageSrc : imageSrc}
        alt="Course Image"
        className="w-[70%] rounded-[20px] object-cover mx-auto"
        loading="lazy"
      />
      <div className="text-center" style={textHoverStyle}>
        <h3 className="text-lg font-medium my-6">{title}</h3>
      </div>

      {/* Box with outline color and border-radius */}
      <div className="p-6 border-2 border-[#CFBFFD] rounded-lg mt-4">
        <ul className="space-y-3">
          {courses.length > 0 ? (
            courses.map((course, index) => (

              <li key={index} className="flex items-center text-lg font-regular text-gray-700" style={textHoverStyle}>
  <span className="flex-shrink-0 w-6 h-6 mr-2">
    <CheckBadgeIcon className="w-full h-full text-blue-500" />
  </span>
  <span>{course}</span>
</li>

            ))
          ) : (
            <li className="text-center text-gray-500">No courses available</li>
          )}
        </ul>
      </div>

      {/* Button */}
      <div className="mt-8 px-6 flex justify-center">
        <DownloadBtn buttonText="Know More" link={courselink}/>
      </div>
    </div>
  );
};

const Courses = () => {
  const courseData = [
    {
      imageSrc: './images/course-image/ccmbad.webp', // Ensure image paths are correct
      hoverImageSrc: './images/course-image/ccmba.webp',
      title:'MBA Level Marketing & Data Analytics Program with AI',
      courses: ["India's First MBA Program in Digital Marketing, Data Analytics & AI – With Guaranteed Placement", " 10+ Certification", "Unique Modules", " International Visit to Dubai","  IBMI certification from Berlin, Germany.",],
      courselink : "/ai-powered-digital-marketing-course-in-mumbai",
    },
    {
      imageSrc: './images/course-image/ccmld.webp', // Ensure image paths are correct
      hoverImageSrc: './images/course-image/ccml.webp',
      title:'Multimedia and Animation Course',
      courses: ['100% Placement Guarantee', ' 10+ industry software programs', 'Internship letter upon course completion', '10+ Certifications', 'Live projects and assignments'],
      courselink : "multimedia-course-animation-classes/",
    },
    {
     
      imageSrc: './images/course-image/ccdsmld.webp', // Ensure image paths are correct
      hoverImageSrc: './images/course-image/ccdsml.webp',
      title:'Postgraduate certificate program in Data Science, Machine Learning and Ai ',
      courses: [' Guaranteed Placement Upon Course Completion', ' 360+ hours of classroom training', ' ISO & NSDC Certified Program', ' Overseas mentorship', ' 10+ cutting-edge tools'],
      courselink : "data-science-machine-learning-ai-course/",
    },
  ];

  return (
    <Suspense fallback={<div>loading...</div>}>

    <div className="bg-[#E8F3FF] flex justify-center items-center max-w-6xl mx-auto my-8 rounded-[20px] border border-[#CFBFFD]">
      {/* Grid container for course cards with centered content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8 bg-custom-bg-div rounded-[20px]">
        {courseData.map((course, index) => (
          <CourseCard key={index} imageSrc={course.imageSrc} hoverImageSrc={course.hoverImageSrc} courses={course.courses} title={course.title} courselink={course.courselink}/>
        ))}

      </div>
    </div>
    </Suspense>
  );
};

export default Courses;