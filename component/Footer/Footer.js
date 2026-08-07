"use client";
import React, { useState } from "react";
import LogoWhite from "../Header/LogoWhite";
import { footerSections, quickLinksSection } from "./data/Footer";
import SmartLink from "./SmartLink";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Logo & About */}
          <div>
            <LogoWhite />
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Digifine Academy delivers highly advanced programs in Digital Marketing, AI-Powered Tech & Graphic Design - with guaranteed placements. Based in Mumbai, we bring accessible, industry-ready education to revolutionize India's digital future through simulation-based learning and live projects.
            </p>
          </div>

          {/* Program Columns Direct Render */}
          {footerSections.map((section, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <SmartLink
                      to={link.href}
                      type={link.type}
                      className="hover:text-yellow-500 transition-colors duration-200"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Directions Column */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { label: '+91 81690-04863', link: 'tel:+918169004863' },
                { label: '+91 88790-25425', link: 'tel:+918879025425' },
                { label: 'info@adbizit.com', link: 'mailto:info@adbizit.com' },
              ].map(({ label, link }, index) => (
                <li key={index}>
                  <a href={link} className="hover:text-yellow-500 transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex flex-row gap-3 items-center pt-1 text-lg">
                <a href="https://www.instagram.com/digifine/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                  <FaInstagram />
                </a>
                <span className="text-gray-500">|</span>
                <a href="https://wa.me/918169004863?text=" target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-yellow-500 mt-6 mb-4">Direction</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/qEHUGGA3WtNFVKQj6" className="hover:text-yellow-500 transition-colors duration-200">Mumbai (Get Directions)</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/5PBdbQc7cecRDn6s5" className="hover:text-yellow-500 transition-colors duration-200">Navi Mumbai (Get Directions)</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.379087549703!2d78.39266049999999!3d17.4894082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91922683190b%3A0x1aa3a76ef5e0199e!2sDigifine%20Academy%20%7C%20Digital%20Marketing%2C%20I.T.%2C%20Graphic%20Design%20%26%20Video%20Editing%20Institute%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1775900819549!5m2!1sen!2sin" className="hover:text-yellow-500 transition-colors duration-200">Hyderabad (Get Directions)</a></li>
            </ul>
          </div>

        </div>

        {/* Dynamic Horizontal Strip from quickLinksSection */}
        {quickLinksSection && (
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Title */}
            <h4 className="text-lg font-semibold text-yellow-500 whitespace-nowrap">
              {quickLinksSection.title}
            </h4>

            {/* Quick Links */}
            <div className="flex-1 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
              {quickLinksSection.links.map((link, index) => (
                <React.Fragment key={index}>
                  <SmartLink
                    to={link.href}
                    type={link.type}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                  >
                    {link.label}
                  </SmartLink>
                  {index < quickLinksSection.links.length - 1 && (
                    <span className="text-gray-600 hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        )}

        {/* Bottom Bar (Locations Button & Enroll Now) */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <button
            onClick={() => setShowLocations(!showLocations)}
            className="inline-flex items-center gap-2 text-yellow-500 hover:underline text-sm focus:outline-none"
          >
            {showLocations ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"/></svg>
                Hide Locations
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"/></svg>
                View Programs Across India
              </>
            )}
          </button>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a
              href="https://digifine.in/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 font-semibold hover:underline text-sm sm:text-base"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Dynamic Locations Section */}
        {showLocations && (
          <div className="mt-4 text-sm text-gray-300 max-w-4xl leading-relaxed">
            <a href="http://digifine.in/digital-marketing-course-in-mumbai/" className="text-yellow-500 hover:underline">Mumbai</a> | Pune | Thane | Vashi | Navi Mumbai | Vasai | Dadar | Ghatkopar | Mulund | Nashik | Nagpur | Chembur | Borivali | Andheri | Ahmednagar | Chennai | Patna | Rajkot | Vadodara | Kanpur | Jaipur | Bangalore | Delhi | Noida | Hyderabad | Gurgaon | Udaipur | Surat | Lucknow | Kolkata | Indore | Chandigarh | Ahmedabad
          </div>
        )}

        <div className="mt-6 mb-6 md:mb-0">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Digifine Academy. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;