// import React ,{lazy} from 'react'
// import WhoCard from './WhoCard'


// function WhoDigifineFor({WhoDigifine}) {
//   return (
//     <>
//     <div className="py-16 max-w-6xl mx-auto flex flex-row">
//     <div className='flex flex-wrap space-x-6'>
//     {
//         WhoDigifine.map((data)=>(<WhoCard imagesrc={data.imagesrc} title={data.title} paragraph={data.paragraph}/>))
//     }
//     </div>
//     <div>
//         <img className='w-[50%]' src='https://www.reshot.com/static/home-pages/illustrations_astronaut_kevin.webp'/>
//         <div></div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default WhoDigifineFor


// import React from 'react'
// import WhoCard from './WhoCard'

// function WhoDigifineFor({ WhoDigifine }) {
//   return (
//     <>
//       <div className="py-16 max-w-6xl mx-auto flex flex-row justify-between items-start">

//         {/* LEFT SIDE CARDS */}
//         <div className="flex flex-wrap gap-6 w-1/2">
//           {WhoDigifine.map((data, index) => (
//             <WhoCard
//               key={index}
//               imagesrc={data.imagesrc}
//               title={data.title}
//               paragraph={data.paragraph}
//             />
//           ))}
//         </div>

//         {/* RIGHT SIDE IMAGE WITH CIRCLE */}
//         <div className="relative w-1/2 flex justify-center">

//           {/* Background Circle */}
//           <div className="absolute w-72 h-72 bg-indigo-200 rounded-full -z-10 top-10 right-10 opacity-60"></div>

//           {/* Foreground Image */}
//           <img
//             className="w-[60%] relative z-20"
//             src="https://www.reshot.com/static/home-pages/illustrations_astronaut_kevin.webp"
//             alt="Illustration"
//           />
//         </div>

//       </div>
//     </>
//   )
// }

// export default WhoDigifineFor



// import React , {lazy , Suspense} from 'react'
// import WhoCard from './WhoCard'


// const SpritePhysics = lazy(()=>import("../../Container/SpritePhysics/SpritePhysics"))

// function WhoDigifineFor({ WhoDigifine }) {
//   // Define circles with increasing sizes
//   const circles = [72, 96, 120, 144] // width/height in Tailwind units (w-72 = 18rem)

//   return (
//     <>
//       <div className="pt-20 max-w-6xl mx-auto flex flex-row justify-between items-start my-20">

//         {/* LEFT SIDE CARDS */}
//         <div className="flex flex-wrap gap-6 w-1/2">
//           {WhoDigifine.map((data, index) => (
//             <WhoCard
//               key={index}
//               imagesrc={data.imagesrc}
//               title={data.title}
//               paragraph={data.paragraph}
//             />
//           ))}
//         </div>

//         {/* RIGHT SIDE IMAGE WITH MULTIPLE CIRCLES */}
//         <div className="relative w-1/2 flex justify-center items-center ">

//           <Suspense fallback={<div>matter loading .....</div>}>
//            <div className="absolute left-32 -top-40 border-[10px] rounded-full border-black overflow-hidden">
//           <SpritePhysics
//         width={550}
//         height={550}
//         boxImage="/images/matter/title.webp"
//         ballImage="/images/matter/title.webp"
//       />
//       </div>
//       </Suspense>
//         </div>

//       </div>
//     </>
//   )
// }

// export default WhoDigifineFor


// import React, { lazy, Suspense } from "react";
// import WhoCard from "./WhoCard";

// const SpritePhysics = lazy(() =>
//   import("../../Container/SpritePhysics/SpritePhysics")
// );

// function WhoDigifineFor({ WhoDigifine }) {
//   return (
//     <>
//       <div className="pt-16 lg:pt-20 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start my-12 lg:my-20 px-4 lg:px-0">

//         {/* LEFT SIDE CARDS */}
//         <div className="flex flex-wrap gap-6 w-full lg:w-1/2 order-1">
//           {WhoDigifine.map((data, index) => (
//             <WhoCard
//               key={index}
//               imagesrc={data.imagesrc}
//               title={data.title}
//               paragraph={data.paragraph}
//             />
//           ))}
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 order-2">

//           {/* MOBILE / TABLET IMAGE (lightweight) */}
//           <div className="block lg:hidden">
//             <img
//               src="/images/matter/title.webp"
//               alt="Digifine learning"
//               className="w-64 sm:w-72 mx-auto rounded-full shadow-lg"
//             />
//           </div>

//           {/* DESKTOP ONLY – PHYSICS ANIMATION */}
//           <div className="hidden lg:block">
//             <Suspense fallback={<div>Loading...</div>}>
//               <div className="absolute left-32 -top-40 border-[10px] rounded-full border-black overflow-hidden">
//                 <SpritePhysics
//                   width={550}
//                   height={550}
//                   boxImage="/images/matter/title.webp"
//                   ballImage="/images/matter/title.webp"
//                 />
//               </div>
//             </Suspense>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default WhoDigifineFor;



import React, { lazy, Suspense , useMemo} from "react";
import WhoCard from "./WhoCard";

const SpritePhysics = lazy(() =>
  import("../../Container/SpritePhysics/SpritePhysics")
);




function WhoDigifineFor({ WhoDigifine }) {

  const boxImages = useMemo(
    () => [
      "/images/btnimages/btn1.webp",
      "/images/btnimages/btn2.webp",
      "/images/btnimages/btn3.webp",
      "/images/btnimages/btn4.webp",
      "/images/btnimages/btn5.webp",
      "/images/btnimages/btn6.webp",
      "/images/btnimages/btn7.webp",
      "/images/btnimages/btn8.webp",
      "/images/btnimages/btn9.webp",
      "/images/btnimages/btn10.webp"
    ],
    []
  );
  
  const ballImages = useMemo(
    () => [
      "/images/btnimages/btn11.webp",
      "/images/btnimages/btn12.webp",
      "/images/btnimages/btn13.webp",
      "/images/btnimages/btn14.webp",
      "/images/btnimages/btn15.webp",
      "/images/btnimages/btn16.webp",
    ],
    []
  );
  return (
    <>
      <div className="pt-16 lg:pt-20 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start my-12 lg:my-20 px-4 lg:px-0">

        {/* LEFT SIDE CARDS */}
        <div className="flex flex-wrap gap-6 w-full lg:w-1/2 order-2 lg:order-1">
          {WhoDigifine.map((data, index) => (
            <WhoCard
              key={index}
              imagesrc={data.imagesrc}
              title={data.title}
              paragraph={data.paragraph}
            />
          ))}
        </div>

        {/* RIGHT SIDE SPRITE */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0 order-1 lg:order-2">

          <Suspense fallback={<div>matter loading...</div>}>
            <div
              className="
                relative
                lg:absolute
                lg:left-32 lg:-top-40
                border-[6px] lg:border-[10px]
                rounded-full
                border-black
                overflow-hidden
              "
            >
              <div 
                className="block lg:hidden"
                >
                                <SpritePhysics
                width={280}        // mobile size
                height={280}
                boxImage="/images/matter/title.webp"
                ballImage="/images/matter/title.webp"
              />
                </div>


             <div
                className="hidden lg:block"
                >
             <SpritePhysics
                width={550}        // desktop size (unchanged)
                height={550}
                boxImage={boxImages}
                ballImage={ballImages}
              />
             </div>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default WhoDigifineFor;
