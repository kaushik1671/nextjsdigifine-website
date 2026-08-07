import {react,lazy,useState,useEffect} from 'react'

import HelmetExport, { Helmet } from 'react-helmet-async';
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

// const testimonials = [
//   {
//     id: 1,
//     title: 'Digifine is the perfect place to learn digital marketing.',
//     excerpt: 'I was very unsure of what to expect from this digital marketing institute as someone who is coming from a non-marketing background. But anytime I faced any issues, the trainers were always there to solve my problems and help me understand things in a way I could actually understand!',
//     linkedinUrl: 'https://www.linkedin.com/in/kunda-jadhav-52409716/',
//     profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Kunda%20(1)-e302a64fbfba4afb9385067e2f368efd.webp',
//     name: 'Pooja Shrimal',
//     position: 'Sr.Manager, Madison World',
//   },
//   {
//           id: 2,
//           title: 'At Digifine, the trainers didn\'t just teach us tools — they taught us how to think like smart marketers.',
//           excerpt: 'Hats off to Sumeet sir, Siddharth sir and Siddhi ma’am for the patience and mentorship! These trainers have always encouraged and challenged me to be better everyday and get the best out of my digital marketing course at Digifine. Their support has played a huge role in helping me build this skillset and confidence today!',
//           linkedinUrl: 'https://www.linkedin.com/in/malay-roy-chowdhury-61602a12a/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Malay%20Roy%20Chowdhury%20(1)-f186f5e5a84d44c1a6eae47ac3d21325.webp',
//           name: 'Nisha Vishwakarma',
//           position: 'Associate Manager, Publicis Group',
//         },
//         {
//           id: 3,
//           title: 'I had zero background in marketing, but the trainers at Digifine made it so simple, ',
//           excerpt: 'I was looking for a digital marketing diploma course that would help me switch careers with ease. Digifine has no doubt provided me with the relevant tools to make this a reality! From theoretical concepts to practical projects, assignments and campaigns, I can safely say that I have mastered it all!',
//           linkedinUrl: 'https://www.linkedin.com/in/ketan-kapoor-4591781b3/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Ketan%20Kapoor%20(1)-8501c19cfc86402cb622a3b14a469e1f.webp',
//           name: 'Bilal Mulla',
//           position: 'Group Head - Omnicorm media',
//         },
//         {
//           id: 4,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'As a full-time working professional, I wasn’t sure as to how I would be able to manage learning a complete new discipline. But Digifine has a super flexible batch schedule and their weekend digital marketing classes helped me cover every single module with ease. Even the revision and doubt sessions were extremely helpful!',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },{
//           id: 5,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'I run a small business and needed to learn the ins and outs of digital marketing to handle this aspect on my own. Digifine’s lectures have been helpful in helping me run my own Google ads and meta ad campaigns. I have also been able to build my own brand website and list my products on e-commerce platforms!',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },{
//           id: 6,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'This 7 months diploma in digital marketing was the best decision I took to help me get into a full-fledged freelance career! As someone with a strong personal and work ethic, I appreciated the kind of timely support that was provided by Digifine’s team. My favourite part - real-world projects and case studies!',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },
//       ];



// const steps = [
//   {
//     title: 'Get Trained',
//     description: 'Learn digital marketing from highly experienced trainers through practical training and industry exposure!',
//   },
//   {
//     title: 'Assessments',
//     description: 'Master tools by solving real-world case studies, working on challenging assignments and collaborating on live projects!',
//   },
//   {
//     title: 'Mock Interview',
//     description: 'Become job-ready by getting the right knowledge, skills and etiquette from our panel of expert interviewers!',
//   },
// ]

// const faqs = [
//   {
//     tabLabel: "Graduate Digital Marketing Diploma Course in Mumbai, Andheri",
//     faqs: [
//       {
//         question: "What is the Digifine Graduate Digital Marketing Diploma Course in Mumbai, Andheri?",
//         answer:
//           "The Graduate Digital Marketing Diploma Course in Mumbai, Andheri at Digifine is an advanced digital marketing program that includes across 6 to 7 months of intense theoretical and practical training. Students get access to an in-depth curriculum that is guided by highly experienced trainers using a hands-on approach. Besides this, you also get to earn multiple professional certifications by the end of your Diploma in Digital Marketing in Mumbai, Andheri.",
//       },
//       {
//         question: "What is the syllabus of Digifine’s Graduate Digital Marketing Diploma Course in Mumbai, Andheri?",
//         answer:
//           "The curriculum of Digifine’s Diploma in Digital Marketing is extremely in-depth and covers everything right from the basics to more advanced topics required to complete your training. Throughout your Digital Marketing Diploma Course in Mumbai, Andheri, you learn modules like Google Ads, SMM, SEO, GA4, Influencer Marketing, Website Development,E-Commerce Management, Brand Management, Strategic Management, and more!"
//       },{
//         question: "Is the Digifine Diploma in Digital Marketing online or offline?",
//         answer:
//           "Digifine Academy is a renowned institute that runs an offline Digital Marketing Diploma Course in Mumbai, Andheri as well as online programs for students all across the world. ",
//       },
//       {
//         question: " What certifications will I get after completing the Digifine’s Digital Marketing Diploma Course in Mumbai, Andheri?",
//         answer:
//           "On the completion of your Diploma in Digital Marketing in Mumbai, Andheri, you will be receiving a number of Google and Professional certifications for all the core digital marketing modules or topics.",
//       },
//       {
//         question: "Is the Digital Marketing Diploma Course in Mumbai, Andheri difficult?",
//         answer:
//           "Not at all! The difficulty level of your Diploma in Digital Marketing at Digifine entirely depends on factors like the quality of training provided to you by your trainers as well as the amount of interest or keenness you possess in terms of learning the subject. Luckily, your Graduate Digital Marketing Diploma Course in Mumbai, Andheri at Digifine is taught by experts who employ interactive and hands-on methods to immerse you into the various topics.",
//       }
//     ],
//   },
//   {
//     tabLabel: "Eligibility for Graduate Digital Marketing Diploma Course in Mumbai, Andheri",
//     faqs: [
//       {
//         question: "Who can apply for the Digifine’s Diploma in Digital Marketing?",
//         answer: "Anyone with a genuine interest in the field of digital marketing can apply for Digifine Academy’s Graduate Digital Marketing Diploma Course in Mumbai, Andheri!",
//       },
//       {
//         question: "Do I need any prior degree, technical knowledge or marketing background to apply for this Diploma in Digital Marketing?",
//         answer: "You do not! The Graduate Digital Marketing Diploma Course in Mumbai, Andheri at Digifine is designed by industry experts and is up to par with global standards. It is structured in a way that does not limit anyone from pursuing digital marketing and does not require you to possess any previous experience, degree or background. Whether you are a student, working professional, entrepreneur, freelancer or simply someone with an interest in the subject, DIgifine’s Diploma in Digital Marketing in Mumbai, Andheri is open to all!",
//       }
//     ],
//   },
//   {
//     tabLabel: "Career after Graduate Digital Marketing Diploma Course in Mumbai, Andheri",
//     faqs: [
//       {
//         question: "Is digital marketing a good career option?",
//         answer: "There is absolutely no doubt about the fact that digital marketing has emerged as a leading industry and career option in the past decade or so. With this, the need for skilled digital marketers has increased in the job market, which has also led to the need of doing a Diploma in Digital Marketing. Not only this, but it has become a useful subject for entrepreneurs in setting up their businesses. Digifine’s Graduate Digital Marketing Diploma Course in Mumbai, Andheri is designed to suit unique career aspirations and business needs of all individuals. ",
//       },
//       {
//         question: "What salary can I get after completing the Graduate Digital Marketing Diploma Course in Mumbai, Andheri?",
//         answer: "Digifine’s Diploma in Digital Marketing in Mumbai, Andheri comes with 100% placement assistance in the form of masterclasses for portfolio preparation, resume building, interview etiquettes and conduction of mock interviews. This can lead you to secure high-paying jobs with average packages of anywhere between 2.5 to 5.5 LPA after completing your Digital Marketing Diploma Course in Mumbai, Andheri. ",
//       }
//     ],
//   },
//   {
//     tabLabel: "Diploma in Digital Marketing Fees and Duration",
//     faqs: [
//       {
//         question: "How long does it take to do the Diploma in Digital Marketing?",
//         answer: "The duration of Digifine Academy’s Graduate Digital Marketing Diploma Course in Mumbai, Andheri is around 6 to 7 months. You can also opt for daily classes if you wish to complete your course at a faster pace. ",
//       },
//       {
//         question: " How can I pay the Diploma in Digital Marketing fees?",
//         answer: "The best part about enrolling for the Graduate Digital Marketing Diploma Course in Mumbai, Andheri at Digifine Academy is that it is not only of the top quality, but also very affordable. It offers you multiple payment options, including a full payment, 2 in-house installments or up to 11 months EMIs to comfortably pay your fees throughout your Diploma in Digital Marketing.",
//       }
//     ],
//   }
// ];

// const cards = [
//   {
//     imageSrc: "/images/Icons/mentorship.webp",
//     title: "1. Enroll",
//     description: "Kickstart your digital marketing journey by registering for our career-focused program!",
//   },
//   {
//     imageSrc: "/images/Icons/goal.webp",
//     title: "2. Get Trained",
//     description: "Acquire key digital marketing skills from highly experienced trainers through a practical training approach!",
//   },
//   {
//     imageSrc: "/images/Icons/job-interview.webp",
//     title: "3. Assessments",
//     description: "Solve real-world case studies, get global industry exposure and work on challenging projects!",
//   },
//   {
//     imageSrc: "/images/Icons/check-list.webp",
//     title: "4. Mock Interview",
//     description: "Become job-ready with the right confidence, knowledge and etiquette with our panel of interviewers!",
//   },
//   {
//     imageSrc: "/images/Icons/check-list.webp",
//     title: "5. Get Placed",
//     description: "Secure your career with 100% Assured Placement at top digital marketing companies in India and abroad!",
//   }
// ];

//   const customContent = [
//     {
//       content: [
//         {
//           heading: "Digital Marketing",
//           items: ["Introduction ", "Understanding digital marketing platforms", "Why digital marketing?", "Difference between digital marketing & traditional marketing","Concepts and theories of digital marketing"]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Google Ads",
//           items: ["Learning Keyword Research and Media Planning", "creating Display Ads", "Remarketing campaigns", "and understanding Shopping Network.","Search Network",
//           "Display Network",
//           "Video Network",
//           "App Network Ads",
//           "Shopping Ads",
//           "Remarketing/Conversion"]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Social Media Marketing",
//           items: [
//             "Understanding major Social Media channels, Social Media best practices and techniques for optimizing Social Media handles.",
//             "Facebook Marketing",
//             "Instagram Marketing",
//             "LinkedIn Marketing",
//             "Twitter Marketing",
//             "Snapchat Marketing",
//             "Social Media Optimization"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Email Marketing",
//           items: [
//             "Understanding usage of Email as a promotional tool for a business, learning to set up and use best industry tools and creating professional campaigns.",

//             "Setting up Mailchimp account",
//             "Generating an audience",
//             "Creating mail campaigns",
//             "Testing and designing",
//             "Reporting"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Online Reputation Management",
//           items: [
//             "Learning influence of a positive reputation on a business, how to manage a business’s reputation online and best practices for maximum consumer engagement",
//             "Overview of Online Reputation Management",
//             "Platforms to manage ORM",
//             "Case studies",
//             "Tools used",
//             "Assignments"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Search Engine Optimization",
//           items: [
//             "Learning SEO best practices based on latest industry and technological requirements, understanding organic search and significance of search engine page rankings.",
//             "How search engines work",
//             "Keyword Research",
//             "Search console/Webmasters",
//             "On-Page SEO",
//             "Off-Page SEO"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Google Analytics",
//           items: [
//             "Measuring and tracking advertising campaigns across Google Inventory and implementing best practices with the help of insights gained.",

//             "Google Analytics Setup",
//             "Google Analytics Interface",
//             "Measuring campaigns",
//             "Tracking campaigns",
//             "Reporting"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Content Marketing/Ad Scripting",
//           items: [
//             "Learning the importance of content marketing as an advertising strategy, types of content a business can create, understanding and implementing content psychology optimum practices.",
//             "Understanding difference between content marketing and Ad scripting",
//             "Writing psychology",
//             "Layout psychology",
//             "Layout writing",
//             "Story telling technique"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Whatsapp Marketing",
//           items: [
//             "Using WhatsApp as a tool for marketing, best WhatsApp Marketing strategies, techniques for WhatsApp Marketing",
//             "Importance of WhatsApp Marketing",
//             "Tools required for WhatsApp Marketing",
//             "Sending WhatsApp messages in bulk",
//             "WhatsApp Marketing Reporting System"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Landing Page Technique",
//           items: [
//             "Understanding significance of Landing Pages, Landing Page creation and management, Landing Pages best practices for capturing leads.",
//             "Introduction to Landing Page",
//             "Do’s and Don’ts of Landing Page Creation",
//             "Building a Landing Page which converts",
//             "Landing Page Funnel"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Influencer Marketing",
//           items: [
//             "Influencer Marketing overview and best strategies to improve engagement on social media platforms and boost conversions through Influencer partnerships.",
//             "How to map right influencer",
//             "How to connect with influencers",
//             "Brand collaboration briefing",
//             "Influencer marketing campaign",
//             "Influencer marketing reporting"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Mobile Marketing",
//           items: [
//             "Understanding significance of Mobile Marketing, creating effective campaigns, best practices to capture maximum consumers through Mobile Ads, tracking and analyzing campaigns.",
//             "Mobile Marketing ads on social media and Google Ads",
//             "Tracking mobile marketing performance",
//             "Mobile marketing campaign activation",
//             "Mobile marketing reporting"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Word Press",
//           items: [
//             "Learning to create structured and professional websites using the most used industry software, setting up and customizing websites, using plugins and effective techniques to engage and capture consumers.",
//             "Understanding Domain Name and Domain Hosting",
//             "WordPress Setup",
//             "Theme customization",
//             "Plugins",
//             "WooCommerce Setup",
//             "Creating Landing Pages",
//             "Order Management System"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "HTML & CSS",
//           items: [
//             "Learning to create structured and professional websites using the most used industry software, setting up and customizing websites, using plugins and effective techniques to engage and capture consumers.",
//             "Understanding Domain Name and Domain Hosting",
//             "WordPress Setup",
//             "Theme customization",
//             "Plugins",
//             "WooCommerce Setup",
//             "Creating Landing Pages",
//             "Order Management System",
//             "Learning influence of a positive reputation on a business, how to manage a business’s reputation online and best practices for maximum consumer engagement",
//             "Overview of Online Reputation Management",
//             "Platforms to manage ORM",
//             "Case studies",
//             "Tools used",
//             "Assignments"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Strategic Management",
//           items: [
//             "Learning SEO best practices based on latest industry and technological requirements, understanding organic search and significance of search engine page rankings.",
//             "How search engines work",
//             "Keyword Research",
//             "Search console/Webmasters",
//             "On-Page SEO",
//             "Off-Page SEO"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Brand Management",
//           items: [
//             "Measuring and tracking advertising campaigns across Google Inventory and implementing best practices with the help of insights gained.",

//             "Google Analytics Setup",
//             "Google Analytics Interface",
//             "Measuring campaigns",
//             "Tracking campaigns",
//             "Reporting"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "E-Commerce Management",
//           items: [
//             "Learning HTML codes for creating and structuring websites, learning CSS, best HTML practices for Search Engine Optimization.",
//             "Getting started with Visual Studio",
//             "HTML Format",
//             "HTML Tags",
//             "CSS",
//             "Linking HTML with CSS",
//             "Creating a HTML website",
//             "Hosting the website"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "OTT Ads",
//           items: [
//             "Introduction to OTT Ads",
//             " How OTT Ads are Delivered",
//             " How OTT Platforms Work",
//             " How to Buy OTT Ads",
//             " Types of Streaming Devices",
//             " Process to Set-up Ads on JioHotstar"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "BARC",
//           items: [
//             "Introduction to BARC & TV Audience Measurement",
//             "Understanding TRP & TV Ratings System",
//             "BARC Data Collection & Methodology",
//             "Target Audience Segmentation & Viewership Analysis",
//             "Media Planning & Buying for TV Ads",
//             "GRP, CPRP & Other Key Advertising Metrics",
//             "Analyzing BARC Reports for Effective Ad Placement",
//             "TV Ad Scheduling & Peak Time Strategies",
//             "Measuring TV Ad ROI & Performance Optimization",
//             "Integrating TV Ads with Digital Marketing Strategies"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Luxury Brand Management",
//           items: [
//             "Introduction to Luxury Brand Management",
//             "History & Evolution of Luxury Brands",
//             "Consumer Psychology & Behavior in the Luxury Market",
//             "Brand Positioning & Storytelling in Luxury",
//             "Luxury Marketing Strategies & Digital Presence",
//             "Retail & Distribution Strategies for Luxury Brands",
//             "Sustainability & Ethical Practices in Luxury",
//             "Experiential Marketing & Customer Relationship Management",
//             "Crisis Management & Brand Protection in the Luxury Sector",
//             "Case Studies & Practical Brand Strategy Execution"
//           ]
//         }
//       ]
//     }


//     // Add other trimesters
//   ];


//   const customDigifineFeatures = [
//     "✅ 100% Placement Assistance through portfolio preparation, resume building, mock interviews, etc.",
//     "✅ Google certifications & Professional certifications that are globally recognized for key digital marketing modules",
//     "✅ Highly experienced in-house trainers",
//     "✅ Training on Unique modules like Strategic Management, Website Development, E-Commerce & Brand Management",
//     "✅ Practical Training with Live Projects, Case Studies and Regular Assignments",
//     "✅ Post-Course Support for students even after course completion",
//     "✅ hours of Intense Course Training",
//   ];

//   const customOtherCoursesFeatures = [
//     " No placement assistance",
//     " No globally recognized certifications",
//     " Teachers with not enough relevant experiences",
//     " No unique, relevant and upgraded syllabus with modules beyond basic digital marketing",
//     " Not enough assessments or hands-on training",
//     " No post-course support after training",
//     " Not enough hours of training",
//     // Add more features
//   ];

//   const customCertificates = [
//     {
//       id: 1,
//       image: "/images/certificates/crf.webp",
//       title: "Digifine Graduate",
//       description: "Digifine Graduate certification from Digifine Academy",
//     },
//     {
//       id: 2,
//       image: "/images/certificates/DataScience.webp",
//       title: "Data Science",
//       description: "Data Science certification from Digifine Academy",
//     },
//     {
//       id: 3,
//       image: "/images/certificates/DigitalMarketing.webp",
//       title: "Digital Marketing",
//       description: "Digital Marketing certification from Digifine Academy",
//     },
//     {
//       id: 4,
//       image: "/images/certificates/DigifineGraduate.webp",
//       title: "Digifine Graduate",
//       description: "Digifine Graduate certification from Digifine Academy",
//     },
//     {
//       id: 5,
//       image: "/images/certificates/ecommercemanagement.webp",
//       title: "E-Commerce Management",
//       description: "E-Commerce Management certification from Digifine Academy",
//     },
//     {
//       id: 6,
//       image: "/images/certificates/ProgrammaticMediauBuying.webp",
//       title: "Programmatic Media Buying",
//       description: "Programmatic Media Buying certification from Digifine Academy",
//     },
//     {
//       id: 7,
//       image: "/images/certificates/brandmanagement.webp",
//       title: "Brand Management",
//       description: "Brand Management certification from Digifine Academy",
//     },
//     {
//       id:8,
//       image: "/images/certificates/WebDevelopement.webp",
//       title: "Web Development",
//       description: "Web Development certification from Digifine Academy",
//     },
//   ];

//   const customTools = [
//     {
//       icon: AcademicCapIcon,
//       category: "Data Management and Development Tools",
//       toolsList: "Tools: Custom Tool 1, Custom Tool 2",
//     },
//     {
//       icon: CodeIcon,
//       category: "Data Management and Development Tools",
//       toolsList: "Tools: Custom Tool 3, Custom Tool 4",
//     },
//     {
//       icon: ChartBarIcon,
//       category: "Data Management and Development Tools",
//       toolsList: "Tools: Custom Tool 3, Custom Tool 4",
//     },
//   ];

//   const customTabs = [
//     {
//       title: "One of its kind Curriculum with Unique Modules",
//       content: "When you’re looking for an exhaustive Diploma in Digital Marketing, the most important aspect that you search for is a good curriculum. Digifine Academy’s Digital Marketing Diploma Course comprises an intensive syllabus that covers not just the basics, but also the most advanced modules that help you master the subject effectively. Find a breakdown of some of these below: Digital Marketing: Google Ads, Social Media Marketing, SEO, Google Analytics, Whatsapp Marketing, Email Marketing, Influencer Marketing, etc. Website Development: with and without coding (Wordpress & HTML CSS) E-commerce, Brand Management & Strategic Management",

//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Career Opportunities",
//       content: " If your goal is to build a career in digital marketing – whether as a freelancer, full time professional or entrepreneur – Digifine’s Diploma in Digital Marketing could be the best choice for you! It offers 100% placement assistance in terms of portfolio preparation, resume building, mock interviews, interview etiquette, etc. Find your first freelance gig or job, or start your own business after completing your Digital Marketing Diploma Course in Mumbai, Andheri from Digifine!",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Expert Faculty",
//       content: " Your learning process is going to be directly affected by the quality of teachers as well as the kind of training they impart to students. Digifine’s Digital Marketing Diploma Course is guided by a panel of trainers who have accumulated years of experience in both the digital marketing and education industries. With their deep industry insights and firsthand knowledge, students of Digifine’s Diploma in Digital Marketing can effectively gain a holistic perspective and learn from common mistakes. ",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Practical Training",
//       content: "Digital marketing is one of those domains that require one to not only learn the theoretical concepts, but also prioritize the practical application of these topics. This is exactly why Digifine’s Digital Marketing Diploma Course in Mumbai, Andheri incorporates a 20% theoretical and 80% practical approach. Students learn to put their gained knowledge to practice by working on several challenging assignments, live projects as well as real-world case studies throughout their Diploma in Digital Marketing.",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Certifications",
//       content: " Certifications act as a testament to your acquired knowledge and skills in any particular field. After completing your Digital Marketing Diploma Course in Mumbai, Andheri from Digifine Academy, you receive multiple professional certifications that add tremendous value to your profile, whether you are looking for a job, freelance projects or building your business. Complete your Diploma in Digital Marketing with several Google and Professional certifications!",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Post Course Support",
//       content: " Digifine is one of the only institutes across the globe offering student support even after the completion of your Diploma in Digital Marketing. Whether you need help with finding or switching jobs, getting good freelance clients, or kickstarting your entrepreneurial project, Digifine’s team is here to assist you always. Join their Digital Marketing Diploma Course in Mumbai, Andheri now!",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     }
//   ]

function GraduateDM() {

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
    import("./data/Graduate/testimonials").then((m) => setTestimonials(m.default));
    import("./data/Graduate/steps").then((m) => setSteps(m.default));
    import("./data/Graduate/faqs").then((m) => setFaqs(m.default));
    import("./data/Graduate/customcontent").then((m)=> setcustomcontent(m.default));
    import("./data/Graduate/customDigifineFeatures").then((m)=>setcustomDigifineFeatures(m.default))
    import("./data/Graduate/customOtherCoursesFeatures").then((m)=>setcustomOtherCoursesFeatures(m.default))
    import("./data/Graduate/customCertificates").then((m)=> setcustomCertificates(m.default))
    import("./data/Graduate/customTabs").then((m)=>setcustomTabs(m.default))
    import("./data/Graduate/customTools").then((m)=>setcustomTools(m.default))
    // import("./data/MBA/customCertificates").then((module) => {
    //   setcustomCertificates(module.default);
    // });

  }, []);




    return (
      <>
      <Helmet>
        <title>The #1 Digital Marketing Course | 100% Placement
        </title>
        <meta name='discription' content="Your career transformation is guaranteed. We are the top-ranked course with a verifiable 100% Job Guarantee. Get certified, get hired, and launch your future with our industry-leading program."/>
      </Helmet>
        <main className="relative"> {/* Add positioning context */}
          <div className="mb-spacing4 my-4"> {/* Only affects breadcrumb */}

            <Breadcrumb
              items={[
                { name: 'Home', url: '/' },
                { name: 'Courses', url: '' },
                { name: 'Graduate Digital Marketing', url: '/courses/digitalmarketing/graduatedm' }
              ]}
            />
          </div>
          <CourseCard
            title="Graduate Digital Marketing Diploma"
            highlightText="Course in Mumbai, Andheri"
            description="Invest in your career growth by applying for this premier Digital Marketing Diploma Course! Get your hands on the topmost curriculum, relevant tools and expert faculty to step into the industry with the right knowledge and confidence!"
            emi="Placements"
            startDate="Industry Experts"
            duration="Curriculum"
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/dm/gpdm.webp"
//   universityName="O.P.Jindal Global University"
/>

<ProgramOverview
  titlePart1 = "Overview of Digital Marketing Diploma"
  titleHighlight="Course in Mumbai, Andheri (with Learn More…)"
  paragraphs={[
    "Join the best Digital Marketing Diploma Course in Mumbai, Andheri and achieve your goals and dreams now! At Digifine, you learn from a panel of industry experts who provide you with relevant theoretical and practical knowledge that is required to build a successful career or business in a competitive market environment. The Diploma in Digital Marketing in Mumbai, Andheri gives you access to industry-relevant AI tools, software and technologies that helps you build a dynamic skillset."
  ]}
  highlights={[
    {
      title: "Diploma",
      content: "Digifine’s Diploma in Digital Marketing in Mumbai, Andheri is guided by an intensive curriculum that spans across basic concepts to advanced topics like performance marketing, social media marketing, SEO, brand management, strategic management, Website Development,E-Commerce Management, etc.! Work on real-world case studies, interactive assignments and live projects while acquiring several pertinent certifications throughout your Digital Marketing Diploma Course in Mumbai, Andheri."
    },
    // ... other highlights
  ]}
/>
<ProgramIntroduction
title="Graduate Digital Marketing"
subtitlePart1="Graduate Digital Marketing Diploma"
subtitleHighlight="Course in Mumbai, Andheri"
  stats={[
    { value: "35+", label: "Industry tools" },
    { value: "50+", label: "Live Projects" },
    { value: "300+", label: "Hours training" }
  ]}
  features={[
    "1.  India’s only intermediate-level Diploma in Digital Marketing",
    "2.  Get globally recognized Professional certifications after course completion",
    "3.  Learn from trainers with years of industry expertise",
    "4.  Get access to the most advanced digital marketing modules",
    "5.  Work on live projects, interactive assignments and real-world case studies",
    "6.  Get theoretical and practical knowledge with thorough hands-on training",

  ]}
  imageSrc="/images/banner-image/lpa.webp"
/>
<MyComponent title="Why Digifine for Graduate Digital Marketing Diploma Course in Mumbai, Andheri?"/>
<DownloadButton/>
<CurriculumSection 
title="Syllabus" 
subtitlePart1="Syllabus of Digifine Graduate Digital Marketing"
subtitleHighlight="Diploma Course in Mumbai, Andheri" 
tabTitlePattern={(index) => ["Digital Marketing", "Google Ads", "Social Media Marketing","Email Marketing","Online Reputation Management","Search Engine Optimization","Google Analytics","Contetn Marketing/Ad Scripting","Whatsapp Marketing","Landing Page Technique","Influencer Marketing","Mobile Marketing","Word Press","HTML & CSS","Programmtic Media Buying","Strategic Management","Brand Management","E-Commerce Management","OTT Ads","BARC","Luxury Brand Management"][index]}
curriculumContent={customContent} />  
<ComparePrograms
title="How our Course Compares"
subtitlePart1='Why is Digifine’s Diploma in Digital '
subtitleHighlight='Marketing in Mumbai, Andheri the Best?'
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
        Get your hands on the most relevant Google and Professional certifications by the end of your Diploma in Digital Marketing at Digifine. These globally recognized certifications can add tremendous value to your job resume, freelance profile as well entrepreneurship! Enrol for the best Digital Marketing Diploma Course in Mumbai, Andheri now and achieve every personal and career goal!
        "
        certificates={customCertificates}
      />
      <ProgramOverview
  titlePart1 = "Overview of Digital Marketing Diploma"
  titleHighlight="Course in Mumbai, Andheri (with Learn More…)"
  paragraphs={[
    "Join the best Digital Marketing Diploma Course in Mumbai, Andheri and achieve your goals and dreams now! At Digifine, you learn from a panel of industry experts who provide you with relevant theoretical and practical knowledge that is required to build a successful career or business in a competitive market environment. The Diploma in Digital Marketing in Mumbai, Andheri gives you access to industry-relevant AI tools, software and technologies that helps you build a dynamic skillset."
  ]}
  highlights={[
    {
      title: "Diploma",
      content: "Digifine’s Diploma in Digital Marketing in Mumbai, Andheri is guided by an intensive curriculum that spans across basic concepts to advanced topics like performance marketing, social media marketing, SEO, brand management, strategic management, Website Development,E-Commerce Management, etc.! Work on real-world case studies, interactive assignments and live projects while acquiring several pertinent certifications throughout your Digital Marketing Diploma Course in Mumbai, Andheri."
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
      title="Why Choose Digifine for Graduate Digital Marketing Diploma Course in Mumbai, Andheri?"
      description="Digifine Academy’s School of Marketing has been providing this popular Digital Marketing Diploma Course in Mumbai, Andheri for over the past 6 years. This program is designed by a panel for experts and is up to par with international industry standards. If you’re looking for a comprehensive Diploma in Digital Marketing with 100% placement assistance, then this 6 to 7 months program guided by highly qualified trainers is perfect for you!"
      tabs={customTabs}
      />
      <StudentsPlacedAt headlinepara='Advance Executive Digital Marketing Classes in Andheri, Mumbai (& online)' />
      <YtVideo
      headline='How Being A Student at Digifine Will Help you'
      paragraph="Digifine Academy is home to the best Digital Marketing Diploma Course in Mumbai, Andheri  as well as online! Students here get a chance to learn from a panel of highly qualified trainers who make use of a 20% theoretical and 80% practical approach. Throughout your Diploma in Digital Marketing in Mumbai, Andheri, you apply your gained knowledge on challenging assignments, live projects as well as real-world case studies!"
      />
      <ProjectsSection />
      <OPJAlumniTestimonials 
      title="What Our Students"
      bluetitle="Have To Say"
      testimonial={testimonials}
      paragraph="Wondering what comes next in your journey? From training, curriculum, opportunities, careers and more: check out what our alumni who completed the Graduate Digital Marketing Diploma Course in Mumbai, Andheri have to say!" />
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

export default GraduateDM