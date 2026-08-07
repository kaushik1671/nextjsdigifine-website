
import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";


function MobileMenue({ navItems = [], setMobileMenuOpen }) {
  const navigate = useRouter();

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => {
      const hasChildren = Array.isArray(item.children) && item.children.length > 0;
      const isOpen = openItems[item.name];

      return (
        <div key={item.name} className={`pl-${level * 4} mt-2`}>
          {hasChildren ? (
            <>
              <button
                onClick={() => toggleItem(item.name)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-left font-medium"
              >
                <span>{item.name}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="mt-2 space-y-2">
                  {renderMenuItems(item.children, level + 1)}
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate.push(item.slug);
              }}
              className="block text-gray-600 hover:text-blue-600 text-left w-full"
            >
              {item.name}
            </button>
          )}
        </div>
      );
    });
  };

  return (
    <div className="fixed inset-0 flex z-50">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/50 z-40"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Full-screen menu */}
      <div className="ml-auto w-full bg-white h-full p-6 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto">
        {/* Header with Close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-5">
          {renderMenuItems(navItems)}
        </nav>
      </div>
    </div>
  );
}

MobileMenue.propTypes = {
  navItems: PropTypes.array.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
};

export default MobileMenue;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// function MobileMenue({ navItems = [], setMobileMenuOpen }) {
//   const navigate = useRouter();

//   // Store expanded items using their name as keys
//   const [openItems, setOpenItems] = useState({});

//   // Toggle logic for expanding/collapsing items
//   const toggleItem = (key) => {
//     setOpenItems((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   // Recursive rendering function
//   const renderMenuItems = (items, level = 0) => {
//     return items.map((item) => {
//       const hasChildren = Array.isArray(item.children) && item.children.length > 0;
//       const isOpen = openItems[item.name];

//       return (
//         <div key={item.name} className={`pl-${level * 4} mt-2`}>
//           {hasChildren ? (
//             <>
//               <button
//                 onClick={() => toggleItem(item.name)}
//                 className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-left font-medium"
//               >
//                 <span>{item.name}</span>
//                 <svg
//                   className={`w-4 h-4 transform transition-transform ${
//                     isOpen ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
//               {isOpen && (
//                 <div className="mt-2 space-y-2">
//                   {renderMenuItems(item.children, level + 1)}
//                 </div>
//               )}
//             </>
//           ) : (
//             <button
//               onClick={() => {
//                 setMobileMenuOpen(false);
//                 navigate(item.slug);
//               }}
//               className="block text-gray-600 hover:text-blue-600 text-left w-full"
//             >
//               {item.name}
//             </button>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="absolute flex z-50 right-0 top-0 w-full">
//       {/* Background overlay */}
//       <div
//         className="absolute inset-0 bg-black/50 z-40"
//         onClick={() => setMobileMenuOpen(false)}
//       />

//       {/* Slide-in menu */}
//       <div className="ml-auto w-3/4 max-w-sm bg-white shadow-lg h-full p-6 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto">
//         {/* Header with Close button */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
//           <button
//             onClick={() => setMobileMenuOpen(false)}
//             className="text-gray-600 hover:text-gray-900 text-2xl"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col space-y-5">
//           {renderMenuItems(navItems)}
//         </nav>
//       </div>
//     </div>
//   );
// }

// MobileMenue.propTypes = {
//   navItems: PropTypes.array.isRequired,
//   setMobileMenuOpen: PropTypes.func.isRequired,
// };

// export default MobileMenue;