import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

type CTABannerProps = {
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
};

export const CTABanner = ({
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
}: CTABannerProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient bg-[length:200%_200%] bg-gradient-to-br from-[#E74C3C] via-[#5C4A6F] to-[#2C5F7C]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="reveal max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {ctaTitle || "Ready to See Your Loan Options?"}
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            {ctaSubtitle ||
              "Get started with transparent pricing and institutional-grade service"}
          </p>

          <Button
            size="lg"
            className="bg-rsc hover:bg-rsc-dark text-white font-semibold px-10 py-6 text-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl group"
          >
            {ctaButtonText || "Start Your Scenario"}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
