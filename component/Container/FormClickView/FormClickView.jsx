import React from 'react'

function FormClickView() {

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
      <CareerForm redirectlink = {redirectlink} btntext={formBtnText}/>
    </Suspense>
    </div>
  </div>
</div>
  )
}

export default FormClickView