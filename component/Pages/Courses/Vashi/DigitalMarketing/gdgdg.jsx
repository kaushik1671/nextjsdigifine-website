
            redirectlink = "/course-brochures"
import react ,{lazy,useEffect,useState,Suspense} from 'react'
import { Helmet } from 'react-helmet-async'
// import { AcademicCapIcon, CodeIcon, ChartBarIcon } from '@heroicons/react/solid'; // Example for heroicons

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
const CourseVideo = lazy(()=>import("../../../../CourseComponents/CourseVideo/CourseVideo"))


function MBA() {

  const [testimonials, setTestimonials] = useState([]);
  const [steps, setSteps] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [customContent , setcustomcontent] = useState([]);
  const [customDigifineFeatures , setcustomDigifineFeatures] = useState([]);
  const [customOtherCoursesFeatures , setcustomOtherCoursesFeatures]  = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [customTools , setcustomTools] = useState([]);
  const [customTabs , setcustomTabs] = useState([]);
  const [projects , setprojects] = useState([])


  useEffect(() => {
    import("./data/MBA/testimonials").then((m) => setTestimonials(m.default));
    import("./data/MBA/steps").then((m) => setSteps(m.default));
    import("./data/MBA/faqs").then((m) => setFaqs(m.default));
    import("./data/MBA/customcontent").then((m)=> setcustomcontent(m.default));
    import("./data/MBA/customDigifineFeatures").then((m)=>setcustomDigifineFeatures(m.default))
    import("./data/MBA/customOtherCoursesFeatures").then((m)=>setcustomOtherCoursesFeatures(m.default))
    import("./data/MBA/customCertificates").then((m)=> setcustomCertificates(m.default))
    import("./data/MBA/customTabs").then((m)=>setcustomTabs(m.default))
    import("./data/MBA/customTools").then((m)=>setcustomTools(m.default))
    import("./data/MBA/project").then(m=>setprojects(m.default))
    // import("./data/MBA/customCertificates").then((module) => {
    //   setcustomCertificates(module.default);
    // });

  }, []);



    return (
      
      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <>
      <Helmet>
        <title>Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai</title>
        <meta name="description" content=" Accelerate your learning curve with an expert-led Diploma in Digital Marketing in Vashi, Navi Mumbai! Attain professional certifications while working on cutting-edge tools and immersive projects guided by highly experienced faculty now!" />
      </Helmet>
        <main className="relative"> {/* Add positioning context */}
          <div className="mb-spacing4 my-4"> {/* Only affects breadcrumb */}

            <Suspense fallback={<div>loading...</div>}>
            <Breadcrumb
              items={[
                { name: 'Home', url: '/' },
                { name: 'Courses', url: '' },
                { name: 'Graduate Digital Marketing Diploma Course', url: '/courses/digitalmarketing/mba' }
              ]}
            />
            </Suspense>
          </div>
          <Suspense fallback={<div>loading...</div>}>
          <CourseCard
            title="Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai with"
            highlightText="100% Placement Assistance"
            description="Accelerate your learning curve with an expert-led Diploma in Digital Marketing in Vashi, Navi Mumbai! Attain professional certifications while working on cutting-edge tools and immersive projects guided by highly experienced faculty now!"
            emi="Placement Assistance"
            startDate="Industry Experts"
            startDateby='Practical Training from'
            duration="Unique Modules"
            durationValue='One-of-its-kind Curriculum with'
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/dm/mba.webp"
            redirectlink = "/course-brochures"

//   universityName="O.P.Jindal Global University"
/>
</Suspense>

<Suspense fallback={<div>loading...</div>}>

          <ProgramOverview
            titlePart1 = "Overview of Digital Marketing Diploma Course in"
            titleHighlight='Vashi, Navi Mumbai (with Learn More…)'
            paragraphs={[
              "Apply for the topmost Diploma in Digital Marketing in Vashi, Navi Mumbai, to step into the industry with the right knowledge and skills. Digifine provides you with expert trainers who teach you an in-depth curriculum from a predominantly practical approach. You work on multiple assignments, interactive projects, and real-world case studies to enhance your skills throughout this Digital Marketing Diploma Course in Vashi, Navi Mumbai. And the best part about this is the multiple certifications you receive on course completion!",
              "The Diploma in Digital Marketing at Digifine Academy focuses on hands-on training and providing students with global industry exposure. Whether you are looking for networking and business opportunities or something to boost your career prospects, this comprehensive Digital Marketing Diploma Course in Vashi, Navi Mumbai, can be your perfect pick. Its intensive curriculum helps you holistically master subjects like performance marketing, social media marketing, SEO, brand management, strategic management, Website Development,E-Commerce Management, and more!"
            ]}
            highlights={[
              {
                title: "Placements Assistance:",
                content: "Digifine Academy is one of the very few institutes that provides 100% placement assistance along with its Digital Marketing Diploma Course in Vashi, Navi Mumbai, to help you jumpstart your career trajectory or business venture!"
              },
              {
                title: "Mentorship",
                content: "Get personal attention and personalized mentorship in this Diploma in Digital Marketing from a panel of industry experts who are always ready to guide you with their valuable insights."
              },
              {
                title: "Certifications",
                content: "End your journey at Digifine’s Digital Marketing Diploma Course in Vashi, Navi Mumbai, with several Google and Professional certifications now!."
              },
              {
                title: "Tools",
                content: "Your Diploma in Digital Marketing training is definitely incomplete without adequate training on top industry tools, techniques, software and technologies. Digifine therefore makes it a point to include key AI tools in your Digital Marketing Diploma Course in Vashi, Navi Mumbai"
              },
              {
                title: "Training",
                content: "Your Diploma in Digital Marketing training is definitely incomplete without adequate training on top industry tools, techniques, software and technologies. Digifine therefore makes it a point to include key AI tools in your Digital Marketing Diploma Course in Vashi, Navi Mumbai"
              },
              // ... other highlights
            ]}
          />
</Suspense>

{/* <Suspense fallback={<div>video is loading</div>}> 
  <CourseVideo/>
</Suspense> */}

<Suspense fallback={<div>loading...</div>}>
<ProgramIntroduction
title="Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai"
subtitlePart1="Graduate Digital Marketing Diploma Course in "
subtitleHighlight="Vashi, Navi Mumbai"
  stats={[
    { value: "35+", label: "Industry tools" },
    { value: "50+", label: "Live Projects" },
    { value: "300+", label: "Hours training" }
  ]}
  features={[
    "1. India’s only intermediate-level Diploma in Digital Marketing",
    "2. Get globally recognized Professional certifications after course completion",
    "3.  Learn from trainers with years of industry expertise",
    "4. Get access to the most advanced digital marketing modules",
    "5. Work on live projects, interactive assignments and real-world case studies",
    "6. Get theoretical and practical knowledge with thorough hands-on training"
  ]}
  imageSrc="/images/banner-image/lpa.webp"
/>
</Suspense>

<Suspense fallback={<div>loading...</div>}>

<MyComponent
            redirectlink = "/course-brochures"
 title='Why Digifine for Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai?' subtitlePart1='Why Digifine for' subtitleHighlight='Graduate Digital Marketing Diploma Course'/>
</Suspense>

<Suspense fallback={<div>loading...</div>}>

<DownloadButton
            redirectlink = "/course-brochures"
/>
</Suspense>


<Suspense fallback={<div>loading...</div>}>

<CurriculumSection 
            redirectlink = "/course-brochures"

title="Syllabus of Digifine Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai" 
subtitlePart1="Graduate Digital Marketing Diploma Course Syllabus For"
subtitleHighlight="Vashi, Navi Mumbai" 
tabTitlePattern={(index) => ["Digital Marketing", "Google Ads", "Social Media Marketing","Search Engine Optimization","Google Analytics","Whatsapp Marketing","Email Marketing","Influencer Marketing","Website Development",,"Word Press","HTML & CSS","E-Commerce Management","Brand Management","Strategic Management"][index]}
curriculumContent={customContent} />  
</Suspense>


<Suspense fallback={<div>loading...</div>}>

      <ComparePrograms
            redirectlink = "/course-brochures"

      title='How our Course Compares:'
      subtitlePart1='Why is Digifine’s Diploma in Digital Marketing'
      subtitleHighlight='Vashi, Navi Mumbai the Best?'
        upGradFeatures={customDigifineFeatures}
        otherCoursesFeatures={customOtherCoursesFeatures}
        button1Text="Download Syllabus"
        button2Text="Apply Now"
      />
</Suspense>


<Suspense fallback={<div>loading...</div>}>

      <CompaniesCarousel />
</Suspense>

<Suspense fallback={<div>loading...</div>}>

      <CertificateSection
        title="Certifications"
        subtitlePart1="Earn Professional"
        subtitleHighlight="Certifications"
        paragraph="
       Want to be a credible and certified digital marketer? Look no further that Digifine Academy’s Diploma in Digital Marketing that comes with several Google as well as Professional certifications! Due to the global recognition, these certificates can enhance your resume or profile to help you receive better career or business opportunities. Mark the end of your incredibly engaging Digital Marketing Diploma Course in Vashi, Navi Mumbai and make your position in the industry now!
        "
        certificates={customCertificates}
      />
</Suspense>

<Suspense fallback={<div>loading...</div>}>

      <ProgramOverview
      titlePart1='How Being A Student at '
  titleHighlight='Digifine Will Help You:'
  paragraphs={[
    "Digifine Academy is a prestigious institute that has been offering a pristine and comprehensive Digital Marketing Diploma Course in Vashi, Navi Mumbai for several years now. Being a student at such an institution can help students gain deep insights into the industry through highly experienced trainers. Their expertise as well as 80% practical and 20% theoretical approach aids students in acquiring relevant skills themselves. Work on multiple assignments, projects and case studies throughout your Diploma in Digital Marketing in Vashi, Navi Mumbai!"
  ]}
  // highlights={[
  //   {
  //     title: "Certifications",
  //     content: "Get over 10 globally recognized & international certifications after course completion"
  //   },
  //   {
  //     title: "Trainers",
  //     content: "Learn from trainers with years of experience in the industry"
  //   },
  //   {
  //     title: "Modules",
  //     content: "Get access to unique modules taught nowhere else in the country"
  //   },
  //   {
  //     title: "Live Projects",
  //     content: "Work on live projects, interactive assignments and real-world case studies"
  //   },
  //   {
  //     title: "Placement Guarantee",
  //     content: "Get theoretical and practical knowledge with thorough hands-on training"
  //   },
  //   // ... other highlights
  // ]}
/>
</Suspense>


{/* <Suspense fallback={<div>loading...</div>}>

<HandsOnDataProgram
        title="Custom Hands-on Program"
        subtitlePart1="Master Custom"
        subtitleHighlight="Data Tools"
        tools={customTools}
        imageSrc="/images/toolslogo/tools.webp"
        imageAlt="Custom Tools Logo Collage"/>
</Suspense> */}



<Suspense fallback={<div>loading...</div>}>

      <TabSection
            redirectlink = "/course-brochures"

      title="Why Choose Digifine for Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai?"
      description="Digifine Academy’s School of Marketing is a 6 years old renowned institution that has an offering of various programs taught by a panel of industry experts from a hands-on perspective. One such popular course is the Diploma in Digital Marketing in Vashi, Navi Mumbai that spans across the duration of 6 to 7 months. Besides providing placement assistance, this extensive Digital Marketing Diploma Course is designed by international standards to suit individual needs of every student! (Read more…)"
      tabs={customTabs}
/>
</Suspense>


<Suspense fallback={<div>loading...</div>}>
      <StudentsPlacedAt
            redirectlink = "/course-brochures"
       />
</Suspense>


<Suspense fallback={<div>loading...</div>}>
      <YtVideo
            redirectlink = "/course-brochures"
       headline='Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai (& online)'/>
</Suspense>

<Suspense fallback={<div>loading...</div>}>

      <ProjectsSection subtitle="Real Projects, Real Learning" projects={projects} />
</Suspense>


<Suspense fallback={<div>loading...</div>}>

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
</Suspense>


<Suspense fallback={<div>loading...</div>}>

      <OPJAlumniTestimonials 
      title='What Our'
      bluetitle='Students Have To Say:'
      testimonial={testimonials}
      paragraph="If you’re still wondering if this is the right choice for you, then why not read about the alumni yourself! Below are some real people’s real experiences and success after completing Digifine’s Graduate Digital Marketing Diploma Course in Vashi, Navi Mumbai! !" />

</Suspense>

<Suspense fallback={<div>loading...</div>}>

      {/* <CardSection cardData={cards} /> */}
      <VerticalTimeline steps={steps} />
</Suspense>

<Suspense fallback={<div>loading...</div>}>
      <DownloadButton
            redirectlink = "/course-brochures"
      />
</Suspense>

<Suspense fallback={<div>loading...</div>}>

      <FAQsSection
      sectionTitle="Frequently Asked Questions"
      faqData={faqs}
      />
</Suspense>
        </main>
      </>
</Suspense>
      
    )
  }

export default MBA;