import ContactUs from "../../component/Pages/Contact/ContactUs";
import { pageSchemas } from "../../lib/coursesData";

export const metadata = {
  title: "Contact Digifine Academy | Mumbai, Navi Mumbai & Hyderabad",
  description: "Get in touch with Digifine Academy for admissions, course details and career guidance. Contact our Mumbai, Navi Mumbai or Hyderabad centres today.",
  alternates: {
    canonical: "https://digifine.in/contact",
  },
};

export default function ContactPage() {
    return <>
      {pageSchemas.about.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))} <ContactUs />
      </>;
}