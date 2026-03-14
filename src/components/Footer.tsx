import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import rscLogo from "@/assets/rsc-logo.png";
import aaplBadge from "@/assets/aapl-badge.png";
import equalHousingBadge from "@/assets/equal-housing-badge.png";

type FooterProps = {
  companyName?: string;
  phone?: string;
  email?: string;
  address?: string;
  footerText?: string;
  tagline?: string;
  copyrightText?: string;
  disclaimer1?: string;
  disclaimer2?: string;
  disclaimer3?: string;
};

export const Footer = ({
  companyName,
  phone,
  email,
  address,
  footerText,
  tagline,
  copyrightText,
  disclaimer1,
  disclaimer2,
  disclaimer3,
}: FooterProps) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const element = footerRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const displayCompanyName = companyName || "RSC Private Lending";
  const displayFooterText =
    footerText ||
    "Institutional-grade private lending for real estate investors nationwide.";
  const displayPhone = phone || "+1-808-427-3312";
  const displayEmail = email || "info@rscprivatelending.com";
  const displayAddress =
    address || "118 Vintage Park Blvd #W317\nHouston, TX 77070";
  const displayCopyright =
    copyrightText ||
    "© 2025 Red Sun Capital, LLC dba RSC Private Lending. All Rights Reserved.";
  const displayDisclaimer1 =
    disclaimer1 ||
    "RSC Private Lending is a trade name (DBA) of Red Sun Capital, LLC, a private lending and brokerage company. All financing is offered exclusively for business or commercial purposes and is not intended for personal, family, or household use.";
  const displayDisclaimer2 =
    disclaimer2 ||
    "Loan products may not be available in all states or jurisdictions. Nothing contained herein constitutes a commitment to lend. All financing is subject to borrower qualification, due diligence, underwriting review, and final credit approval at the sole discretion of Red Sun Capital, LLC.";
  const displayDisclaimer3 =
    disclaimer3 ||
    "Rates, terms, programs, and fees are subject to change without notice and may vary based on borrower profile, property type, transaction structure, and applicable state regulations.";

  return (
    <footer className="bg-navy text-gray-300">
      <div ref={footerRef} className="reveal py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <img
                src={rscLogo}
                alt={displayCompanyName}
                className="h-40 w-auto mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-left mb-6">
                {displayFooterText}
              </p>
              <div className="flex gap-4 items-center">
                <img
                  src={aaplBadge}
                  alt="American Association of Private Lenders Member"
                  className="h-20 w-auto"
                />
                <img
                  src={equalHousingBadge}
                  alt="Equal Housing Opportunity"
                  className="h-20 w-auto"
                />
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/our-story"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/loan-products"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Loan Products
                  </a>
                </li>
                <li>
                  <a
                    href="/loan-products#loan-calculator"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="/#faqs"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">
                Resources
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="https://app.rscprivatelending.com/login/agent"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Broker Login
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.rscprivatelending.com/login/client"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Borrower Login
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-notice"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-rsc mt-1 flex-shrink-0" />
                  <a
                    href={`tel:${displayPhone}`}
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    {displayPhone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-rsc mt-1 flex-shrink-0" />
                  <a
                    href={`mailto:${displayEmail}`}
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    {displayEmail}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-rsc mt-1 flex-shrink-0" />
                  <span className="text-gray-300 whitespace-pre-line">
                    {displayAddress}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy-lighter border-t border-navy-light py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="text-gray-400 text-sm max-w-4xl">
              <p className="mb-4">{displayCopyright}</p>
              <p className="mb-4">{displayDisclaimer1}</p>
              <p className="mb-4">{displayDisclaimer2}</p>
              <p className="mb-4">{displayDisclaimer3}</p>
              <div className="flex gap-6">
                <a
                  href="/privacy-notice"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Privacy Notice
                </a>
                <a
                  href="/terms-of-service"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
