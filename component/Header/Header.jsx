"use client";
import React, { useState, useEffect, lazy, useRef } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import MegaMenu from './MegaMenu';
import { megaMenuData } from './data/headerdata/megaMenuData';

import MegaMenuWrapper from './MegaMenuWrapper';
import FieldSelector from '../Sections/FieldSelector';

import Logo from './Logo';
import Dropdown from "./Dropdown";
import MobileMenue from './MobileMenue';

const recentSearches = [
  {
    name: "MBA in Digital Marketing",
    slug: "/ai-powered-digital-marketing-course-in-mumbai"
  },
  {
    name: "PG in Digital Marketing",
    slug: "/digital-marketing-course-in-mumbai"
  },
  {
    name: "Masters in Digital Marketing",
    slug: "/masters-in-digital-marketing-program-digital-marketing-masters-program-d-a-d-e"
  },
  {
    name: "Graduate in Digital Marketing",
    slug: "/graduate-in-digital-marketing-course-in-mumbai"
  },
  {
    name: "Executive Program in Digital Marketing",
    slug: "/digital-marketing-institute-in-mumbai"
  },

  // Graphic Design
  {
    name: "Graduate in Graphic Design",
    slug: "/graphic-design-course-in-mumbai-with-placement"
  },
  {
    name: "Master in Graphic Design",
    slug: "/advanced-graphic-design-course-in-mumbai-with-placement-in-mumbai"
  },
  {
    name: "Multimedia & Animation Course",
    slug: "/multimedia-course-animation-classes"
  },
  {
    name: "Video Editing Course",
    slug: "/video-editing-course-in-mumbai-with-placement"
  },
  {
    name: "UI/UX Design Course",
    slug: "/uiux-design-course"
  },

  // IT Courses
  {
    name: "Data Science & Machine Learning Program",
    slug: "/data-science-machine-learning-program"
  },
  {
    name: "Data Analytics Course",
    slug: "/data-analytics-course-in-mumbai"
  },
  {
    name: "Full Stack Developer Course",
    slug: "/full-stack-developer-course"
  },
  {
    name: "Full Stack Python Development Course",
    slug: "/full-stack-python-development-course"
  },
  {
    name: "Certification in Data Science & AI",
    slug: "/certification-in-data-science-and-ai"
  },
  {
    name: "PG in Data Science, ML & AI",
    slug: "/data-science-machine-learning-ai-course"
  }
];

function Header() {
  const router = useRouter(); // Call useRouter at top level
  const pathname = usePathname();

  const [navCourses, setNavCourses] = useState([]);
  const [exploreCourses, setExploreCourses] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);

  // Lazy load navCourses only when Header mounts
  useEffect(() => {
    import("./data/headerdata/navCourses").then((module) => {
      setNavCourses(module.default);
    });
  }, []);

  // Lazy load exploreCourses only when Header mounts
  useEffect(() => {
    import("./data/headerdata/exploreCourses").then((module) => {
      setExploreCourses(module.default);
    });
  }, []);

  // Lazy load searchOptions
  useEffect(() => {
    import("./data/headerdata/searchOptions").then((module) => {
      setSearchOptions(module.default);
    });
  }, []);

  const navItems = [
    { name: 'Home', slug: '/' },
    { 
      name: 'Courses', 
      slug: '/courses',
      children: navCourses
    },
    { name: 'About Us', slug: '/about' },
    { name: 'Contact Us', slug: '/contact' },
    { name: 'Blog', slug: '/blog' },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null); 
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (name) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSearchOptions, setFilteredSearchOptions] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        setIsExploreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = searchOptions.filter((option) =>
      option.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSearchOptions(filtered);
  };
 
  useEffect(() => {
    if (activeDropdown === "Courses") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  
    return () => document.body.classList.remove("no-scroll");
  }, [activeDropdown]);

  const handleSearchSubmit = () => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) return;

    const foundOption = searchOptions.find((option) => {
      const nameMatch = option.name.toLowerCase().includes(query);
      const slugMatch = option.slug.toLowerCase().includes(query);

      const keywordMatch = option.keywords?.some(keyword =>
        keyword.toLowerCase().includes(query) ||
        query.includes(keyword.toLowerCase())
      );

      return nameMatch || slugMatch || keywordMatch;
    });

    if (foundOption) {
      router.push(foundOption.slug);
    } else {
      alert("No matching course found. Please try again.");
    }
  };

  const toggleCourses = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
    setIsExploreOpen(false);
  };

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
    setActiveDropdown(null);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow w-full z-10 relative top-0">
      <div className="max-w-7xl container mx-auto flex justify-between items-center py-4 px-6 relative">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <h2 className="text-2xl font-bold text-blue-600">
            <Link href="/">
              <Logo />
            </Link>
          </h2>
          <div className="relative flex-1 md:flex-none">
            <div className="flex items-center border border-gray-300 rounded-md w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                suppressHydrationWarning
                className="w-full h-full px-4 py-2 focus:outline-none placeholder:text-transparent sm:placeholder:text-gray-400"
              />
              <button
                onClick={handleSearchSubmit}
                suppressHydrationWarning
                className="px-4 py-2 text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {(isSearchFocused || searchQuery) && (
              <div
                className="absolute top-full -left-[100%] md:left-0 mt-2 max-w-[100vw] md:w-full md:max-w-md bg-white p-4 rounded-md shadow-md overflow-auto"
                style={{ zIndex: 9999 }}
              >
                <ul className="space-y-2">
                  {!searchQuery && (
                    <>
                      <p className="text-sm text-gray-500">Recent Searches</p>
                      {recentSearches.map((option) => (
                        <li key={option.name}>
                          <Link
                            href={option.slug}
                            className="block text-gray-700 hover:text-blue-600"
                            onClick={() => setSearchQuery('')}
                          >
                            {option.name}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                  {searchQuery && filteredSearchOptions.map((option) => (
                    <li key={option.name}>
                      <Link
                        href={option.slug}
                        className="block text-gray-700 hover:text-blue-600"
                        onClick={() => setSearchQuery('')}
                      >
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="md:hidden flex justify-center items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              suppressHydrationWarning
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <MobileMenue
              navItems={navItems}
              mobileDropdown={mobileDropdown}
              setMobileDropdown={setMobileDropdown}
              mobileSubDropdown={mobileSubDropdown}
              setMobileSubDropdown={setMobileSubDropdown}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          </React.Suspense>
        )}

        <div className="hidden md:flex items-center gap-12">
          <nav className="flex space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleCourses(item.name)}
                      suppressHydrationWarning
                      className={`flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 ${
                        activeDropdown === item.name ? 'text-blue-600' : ''
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 mt-0.5 transform transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {activeDropdown === item.name && (
                      item.name === "Courses" ? (
                        <>
                          <div
                            className="fixed inset-0 top-28 bg-black/20 backdrop-blur-sm z-30"
                            onClick={() => setActiveDropdown(null)}
                          ></div>

                          <div
                            className={`fixed inset-x-0 top-[72px] bg-white shadow-lg z-40 overflow-hidden transition-all duration-500 ease-out
                              ${activeDropdown === "Courses" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                          >
                            <MegaMenuWrapper isOpen={activeDropdown === "Courses"} duration={500}>
                              <MegaMenu data={megaMenuData} />
                            </MegaMenuWrapper>
                          </div>
                        </>
                      ) : (
                        <Dropdown
                          items={item.children}
                          onClose={() => setActiveDropdown(null)}
                          position="right"
                          className="left-[10%]"
                        />
                      )
                    )}
                  </>
                ) : (
                  <Link
                    href={item.slug}
                    className={`font-medium hover:text-blue-600 ${
                      isActive(item.slug) ? 'text-blue-600' : 'text-gray-700'
                    }`}
                    aria-current={isActive(item.slug) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="relative dropdown-container">
            <button
              onClick={toggleExplore}
              suppressHydrationWarning
              className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Explore Courses 
            </button>
            {isExploreOpen && (
              <Dropdown 
                items={exploreCourses} 
                onClose={() => setIsExploreOpen(false)}
                position="right"
              />
            )}
          </div>
        </div>
      </div>
      <FieldSelector />
    </header> 
  );
}

export default Header;