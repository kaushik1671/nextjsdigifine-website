// import React from 'react'

// function WhyChoose({cardData}) {
//   return (
//     <>
//       <section className="bg-white py-16 max-w-6xl mx-6 md:mx-auto">
//   {/* <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Why Choose <span className='text-blue-500 '>Digifine?</span></h2> */}
  
//   {/* Main container for all the cards */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//     {cardData.map((card, index) => {
//       let gridSpanClass = '';

//       // Set unique grid spans for different cards
//       if (index === 0) gridSpanClass = 'lg:col-span-2'; // 2 columns
//       else if (index === 1) gridSpanClass = 'lg:col-span-1'; // 3 columns
//       else if (index === 2) gridSpanClass = 'lg:col-span-1'; // Full width
//       else if (index === 3) gridSpanClass = 'lg:col-span-2';
//       else if (index === 4) gridSpanClass = 'lg:col-span-2';
//       else if (index === 5) gridSpanClass = 'lg:col-span-1';
//       else gridSpanClass = 'lg:col-span-1'; // Default for other cards

//       return (
//         <div
//           key={index}
//           className={`group relative transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] hover:bg-blue-500 hover:text-white hover:border-blue-500 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-2xl ${gridSpanClass}`}
//         >
//           <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
          
//           <div className="z-10">
//             <div className="flex justify-start items-center space-x-4 mb-4">
//               <div className="bg-white p-1 rounded-full shadow-md">
//               {/* <span className={`transition-all duration-300 group-hover:text-blue-500 ${card.iconClass}`}>{card.icon}</span> */}
//               {/* <img src={card.img} alt="icon" className='w-8'/> */}
//               <div className="group relative w-8 h-8">
//   <img
//     src={card.img}
//     className="absolute inset-0 w-8 h-8 transition-opacity group-hover:opacity-0"
//   />
//   <img
//     src={card.hoverImg}
//     className="absolute inset-0 w-8 h-8 opacity-0 transition-opacity group-hover:opacity-100"
//   />
// </div>



//               </div>
//               <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white">{card.title}</h3>
//             </div>
//             <p className="text-gray-700 group-hover:text-white text-sm">{card.content}</p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </section>
//     </>
//   )
// }

// export default WhyChoose


import React from 'react'

function WhyChoose({ cardData }) {
  return (
    <>
      <section className="bg-white py-16 max-w-6xl mx-6 md:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((card, index) => {
            let gridSpanClass = '';

            if (index === 0) gridSpanClass = 'lg:col-span-2';
            else if (index === 1) gridSpanClass = 'lg:col-span-1';
            else if (index === 2) gridSpanClass = 'lg:col-span-1';
            else if (index === 3) gridSpanClass = 'lg:col-span-2';
            else if (index === 4) gridSpanClass = 'lg:col-span-2';
            else if (index === 5) gridSpanClass = 'lg:col-span-1';
            else gridSpanClass = 'lg:col-span-1';

            return (
              <div
                key={index}
                className={`
                  group relative transition-transform duration-300 ease-in-out 
                  border border-gray-200 rounded-lg p-6 shadow-md
                  ${gridSpanClass}

                  md:hover:translate-y-[-10px] 
                  md:hover:bg-blue-500 
                  md:hover:text-white 
                  md:hover:border-blue-500 
                  md:hover:shadow-2xl
                `}
              >
                <div className="absolute inset-0 bg-blue-500 opacity-0 md:group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />

                <div className="z-10">
                  <div className="flex justify-start items-center space-x-4 mb-4">
                    <div className="bg-white p-1 rounded-full shadow-md">
                      <div className="group relative w-8 h-8">
                        <img
                          src={card.img}
                          className="absolute inset-0 w-8 h-8 transition-opacity md:group-hover:opacity-0"
                          alt="icon"
                        />
                        <img
                          src={card.hoverImg}
                          className="absolute inset-0 w-8 h-8 opacity-0 transition-opacity md:group-hover:opacity-100"
                          alt="icon hover"
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-800 md:group-hover:text-white">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 md:group-hover:text-white text-sm">
                    {card.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default WhyChoose