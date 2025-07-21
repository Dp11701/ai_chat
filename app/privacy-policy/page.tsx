"use client";

import { useState } from "react";
import Image from "next/image";
import { sections } from "./data";

export default function PrivacyPolicy() {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  const handleBackClick = () => {
    setCurrentSection(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Render content page when a section is selected
  if (currentSection) {
    const section = sections.find((s) => s.id === currentSection);

    if (!section) return null;

    return (
      <div className="min-h-screen bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="flex items-center mb-8 hover:opacity-80 transition-opacity"
          >
            <Image src="/images/back.svg" alt="Back" width={24} height={24} />
          </button>

          {/* Title */}
          <h1 className="text-[24px] md:text-[40px] font-bold text-white mb-1">
            {section.title}
          </h1>

          {/* Last Updated */}
          <p className="text-gray-500 text-sm mb-8">
            LAST UPDATED: NOVEMBER 27, 2024
          </p>

          {/* Content */}
          <div
            className="space-y-6 custom-content"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 py-3 right-[50%] translate-x-[50%] bg-[#2A2A2A] gap-3  text-white px-5 rounded-full transition-all duration-200 z-50 flex items-center border border-[#898989] shadow-[0px_0px_10px_0px_#00000080]"
            aria-label="Scroll to top"
          >
            Back to Top
            <Image
              src="/images/arrow.svg"
              alt="Scroll to top"
              className="bg-[#2A2A2A]"
              width={16}
              height={16}
            />
          </button>
        )}
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-primary-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-white text-[14px] md:text-[20px]">
            BEGAMOB Studio built iKame Global Team to specialize in making free
            mobile apps. This SERVICE is provided free of charge by BEGAMOB
            Studio and is intended for use as is.
          </p>
          <br />
          <p className="text-white text-[14px] md:text-[20px]">
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decided to use our Service.
          </p>
          <br />
          <p className="text-white text-[14px] md:text-[20px]">
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone ex
          </p>
          <br />
          <p className="text-white text-[14px] md:text-[20px] mb-4">
            The terms used in this Privacy Policy have the same meaning as in
            our Terms and Conditions, which is accessible apps of iKame Global
            Team unless otherwise defined in this Privacy Policy.
          </p>

          {/* Sections */}
          <div className="space-y-1">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className="w-full flex items-center py-6 text-left hover:bg-gray-900/20 transition-colors duration-200"
                >
                  <h2 className="text-[14px] md:text-[20px] font-medium text-white">
                    {section.title}
                  </h2>
                  <div className="flex-1 mx-6 border-b border-gray-800"></div>
                  <Image
                    src="/images/expand.svg"
                    alt="arrow-down"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
