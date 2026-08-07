// src/components/BlogDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;


const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const navigate = useRouter();
  // Fetch all blogs on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  const token = localStorage.getItem("authToken");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/api/blogs`);

      // ✅ Ensure response shape matches { message, data }
      if (res.data && Array.isArray(res.data.data)) {
        setBlogs(res.data.data);
      } else {
        setBlogs([]);
        console.error("Unexpected API response:", res.data);
      }

      setError("");
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs. Please try again later.");
      setBlogs([]); // prevent stale data showing
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      const res = await fetch(`${API_BASE}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to delete blog");

      // ✅ Remove blog from state instantly
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleEdit = (blog) => {
    // Optional: store current blog in localStorage to preload quickly
    // localStorage.setItem("currentBlog", JSON.stringify(blog));
    navigate.push(`/admindashboard/blog/edit/${blog.id}`,{ state: { editMode: true, blog } });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog Dashboard</h1>

      {/* Loading state */}
      {loading && <p className="text-blue-500">Loading blogs...</p>}

      {/* Error state */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Empty state */}
      {!loading && blogs.length === 0 && !error && (
        <p className="text-gray-500">No blogs available.</p>
      )}

      {/* Blog list */}
      {!loading && blogs.length > 0 && (
        <ul className="space-y-4">
          {blogs.map((blog) => {
            // ✅ Extract headline from blogs_data
            const headlineBlock = blog.blogs_data?.find(
              (block) => block.type === "headline"
            );
            const headline = headlineBlock?.data?.text || "Untitled Blog";

            return (
              <li
                key={blog.id}
                className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
              >
                <span className="font-medium text-gray-800">{headline}</span>
                <div className="flex space-x-2">
                <button
                    onClick={() => handleEdit(blog)}
                    className="px-3 py-1 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    Edit
                  </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  disabled={deletingId === blog.id}
                  className={`px-3 py-1 rounded-lg text-white transition-colors ${
                    deletingId === blog.id
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {deletingId === blog.id ? "Deleting..." : "Delete"}
                </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BlogDashboard;