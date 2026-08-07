import { useRef, useState, useEffect } from "react";

const MegaMenuWrapper = ({ isOpen, children, duration = 300 }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      if (contentRef.current) {
        setMaxHeight(contentRef.current.scrollHeight);
      }
    } else {
      setMaxHeight(0);
      const timeout = setTimeout(() => setShouldRender(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, duration]);

  if (!shouldRender) return null;

  return (
    <div
      ref={contentRef}
      className="overflow-hidden transition-all ease-out"
      style={{
        maxHeight: `${maxHeight}px`,
        opacity: isOpen ? 1 : 0,
        transition: `max-height ${duration}ms ease, opacity ${duration}ms ease`,
      }}
    >
      {children}
    </div>
  );
};

export default MegaMenuWrapper;