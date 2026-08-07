import { useEffect, useRef, useState } from "react";

const data = [
  { date: "Jan 2018", text: "Launch of the School of Marketing at Digifine Academy, Mumbai" },
  { date: "Feb 2019", text: "Launch of the School of Design at Digifine Academy, Mumbai" },
  { date: "Apr 2020", text: "A successful transition from classroom training to live online programs to students worldwide (during the pandemic)" },
  { date: "Sept 2022", text: "Launch of the School of Tech at Digifine Academy, Mumbai" },
  { date: "Oct 2023", text: "Launch of India’s 1st MBA-level Integrated MarTech Program" },
  { date: "Dec 2024", text: "Launch of Digifine Academy’s Navi Mumbai, Vashi branch" },
  { date: "Oct 2025", text: "Launch of Digifine Academy in Hyderabad" },
];

export default function Timeline() {
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a1c30] text-white py-20">
      <h2 className="text-5xl text-center mb-20 font-bold">
      A Brief History
      </h2>

      <div className="relative max-w-5xl mx-auto px-4 md:px-10">
        
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-600 transform -translate-x-1/2"></div>

        {data.map((item, i) => {
          const isLeft = i % 2 === 0;
          const isVisible = visible.includes(String(i));

          return (
            <div
              key={i}
              data-index={i}
              ref={(el) => (refs.current[i] = el)}
              className={`mb-16 flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`
                  w-[45%] p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg
                  transition-all duration-700
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-300">
                  {item.date}
                </h3>
                <p className="text-sm text-gray-200">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}