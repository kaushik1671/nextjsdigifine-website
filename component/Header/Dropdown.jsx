import React, { useState, useRef } from 'react'
// import { Link } from 'react-router-dom';
import Link from "next/link";

const Dropdown = ({ items, onClose, position = 'left' , className }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
  
    const closeTimeout = useRef(null);
  
    const handleMouseEnter = (name) => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
      setOpenSubmenu(name);
    };
  
    const handleMouseLeave = () => {
      closeTimeout.current = setTimeout(() => {
        setOpenSubmenu(null);
      }, 3000); // ⬅️ 400ms delay (adjust if needed)
    };
  
    return (
      <div 
        className={`absolute ${position || 'left-[35%]'} ${className} mt-2 w-56 bg-white shadow-lg rounded-md z-50 transition-opacity delay-[2000ms]`}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item) => (
          <div key={item.name} className="relative">
            <div 
              className="flex justify-between items-center hover:bg-blue-50 cursor-pointer"
              onClick={() => {
                if (item.children) {
                  setOpenSubmenu(item.name === openSubmenu ? null : item.name);
                }
              }}
              onMouseEnter={() => handleMouseEnter(item.name)}
              // onMouseLeave={()=> handleMouseLeave(item.name)}
            >
              {item.children ? (
                <>
                  <span className="block px-4 py-2 text-gray-700 text-sm">
                    {item.name}
                  </span>
                  <button className="pr-2">
                    <svg 
                      className="w-4 h-4 text-gray-500"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              ) : (
                <Link
                  href={item.slug}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 text-sm w-full"
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              )}
            </div>
            
            {item.children && openSubmenu === item.name && (
              <Dropdown 
                items={item.children} 
                onClose={onClose}
                position="right"
                className="top-[-10%] right-[101%] "
              />
            )}
          </div>
        ))}
      </div>
    );
  };

export default Dropdown