import React from "react";

const timeline = [
  {
    year: "2010",
    events: [
      {
        month: "November",
        text: "Buffer was created as part of a Startup Sprint",
        link: "https://news.ycombinator.com/item?id=1956119",
      },
    ],
  },
  {
    year: "2011",
    events: [
      {
        month: "August",
        text: "Buffer was accepted into AngelPad startup accelerator, with initial $120,000 investment",
      },
      {
        month: "December",
        text: "Buffer raised a small seed round of $330,000, to bring total funding to $450,000",
        link: "https://buffer.com/resources/the-17-awesome-investors-in-our-400000-seed-round-and-how-we-met-them/",
      },
    ],
  },
  {
    year: "2012",
    events: [
      {
        month: "January",
        text: "Our founders had visa troubles and started traveling while growing Buffer, the team grew to 7 people by August",
        link: "https://buffer.com/resources/from-0-to-1000000-users-the-journey-and-statistics-of-buffer/#visa-troubles-leaving-san-francisco-for-hong-kong-january-2012",
      },
    ],
  },
  // ...continue adding 2013–2023 as in original...
];

const AboutUsTimeline = () => (
  <section className="relative py-24 bg-white antialiased">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-medium">A brief history</h2>
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-gray-300 rounded" />
        {timeline.map(({ year, events }) => (
          <div key={year} className="relative mb-16 pl-16">
            <h3 className="text-xl font-semibold mb-4">{year}</h3>
            <div className="absolute left-8 top-0">
              <div className="w-4 h-4 bg-blue-600 rounded-full" />
            </div>

            {events.map(({ month, text, link }, i) => (
              <div key={i} className="pl-6 mb-6 border-l-2 border-gray-300 max-w-xl">
                <div className="absolute left-4 mt-1 w-2 h-2 bg-white border-2 border-blue-600 rounded-full" />
                <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {month}
                </span>
                <p className="mt-2 text-gray-700">{text}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Read more
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none opacity-30">
        <picture>
          <source srcSet="/static/about/webp/blue-arrow-doodle.webp" type="image/webp" />
          <img
            src="/static/about/webp/blue-arrow-doodle.webp"
            alt=""
            className="max-w-xs"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  </section>
);

export default AboutUsTimeline;
