import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <div className="max-w-6xl px-4 md:px-8 flex flex-col justify-center w-full mx-auto">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        })}
      </script>

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="overflow-x-auto">
        <ol className="flex flex-nowrap items-center space-x-2 text-sm md:text-base">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index === items.length - 1 ? (
                <span className="font-medium text-gray-700 truncate max-w-[150px] sm:max-w-[250px] md:max-w-none">
                  {item.name}
                </span>
              ) : (
                <>
                  <a
                    href={item.url}
                    className="text-gray-500 hover:text-gray-700 font-medium truncate max-w-[100px] sm:max-w-[150px] md:max-w-none"
                  >
                    {item.name}
                  </a>
                  <span className="mx-1 text-gray-400">{'>'}</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;