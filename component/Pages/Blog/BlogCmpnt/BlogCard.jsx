// import React from 'react';

// const BlogCard = ({ blogsData }) => {
//   const headline = blogsData.find((b) => b.type === 'headline')?.data.text || 'Untitled Blog';
//   const paragraph = blogsData.find((b) => b.type === 'paragraph')?.data.text || '';
//   const imageUrl = blogsData.find((b) => b.type === 'image')?.data.fileUrl;

//   return (
//     <div className="bg-white h-[420px] w-full flex flex-col rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
//       {/* Image Section */}
//       <div className="h-[180px] w-full overflow-hidden">
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt={headline}
//             loading="lazy"
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
//             <span>No Image</span>
//           </div>
//         )}
//       </div>

//       {/* Text Section */}
//       <div className="flex-1 flex flex-col justify-between p-4">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{headline}</h3>
//           <p className="text-sm text-gray-600 mt-2 line-clamp-4">
//             {paragraph}
//           </p>
//         </div>
//         <div className="mt-4">
//           <span className="text-blue-600 font-medium text-sm hover:underline">Read More →</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import React from 'react';

const BlogCard = ({ blogsData }) => {
  const headline = blogsData.find((b) => b.type === 'headline')?.data.text || 'Untitled Blog';
  const paragraph = blogsData.find((b) => b.type === 'paragraph')?.data.text || '';
  const imageUrl = blogsData.find((b) => b.type === 'image')?.data.fileUrl;

  // Aaj ki date ko format karne ke liye (Jaise: 12 Nov 2026)
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="bg-white h-[450px] w-full flex flex-col rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-xl">
      {/* Image Section */}
      <div className="h-[180px] w-full overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={headline}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            <span>No Image</span>
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          {/* Date yahan display hogi */}
          <span className="text-xs text-gray-400 font-medium">{currentDate}</span>
          
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mt-1">{headline}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {paragraph}
          </p>
        </div>
        <div className="mt-4">
          <span className="text-blue-600 font-medium text-sm hover:underline cursor-pointer">Read More →</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;