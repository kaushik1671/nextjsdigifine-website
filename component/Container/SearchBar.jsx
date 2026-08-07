// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const SearchBar = ({ placeholder, onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-558px relative">
//       <input
//         type="search"
//         placeholder={placeholder}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-[90%] px-4 py-2 text-greyscale-main placeholder:text-greyscale-2 border border-system-fill-bg-accent-3 rounded-8 focus:outline-none focus:ring-2 focus:ring-primary-main"
//         aria-label="Search courses"
//       />
//       <button
//         type="submit"
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-main p-2 rounded-8"
//         aria-label="Search"
//       >
//         <i className="icon-search text-white text-lg"></i>
//       </button>
//     </form>
//   );
// };

// SearchBar.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   onSearch: PropTypes.func.isRequired,
// };

// export default SearchBar;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState('');
  const [showTrending, setShowTrending] = useState(false);

  const trendingTopics = [
    'Digital Marketing',
    'Data Science',
    'Artificial Intelligence',
    'Web Development',
    'Cloud Computing',
    'Machine Learning',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setShowTrending(false);
    }
  };

  const handleTrendingClick = (topic) => {
    setQuery(topic);
    onSearch(topic);
    setShowTrending(false);
  };

  return (
    <div className="w-[90%] max-w-558px relative">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowTrending(true)}
          onBlur={() => setTimeout(() => setShowTrending(false), 200)}
          className="w-full px-4 py-2 pr-12 text-greyscale-main placeholder:text-greyscale-2 border border-system-fill-bg-accent-3 rounded-8 focus:outline-none focus:ring-2 focus:ring-primary-main"
          aria-label="Search courses"
        />
        
        {/* Always visible search icon */}
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary-main transition-colors"
          aria-label="Search"
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
      </form>

      {/* Trending Topics Dropdown */}
      {showTrending && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-8 z-10 border border-gray-100">
          <ul className="py-2">
            {trendingTopics.map((topic, index) => (
              <li
                key={index}
                className="px-4 py-2 text-greyscale-main hover:bg-greyscale-1 cursor-pointer transition-colors"
                onMouseDown={(e) => e.preventDefault()} // Prevent input blur
                onClick={() => handleTrendingClick(topic)}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;