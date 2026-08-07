import React, { useEffect, useState, lazy } from 'react';
import { useParams } from 'react-router-dom';

const Breadcrumb = lazy(() => import('../../../CourseComponents/BreadCrumb/Breadcrumb'));
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const BlogDetail = () => {
  const { slug } = useParams(); // ✅ use slug instead of id
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/blogs`);
        const data = await response.json();

        if (response.ok) {
          // Parse blogs and find the one with matching slug
          const formatted = (data.data || []).map((blog) => {
            const contentArray =
              typeof blog.blogs_data === 'string'
                ? JSON.parse(blog.blogs_data)
                : blog.blogs_data;

            const slugBlock = contentArray.find((b) => b.type === 'slug');
            return {
              ...blog,
              blogs_data: contentArray,
              slug: slugBlock?.data?.text || `blog-${blog.id}`,
            };
          });

          const matchedBlog = formatted.find((b) => b.slug === slug);

          if (matchedBlog) {
            setBlogData(matchedBlog);
          } else {
            setError('Blog not found');
          }
        } else {
          setError(data.message || 'Failed to fetch blog detail');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching blog detail');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug]);

  if (loading)
    return <p className="text-center text-gray-500">Loading...</p>;

  if (error)
    return <p className="text-center text-red-500">Error: {error}</p>;

  if (!blogData)
    return <p className="text-center text-gray-500">No blog found</p>;

  const headlineSection = blogData.blogs_data.find(
    (section) => section.type === 'headline'
  );
  const headline = headlineSection?.data?.text || 'Blog Detail';

  return (
    <div className="bg-gray-50 pt-5">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blogs', url: '/blog' },
          { name: headline, url: `/blog/${slug}` },
        ]}
      />

      <div className="bg-gray-50 py-3 px-4 pb-9 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Headline */}
          {headlineSection && (
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              {headlineSection.data.text}
            </h1>
          )}

          {/* First Image */}
          {blogData.blogs_data.find((s) => s.type === 'image') && (
            <div className="my-6">
              <img
                src={
                  blogData.blogs_data.find((s) => s.type === 'image').data.fileUrl
                }
                alt={blogData.blogs_data.find((s) => s.type === 'image').data.alt || ""}
                className="rounded-xl shadow-lg w-full object-cover max-h-[600px] mx-auto"
                loading="lazy"
              />
            </div>
          )}

          {/* Render remaining sections */}
          {blogData.blogs_data
            .filter(
              (section, idx) =>
                section.type !== 'headline' &&
                !(section.type === 'image' &&
                  idx ===
                    blogData.blogs_data.findIndex((s) => s.type === 'image'))
            )
            .map((section, index) => {
              switch (section.type) {
                case 'paragraph':
                  return (
                    <p
                      key={index}
                      className="text-lg text-gray-700 leading-relaxed"
                    >
                      {section.data.text}
                    </p>
                  );

                case 'image':
                  return (
                    <div key={index} className="my-6">
                      <img
                        src={section.data?.fileUrl}
                        alt={section.data?.alt || ""}
                        className="rounded-xl shadow-lg w-full object-cover max-h-[600px] mx-auto"
                        loading="lazy"
                      />
                    </div>
                  );

                case 'subheadline': {
                  const Tag = section.data?.level || 'h3';
                  const sizeClasses = {
                    h1: 'text-4xl font-bold',
                    h2: 'text-3xl font-semibold',
                    h3: 'text-2xl font-semibold',
                    h4: 'text-xl font-medium',
                    h5: 'text-lg font-medium',
                    h6: 'text-base font-medium',
                  };
                  return (
                    <Tag
                      key={index}
                      className={`${sizeClasses[Tag]} text-gray-800 mt-8`}
                    >
                      {section.data?.text || ''}
                    </Tag>
                  );
                }

                case "link":
        return(
          <a href={section.data.linkurl} className="text-blue-600 hover:text-blue-800 underline underline-offset-2" target="_blank">{section.data.text}</a>
        )

                case 'list':
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 space-y-2 text-gray-700"
                    >
                      {section.data.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );

                case 'table':
                  return (
                    <div key={index} className="overflow-x-auto my-6">
                      <table className="min-w-full border border-gray-300 rounded-lg">
                        <thead className="bg-gray-100">
                          <tr>
                            {section.data.tableData?.headers?.map(
                              (header, i) => (
                                <th
                                  key={i}
                                  className="border px-4 py-2 text-left font-semibold text-gray-800"
                                >
                                  {header}
                                </th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {section.data.tableData?.rows?.map((row, rIdx) => (
                            <tr key={rIdx}>
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className="border px-4 py-2 text-gray-700"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );

                case 'faq':
                  return (
                    <div key={index} className="bg-white rounded-xl shadow p-6">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-4">
                        {section.data.faqs.map((faq, faqIndex) => (
                          <details
                            key={faqIndex}
                            className="border-b py-3 cursor-pointer transition duration-300 group"
                          >
                            <summary className="font-medium text-gray-900 flex justify-between items-center list-none group-open:font-semibold">
                              <span>{faq.question}</span>
                              <svg
                                className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </summary>
                            <p className="text-gray-600 mt-2 pl-1">
                              {faq.answer}
                            </p>
                          </details>
                        ))}
                      </div>
                    </div>
                  );

                default:
                  return null;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
