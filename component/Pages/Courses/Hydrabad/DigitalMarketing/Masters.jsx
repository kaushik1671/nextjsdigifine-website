import {react,lazy, useState , useEffect} from 'react'

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


// const testimonials = [
//   {
//     id: 1,
//     title: 'Digifine is the perfect place to learn digital marketing.',
//     excerpt: 'My favourite part about this master in digital marketing course is the 100% internship guarantee aspect. I got placed at a pretty renowned company as a paid intern just halfway through my course and got tons of industry exposure. The placement team and trainers at Digifine are really helpful in this regard.',
//     linkedinUrl: 'https://www.linkedin.com/in/kunda-jadhav-52409716/',
//     profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Kunda%20(1)-e302a64fbfba4afb9385067e2f368efd.webp',
//     name: 'Pooja Shrimal',
//     position: 'Sr.Manager, Madison World',
//   },
//   {
//           id: 2,
//           title: 'At Digifine, the trainers didn\'t just teach us tools — they taught us how to think like smart marketers.',
//           excerpt: 'If you’ve done your 12th or are graduating / have graduated, I would say go for this masters in digital marketing course. Definitely a great decision on my part as just after my 12th standard I learned some relevant skills, built a pretty good resume and then got a high-paying internship at Hotstar.',
//           linkedinUrl: 'https://www.linkedin.com/in/malay-roy-chowdhury-61602a12a/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Malay%20Roy%20Chowdhury%20(1)-f186f5e5a84d44c1a6eae47ac3d21325.webp',
//           name: 'Nisha Vishwakarma',
//           position: 'Associate Manager, Publicis Group',
//         },
//         {
//           id: 3,
//           title: 'I had zero background in marketing, but the trainers at Digifine made it so simple, ',
//           excerpt: 'I love that the trainers at Digifine put so much emphasis on practical learning! That was my main concern while joining their digital marketing institute and I was happy to find out that they majorly focus on making us work on campaign creation, live projects and assignments so that we can practically apply our knowledge.',
//           linkedinUrl: 'https://www.linkedin.com/in/ketan-kapoor-4591781b3/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Ketan%20Kapoor%20(1)-8501c19cfc86402cb622a3b14a469e1f.webp',
//           name: 'Bilal Mulla',
//           position: 'Group Head - Omnicorm media',
//         },
//         {
//           id: 4,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'I am really proud of myself to say that I have successfully completed an amazing internship even before completing the master in digital marketing course at Digifine. I had just completed my 12th and not even started college when I joined. And now I have so much confidence and experience in my skills, thanks to Digifine!',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },{
//           id: 5,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'Best trainers, best curriculum and hands-down the best learning experience I have had at Digifine. I spent around 9 months doing the masters in digital marketing program there and got a lot of valuable insights from Sumeet sir and Siddharth sir. The internships given by their placement cell are also great.',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },{
//           id: 6,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'Thanks to Sumeet sir and Siddhi ma’am for guiding me throughout my digital marketing classes at Digifine. I had absolutely no background to begin with and they were so patient with me and made me understand things in a way I could actually grasp. Definitely the best place to get the best-quality training!',
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
//     tabLabel: " What is the Digifine Master in Digital Marketing Course in Mumbai?",
//     faqs: [
//       {
//         question: "What is the Digifine Master in Digital Marketing Course in Mumbai?",
//         answer:
//           "The Master in Digital Marketing Course in Mumbai, Andheri is an immersive 8 to 9 months program that not only focuses on practical training in the classroom, but also gives you the opportunity to apply for paid internships on the side! Digifine Academy is the topmost Digital Marketing Institute in Mumbai that offers students with 100% internship guarantee before the completion of their course, alongside a unique curriculum and multiple globally relevant certifications.",
//       },
//       {
//         question: "What is the syllabus of Digifine Master in Digital Marketing Course in Mumbai, Andheri? ",
//         answer:
//           "Digifine is a pristine Digital Marketing Institute in Mumbai that provides students with courses that all comprise an intensive and unique curriculum. Their Master in Digital Marketing Course in Mumbai, Andheri trains you on basic as well as advanced modules of Digital Marketing along with topics like: OTT Advertising, Website Development,E-Commerce Management, Brand Management, Strategic Management, and many more!"
//       },{
//         question: "Is the Digifine Master in Digital Marketing Course in Mumbai online or offline?",
//         answer:
//           "Digifine is a Digital Marketing Institute in Mumbai that offers a range of courses to students all across the world. This is why their Master in Digital Marketing Course in Mumbai, Andheri is taught offline as well as online!",
//       },
//       {
//         question: "What certifications will I get after completing the Digifine Master in Digital Marketing Course in Mumbai, Andheri?",
//         answer:
//           "After completing your Master in Digital Marketing Course in Mumbai from Digifine, you will be receiving several Google and Professional certifications on key modules throughout your course. ",
//       },
//       {
//         question: " Is the Master in Digital Marketing Course in Mumbai difficult?",
//         answer:
//           "Digifine Academy’s Master in Digital Marketing Course in Mumbai, Andheri is neither too easy nor very tough. The difficulty level of any program depends on the kind of training you receive from your teachers. That is why this Digital Marketing Institute in Mumbai has a panel of highly experienced trainers who use a 20% theoretical and 80% practical approach as well as different methods to help you gain actionable knowledge and skills. ",
//       }
//     ],
//   },
//   {
//     tabLabel: "Eligibility for Master in Digital Marketing Course in Mumbai",
//     faqs: [
//       {
//         question: "Who can apply for the Digifine’s Master in Digital Marketing Course in Mumbai, Andheri?",
//         answer: "Anyone with a keen interest in learning the nitty-gritty of digital marketing can apply at the Digifine Digital Marketing Institute in Mumbai!",
//       },
//       {
//         question: "Do I need any prior degree, technical knowledge or marketing background to apply for this Master in Digital Marketing Course in Mumbai, Andheri?",
//         answer: "You do not necessarily need a specific degree, skillset or background in order to apply for DIgifine Academy’s Master in Digital Marketing Course in Mumbai, Andheri. The trainers who guide you throughout this course ensure that irrespective of your previous knowledge or lack thereof, you are taught each and every minute aspect required for you to become a successful digital marketer. Digifine Digital Marketing Institute in Mumbai offers an in-depth curriculum coupled with practical training through projects and real-world case studies that help everyone master this subject, whether you are a student, fresher, working professional, an entrepreneur, or someone who simply has a keen interest in learning!",
//       }
//     ],
//   },
//   {
//     tabLabel: "Career after Master in Digital Marketing Course in Mumbai",
//     faqs: [
//       {
//         question: " Is digital marketing a good career option?",
//         answer: "Yes, 100%! Digital marketing has grown to become one of the most sought-after career paths in recent years. The 21st century, especially the last decade or so have noticed a significant emergence of digital marketing and its use across industries. This has led to the birth of Digifine, currently the best Digital Marketing Institute in Mumbai! Their Master in Digital Marketing Course in Mumbai, Andheri offers students with promising career opportunities even after the completion of their program!",
//       },
//       {
//         question: "What salary can I get after completing the Master in Digital Marketing Course in Mumbai, Andheri?",
//         answer: "After you have completed the Master in Digital Marketing Course in Mumbai, the average salary package that you can expect is approximately between 2.5 to 5.5 LPA, depending on your individual performance and skillset!",
//       }
//     ],
//   },
//   {
//     tabLabel: "Digital Marketing Institute in Mumbai Fees and Duration",
//     faqs: [
//       {
//         question: "How long does it take to do the Master in Digital Marketing Course in Mumbai, Andheri?",
//         answer: "The Master in Digital Marketing Course in Mumbai takes about 8 to 9 months to complete. Students also have the option of fast tracking their course and completing it within around 6-7 months by attending sessions on a daily basis.",
//       },
//       {
//         question: "How can I pay Digital Marketing Institute in Mumbai fees?",
//         answer: "Digifine is the most premium yet affordable Digital Marketing Institute in Mumbai that offers a range of highly comprehensive courses all across the globe. Students have several options while paying the Master in Digital Marketing Course in Mumbai, Andheri fees. They can either be paid altogether, in 2 in-house installments or one can even opt for no-interest EMIs for up to 11 months.",
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
//     "✅ 100% Internship Guarantee at top companies & agencies",
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
//       content: " The Master in Digital Marketing Course in Mumbai, Andheri comprises an engaging curriculum that focuses on first guiding you through some basic concepts and principles to prepare you completely for further advanced topics. This Digital Marketing Institute in Mumbai also trains you on some unique modules rarely taught anywhere else in the entire country. Here is a broad breakdown of the program syllabus Digital Marketing: Google Ads, Social Media Marketing, SEO, Google Analytics, Whatsapp Marketing, Email Marketing, Influencer Marketing, etc. Website Development: with and without coding (Wordpress & HTML CSS) E-commerce, Brand Management & Strategic Management OTT Advertising",
                
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Career Opportunities",
//       content: " Digifine is a premier digital marketing institute in Mumbai that offers a handful of different programs with internship and placement guarantee for students’ career development. A popular program among these is the Master in Digital Marketing Course in Mumbai, Andheri that provides assured internships to all of its students before the completion of their training. Digifine also assists them through portfolio and resume building, interview preparation and classes in interview etiquette.",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Expert Faculty",
//       content: "Digifine is a pristine Digital Marketing Institute in Mumbai that holds itself entirely accountable for the quality of education its students receive. It prides itself in providing holistic training that is guided by highly experienced faculty using multiple distinct approaches. These trainers have a lot of niche industry expertise and are capable of providing students with actionable insights throughout their Master in Digital Marketing Course in Mumbai, Andheri.",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Practical Training",
//       content: " A discipline like digital marketing cannot be learnt simply by the means of theoretical knowledge. Digifine is a digital marketing institute in Mumbai that prioritizes practical learning through various means like interactive assignments, live projects and real-world case studies. These equip students with necessary skills and experience with working on relevant tools and technologies that help them advance in their careers with ease before completing their Master in Digital Marketing Course in Mumbai, Andheri. ",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Certifications",
//       content: "Mark the completion of your Master in Digital Marketing Course in Mumbai, Andheri with the help of multiple professional certifications. Acquire several Google as well as Professional certificates from the best digital marketing institute in Mumbai in order to add more value and credibility to your resume or profile.",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Post Course Support",
//       content: "Digifine is the only digital marketing institute in Mumbai offering post-course support and guidance to its students. The team of experts and trainers at Digifine are always willing to help students with any needed assistance even after students have completed their Master in Digital Marketing Course in Mumbai, Andheri. Digifine’s doors are always open for its learners!",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     }
//   ]


function Masters() {

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
    import("./data/Masters/testimonials").then((m) => setTestimonials(m.default));
    import("./data/Masters/steps").then((m) => setSteps(m.default));
    import("./data/Masters/faqs").then((m) => setFaqs(m.default));
    import("./data/Masters/customcontent").then((m)=> setcustomcontent(m.default));
    import("./data/Masters/customDigifineFeatures").then((m)=>setcustomDigifineFeatures(m.default))
    import("./data/Masters/customOtherCoursesFeatures").then((m)=>setcustomOtherCoursesFeatures(m.default))
    import("./data/Masters/customCertificates").then((m)=> setcustomCertificates(m.default))
    import("./data/Masters/customTabs").then((m)=>setcustomTabs(m.default))
    import("./data/Masters/customTools").then((m)=>setcustomTools(m.default))
    // import("./data/MBA/customCertificates").then((module) => {
    //   setcustomCertificates(module.default);
    // });

  }, []);




    return (
      <>
      <Helmet>
        <title>Master’s in Digital Marketing, Mumbai | 100% Job Placement
        </title>
        <meta name="description" content="Get 100% placement guarantee with this Master’s in Digital Marketing. Equip yourself with advanced tools & connect with experienced professionals. " />
      </Helmet>
        <main className="relative"> {/* Add positioning context */}
          <div className="mb-spacing4 my-4"> {/* Only affects breadcrumb */}
            <Breadcrumb
              items={[
                { name: 'Home', url: '/' },
                { name: 'Courses', url: '' },
                { name: 'Master in Digital Marketing', url: '/courses/digitalmarketing/graduatedm' }
              ]}
            />
          </div>
          <CourseCard
            title="Master in Digital Marketing"
            highlightText="Course in Mumbai, Andheri"
            description="Transform your future by enrolling at the best Digital Marketing Institute in Mumbai with internship guarantee at top agencies. Launch your career in the industry by getting hands-on training from experienced trainers and developing a diverse skillset!"
            emi="Placements"
            startDate="Industry Experts"
            duration="Curriculum"
            appliedText=""
            contactNumber=""
            imageUrl="/images/banner-image/dm/mdm.webp"
//   universityName="O.P.Jindal Global University"
/>

<ProgramOverview
  titlePart1 = "Overview of Master in Digital Marketing"
  titleHighlight="Course in Mumbai, Andheri"
  paragraphs={[
    "Join India’s most elite Digital Marketing Institute in Mumbai and kickstart your career or business with the right insights now! Digifine Academy offers a plethora of in-depth courses, including its own intensive Master in Digital Marketing Course in Mumbai, Andheri as well as online. Here, you get to learn everything, right from the basics to the most advanced and unique concepts of digital marketing from an extremely experienced faculty. Work on industry-relevant tools and earn multiple certifications throughout your learning journey at this digital marketing institute in Mumbai."
  ]}
  highlights={[
    {
      title: "Make",
      content: "Make the most optimal use of an enriching curriculum and acquire top skills by enrolling for this Master in Digital Marketing Course in Mumbai, Andheri. Get hands-on training through challenging assignments, live projects and real-world case studies. Besides this, learn modules like OTT advertising, Website Development,E-Commerce Management and several others! Apply your theoretical knowledge in the industry through an internship guarantee program provided by Digifine Digital Marketing Institute in Mumbai!"
    },
    // ... other highlights
  ]}
/>
<ProgramIntroduction
title="Master in Digital Marketing"
subtitlePart1="Master in Digital Marketing"
subtitleHighlight="Course in Mumbai, Andheri"
  stats={[
    { value: "35+", label: "Industry tools" },
    { value: "50+", label: "Live Projects" },
    { value: "300+", label: "Hours training" }
  ]}
  features={[
    "1.  India’s first Master in Digital Marketing with placement guarantee before course completion",
    "2.  Get globally recognized Professional certifications after course completion",
    "3.  Learn from trainers with years of industry expertise",
    "4.  Get access to unique modules taught nowhere else in the country",
    "5.  Work on live projects, interactive assignments and real-world case studies",
    "6.  Get theoretical and practical knowledge with thorough hands-on training",
  ]}
  imageSrc="/images/banner-image/lpa.webp"
/>
<MyComponent title="Why Digifine for a Master in Digital Marketing Course in Mumbai, Andheri ?"/>
<DownloadButton/>
<CurriculumSection 
title="Syllabus" 
subtitlePart1="Syllabus of Digifine Master in Digital Marketing"
subtitleHighlight="Course in Mumbai, Andheri" 
tabTitlePattern={(index) => ["Digital Marketing", "Google Ads", "Social Media Marketing","Email Marketing","Online Reputation Management","Search Engine Optimization","Google Analytics","Contetn Marketing/Ad Scripting","Whatsapp Marketing","Landing Page Technique","Influencer Marketing","Mobile Marketing","Word Press","HTML & CSS","Programmtic Media Buying","Strategic Management","Brand Management","E-Commerce Management","OTT Ads","BARC","Luxury Brand Management"][index]}
curriculumContent={customContent} />  
<ComparePrograms
title="How our Course Compares"
subtitlePart1='Why is Digifine’s Master in Digital Marketing'
subtitleHighlight=' Course in Mumbai the Best?'
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
        Stand out in a competitive industry with several globally recognized Professional as well as Google certifications from the most renowned Digital Marketing Institute in Mumbai. Add incredible value to your job resume or freelancing profile after the completion of your Master in Digital Marketing Course in Mumbai, Andheri!
        "
        certificates={customCertificates}
      />
      <ProgramOverview
  titlePart1 = "Overview of Master in Digital Marketing"
  titleHighlight="Course in Mumbai, Andheri"
  paragraphs={[
    "Join India’s most elite Digital Marketing Institute in Mumbai and kickstart your career or business with the right insights now! Digifine Academy offers a plethora of in-depth courses, including its own intensive Master in Digital Marketing Course in Mumbai, Andheri as well as online. Here, you get to learn everything, right from the basics to the most advanced and unique concepts of digital marketing from an extremely experienced faculty. Work on industry-relevant tools and earn multiple certifications throughout your learning journey at this digital marketing institute in Mumbai."
  ]}
  highlights={[
    {
      title: "Make",
      content: "Make the most optimal use of an enriching curriculum and acquire top skills by enrolling for this Master in Digital Marketing Course in Mumbai, Andheri. Get hands-on training through challenging assignments, live projects and real-world case studies. Besides this, learn modules like OTT advertising, Website Development,E-Commerce Management and several others! Apply your theoretical knowledge in the industry through an internship guarantee program provided by Digifine Digital Marketing Institute in Mumbai!"
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
      title="Why Choose Digifine for Master in Digital Marketing Course in Mumbai, Andheri?"
      description="Digifine Academy’s School of Marketing is a distinguished Digital Marketing Institute in Mumbai that has been offering high-quality education for over 6 years now. Among its several courses is the well-rounded Master in Digital Marketing Course in Mumbai, Andheri and online. This is an expert-designed rigorous 8 to 10 months program that thoroughly covers key aspects as well as advanced topics of digital marketing alongside a range of AI-tools and technologies. (Read more…)"
      tabs={customTabs}
      />
      <StudentsPlacedAt headlinepara='Master in Digital Marketing Course in Mumbai, Andheri (& online)' />
      <YtVideo
      headline='How Being A Student at Digifine Will Help you'
      paragraph="Digifine Academy is the most prominent and top-notch Digital Marketing Institute in Mumbai that offers a range of executive, graduate, masters, postgraduate and MBA level courses taught by industry experts. Being a student at their Master in Digital Marketing Course in Mumbai, Andheri gives you access to some of the most cutting-edge technologies and a unique curriculum along with 100% internship guarantee!"
      />
      <ProjectsSection />
      <OPJAlumniTestimonials 
      title="What Our Students"
      bluetitle="Have To Say"
      paragraph="Wondering what comes next in your journey? From training, curriculum, opportunities, careers and more: check out what our alumni who completed the Graduate Digital Marketing Diploma Course in Mumbai, Andheri have to say!" 
      testimonial={testimonials}
      />
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

export default Masters