// app/layout.js

import "./globals.css"; // if you have global CSS

import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import FooterNav from "../component/Footer/FooterNav";
import ScrollToTop from "../component/CourseComponents/ScrollToTop/ScrollToTop";
import Script from "next/script";
import localFont from "next/font/local";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const raleway = localFont({
  src: [
    {
      path: "../public/fonts/Raleway-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Raleway-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});


export const metadata = {
  metadataBase: new URL("https://digifine.in"),

  title: {
    default: "Digifine Academy | Digital Marketing, IT & Graphic Design Courses",
    template: "%s | Digifine Academy",
  },

  description:
    "Learn Digital Marketing, IT & Graphic Design at Digifine Academy, with 100% placement Assistance, global certifications & live projects. Enroll now.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className} suppressHydrationWarning>
        <head>
            {/* <link rel="preload" href="/fonts/Raleway-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Raleway-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Raleway-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            <link rel="preload" href="/fonts/Raleway-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/> */}



            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link rel="preload" as="image" href="https://d2o2utebsixu4k.cloudfront.net/1sr%20persona-d3d4f120e8b2439a99ec96449bbdb5be.webp" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

            <link rel="stylesheet" href="./globals.css" />

            
            
            <Script
  id="google-tag-manager"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P6MCP2M');`,
  }}
/>

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-QFEG0K7Z98"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-QFEG0K7Z98');
  `}
</Script>

          <meta
            name="google-site-verification"
            content="o5E-7v0oapuUt7G2GfU8ikBnKNIQQHSpToQrU9XsLwk"
          />

          <Script id="microsoft-clarity"
  strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "9gacx26o3a");`,
            }}
          />

            {/* Facebook Pixel */}

          <Script id="facebook-pixel"
      strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '733157131397045');
              fbq('track', 'PageView');`,
            }}
          />

          {/* ================================ */}
          {/* OPENAI ADS CONVERSION PIXEL      */}
          {/* ================================ */}

          <Script id="openai-ads-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{
    __html: `
      window.oaiq = window.oaiq || function () {
        (window.oaiq.q = window.oaiq.q || []).push(arguments);
      };

      oaiq("init", {
        pixelId: "TBWfZ3jNGeSsgLXtZcHHeo"
      });
    `,
  }}
/>

<Script
  id="openai-ads-pixel-sdk"
  src="https://bzrcdn.openai.com/sdk/oaiq.min.js"
  strategy="afterInteractive"
/>
          

        </head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P6MCP2M"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=733157131397045&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
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