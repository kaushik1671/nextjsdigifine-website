import React, {useState , useEffect,Suspense} from 'react'
import CareerForm from '../../../Container/CareerForm';

function LearnSupport() {


const [isVisible, setIsVisible] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);
    const [formBtnText, setFormBtnText] = useState('Apply Now'); 
  
    useEffect(() => {
      const timeout = setTimeout(() => setIsVisible(true), 100); // small delay for smoother entrance
      return () => clearTimeout(timeout);
    }, []);
  
    const openFormModal = (btnText) => {
    setFormBtnText(btnText); // set dynamic text
    setShowFormModal(true);
  };
    const closeFormModal = () => setShowFormModal(false);


  return (
    <section className="bg-gray-50 py-20 px-6" id="learner-success">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
    
    {/* Left Sticky Heading Block */}
    <div className="md:w-1/2 relative space-y-6 px-4">
      <h2 className="uppercase text-sm font-medium tracking-wide text-gray-500">Learner Support & Success</h2>
      <h3 className="text-4xl font-bold leading-tight text-gray-900">
        What gives us <span className="text-blue-600">an edge?</span>
      </h3>
      <p className="text-lg text-gray-600">
        Digifine empowers students with globally recognised skills and industry exposure for success in the digital economy.
      </p>
      <button 
       onClick={() => openFormModal('Apply Now')}  
      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition">
        Get Started with Digifine
      </button>
    </div>




    {showFormModal && (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/30 backdrop-blur-sm ">
      {/* Modal Card */}
      <div
        className={`
          relative bg-white rounded-[20px] shadow-xl
          w-full max-w-3xl
          p-6
          overflow-y-auto
          max-h-[90vh]
        `}
      >
        {/* Close button */}
        <button
          onClick={closeFormModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
    
        {/* CareerForm with fixed width inside modal */}
        <div className="w-full md:w-[600px] mx-auto">
          <Suspense fallback={<div>loading...</div>}>
          <CareerForm courseTitle='Get a Call to Know More About Us' btntext='Know More'/>
        </Suspense>
        </div>
      </div>
    </div>
    )}

    {/* Right Features Grid */}
    <div className="md:w-1/2 grid sm:grid-cols-2 gap-6 px-2">
      {[
        {
          count: "1000+",
          title: "Students Placed",
          desc: "Empowering learners with top-notch placements.",
          img: "/images/aboutus/learnSection/logo.webp",
          wide: false,
        },
        {
          count: "50+",
          title: "Placement Partners",
          desc: "Top brands actively recruit from Digifine.",
          img: "/images/aboutus/learnSection/newspaper.png",
          wide: false,
        },
        {
          count: "10+",
          title: "Live Projects & Case Studies",
          desc: "Earn industry-recognized international certificates.",
          img: "/images/aboutus/learnSection/mobile.png",
          wide: true,
        },  
        {
          count: "200+",
          title: "Certifications",
          desc: "Interactive classes with experts to sharpen your skills.",
          img: "/images/aboutus/learnSection/flow.webp",
          wide: false,
        },{
          count: "15+",
          title: "Tools Covered",
          desc: "Interactive classes with experts to sharpen your skills.",
          img: "/images/aboutus/learnSection/flow.webp",
          wide: false,
        },
      ].map(({ count, title, desc, img, wide }, i) => (
        <div
          key={i}
          className={`relative bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between min-h-[200px] ${
            wide ? "col-span-2" : ""
          }`}
        >
          <div>
            <h4 className="text-3xl font-bold text-gray-800">{count}</h4>
            <h5 className="text-xl font-semibold mt-1 text-gray-900">{title}</h5>
            <p className="text-gray-600 text-sm mt-2">{desc}</p>
          </div>
          <div className="absolute bottom-4 right-4 w-16 h-16">
            <img src={img} alt={title} loading="lazy" className="w-full h-full object-contain" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default LearnSupport