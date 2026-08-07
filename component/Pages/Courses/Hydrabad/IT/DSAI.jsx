import {react,lazy,useEffect,useState} from 'react'
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
//     excerpt: 'I was unsure at first about my career in full stack as I am not even from a tech background. But Chetan sir is genuinely very helpful and supportive. He made coding very easy to understand and I was able to master many languages after the full stack developer course at Digifine.',
//     linkedinUrl: 'https://www.linkedin.com/in/kunda-jadhav-52409716/',
//     profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Kunda%20(1)-e302a64fbfba4afb9385067e2f368efd.webp',
//     name: 'Pooja Shrimal',
//     position: 'Sr.Manager, Madison World',
//   },
//   {
//           id: 2,
//           title: 'At Digifine, the trainers didn\'t just teach us tools — they taught us how to think like smart marketers.',
//           excerpt: 'Before starting my full stack development course in Digifine, I had very limited knowledge and experience in coding. I wanted to develop my skills to find a good job. And completing my course with Chetan sir actually helped me build a vast portfolio and I even got a job from the institute itself.',
//           linkedinUrl: 'https://www.linkedin.com/in/malay-roy-chowdhury-61602a12a/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Malay%20Roy%20Chowdhury%20(1)-f186f5e5a84d44c1a6eae47ac3d21325.webp',
//           name: 'Nisha Vishwakarma',
//           position: 'Associate Manager, Publicis Group',
//         },
//         {
//           id: 3,
//           title: 'I had zero background in marketing, but the trainers at Digifine made it so simple, ',
//           excerpt: 'The best part about Digifine and their full stack developer course in mumbai is that it has placement guarantee. Even the teachers there are really good and explain everything in a lot of depth. I have even approached them multiple times outside class and they never say no for guidance.',
//           linkedinUrl: 'https://www.linkedin.com/in/ketan-kapoor-4591781b3/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Ketan%20Kapoor%20(1)-8501c19cfc86402cb622a3b14a469e1f.webp',
//           name: 'Bilal Mulla',
//           position: 'Group Head - Omnicorm media',
//         },
//         {
//           id: 4,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'I am so grateful to Digifine and especially Chetan sir. Did not know that I could have such a good career in a well-known company in just 6 months. The industry exposure and kind of projects that they give are so high-quality and ended up adding a lot of value to my resume. ',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },{
//           id: 5,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'The reason why I am so proficient with both frontend and backend development is the training given to me by Chetan sir. He is super kind and very patient with his teaching. Right now I have a pretty high-paying job as a backend developer and I definitely have Digifine and their placement team for this.',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },{
//           id: 6,
//           title: 'Digifine gave me much more than digital marketing knowledge.',
//           excerpt: 'I have worked on some of the most interesting frontend, backend and full stack projects at Digifine. After completing the full stack developer course there, I can say with confidence that I am proficient in multiple languages, databases and frameworks. Thank you for all the guidance and support!',
//           linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
//           profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
//           name: 'Akash Kand',
//           position: 'New York',
//         },
//       ];

// const steps = [
//   {
//     title: 'Get Trained',
//     description: 'Learn full stack development from highly experienced trainers through practical training and industry exposure!',
//   },
//   {
//     title: 'Assessments',
//     description: 'Solve real-world problems while working on case studies, live projects and challenging assignments!',
//   },
//   {
//     title: 'Mock Interview',
//     description: 'Become job-ready by getting the right knowledge, skills and etiquette from our panel of expert interviewers!',
//   },
// ]

// const faqs = [
//   {
//     tabLabel: "Full Stack Developer Course with Guaranteed Placement",
//     faqs: [
//       {
//         question: "What is the Digifine Full Stack Developer Course with Guaranteed Placement?",
//         answer:
//           "The full stack web development course at Digifine is an intensive 6-months program with an in-depth curriculum and regular assignments. It covers all the core and advanced concepts of front-end, back-end and full stack development to help you build a competent skillset. This program comes with multiple live projects and case studies alongside industry-relevant certifications. With Digifine full stack developer institute course, you will be trained on cutting-edge tools by industry experts and given placements and top companies.",
//       },
//       {
//         question: "What is the syllabus of Digifine Full Stack Developer Course in Mumbai? ",
//         answer:
//           "The curriculum of Digifine’s Java Full Stack Developer Course with Guaranteed Placement includes front-end and back-end development with programming languages like HTML CSS, Python and JavaScript. You will also get access to full stack developer training on MySQL, which is a Python database, as well as Django, an important Python framework."
//       },{
//         question: "Is the Digifine Full Stack Web Development Course online or offline?",
//         answer:
//           "This Java Full Stack Developer Course with Guaranteed Placement in Digifine can be done both online and offline. Classroom full stack developer training is available in Andheri, Mumbai.",
//       },
//       {
//         question: " What certifications will I get after completing the Digifine java full stack developer course with guaranteed placement?",
//         answer:
//           "On the completion of your full stack developer course in Mumbai at Digifine, you will receive Professional certifications for front-end, back-end and full stack web development along with a 3-months internship letter.",
//       },
//       {
//         question: "Is the full stack web development course difficult?",
//         answer:
//           "Digifine Academy’s full stack developer course in Mumbai is not necessarily too difficult or easy. If you have an interest in this subject, then the trainers here will train you right from the basic to advanced concepts with hands-on projects. This integrated full stack developer training approach will help you grasp every topic easily and in full depth!",
//       }
//     ],
//   },
//   {
//     tabLabel: "Eligibility for Full Stack Web Development Course",
//     faqs: [
//       {
//         question: "Who can apply for the Digifine full stack developer course with guaranteed placement?",
//         answer: "Anyone with an interest in front-end, back-end or full stack development can apply for Digifine Academy’s full stack developer course in Mumbai. ",
//       },
//       {
//         question: " Do I need any prior degree, technical knowledge or coding background to apply for this full stack web development course?",
//         answer: "Digifine is an established full stack developer institute that does not require you to have any prior experience, degree or knowledge. Whether you are a complete fresher to the industry, a student, a working professional, an experienced person with technical background, or someone who simply has a keen interest in learning this course, Digifine’s java full stack developer course with guaranteed placement is open to all!",
//       }
//     ],
//   },
//   {
//     tabLabel: "Career after Full Stack Web Development Course",
//     faqs: [
//       {
//         question: "Is full-stack development a good career option?",
//         answer: "Definitely! After completing Digifine Academy’s full stack developer course in Mumbai, a plethora of career opportunities open up for you! You can become a frontend developer, backend developer, fullstack developer, fullstack engineer, software developer, software engineer, web application developer, etc. ",
//       },
//       {
//         question: "What salary can I get after completing full stack developer training?",
//         answer: "After completing your full stack developer course in Mumbai from Digifine, you can expect an average salary of anywhere between 2.5 to 5.5 LPA, with the highest package of 10LPA.",
//       }
//     ],
//   },
//   {
//     tabLabel: "Full Stack Web Development Course Fees and Duration",
//     faqs: [
//       {
//         question: " How long does it take to do the full stack developer course in Mumbai?",
//         answer: "The duration of Digifine Academy’s java full stack developer course with guaranteed placement is approximately 6 to 8 months!",
//       },
//       {
//         question: "How can I pay full stack web development course fees?",
//         answer: "Digifine is a full stack developer institute that offers you with multiple fee payment options for your comfort. For this affordable full stack developer training, you can pay your entire fees together, in 2 in-house installments, or opt for up to 9 months no-interest EMI options.",
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
//           heading: "HTML5",
//           items: [
// "Introduction to the World Wide Web",
// "Client-Server Architecture",
// "HTML Structure: Head, Body, and Syntax",
// "HTML Comments and Page Metadata (title, meta, link, style, script)",
// "Tags and Attributes in HTML (Heading, Paragraph & label)",
// "Building Your First Web Page – Hello World",
// "Text Formatting Tags",
// "Block Elements and Document Structure (Div, Nav)",
// "Image and Anchor Tags",
// "Lists and Table Structures",
// "HTML5 Forms (Methods, Action & Label)",
// "Selectors: Tag, ID, Class",
// "Semantic Elements (Iframes, Entitles, Symbols) ",
// "Media Elements: Audio and Video Tags"]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "CSS3",
//           items: [
// "Introduction to the Cascading Style Sheet (CSS)",
// "Types of CSS",
// "Selectors Ways: ID, Class, Combinator, Pseudo-classes, Pseudo-elements, Attribute Selectors",
// "Text Properties and Custom Font Families : Size, Color, Style, Weight & Text Alignment",
// "Units in CSS: Colors, Sizes, Width and Height",
// "Box Model: Borders, Margins, Padding, Radius",
// "Shadows: Text and Box Shadow Properties",
// "Background : Color, Image, Properties, Attachment & Size",
// "Layout Management: Float, Clear, and Position Properties",
// "Display Properties : Cursor, Float, Line Height, Opacity and overflow",
// "Meta Viewport and Media Queries",
// "CSS Advance : Animation (2d Transform | 3d Transform | Transition), Gradient, Z-Index",
// "Responsive Web Design: Flexbox and Grid Layout Systems"]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "JavaScript",
//           items: [
// "History and Features of JavaScript",
// "JS Data Types and Scopes (var, let, const)",
// "Operators and Conditional Statements",
// "Functions: Built-in, Regular, Parameters, and Return Values",
// "Arrays and String Manipulation",
// "Math and Window Objects (Console, Screen, alert)",
// "Document Object Model (DOM): Structure, Hierarchy, and Manipulation",
// "Event Handling: Click, Submit, Keypress"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Advance JavaScript",
//           items: [
// "Arrow and Anonymous Functions",
// "Objects in JS: Properties, Methods, and Dynamic Property Syntax",
// "Template Literals and Destructuring (Arrays and Objects)",
// "Rest and Spread Operators",
// "Callbacks, Asynchronous JS, Promises, and Async/Await",
// "Fetch API: Building a Currency Converter Application"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Bootstrap 5",
//           items: [
            
// "Introduction to BootStrap and Responsive Web Design",
// "Environment Setup and Downloads",
// "Layout and Content Basics",
// "Grid Systems and Responsive Layouts",
// "Components: Accordion, Alerts, Badge, Breadcrumb, Button Group, Card etc.",
// "Carousel and Modal",
// "Navbar, Navs, Tabs, Pagination, and Progress Bars",
// "Forms: Controls, Validation, Input Groups, and Floating Labels",
// "Bootstrap Utilities and Icons",
// "Pagination, Popovers and BS Forms"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "ReactJS",
//           items: [
// "Introduction and Installation",
// "React Features and Component Types (Functional & Class)",
// "JSX: Adding Dynamic Variables and Preprocessor Use",
// "Component Creation and Lifecycle: Props, Pure vs Impure Functions",
// "State Management: Side-Effects, Cleanup, Context API, Component API and Reducers",
// "Fundamentals: Events, Animation, CSS, Bootstrap, Table",
// "React Hooks : useState, useRender",
// "Project: E-Commerce Application Development",
// "React Router (v6): Navigation, Query Params, Forms, and Input Handling",
// "React Redux"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Next JS",
//           items: [
// "Introduction to NextJS",
// "Fundamentals: Basic, Component Lifecycle",
// "Essentials: Environment Setup, Server and Clients Components",
// "Data Fetching Method: SSR, SSG and using React Query",
// "Routing: Exploring the page and app directories",
// "Styling: CSS in Next.JS, Styling Library, Mobile First Design",
// "Tailwind CSS: Integrating Tailwind CSS",
// "APIs in NextJS: Building and Managing API Routes, Rate Limiting"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Angular",
//           items: [
// "Introduction and Installation",
// "Concepts: Advantages & Disadvantage of AngularJS",
// "Environment Setup",
// "MVC Architecture: Model, View and Controller",
// "App: Creating App & Executing App",
// "Directives: ng-app, ng-init, ng-model, ng-repeat"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Python",
//           items: [
// "Introduction to Python",
// "Installation & Downloads",
// "Basic : Syntax, Comments, Indentation, Editors",
// "Variables : Variables, Types of Variables, Various Variable, Scope",
// "Operators: Arithmetic, Assignment, Logical & Comparison",
// "Casting : to String, to Integer and to Float",
// "Conditions: IF, Elif, Else IF and Nested IF",
// "Loops: While Loop & For Loop",
// "Functions: Intro, What is, Types of, user inputs",
// "Modules: types ",
// "Pre-Defined: Dates, Math",
// "PIP: Package Manager, Installation, Use"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Introduction to OOPS",
//           items: [
// "Features",
// "Class and Object",
// "Encapsulation",
// "Polymorphism",
// "Abstraction",
// "Inheritance"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading:"Object Oriented Programming",
//           items: [
// "Class and Object Declaration Methods",
// "Types of Methods Passing Object as Method Argument"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Polymorphism", 
//           items: [
// "Method Overloading",
// "Method Overriding",
// "Super Keyword",
// "Final Keyword"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Node JS",
//           items: [            
// "Introduction to NodeJS",
// "Environment Setup",
// "NPM : Package Manger, Installation and Update",
// "Callbacks Concept",
// "Events: Event Loops, Upload Files",
// "Objects: Global and Local",
// "File System: Open, Run and Delete",
// "Scaling Application",
// "RESTFul API",
// "Web Modules"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "MYSQL",
//           items: [
// "Introduction to MYSQL (Database)",
// "Creation : Database, Tables and Primary Key",
// "CRUD: Creating, Reading, Updating, and Deleting Documents",
// "Condition : Where, Order By and Limit",
// "Remove: Delete and Drop Table",
// "Join : Inner, Right and Left",
// "Alternatives: Sum, Sumup and more"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "MongoDB (NoSQL)",
//           items: [
// "Introduction to NoSQL and MongoDB",
// "What is NoSQL?",
// "Differences Between SQL and NoSQL",
// "MongoDB Overview and Installation",
// "Data Types in MongoDB",
// "MongoDB Shell Basics / Compass",
// "CRUD: Creating, Reading, Updating, and Deleting Documents",
// "Using Projections for Query Optimization",
// "Operators: Query Operators and Aggregation Framework"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Django",
//           items: [
// "Introductions & Overview",
// "Environment Setup",
// "Creating: Projects, Views and App",
// "Structure: MVT (Model, View and Template)",
// "Add Template: Templates System, Master Template",
// "Objects: Create User, Models",
// "Set Fields to Display",
// "Django Models",
// "Data : Insert, Update, Delete and Update",
// "Page Redirection",
// "Form: Processing, File uploading",
// "Cookies, Sessions and Caching"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Express JS",
//           items: [
// "Introduction to Express JS",
// "Environment",
// "Printing your first Hello World! ",
// "Redirection: Routing",
// "Methods: HTTP",
// "Resource: URL Building, Middleware, Templating",
// "Form: Data, Static Files",
// "DataBase : Crud",
// "Cookies, Session",
// "Authentication: Data Send, Receive and Validate",
// "API: RESTFul API",
// "Handling: Error Handling and Debugging"
//           ]
//         }
//       ]
//     },
//     {
//       content: [
//         {
//           heading: "Web Application using Python",
//           items: [
// "Web Application Basics",
// "Architecture of Web Application",
// "Introduction to servlet",
// "Servlet life cycle",
// "Developing and Deploying Servlets",
// "Exploring Deployment",
// "Descriptor (web.xml)",
// "Handling Request and Response",
// "Sample JS/Servlet Application"
//           ]
//         }
//       ]
//     },
//     // Add other trimesters
//   ];


//   const customDigifineFeatures = [
//     "✅ 100% Placement Guarantee at top companies",
//     "✅ 3-months Internship Letter during the course",
//     "✅ Professional certifications that are globally recognized for front-end, back-end and full stack development",
//     "✅ Industry Expert, Highly Skilled In-house Trainers",
//     "✅ Overseas Mentors for international industry insights",
//     "✅ Training on Unique Frameworks like Next JavaScript taught at no other institute, along with upgraded syllabus (with tools like Python, JavaScript, HTML CSS, MySQL, DJango, etc.)",
//     "✅ Practical Training with Live Projects, Case Studies and Regular Assignments",
//     "✅ Post-Course Support for each student even after completion of training",
//     "✅ 360 hours of Intense Course Training",

//   ];

//   const customOtherCoursesFeatures = [
//     " No placement guarantee",
//     " No internship letter during the course",
//     " No globally recognized certifications",
//     " Faculty with not enough relevant experience",
//     " No overseas mentorship",
//     " No unique, relevant and upgraded syllabus with multiple programming languages, databases and frameworks ",
//     " Not enough assessments or hands-on training",
//     " No post-course support after training",
//     " Not enough hours of training",
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

//    const customTabs = [
//     {
//       title: "One-of-its-kind Curriculum",
//       content: "Digifine Academy’s full stack developer course in Mumbai comprises a comprehensive syllabus offering in-depth knowledge and training on pertinent concepts. Further, Digifine is the only institute all across India that trains you on a unique module called Next JS. The full stack developer training curriculum is divided into several broad sections: Front-End Development: HTML 5, CSS 3, JavaScript (JS), Bootstrap, React JS, Next JS, Angular Back-End Development: Python, NodeJS Database: MySQL, MongoDB (NoSQL) Frameworks: Django, ExpressJS",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Expert Faculty",
//       content: "Digifine Academy has a panel of industry experts who are responsible for designing a succinct and relevant full stack web development course curriculum. With the years of experience that these trainers possess in the technical and educational fields, you can get first-hand insights into these industries that can help you boost your career easily. A good teacher can make or break your learning process, and with Digifine’s full stack developer course in Mumbai, you can be sure of having access to the best faculty in the country!",
//             buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Practical Training",
//       content: "In a technical field like full stack development, only theoretical knowledge on various concepts will not suffice. This is why Digifine offers hands-on full stack developer training on top industry-relevant tools and technologies that help you build a dynamic skillset. Here, you will be working on challenging assignments on a daily, weekly and monthly basis, as well as learning through live projects and interesting case-studies. Your java full stack developer course with guaranteed placement will finally be complete with real-world, professional interactions and global exposure. ",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Certifications",
//       content: "Certifications never fail to add tremendous value to your portfolio and resume. Your full stack developer course in Mumbai at Digifine comes along with Professional certifications for frontend, backend and fullstack development. Not only this, but you will also receive a project completion certificate as well as a 3-months internship letter to help you kickstart your career with ease!",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Job Opportunities",
//       content: "At Digifine, you get access to the best java  full stack developer course with guaranteed placement at top companies all over India as well as abroad. There is no end to the numerous job opportunities that open up for you after you have received intensive full stack developer training at Digfine. The placement cell here not only helps you build a competent portfolio and a resume that stands out, but it also aims to make you job-ready with mock interviews and masterclasses on interview etiquette.",
//       buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//     {
//       title: "Post-Course Support",
//       content: "Digifine is the only full stack developer institute in India that not only helps you during your course, but also offers support even after you have graduated from the academy. The trainers here are always open to provide their guidance and mentorship to students, even after the completion of their full stack developer course in Mumbai.",
//             buttons: [
//                   { text: "Download Syllabus", onClick: () => {} },
//                   { text: "Apply Now", onClick: () => {} }
//                 ]
//     },
//   ]

function DSAI() {



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
    import("./data/DSAI/testimonials").then((m) => setTestimonials(m.default));
    import("./data/DSAI/steps").then((m) => setSteps(m.default));
    import("./data/DSAI/faqs").then((m) => setFaqs(m.default));
    import("./data/DSAI/customcontent").then((m)=> setcustomcontent(m.default));
    import("./data/DSAI/customDigifineFeatures").then((m)=>setcustomDigifineFeatures(m.default))
    import("./data/DSAI/customOtherCoursesFeatures").then((m)=>setcustomOtherCoursesFeatures(m.default))
    import("./data/DSAI/customCertificates").then((m)=> setcustomCertificates(m.default))
    import("./data/DSAI/customTabs").then((m)=>setcustomTabs(m.default))
    import("./data/DSAI/customTools").then((m)=>setcustomTools(m.default))
    // import("./data/MBA/customCertificates").then((module) => {
    //   setcustomCertificates(module.default);
    // });
  }, []);



    return (
      <>
      <Helmet>
        <title> AI Course, Mumbai | 100% guaranteed placements
        </title>
        <meta name='description' content='Looking for the best AI course in Mumbai? Learn real-world skills and stand out in the industry while getting 100% job guarantee with this data science & AI certification. '/>
      </Helmet>
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
            imageUrl="/images/banner-image/it/dsmlai.webp"
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

        </main>
      </>
      
    )
  }

export default DSAI