import {react,lazy,useState,useEffect} from 'react'
import { AcademicCapIcon, CodeIcon, ChartBarIcon } from '@heroicons/react/solid'; // Example for heroicons
import { Helmet } from 'react-helmet-async';

const CardSection = lazy(()=>import("../../../../Sections/CardSection"))
const CompaniesCarousel = lazy(()=> import("../../../../CourseComponents/CompaniesCrousel/CompaniesCarousel"))
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
const TrainerProfile = lazy(()=>import("../../../../CourseComponents/Trainer/TrainerProfile"))
const PortfolioSection = lazy(()=>import("../../../../CourseComponents/PortfolioSection/PortfolioSection"))

function MasterinGD() {


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
    import("./data/MasterinGd/testimonials").then((m) => setTestimonials(m.default));
    import("./data/MasterinGd/steps").then((m) => setSteps(m.default));
    import("./data/MasterinGd/faqs").then((m) => setFaqs(m.default));
    import("./data/MasterinGd/customcontent").then((m)=> setcustomcontent(m.default));
    import("./data/MasterinGd/customDigifineFeatures").then((m)=>setcustomDigifineFeatures(m.default))
    import("./data/MasterinGd/customOtherCoursesFeatures").then((m)=>setcustomOtherCoursesFeatures(m.default))
    import("./data/MasterinGd/customCertificates").then((m)=> setcustomCertificates(m.default))
    import("./data/MasterinGd/customTabs").then((m)=>setcustomTabs(m.default))
    import("./data/MasterinGd/customTools").then((m)=>setcustomTools(m.default))
    // import("./data/MBA/customCertificates").then((module) => {
    //   setcustomCertificates(module.default);
    // });
  }, []);


    return (
      <>
      <Helmet>
        <title>Master’s in Graphic Design, Mumbai | 100% Job Placement</title>
        <meta name="description" content='Your creativity deserves a strong career path. This Master’s in Graphic Design Course helps you build an impressive portfolio & secure 100% job guarantee.'/>
      </Helmet>
        <main className="relative"> {/* Add positioning context */}
          <div className="mb-spacing4 my-4"> {/* Only affects breadcrumb */}
            <Breadcrumb
              items={[
                { name: 'Home', url: '/' },
                { name: 'Courses', url: '' },
                { name: 'MBA in Digital Marketing', url: '/courses/digitalmarketing/mba' }
              ]}
            />
          </div><CourseCard
            title="MBA in Digital Marketing with"
            highlightText="100% Placement Guarantee"
            description="Become a digital marketing expert in just a few months with a prestigious industry residency program with this MBA in Digital Marketing. Learn through an immersive international visit by joining one of the best MBA in Digital Marketing Colleges in Mumbai and online!"
            emi="Placements"
            startDate="Industry Experts"
            duration="Curriculum"
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/gd/bgd3.webp"
//   universityName="O.P.Jindal Global University"
/>

<ProgramOverview
  titlePart1 = "Overview of PG in Digital Marketing Course "
  titleHighlight='Andheri, Mumbai & Vashi, Navi Mumbai'
  paragraphs={[
    "India’s first MBA in Digital Marketing with an Industry Residency Program"
  ]}
  highlights={[
    {
      title: "International",
      content: "Visit to Dubai for Luxury Brand Management"
    },
    {
      title: "Modules",
      content: "Get access to unique modules taught nowhere else in the country"
    },
    {
      title: "Top Agencies",
      content: "Get guaranteed extensions and salary hikes at top agencies"
    },
    {
      title: "Certifications",
      content: "Get over 10 globally recognized & international certifications after course completion"
    },
    {
      title: "Live Projects",
      content: "Work on live projects, interactive assignments and real-world case studies"
    },
    // ... other highlights
  ]}
/>
<ProgramIntroduction
title="MBA in Digital Marketing with 100% Placement Guarantee"
subtitlePart1="MBA in Digital Marketing with "
subtitleHighlight="100% Placement Guarantee"
  stats={[
    { value: "50+", label: "Industry tools" },
    { value: "100+", label: "Live Projects" },
    { value: "600+", label: "Hours training" }
  ]}
  features={[
    "1. 100% Assured Placements",
    "2. Premier Industry Residency Program in 6 months",
    "3. In-Hand Offer Letter & International Certification",
    "4. International Visit (Dubai) for Luxury Brand Management",
  ]}
  imageSrc="/images/banner-image/lpa.webp"
/>
<MyComponent/>
<DownloadButton/>

<CurriculumSection 
title="Syllabus of Digifine PG in Digital Marketing Course in Vashi, Navi Mumbai" 
subtitlePart1="MBA in Digital Marketing Course Syallbus For"
subtitleHighlight="Vashi, Navi Mumbai" 
tabTitlePattern={(index) => ["Digital Marketing", "Google Ads", "Social Media Marketing","Email Marketing","Online Reputation Management","Search Engine Optimization","Google Analytics","Contetn Marketing/Ad Scripting","Whatsapp Marketing","Landing Page Technique","Influencer Marketing","Mobile Marketing","Word Press","HTML & CSS","Programmtic Media Buying","Strategic Management","Brand Management","E-Commerce Management","OTT Ads","BARC","Luxury Brand Management"][index]}
curriculumContent={customContent} />  

      <ComparePrograms
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
        Earning globally recognized certifications from Google, Digifine Academy as well as an international certificate from IBM Institute in Berlin, Germany by the end of your Digital Marketing Graduate Course in Vashi, Navi Mumbai. Add tremendous value to your resume and become a high-paying professional!
        "
        certificates={customCertificates}
      />
      <ProgramOverview
  titleHighlight='PG in Digital Marketing Course in Vashi, Navi Mumbai'
  paragraphs={[
    "Acquire a number of professional Professional as well as Google certifications by the end of your Post Graduate in Digital Marketing at Digifine Academy. Not only this, but also get a chance to enhance your portfolio and resume by earning an international certification from IBM Institute in Berlin, Germany!"
  ]}
  highlights={[
    {
      title: "Certifications",
      content: "Get over 10 globally recognized & international certifications after course completion"
    },
    {
      title: "Trainers",
      content: "Learn from trainers with years of experience in the industry"
    },
    {
      title: "Modules",
      content: "Get access to unique modules taught nowhere else in the country"
    },
    {
      title: "Live Projects",
      content: "Work on live projects, interactive assignments and real-world case studies"
    },
    {
      title: "Placement Guarantee",
      content: "Get theoretical and practical knowledge with thorough hands-on training"
    },
    // ... other highlights
  ]}
/>
<HandsOnDataProgram
        title="Custom Hands-on Program"
        subtitlePart1="Master Custom"
        subtitleHighlight="Data Tools"
        tools={customTools}
        imageSrc="/images/toolslogo/tools.webp"
        imageAlt="Custom Tools Logo Collage"
      />
      <TabSection
      description="Digifine Academy’s School of Marketing is one of the most renowned MBA in Digital Marketing Colleges that includes a rigorous curriculum and training approach to make you industry-ready. The Digital Marketing Postgraduate Courses here are designed by a panel of experts from a global perspective. Not only this, but you also get hands-on experience through an international industry visit to Dubai for luxury brand management. With a unique and incredible residency program, you can secure a high-paying job at one of the topmost companies in just 6 months of your Master Certification Digital Marketing."
      tabs={customTabs}
      />
      <StudentsPlacedAt />
      <YtVideo/>
      <ProjectsSection />
      <TrainerProfile 
      title = "Meet Your Mentors"
      subtitle = "Learn From "
      subtitleHighlight="Industry Experts"
      paragraph = "Our trainers are highly skilled professionals with extensive experience in their respective fields."
      trainers = {[
        {
          id: 1,
          image: "/images/Trainers/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-webp.webp",
          name: "John Doe",
          designation: "Senior Graphic Designer",
          description: "10+ years of experience in design, branding, and UX.",
        },
        {
          id: 2,
          image: "/images/Trainers/businessman-isolated-illustration-ai-generative-free-webp.webp",
          name: "Jane Smith",
          designation: "Data Science Trainee",
          description: "Deep knowledge in Python, Machine Learning, and AI.",
        },
        {
          id: 3,
          image: "/images/Trainers/webptree-happy-corporate-business-professional-one-man-clipart-white-background-webp-image_10329231.webp",
          name: "Jane Smith",
          designation: "Data Science Trainee",
          description: "Deep knowledge in Python, Machine Learning, and AI.",
        },
        //{
        //   id: 4,
        //   image: "/images/Trainers/webptree-happy-corporate-business-professional-one-man-clipart-white-background-webp-image_10329231.webp",
        //   name: "Jane Smith",
        //   designation: "Data Science Trainee",
        //   description: "Deep knowledge in Python, Machine Learning, and AI.",
        // },
      ]}
      />
      <PortfolioSection/>
      <OPJAlumniTestimonials 
      title='What Our'
      bluetitle='Student Say'
      testimonial={testimonials}
      paragraph="Still wondering what your future would look like after graduating from one of the best MBA in Digital Marketing Colleges in Andheri, Mumbai and Vashi, Navi Mumbai? From training at Digifine, to placements and more: hear it all from our students!." />
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

export default MasterinGD