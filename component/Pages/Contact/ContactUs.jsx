"use client";
import React,{lazy} from 'react';

// import { Helmet } from 'react-helmet-async';

const Form = lazy(()=>import("../../Container/CareerForm"))

const ContactUs = () => {
  return (
    <>
    {/* <Helmet>
        <title>
        {/* Video Editing Course, Mumbai | 100% Job Placement 
        Digifine Institute Of Digital Marketing, Graphic Design & More | Contact Us
        </title>
        <meta name="description" content="Connect with us & apply for best program in digital marketing, graphic design, data science and upskill your career now." />
        <link rel="canonical" href="https://digifine.in/online-video-editing-course"></link>
      </Helmet> */}
    <section className="bg-gray-50 text-gray-800 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-12">Get in touch with us now!</h2>

        {/* Locations */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {[{
            title: 'Mumbai - Contact Info',
            address: [
              'A Wing, 303, 3rd Floor, Vertex Vikas Building,',
              'Court Ln, Above A2Z Xerox, Opposite Railway Station,',
              'Andheri East, Mumbai, Maharashtra 400069'
            ],
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7205418753974!2d72.8490324!3d19.1199119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d8dd9a8411%3A0xf4014bbce03395d7!2sDigifine%20Academy%20%7C%20Digital%20Marketing%2C%20I.T.%2C%20Graphic%20Design%20%26%20Video%20Editing%20Institute%20in%20Andheri%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1775900671622!5m2!1sen!2sin'
          }, {
            title: 'Navi Mumbai - Contact Info',
            address: [
              '610, 611, 6th Floor, Vashi Infotech Park,',
              'Sector 30A, Vashi, Navi Mumbai,',
              'Maharashtra 400703'
            ],
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9696402193986!2d72.9952648!3d19.0650724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16a1f13fa3f%3A0x55e10730cac72380!2sDigifine%20Academy%20%7C%20Digital%20Marketing%2C%20I.T.%2C%20Graphic%20Design%20%26%20Video%20Editing%20Institute%20in%20Vashi%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1775900761105!5m2!1sen!2sin'
          },{
            title: 'Hyderabad - Contact Info',
            address: [
              '3rd & 4th Floor,SITA CITY ONE,',
              'SITA CITY ONE Venkatarambagh,,',
              'Begumpet, Hyderabad, Telangana 500016'
            ],
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.379087549703!2d78.39266049999999!3d17.4894082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91922683190b%3A0x1aa3a76ef5e0199e!2sDigifine%20Academy%20%7C%20Digital%20Marketing%2C%20I.T.%2C%20Graphic%20Design%20%26%20Video%20Editing%20Institute%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1775900819549!5m2!1sen!2sin'
          }].map(({ title, address, mapSrc }, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">{title}</h3>
              <div className="mb-4 space-y-1">
                {address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <p>Email: <a href="mailto:info@adbizit.com" className="text-blue-600 hover:underline">info@adbizit.com</a></p>
                <p className="pt-2">Office Hours:</p>
                <p>Mon–Sat: 10:00 am – 8:00 pm</p>
                <p>Sunday: 10:00 am – 7:00 pm</p>
                <p className="pt-2 space-x-2">
                  <a href="tel:08879025425" className="text-blue-600 hover:underline">+91 8879025425</a>
                  <a href="tel:08169004863" className="text-blue-600 hover:underline">+91 8169004863</a>
                </p>
              </div>
              <div className="aspect-video rounded shadow-lg overflow-hidden">
                <iframe
                  src={mapSrc}
                  title={title}
                  className="w-full h-full border-0"
                  loading="lazy"
                  aria-label={title}
                />
              </div>
            </div>
          ))}
        </div>


          <div className='md:w-[60%] w-full mx-auto flex justify-center'>
        <Form/>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;