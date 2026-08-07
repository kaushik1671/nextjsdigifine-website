import React , {useState} from 'react';

const Icon = ({ src, hoverSrc, alt, text, onClick }) => {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary-main hover:grayscale-0"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`Select ${text}`}
    >
      <img src={isHovered ? hoverSrc : src} alt={alt} loading="lazy" className="w-8 h-8 transition-all duration-300 ease-in-out" />
      <span className="text-sm font-medium text-center capitalize whitespace-nowrap">{text}</span>
    </div>
  );
};

export default Icon;