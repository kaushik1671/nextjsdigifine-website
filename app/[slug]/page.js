import { coursesData } from "../../lib/coursesData";
import { getSchema } from "../../lib/schema";

// SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = coursesData[slug];

  if (!course) {
    return {
      title: "Course Not Found",
      description: "No course found",
    };
  }

  const seo = course.seo;

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical: seo.canonical,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: "Digifine",
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },
  };
}

// PAGE RENDER
export default async function SlugPage({ params }) {
  const { slug } = await params;
  const course = coursesData[slug];

  if (!course) {
    return <div>Course Not Found</div>;
  }

  const Component = course.component;

  const schemaData = getSchema(course, slug);

  return (
    <>
      {/* JSON-LD Schema */}
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <Component />
    </>
  );

  console.log("Component:", Component);
}