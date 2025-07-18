"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { sections } from "./data";

export default function TermsOfService() {
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Render sections list
  return (
    <div className="min-h-screen bg-primary-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Last Updated */}
        <p className="text-gray-500 text-[14px] mb-4">
          LAST UPDATED: NOVEMBER 27, 2024
        </p>

        {/* Title */}
        <h1 className="text-[24px] md:text-[40px] font-bold text-white mb-12">
          TERMS OF SERVICE
        </h1>

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

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-[80%] translate-x-[-80%]  py-3 bg-[#2A2A2A] gap-3  text-white px-5 rounded-full transition-all duration-200 z-50 flex items-center border border-[#898989] shadow-[0px_0px_10px_0px_#00000080]"
            aria-label="Scroll to top"
          >
            <span className="text-white">Back to Top</span>
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
    </div>
  );
}
