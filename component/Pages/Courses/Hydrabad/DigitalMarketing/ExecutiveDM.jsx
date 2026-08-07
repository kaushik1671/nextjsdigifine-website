import {react,lazy,useState,useEffect} from 'react'

import { Helmet } from 'react-helmet-async';
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

function ExecutiveDm() {


    
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
    import("./data/ExecutiveDm/testimonials").then((m) => setTestimonials(m.default));
    import("./data/ExecutiveDm/steps").then((m) => setSteps(m.default));
    import("./data/ExecutiveDm/faqs").then((m) => setFaqs(m.default));
    import("./data/ExecutiveDm/customcontent").then((m)=> setcustomcontent(m.default));
    import("./data/ExecutiveDm/customDigifineFeatures").then((m)=>setcustomDigifineFeatures(m.default))
    import("./data/ExecutiveDm/customOtherCoursesFeatures").then((m)=>setcustomOtherCoursesFeatures(m.default))
    import("./data/ExecutiveDm/customCertificates").then((m)=> setcustomCertificates(m.default))
    import("./data/ExecutiveDm/customTabs").then((m)=>setcustomTabs(m.default))
    import("./data/ExecutiveDm/customTools").then((m)=>setcustomTools(m.default))
    // import("./data/MBA/customCertificates").then((module) => {
    //   setcustomCertificates(module.default);
    // });

  }, []);



    return (
      <>
      <Helmet>
        <title>The #1 Digital Marketing Course | 100% Placement
        </title>
        <meta name='discription' content=" Your career transformation is guaranteed. We are the top-ranked course with a verifiable 100% Job Guarantee. Get certified, get hired, and launch your future with our industry-leading program."/>
      </Helmet>
        <main className="relative"> {/* Add positioning context */}
          <div className="mb-spacing4 my-4"> {/* Only affects breadcrumb */}
            <Breadcrumb
              items={[
                { name: 'Home', url: '/' },
                { name: 'Courses', url: '' },
                { name: 'Executive Digital Marketing', url: '/courses/digitalmarketing/EDM' }
              ]}
            />
          </div>
          <CourseCard
            title="Advance Executive Digital Marketing"
            highlightText="Classes in Andheri, Mumbai"
            description="Break into the industry with expert-led Digital Marketing Classes in Andheri, Mumbai! Learn from highly experienced trainers while acquiring industry-relevant skills from a hands-on approach to become an expert now!"
            emi="Placements"
            startDate="Industry Experts"
            duration="Curriculum"
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/dm/aedm.webp"
//   universityName="O.P.Jindal Global University"
/>

<ProgramOverview
  titlePart1 = "Overview of Advance Executive Digital Marketing "
  titleHighlight="Course for Beginners (with Learn More…)"
  paragraphs={[
    "India’s first MBA in Digital Marketing with an Industry Residency Program"
  ]}
  highlights={[
    {
      title: "Learn",
      content: "Learn at the topmost Digital Marketing Classes in Andheri, Mumbai and step into the industry with the right and relevant skillset! Digifine Academy offers a range of different courses that are suited for individuals with unique learning goals. For instance, their Advance Executive Digital Marketing Course for Beginners is the most sought-after program by people who want to spend 4 to 5 months learning the nitty gritty of the industry and start their own careers or businesses, or simply upskill soon. "
    },
    {
      title: "Trainers",
      content: "The trainers at Digifine are extremely experienced and focus on providing practical skills to students by making them work on various assignments, live projects and real-world case studies throughout their Digital Marketing Classes in Andheri, Mumbai. Not only is Digfiine’s curriculum exhaustive, but learners also get opportunities to work with top industry-relevant tools, techniques and technologies. This Advance Executive Digital Marketing Course for Beginners is perfect for those looking to master subjects like performance marketing, social media marketing & optimization, Influencer Marketing, Remarketing, Website Development, E-commerce, etc.!"
    },
    // ... other highlights
  ]}
/>
<ProgramIntroduction
title="Advance Executive Digital Marketing "
subtitlePart1="Advance Executive Digital Marketing "
subtitleHighlight="Classes in Andheri, Mumbai"
  stats={[
    { value: "35+", label: "Industry tools" },
    { value: "50+", label: "Live Projects" },
    { value: "300+", label: "Hours training" }
  ]}
  features={[
    "1.  India’s only all-inclusive Digital Marketing Course for Beginners",
    "2.  Get globally recognized Professional certifications after course completion",
    "3.  Learn from trainers with years of industry expertise",
    "4.  Get access to the most advanced digital marketing modules",
    "5.  Work on live projects, interactive assignments and real-world case studies",
    "6.  Get theoretical and practical knowledge with thorough hands-on training",

  ]}
  imageSrc="/images/banner-image/lpa.webp"
/>
<MyComponent title="Why Digifine for Advance Executive Digital Marketing Classes in Andheri, Mumbai?"/>
<DownloadButton/>
<CurriculumSection 
title="Syllabus of Digifine Advance Executive Digital Course for Beginners" 
subtitlePart1="Syllabus of Digifine Advance Executive "
subtitleHighlight="Digital Course for Beginners" 
tabTitlePattern={(index) => ["Digital Marketing", "Google Ads", "Social Media Marketing","Email Marketing","Online Reputation Management","Search Engine Optimization","Google Analytics","Contetn Marketing/Ad Scripting","Whatsapp Marketing","Landing Page Technique","Influencer Marketing","Mobile Marketing","Word Press","HTML & CSS","Programmtic Media Buying","Strategic Management","Brand Management","E-Commerce Management","OTT Ads","BARC","Luxury Brand Management"][index]}
curriculumContent={customContent} />  
<ComparePrograms
title="How our Course Compares"
subtitlePart1='Why is Digifine’s Digital Marketing '
subtitleHighlight='Course for Beginners the Best?'
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
Certifications are incredibly crucial in marking the completion of your Digital Marketing Classes in Andheri, Mumbai as well as in adding relevant skills onto your resume. They act as a testament to your acquired knowledge and experience. This is why Digfiine provides you with several Google and Professional certifications by the end of their Digital Marketing Course for Beginners!
        "
        certificates={customCertificates}
      />
      <ProgramOverview
  titlePart1 = "Overview of Advance Executive Digital Marketing "
  titleHighlight="Course for Beginners (with Learn More…)"
  paragraphs={[
    "India’s first MBA in Digital Marketing with an Industry Residency Program"
  ]}
  highlights={[
    {
      title: "Learn",
      content: "Learn at the topmost Digital Marketing Classes in Andheri, Mumbai and step into the industry with the right and relevant skillset! Digifine Academy offers a range of different courses that are suited for individuals with unique learning goals. For instance, their Advance Executive Digital Marketing Course for Beginners is the most sought-after program by people who want to spend 4 to 5 months learning the nitty gritty of the industry and start their own careers or businesses, or simply upskill soon. "
    },
    {
      title: "Trainers",
      content: "The trainers at Digifine are extremely experienced and focus on providing practical skills to students by making them work on various assignments, live projects and real-world case studies throughout their Digital Marketing Classes in Andheri, Mumbai. Not only is Digfiine’s curriculum exhaustive, but learners also get opportunities to work with top industry-relevant tools, techniques and technologies. This Advance Executive Digital Marketing Course for Beginners is perfect for those looking to master subjects like performance marketing, social media marketing & optimization, Influencer Marketing, Remarketing, Website Development, E-commerce, etc.!"
    },
    // ... other highlights
  ]}
/>
<HandsOnDataProgram
        title="Custom Hands-on Program"
        subtitlePart1="Master 35+ Top Industry Tools "
        subtitleHighlight="and Cutting-Edge Technologies!"
        tools={customTools}
        imageSrc="/images/toolslogo/tools.webp"
        imageAlt="Custom Tools Logo Collage"
      />
      <TabSection
      title="Why Choose Digifine for Advance Executive Digital Marketing Classes in Andheri, Mumbai?"
      description="Digifine Academy’s School of Marketing is a highly trusted institute providing Digital Marketing Classes in Andheri, Mumbai of differing durations and curriculums. Their Advance Executive Digital Marketing Course for Beginners is especially popular for learners who want to get access to exhaustive training that can help them achieve their individual goals by utilizing the power of digital marketing. This 5-months program comes with 100% placement assistance and professional certifications too!"
      tabs={customTabs}
      />
      <StudentsPlacedAt headlinepara='Advance Executive Digital Marketing Classes in Andheri, Mumbai (& online)' />
      <YtVideo/>
      <ProjectsSection />
      <OPJAlumniTestimonials 
      title="What Our Students"
      bluetitle="Have To Say"
      testimonial={testimonials}
      paragraph="From training to building impressive careers: hear about Digifine’s Advance Executive Digital Marketing Classes in Andheri, Mumbai from the alumni! Read about their experiences, journey and success stories here" />
      {/* <CardSection cardData={cards} /> */}
      <VerticalTimeline steps={steps} />
      <DownloadButton/>
      <FAQsSection
      sectionTitle="Frequently Asked Questions"
      faqData={faqs}
      />
        </main>
      </>
      
    )
  }

export default ExecutiveDm