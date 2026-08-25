import About from "../../component/Pages/About/About";
import { pageSchemas } from "../../lib/coursesData";

export const metadata = {
  title: "About Digifine Academy | Mumbai, Navi Mumbai & Hyderabad",
  description: "Meet the team behind Digifine Academy - industry experts with 10+ years' experience, delivering hands-on training in Marketing, Tech & Design since 2018.", 
  alternates: {
    canonical: "https://digifine.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {pageSchemas.about.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <About />
    </>
  );
}