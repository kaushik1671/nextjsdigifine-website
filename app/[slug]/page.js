import { notFound } from "next/navigation";
import { coursesData } from "../../lib/coursesData"; // Aapke data file ka exact path lagayein

// SEO Metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Clean slug for metadata matching
  const cleanSlug = slug ? slug.replace(/\/$/, "").toLowerCase() : "";
  const course = coursesData?.[cleanSlug];

  // Fallback metadata if course or course.seo is missing/undefined
  if (!course || !course.seo) {
    return {
      title: "Course Not Found | Digifine",
      description: "No course information available.",
    };
  }

  // Safely extract properties with fallback defaults
  const {
    title = "Digifine Academy",
    description = "",
    canonical = "",
    image = "",
  } = course.seo;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Digifine",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// Default React Component (Required by Next.js)
export default async function CoursePage({ params }) {
  const { slug } = await params;
  const cleanSlug = slug ? slug.replace(/\/$/, "").toLowerCase() : "";
  const course = coursesData?.[cleanSlug];

  // Agar course na mile toh 404 page show karega
  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title || "Course Details"}</h1>
      <p className="text-gray-600">{course.description || "Course description goes here..."}</p>

      {/* Yahan aapka baaki course page ka UI/JSX aayega */}
    </main>
  );
}