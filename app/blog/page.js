import Blog from "../../component/Pages/Blog/Blog";

export const metadata = {
  title: "Digifine Blog | Digital Marketing, Design & Tech",
  description: "Stay updated with the latest trends, tutorials, and career tips in Digital Marketing, IT & Design curated by Digifine Academy's expert trainers and industry mentors.",
  alternates: {
    canonical: "https://digifine.in/blog",
  },
};

export default function BlogPage() {
    return <Blog />;
}