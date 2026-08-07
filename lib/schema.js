export const getSchema = (course, slug = "") => {
  // Guard clause: Exit early if course or course.seo is undefined/null
  if (!course || !course.seo) {
    return [];
  }

  // Safe extraction with default fallbacks
  const url = course.seo.canonical || "";
  const title = course.seo.title || "";
  const description = course.seo.description || "";

  // Ensure slug is a valid string before calling .includes()
  const safeSlug = typeof slug === "string" ? slug : "";

  // Location Detection
  let loc;

  if (safeSlug.includes("vashi") || safeSlug.includes("navi-mumbai")) {
    // Vashi
    loc = {
      name: "Digifine Academy | Digital Marketing, I.T., Graphic Design & Video Editing Institute in Vashi, Navi Mumbai",
      city: "Navi Mumbai",
      state: "Maharashtra",
      address: "6th Floor, Vashi Infotech Park,",
      pincode: "400703",
      phone: "+91 8169004863",
    };
  } else if (safeSlug.includes("hyderabad")) {
    // Hyd
    loc = {
      name: "Digifine Academy | Digital Marketing, I.T., Graphic Design & Video Editing Institute in Hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      address: "Sita City One Leelanagar, Ameerpet",
      pincode: "500016",
      phone: "+91 8169004863",
    };
  } else {
    // Mumbai
    loc = {
      name: "Digifine Academy | Digital Marketing, I.T., Graphic Design & Video Editing Institute in Andheri, Mumbai",
      city: "Mumbai",
      state: "Maharashtra",
      address: "A/303 Vertex Vikas",
      pincode: "400069",
      phone: "+91 8169004863",
    };
  }

  return [
    // ✅ Local Business
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: loc.name,
      telephone: loc.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressRegion: loc.state,
        postalCode: loc.pincode,
        addressCountry: "IN",
      },
    },

    // ✅ WebPage
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: url,
      description: description,
    },

    // ✅ Course
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: title,
      description: description,
      provider: {
        "@type": "Organization",
        name: "Digifine",
        sameAs: url,
      },
    },

    // ✅ Breadcrumb
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://digifine.in/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title,
          item: url,
        },
      ],
    },
  ];
};