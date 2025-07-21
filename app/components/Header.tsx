"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? "text-white" : "text-gray-500 hover:text-white"
    }`;
  };

  return (
    <>
      <header className="bg-primary-900 text-white border-b border-gray-700 sticky top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-10">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </Link>
              {/* Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/terms-of-service"
                  className={getNavLinkClass("/terms-of-service")}
                >
                  TERMS OF SERVICE
                </Link>
                <Link
                  href="/privacy-policy"
                  className={getNavLinkClass("/privacy-policy")}
                >
                  PRIVACY POLICY
                </Link>
                <Link
                  href="/subscription-term"
                  className={getNavLinkClass("/subscription-term")}
                >
                  SUBSCRIPTION TERM
                </Link>
                <Link href="/contact" className={getNavLinkClass("/contact")}>
                  CONTACT
                </Link>
              </nav>
            </div>

            {/* Try Chat AI Button */}
            <div className=" items-center hidden lg:flex">
              <Link
                href="https://play.google.com/store/apps/details?id=com.chat.chatai.chatbot.aichatbot&hl=en"
                className="bg-gradient-to-r from-[#26B77D] to-[#00B0A7] hover:from-[#229968] hover:to-[#009A91] text-white px-6 py-2 rounded-[20px] text-sm font-medium transition-all duration-200"
              >
                Try Chat AI
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.chat.chatai.chatbot.aichatbot&hl=en"
                className="bg-gradient-to-r from-[#26B77D] to-[#00B0A7] hover:from-[#229968] hover:to-[#009A91] text-white px-6 py-2 rounded-[20px] text-sm md:text-base font-medium transition-all duration-200"
              >
                Try Chat AI
              </Link>
              <button
                type="button"
                className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
                aria-label="Open menu"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Image
                  src="/images/menu.svg"
                  alt="Menu"
                  width={40}
                  height={40}
                  // className="h-10 w-10"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-full bg-gray-900 text-white">
            <div className="flex items-center justify-between p-6">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                aria-label="Close menu"
              >
                <Image
                  src="/images/cancel.svg"
                  alt="Close"
                  width={40}
                  height={40}
                  // className="h-6 w-6"
                />
              </button>
            </div>
            <nav className="px-6 border-t border-gray-700">
              <div className="space-y-6 h-[100vh] overflow-y-hidden pt-6">
                <Link
                  href="/terms-of-service"
                  className="block border-b border-gray-700 pb-6 text-white text-base md:text-lg font-medium hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  TERMS OF SERVICE
                </Link>
                <Link
                  href="/privacy-policy"
                  className="border-b border-gray-700 pb-6 block text-white text-base md:text-lg font-medium hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PRIVACY POLICY
                </Link>
                <Link
                  href="/refund-policy"
                  className="border-b border-gray-700 pb-6 block text-white text-base md:text-lg font-medium hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  REFUND POLICY
                </Link>
                <Link
                  href="/contact"
                  className="border-b border-gray-700 pb-6 block text-white text-base md:text-lg font-medium hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
