"use client";

import React, { useEffect, useState, lazy, Suspense } from 'react';
// import { Link } from 'react-router-dom';
import Link from "next/link";
// import BlogCard from './BlogCmpnt/BlogCard';

const BlogCard = lazy(()=>import('./BlogCmpnt/BlogCard'))

const Breadcrumb = lazy(() => import('../../CourseComponents/BreadCrumb/Breadcrumb'));
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/blogs`);
        const data = await response.json();

        // if (response.ok) {
        //   setBlogPosts(data.data || []);
        // }
        if (response.ok) {
          const formatted = (data.data || []).map((blog) => {
            // blogs_data is stored as a JSON string in DB sometimes, so parse it safely
            const contentArray = typeof blog.blogs_data === 'string'
              ? JSON.parse(blog.blogs_data)
              : blog.blogs_data;

            const slugBlock = contentArray.find((b) => b.type === 'slug');
            const titleBlock = contentArray.find((b) => b.type === 'headline');

            return {
              ...blog,
              slug: slugBlock?.data?.text || `blog-${blog.id}`, // fallback slug
              title: titleBlock?.data?.text || 'Untitled Blog',
              blogs_data: contentArray
            };
          });

          setBlogPosts(formatted);
        } else {
          setError(data.message || 'Failed to fetch blogs');
        }
      } catch (err) {
        setError('Error fetching blogs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-500 text-lg animate-pulse">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-red-600 font-semibold text-lg">{error}</p>
      </div>
    );
  }

  return (
    <>
      <Suspense fallback={<div className="py-4 text-center text-gray-500">Loading breadcrumbs...</div>}>
        <Breadcrumb
          items={[
            { name: 'Home', url: '/' },
            { name: 'Blogs', url: '/blog' }
            // Individual blog detail breadcrumb handled on detail page
          ]}
        />
      </Suspense>

      <Suspense fallback={<div>loading...</div>}>
      <main className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {blogPosts.length > 0 ? (
          <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Blog posts">
            {blogPosts.map(({ blogs_data, slug ,id }) => (
              <Link
                href={`/blog/${slug}`}
                key={id}
                className="group block rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label={`Read more about ${blogs_data.headline || 'blog post'}`}
              >
                <BlogCard blogsData={blogs_data} />
              </Link>
            ))}
          </section>
        ) : (
          <div className="max-w-6xl mx-auto text-center text-gray-600 text-lg">
            <p>No blogs available at the moment. Please check back later.</p>
          </div>
        )}
      </main>
      </Suspense>
    </>
  );
};

export default Blog;