import {react,lazy} from 'react'
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

const faqs = [
  {
    tabLabel: "MBA in Digital Marketing",
    faqs: [
      {
        question: "What is the Digifine MBA in Digital Marketing?",
        answer:
          "Digifine’s Master Certification Digital Marketing is a prestigious program that spans across 1.5 years of integrated training. This includes 6 months of rigorous classroom training and then 6 months of an elite industry residency program with a competitive stipend while you’re learning on the job! The next 6 months are provided as an extension at the company with an up to 100% salary hike. This Post Graduate in Digital Marketing also comes with an international industrial visit to Dubai for luxury brand management. It is a holistic program aimed at your effective growth and career development.",
      },
      {
        question: "What is the syllabus of Digifine MBA in Digital Marketing?",
        answer:
          "The curriculum of the Postgraduate Digital Marketing program at Digifine Academy is designed by a panel of experts to suit global industry standards. Apart from covering all the basic and advanced concepts, it also includes some of the most unique topics taught nowhere else in the entire country, like Luxury Brand Management, Experiential Marketing, Television Planning (BARC), Programmatic Media Buying, OTT Advertising, Data Analytics, etc. This is one of those Digital Marketing Postgraduate Courses that is far ahead of its times and trains you on extremely relevant, top tools and cutting-edge technologies."
      },{
        question: "Is the Digifine PG in Digital Marketing online or offline?",
        answer:
          "The Postgraduate Certification in Digital Marketing from Digifine can be done in both online and offline modes. Classroom training for this is available in the form of Digital Marketing Courses in Vashi, Navi Mumbai as well as Andheri.",
      },
      {
        question: "What certifications will I get after completing the Digifine MBA in Digital Marketing?",
        answer:
          "On the completion of your Master Certification Digital Marketing, you can acquire multiple Google as well as Professional certifications along with an international certification from IBM Institute in Berlin, Germany.",
      },
      {
        question: "Is the MBA in Digital Marketing difficult?",
        answer:
          "The Digital Marketing Postgraduate Courses at Digifine Academy are neither too difficult nor very easy. More importantly, the classroom training here is guided by highly experienced teachers who take you through every concept from scratch. Further, the industry residency program with this Post Graduate in Digital Marketing further enhances your learning process by helping you apply your knowledge and skills while gaining practical exposure at the job!",
      }
    ],
  },
  {
    tabLabel: "Eligibility for MBA in Digital Marketing",
    faqs: [
      {
        question: "Who can apply for the Digifine’s MBA in Digital Marketing course?",
        answer: "To apply for Digifine’s Digital Marketing Postgraduate Courses, you just need to have a keen interest in learning about the subject!",
      },
      {
        question: "Do I need any prior degree, technical knowledge or marketing background to apply for the MBA in Digital Marketing Colleges?",
        answer: "There is no such requirement that you need to fulfill in order to be able to enroll for Digifine’s Master Certification Digital Marketing. Whether you are a student, a working professional or an experienced person with a marketing background, this Postgraduate Digital Marketing program is open for all. Digfine’s trainers are here to train you right from the ground up and help you master all the top tools, irrespective of your background!",
      }
    ],
  },
  {
    tabLabel: "Career after MBA in Digital Marketing",
    faqs: [
      {
        question: "Is digital marketing a good career option?",
        answer: "Yes, without a doubt! Digifine Academy’s Post Graduate in Digital Marketing opens up incredible career opportunities for you even before you have completed your course. You can choose from a range of rewarding roles like digital marketing executive, media planner, SEO executive, performance marketer, programmatic ads expert, and more at some of the most prominent companies!",
      },
      {
        question: "What salary can I get after completing the MBA in Digital Marketing?",
        answer: "With Digifine’s Digital Marketing Postgraduate Courses, you start earning before the completion of your course itself. The industry residency program at one of these MBA in Digital Marketing Colleges ensures that you start earning at least 1.8 LPA while learning at a top agency in the industry. The further extension period here comes with an up to 100% hike, increasing your package to 3.6 to 4 LPA in just 6 months. An even further extension at the agency provided via Digifine’s Master Certification Digital Marketing can fetch you an average package of anywhere between 4.8 to 5.5 LPA in just 1 year!",
      }
    ],
  },
  {
    tabLabel: "MBA in Digital Marketing Fees and Duration",
    faqs: [
      {
        question: "How long does it take to do the MBA in Digital Marketing?",
        answer: "It takes approximately 1.5 years to complete your Post Graduate in Digital Marketing, including 6 months of classroom training and 1 to 1.5 years of the industry residency program. Digifine Academy’s PG in Digital Marketing course is for the duration of approximately 12 months.",
      },
      {
        question: "How can I pay MBA in Digital Marketing Colleges fees?",
        answer: "Digifine is one of the most renowned MBA in Digital Marketing Colleges that offers premium some of the best Digital Marketing Postgraduate Courses at affordable fees. Here, you can choose from multiple payment options and structures, including full fee payment, a couple of in-house installments, or monthly EMIs. Digifine is a certified institute that offers value-for-money Digital Marketing Courses in Vashi, Navi Mumbai. The fees for this Postgraduate Certification in Digital Marketing can be paid entirely together, in 2 in-house installments, or in no-interest EMIs for up to 11 months.",
      }
    ],
  }
];

const cards = [
  {
    imageSrc: "/images/Icons/mentorship.webp",
    title: "1. Enroll",
    description: "Kickstart your digital marketing journey by registering for our career-focused program!",
  },
  {
    imageSrc: "/images/Icons/goal.webp",
    title: "2. Get Trained",
    description: "Acquire key digital marketing skills from highly experienced trainers through a practical training approach!",
  },
  {
    imageSrc: "/images/Icons/job-interview.webp",
    title: "3. Assessments",
    description: "Solve real-world case studies, get global industry exposure and work on challenging projects!",
  },
  {
    imageSrc: "/images/Icons/check-list.webp",
    title: "4. Mock Interview",
    description: "Become job-ready with the right confidence, knowledge and etiquette with our panel of interviewers!",
  },
  {
    imageSrc: "/images/Icons/check-list.webp",
    title: "5. Get Placed",
    description: "Secure your career with 100% Assured Placement at top digital marketing companies in India and abroad!",
  }
];

  const customContent = [
    {
      content: [
        {
          heading: "Digital Marketing",
          items: ["Introduction ", "Understanding digital marketing platforms", "Why digital marketing?", "Difference between digital marketing & traditional marketing","Concepts and theories of digital marketing"]
        }
      ]
    },
    {
      content: [
        {
          heading: "Google Ads",
          items: ["Learning Keyword Research and Media Planning", "creating Display Ads", "Remarketing campaigns", "and understanding Shopping Network.","Search Network",
          "Display Network",
          "Video Network",
          "App Network Ads",
          "Shopping Ads",
          "Remarketing/Conversion"]
        }
      ]
    },
    {
      content: [
        {
          heading: "Social Media Marketing",
          items: [
            "Understanding major Social Media channels, Social Media best practices and techniques for optimizing Social Media handles.",
            "Facebook Marketing",
            "Instagram Marketing",
            "LinkedIn Marketing",
            "Twitter Marketing",
            "Snapchat Marketing",
            "Social Media Optimization"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Email Marketing",
          items: [
            "Understanding usage of Email as a promotional tool for a business, learning to set up and use best industry tools and creating professional campaigns.",

            "Setting up Mailchimp account",
            "Generating an audience",
            "Creating mail campaigns",
            "Testing and designing",
            "Reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Online Reputation Management",
          items: [
            "Learning influence of a positive reputation on a business, how to manage a business’s reputation online and best practices for maximum consumer engagement",
            "Overview of Online Reputation Management",
            "Platforms to manage ORM",
            "Case studies",
            "Tools used",
            "Assignments"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Search Engine Optimization",
          items: [
            "Learning SEO best practices based on latest industry and technological requirements, understanding organic search and significance of search engine page rankings.",
            "How search engines work",
            "Keyword Research",
            "Search console/Webmasters",
            "On-Page SEO",
            "Off-Page SEO"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Google Analytics",
          items: [
            "Measuring and tracking advertising campaigns across Google Inventory and implementing best practices with the help of insights gained.",

            "Google Analytics Setup",
            "Google Analytics Interface",
            "Measuring campaigns",
            "Tracking campaigns",
            "Reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Content Marketing/Ad Scripting",
          items: [
            "Learning the importance of content marketing as an advertising strategy, types of content a business can create, understanding and implementing content psychology optimum practices.",

            "Understanding difference between content marketing and Ad scripting",
            "Writing psychology",
            "Layout psychology",
            "Layout writing",
            "Story telling technique"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Whatsapp Marketing",
          items: [
            "Using WhatsApp as a tool for marketing, best WhatsApp Marketing strategies, techniques for WhatsApp Marketing",
            "Importance of WhatsApp Marketing",
            "Tools required for WhatsApp Marketing",
            "Sending WhatsApp messages in bulk",
            "WhatsApp Marketing Reporting System"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Landing Page Technique",
          items: [
            "Understanding significance of Landing Pages, Landing Page creation and management, Landing Pages best practices for capturing leads.",
            "Introduction to Landing Page",
            "Do’s and Don’ts of Landing Page Creation",
            "Building a Landing Page which converts",
            "Landing Page Funnel"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Influencer Marketing",
          items: [
            "Influencer Marketing overview and best strategies to improve engagement on social media platforms and boost conversions through Influencer partnerships.",
            "How to map right influencer",
            "How to connect with influencers",
            "Brand collaboration briefing",
            "Influencer marketing campaign",
            "Influencer marketing reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Mobile Marketing",
          items: [
            "Understanding significance of Mobile Marketing, creating effective campaigns, best practices to capture maximum consumers through Mobile Ads, tracking and analyzing campaigns.",
            "Mobile Marketing ads on social media and Google Ads",
            "Tracking mobile marketing performance",
            "Mobile marketing campaign activation",
            "Mobile marketing reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Word Press",
          items: [
            "Learning to create structured and professional websites using the most used industry software, setting up and customizing websites, using plugins and effective techniques to engage and capture consumers.",
            "Understanding Domain Name and Domain Hosting",
            "WordPress Setup",
            "Theme customization",
            "Plugins",
            "WooCommerce Setup",
            "Creating Landing Pages",
            "Order Management System"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "HTML & CSS",
          items: [
            "Learning to create structured and professional websites using the most used industry software, setting up and customizing websites, using plugins and effective techniques to engage and capture consumers.",
            "Understanding Domain Name and Domain Hosting",
            "WordPress Setup",
            "Theme customization",
            "Plugins",
            "WooCommerce Setup",
            "Creating Landing Pages",
            "Order Management System"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Programmtic Media Buying",
          items: [
            "Learning influence of a positive reputation on a business, how to manage a business’s reputation online and best practices for maximum consumer engagement",
            "Overview of Online Reputation Management",
            "Platforms to manage ORM",
            "Case studies",
            "Tools used",
            "Assignments"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Strategic Management",
          items: [
            "Learning SEO best practices based on latest industry and technological requirements, understanding organic search and significance of search engine page rankings.",
            "How search engines work",
            "Keyword Research",
            "Search console/Webmasters",
            "On-Page SEO",
            "Off-Page SEO"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Brand Management",
          items: [
            "Measuring and tracking advertising campaigns across Google Inventory and implementing best practices with the help of insights gained.",

            "Google Analytics Setup",
            "Google Analytics Interface",
            "Measuring campaigns",
            "Tracking campaigns",
            "Reporting"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "E-Commerce Management",
          items: [
            "Learning HTML codes for creating and structuring websites, learning CSS, best HTML practices for Search Engine Optimization.",
            "Getting started with Visual Studio",
            "HTML Format",
            "HTML Tags",
            "CSS",
            "Linking HTML with CSS",
            "Creating a HTML website",
            "Hosting the website"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "OTT Ads",
          items: [
            "Introduction to OTT Ads",
            " How OTT Ads are Delivered",
            " How OTT Platforms Work",
            " How to Buy OTT Ads",
            " Types of Streaming Devices",
            " Process to Set-up Ads on JioHotstar"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "BARC",
          items: [
            "Introduction to BARC & TV Audience Measurement",
            "Understanding TRP & TV Ratings System",
            "BARC Data Collection & Methodology",
            "Target Audience Segmentation & Viewership Analysis",
            "Media Planning & Buying for TV Ads",
            "GRP, CPRP & Other Key Advertising Metrics",
            "Analyzing BARC Reports for Effective Ad Placement",
            "TV Ad Scheduling & Peak Time Strategies",
            "Measuring TV Ad ROI & Performance Optimization",
            "Integrating TV Ads with Digital Marketing Strategies"
          ]
        }
      ]
    },
    {
      content: [
        {
          heading: "Luxury Brand Management",
          items: [
            "Introduction to Luxury Brand Management",
            "History & Evolution of Luxury Brands",
            "Consumer Psychology & Behavior in the Luxury Market",
            "Brand Positioning & Storytelling in Luxury",
            "Luxury Marketing Strategies & Digital Presence",
            "Retail & Distribution Strategies for Luxury Brands",
            "Sustainability & Ethical Practices in Luxury",
            "Experiential Marketing & Customer Relationship Management",
            "Crisis Management & Brand Protection in the Luxury Sector",
            "Case Studies & Practical Brand Strategy Execution"
          ]
        }
      ]
    }


    // Add other trimesters
  ];


  const customDigifineFeatures = [
    "✅ 100% Placement Guarantee",
    "✅ Guaranteed extensions and salary hikes",
    "✅ In-hand Offer Letter on the 1st day of admission",
    "✅ International Visit to Dubai for Luxury Brand Management",
    "✅ Training on Unique modules like Experiential Marketing, Television Planning (BARC), Programmatic Media Buying, OTT Advertising, Data Analytics, Strategic Management, Website Development, E-Commerce & Brand Management",
    "✅ Google certifications & Professional certifications that are globally recognized for key digital marketing modules",
    "✅ Highly experienced in-house trainers",
    "✅ International Certification from IBM Institute in Berlin, Germany",
    "✅ Guest lecturers with years of industry expertise",
    "✅ Practical Training with Live Projects, Case Studies and Regular Assignments",
    "✅ Post-Course Support for students even after course completion",
    "✅ 300+hours of Intense Daily Classroom Training",

  ];

  const customOtherCoursesFeatures = [
    "❌ No placement guarantee",
    "❌ No internship guarantee, especially before course is done",
    "❌ No globally recognized certifications",
    "❌ No guest lectures from industry experts",
    "❌ No unique, relevant and upgraded syllabus with modules beyond basic digital marketing",
    "❌ Not enough assessments or hands-on training",
    "❌ No post-course support after training",
    "❌ Not enough hours of training",
    "❌ No international certification",
    "❌ No international visit",
    "❌ No in-hand Offer Letter on the 1st day of admission",
    // Add more features
  ];

  const customCertificates = [
    {
      id: 1,
      image: "/images/certificates/crf.webp",
      title: "Digifine Graduate",
      description: "Digifine Graduate certification from Digifine Academy",
    },
    {
      id: 2,
      image: "/images/certificates/DataScience.webp",
      title: "Data Science",
      description: "Data Science certification from Digifine Academy",
    },
    {
      id: 3,
      image: "/images/certificates/DigitalMarketing.webp",
      title: "Digital Marketing",
      description: "Digital Marketing certification from Digifine Academy",
    },
    {
      id: 4,
      image: "/images/certificates/DigifineGraduate.webp",
      title: "Digifine Graduate",
      description: "Digifine Graduate certification from Digifine Academy",
    },
    {
      id: 5,
      image: "/images/certificates/ecommercemanagement.webp",
      title: "E-Commerce Management",
      description: "E-Commerce Management certification from Digifine Academy",
    },
    {
      id: 6,
      image: "/images/certificates/ProgrammaticMediauBuying.webp",
      title: "Programmatic Media Buying",
      description: "Programmatic Media Buying certification from Digifine Academy",
    },
    {
      id: 7,
      image: "/images/certificates/brandmanagement.webp",
      title: "Brand Management",
      description: "Brand Management certification from Digifine Academy",
    },
    {
      id:8,
      image: "/images/certificates/WebDevelopement.webp",
      title: "Web Development",
      description: "Web Development certification from Digifine Academy",
    },
  ];

  const customTools = [
    {
      icon: <AcademicCapIcon className="text-dark-red w-6 h-6" />,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 1, Custom Tool 2",
    },
    {
      icon: <CodeIcon className="text-dark-red w-6 h-6" />,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 3, Custom Tool 4",
    },
    {
      icon: <ChartBarIcon className="text-dark-red w-6 h-6" />,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 3, Custom Tool 4",
    },
  ];

  const customTabs = [
    {
      title: "One of its kind Curriculum with Unique Modules",
      content: "The Post Graduate in Digital Marketing comprises an intensive curriculum taught over the course of daily classes for the duration of 6 months. It covers basics as well as advanced concepts of digital marketing while going further to include some of the most unique modules taught nowhere else in the entire country. The Postgraduate Digital Marketing program syllabus is further divided into the following broad sections: \n 1. Digital Marketing: Google Ads, Social Media Marketing, SEO, Google Analytics, Whatsapp Marketing, Email Marketing, Influencer Marketing, etc., \n 2. Website Development: with and without coding (WordPress & HTML CSS) \n 3. E-commerce \n 4. Brand Management & Strategic Management \n 5. Programmatic Media Buying \n 6. OTT Advertising \n 7. Data Analytics: Microsoft Excel (Advanced), Tableau, Power BI, Microsoft Clarity, Television Planning (BARC). \n 8. Experiential Marketing \n 9. Luxury Brand Management",
                
      buttons: [
                  { text: "Download Syllabus", onClick: () => {} },
                  { text: "Apply Now", onClick: () => {} }
                ]
    },
    {
      title: "International Visit",
      content: "Participate in this immersive international industry visit to Dubai included in your Post Graduate in Digital Marketing to learn luxury brand management from a practical approach.",
      buttons: [
                  { text: "Download Syllabus", onClick: () => {} },
                  { text: "Apply Now", onClick: () => {} }
                ]
    },
    {
      title: "Job Opportunities with industry residency program",
      content: "Your Postgraduate Digital Marketing program comes with incredible job opportunities through an immersive industry residency program. Here is the detailed structure for this: \n 1. 6 months classroom training \n 2. 6 months paid internship \n 3. 6 months full-time job extension (with up to 100% salary hike) \n 4. 6 months further job extension (with up to 60% salary hike)",

      buttons: [
                  { text: "Download Syllabus", onClick: () => {} },
                  { text: "Apply Now", onClick: () => {} }
                ]
    },
    {
      title: "Expert Faculty",
      content: "Digifine is one of the best MBA in Digital Marketing Colleges that has a panel of extremely experienced in-house trainers with years of expertise in the marketing as well as education industry. Apart from their highly informative sessions, you also get access to guest lectures from industry experts who have specialized in niche segments of digital marketing. With their expertise, they can give you deep insights and help you learn from your mistakes throughout your Master Certification Digital Marketing.",
      buttons: [
                  { text: "Download Syllabus", onClick: () => {} },
                  { text: "Apply Now", onClick: () => {} }
                ]
    },
    {
      title: "Practical Training",
      content: "Have you really even begun to master digital marketing without becoming proficient with all the relevant and upcoming technologies that go into it? With Digifine’s Post Graduate in Digital Marketing, you work with multiple cutting-edge tools and techniques that help you become a skilled marketer. Along with this, you get access to case studies, assignments and live projects that enhance your portfolio!",
      buttons: [
                  { text: "Download Syllabus", onClick: () => {} },
                  { text: "Apply Now", onClick: () => {} }
                ]
    },
    {
      title: "Certifications",
      content: "Kickstart your career in the digital marketing industry by earning several globally recognized Google and Professional certifications! Besides these, you also get an international certificate from IBM Institute in Berlin, Germany at the end of your Postgraduate Digital Marketing program.",
      buttons: [
                  { text: "Download Syllabus", onClick: () => {} },
                  { text: "Apply Now", onClick: () => {} }
                ]
    },
    {
      title: "Post Course Support",
      content: "Digifine is one of the only MBA in Digital Marketing colleges with a team and trainers that are always willing to help you with any guidance or mentorship required, even after the completion of your Master Certification Digital Marketing.",
      buttons: [
                  { text: "Download Syllabus", onClick: () => {} },
                  { text: "Apply Now", onClick: () => {} }
                ]
    }
  ]

function UIUX() {
    return (
      <>
      <Helmet>
        <title>UX Design Course, Navi Mumbai | 100% Job Guarantee
        </title>
        <meta name='Description' content='Sharpen your creativity with our UI/UX course in Navi Mumbai. Learn user-centered design and start a rewarding career with this placement guarantee program.'/>
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
          </div><CourseCard
            title="Advanced Graphic Design Program"
            highlightText="100% Placement Guarantee"
            description="Become a digital marketing expert in just a few months with a prestigious industry residency program with this MBA in Digital Marketing. Learn through an immersive international visit by joining one of the best MBA in Digital Marketing Colleges in Mumbai and online!"
            emi="Placements"
            startDate="Industry Experts"
            duration="Curriculum"
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/37D0C444-9D61-4921-B9D47E7E60D2DE75_source.webp"
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
      <OPJAlumniTestimonials 
      paragraph="Still wondering what your future would look like after graduating from one of the best MBA in Digital Marketing Colleges in Andheri, Mumbai and Vashi, Navi Mumbai? From training at Digifine, to placements and more: hear it all from our students!." />
      {/* <CardSection cardData={cards} /> */}
      <VerticalTimeline/>
      <DownloadButton/>
      <FAQsSection
      sectionTitle="Frequently Asked Questions"
      faqData={faqs}
      />

        </main>
      </>
      
    )
  }

export default UIUX