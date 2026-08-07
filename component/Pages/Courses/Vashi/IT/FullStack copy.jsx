import {react,lazy,useState,useEffect} from 'react'

import { AcademicCapIcon, CodeIcon, ChartBarIcon } from '@heroicons/react/solid'; // Example for heroicons

const CompaniesCarousel = lazy(()=>import("../../../../CourseComponents/CompaniesCrousel/CompaniesCarousel"))
const DownloadButton = lazy(()=>import("../../../../Container/DownloadButton"))
const ProgramOverview =lazy(()=>import("../../../../CourseComponents/ProgramOverview/ProgramOverview"))
const MyComponent = lazy(()=>import("../../../../Container/MyComponent"))
const ProgramIntroduction = lazy(()=> import("../../../../CourseComponents/ProgramIntroduction/ProgramIntroduction"))
const CourseCard = lazy(()=>import("../../../../CourseComponents/CourseCard/CourseCard"))
const Breadcrumb = lazy(()=> import("../../../../CourseComponents/BreadCrumb/Breadcrumb"))
const ComparePrograms = lazy(()=> import("../../../../CourseComponents/CompareProgram/ComparePrograms"));
const CertificateSection = lazy(()=> import("../../../../CourseComponents/CertificateSection/CertificateSection"));
const StudentsPlacedAt = lazy(() => import("../../../../CourseComponents/StudentPlacedAt/StudentsPlacedAt"));
const HandsOnDataProgram = lazy(() => import("../../../../CourseComponents/HandsOnDataProgram/HandsOnDataProgram"));
const FAQsSection = lazy(() => import("../../../../CourseComponents/FAQsSection/FAQsSection"));
const ProjectsSection = lazy(()=>import("../../../../CourseComponents/ProjectSection/ProjectsSection"));
const YtVideo =lazy(()=>import("../../../../Container/YtVIdeo"));
const CurriculumSection = lazy(()=>import("../../../../CourseComponents/CurriculumSection/CurriculumSection"))
const TabSection = lazy(()=>import("../../../../CourseComponents/DigitalMarketingTabSection/TabSection"))
const OPJAlumniTestimonials = lazy(()=>import("../../../../CourseComponents/OPJAluminiTestimonials/OPJAluminiTestimonials"))
const VerticalTimeline = lazy(()=>import("../../../../CourseComponents/VerticleTimeLine/VerticleTimeLine"))
const Locations = lazy(()=>import("../../../../CourseComponents/Location/Locations"))
const BoxCardSection = lazy(()=>(import("../../../../Sections/BoxCardSection")))

function MasterFSDPython() {

  const [testimonials, setTestimonials] = useState([]);
  const [steps, setSteps] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [customContent , setcustomcontent] = useState([]);
  const [customDigifineFeatures , setcustomDigifineFeatures] = useState([]);
  const [customOtherCoursesFeatures , setcustomOtherCoursesFeatures]  = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [customTools , setcustomTools] = useState([]);
  const [customTabs , setcustomTabs] = useState([])

  useEffect(() => {
    import("./data/MasterFSD/testimonials").then((m) => setTestimonials(m.default));
    import("./data/MasterFSD/steps").then((m) => setSteps(m.default));
    import("./data/MasterFSD/faqs").then((m) => setFaqs(m.default));
    import("./data/MasterFSD/customcontent").then((m)=> setcustomcontent(m.default));
    import("./data/MasterFSD/customDigifineFeatures").then((m)=>setcustomDigifineFeatures(m.default))
    import("./data/MasterFSD/customOtherCoursesFeatures").then((m)=>setcustomOtherCoursesFeatures(m.default))
    import("./data/MasterFSD/customCertificates").then((m)=> setcustomCertificates(m.default))
    import("./data/MasterFSD/customTabs").then((m)=>setcustomTabs(m.default))
    import("./data/MasterFSD/customTools").then((m)=>setcustomTools(m.default))
    // import("./data/MBA/customCertificates").then((module) => {
    //   setcustomCertificates(module.default);
    // });

  }, []);


    return (
      <>
        <main className="relative"> {/* Add positioning context */}
          <div className="mb-spacing4 my-4"> {/* Only affects breadcrumb */}
            <Breadcrumb
              items={[
                { name: 'Home', url: '/' },
                { name: 'Courses', url: '' },
                { name: 'Full Stack Developer', url: '/courses/itcourses/fullstack-developer' }
              ]}
            />
          </div>
          <CourseCard
            title="Full Stack Developer Course"
            highlightText="with Guaranteed Placement "
            description="Kickstart your career as a full stack web developer with project-based training from highly experienced industry mentors. Join this comprehensive full stack developer course in Mumbai and get guaranteed placements at the topmost companies."
            emi="Placements"
            emivalue='100% Assured'
            startDate="Internship Letter"
            startDateby='3-months'
            duration="Top Mentors"
            durationValue='Practical Training from'
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/37D0C444-9D61-4921-B9D47E7E60D2DE75_source.webp"
//   universityName="O.P.Jindal Global University"
/>
<ProgramOverview
  titlePart1 = "Overview of Full Stack Web"
  titleHighlight='Development Course'
  paragraphs={[
    "Learn at India’s first Full Stack Developer Institute that equips you with a holistic understanding of front-end and back-end web development through hands-on training and live projects. At Digifine Academy, top industry experts mentor you on key full stack concepts and help you build the perfect profile to secure high-paying jobs at renowned companies. "
  ]}
  highlights={[
    {
      title: "Digifine",
      content: "With Digifine full stack developer course in Mumbai, master programming languages like Python, JavaScript and HTML CSS while gaining expertise on working with databases and frameworks like MySQL and Django. The most unique part about this full stack developer training program is learning Next JS, an open-source web development framework that no other full stack developer institute in India covers! "
    },
    // ... other highlights
  ]}
/>
<ProgramIntroduction
title="MBA in Digital Marketing with 100% Placement Guarantee"
subtitlePart1="MBA in Digital Marketing with "
subtitleHighlight="100% Placement Guarantee"
  stats={[
    { value: "9+", label: "Industry Tool" },
    { value: "9+", label: "Live Project" },
    { value: "360+", label: "Hours Training" }
  ]}
  features={[
    "1. India’s first java full stack developer course with guaranteed placement",
    "2. Get a 3-months internship letter to kickstart your career",
    "3. Earn Professional certifications for front-end, back-end and full stack development",
    "4. Get access to overseas / international mentorship and training",
    "4. Work on countless live projects, assignments and case studies",
    "4. Get hands-on full stack developer training from skilled industry experts",

  ]}
  imageSrc="/images/banner-image/lpa.webp"
/>
<MyComponent
title='Why Digifine for a Full Stack Developer Course with Guaranteed Placement?'/>
<DownloadButton/>
<CurriculumSection 
title="Syllabus" 
subtitlePart1="Digifine Full Stack Web"
subtitleHighlight="Development Course Syllabus" 
tabTitlePattern={(index) => ["HTML5",
"CSS3",
"JavaScript",
"Advance JavaScript",
"Bootstrap 5",
"ReactJS",
"NextJS",
"Angular",
"Python", "Introduction to OOPS",
"Object Oriented Programming",
"Polymorphism",
"Node JS",
"MySQL",
"MongoDB (NoSQL)",
"Django",
"Express JS",
"Web Application using Python"][index]}
curriculumContent={customContent} />  
<ComparePrograms
        subtitlePart1='Why is Digifine’s Full Stack Web'
        subtitleHighlight='Development Course the Best?'
        upGradFeatures={customDigifineFeatures}
        otherCoursesFeatures={customOtherCoursesFeatures}
        button1Text="Download Syllabus"
        button2Text="Apply Now"
      />
      <CompaniesCarousel />
      <CertificateSection
        title="Certifications"
        subtitlePart1="Earn Professional"
        subtitleHighlight="Certifications"
        paragraph="
        With Digifine’s full stack web development course, you can acquire multiple Professional certifications that will add tremendous value to your resume and help you stand out in the industry!
        "
        certificates={customCertificates}
      />
      <ProgramOverview
  titlePart1 = "Overview of Full Stack Web"
  titleHighlight='Development Course'
  paragraphs={[
    "Learn at India’s first Full Stack Developer Institute that equips you with a holistic understanding of front-end and back-end web development through hands-on training and live projects. At Digifine Academy, top industry experts mentor you on key full stack concepts and help you build the perfect profile to secure high-paying jobs at renowned companies. "
  ]}
  highlights={[
    {
      title: "Digifine",
      content: "With Digifine full stack developer course in Mumbai, master programming languages like Python, JavaScript and HTML CSS while gaining expertise on working with databases and frameworks like MySQL and Django. The most unique part about this full stack developer training program is learning Next JS, an open-source web development framework that no other full stack developer institute in India covers! "
    },
    // ... other highlights
  ]}
/>
<HandsOnDataProgram
        title="Custom Hands-on Program"
        subtitlePart1="Master 12+ Top Industry"
        subtitleHighlight="Tools and Cutting-Edge Technologies!"
        tools={customTools}
        imageSrc="/images/toolslogo/tools.webp"
        imageAlt="Custom Tools Logo Collage"
      />
      <TabSection
      title="Why Choose Digifine for Full Stack Web Development Course?"
      description="Digifine Academy’s School of Tech is a top-notch full stack developer institute that offers expert-designed courses that are up to par with international standards. Highly experienced trainers guide students through theoretical concepts and practical applications in this java full stack developer course with guaranteed placement. Get training on some of the most exclusive tools at affordable prices now!"
      tabs={customTabs}
      />
      <StudentsPlacedAt />
      <YtVideo
      headline='How Being A Student at Digifine Will Help you'
      paragraph='Secure high-paying jobs at prominent companies in India and abroad with Digifine Academy’s intensive java full stack developer course with placement guarantee. Get guidance from overseas mentors and build a successful career in this industry by being a Digifine graduate!'
      />
      <ProjectsSection />
      <OPJAlumniTestimonials 
      testimonial = {testimonials}
      title="What Our"
      bluetitle="Students Say"
      paragraph="Still wonder what your future looks like after completing the full stack developer course in Mumbai at Digifine? Training, placements and more: here it all from our students!" />
      {/* <CardSection cardData={cards} /> */}
      <VerticalTimeline steps={steps}/>
      
      <DownloadButton/>
      <FAQsSection
      sectionTitle="Frequently Asked Questions"
      faqData={faqs}
      />
      <Locations city= "navi mumbai"/>


        </main>
      </>
      
    )
  }

export default MasterFSDPython