// app/layout.js

import "./globals.css"; // if you have global CSS


import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import FooterNav from "../component/Footer/FooterNav";
import ScrollToTop from "../component/CourseComponents/ScrollToTop/ScrollToTop";

export const metadata = {
  title: "Digifine Academy",
  description: "Job-ready IT courses in Mumbai",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="preload" href="/fonts/Raleway-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Raleway-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Raleway-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Raleway-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preload" as="image" href="https://d2o2utebsixu4k.cloudfront.net/1sr%20persona-d3d4f120e8b2439a99ec96449bbdb5be.webp" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

            <link rel="stylesheet" href="output.css" />
            <link rel="stylesheet" href="output2.css" />
            <link rel="stylesheet" href="output3.css" />
        </head>
        <body>
            <ScrollToTop />
            <Header />

            <main>
                {children}
            </main>

            <Footer />
            <FooterNav />
        </body>
    </html>
  );
}