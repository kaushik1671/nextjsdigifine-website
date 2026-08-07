import React from 'react'
import PortfolioCard from './PortfolioCard'


const portfolioData = [
    {
      title: "Web Design",
      description: "Creative and modern web designs tailored to your brand.",
      image:"/images/portfolio/thumb.webp",
      link:"https://www.behance.net/gallery/202137933/My-Portfolio",
    },
    {
      title: "App Development",
      description: "Mobile applications with smooth UX and scalable architecture.",
      image:"/images/portfolio/thumb.webp",
      link:"https://www.behance.net/gallery/202137933/My-Portfolio",

    },
    {
      title: "Digital Marketing",
      description: "Marketing strategies that increase visibility and engagement.",
      image:"/images/portfolio/thumb.webp",
      link:"https://www.behance.net/gallery/202137933/My-Portfolio",

    },
    {
      title: "Branding",
      description: "Building strong, memorable brands for your business.",
      image:"/images/portfolio/thumb.webp",
      link:"https://www.behance.net/gallery/202137933/My-Portfolio",

    },
    {
      title: "SEO Optimization",
      description: "Improve your search ranking with expert SEO techniques.",
      image:"/images/portfolio/thumb.webp",
      link:"https://www.behance.net/gallery/202137933/My-Portfolio",

    },
    {
      title: "Content Creation",
      description: "High-quality content to engage your audience effectively.",
      image:"/images/portfolio/thumb.webp",
      link:"https://www.behance.net/gallery/202137933/My-Portfolio",

    }
  ];

function PortfolioSection( {title = "students works", subtitlePart1="Students", subtitleHighlight="Portfolio" } ) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-9">
      <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-2 w-full">
          <h2 className="font-semibold text-center text-sm text-greyscale-1 md:tracking-tight xs:tracking-tight md:mb-2 whitespace-nowrap capitalize">
            {title}
          </h2>
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
            <p className="font-semibold text-4xl tracking-tight gap-2 md:w-[596px] whitespace-break-spaces">
              {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection