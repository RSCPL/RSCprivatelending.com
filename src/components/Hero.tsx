import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImageFallback from "@/assets/hero-construction-rendering.jpg";
import { urlFor } from "../lib/sanity";

type HeroProps = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  heroImage?: any;
};

export const Hero = ({
  heroTitle,
  heroSubtitle,
  heroButtonText,
  heroImage,
}: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll(".hero-animate");
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("is-visible");
      }, 100 * index);
    });
  }, []);

  const imageUrl = heroImage
    ? urlFor(heroImage).width(1600).url()
    : heroImageFallback;

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] overflow-hidden pt-24"
    >
      <div className="absolute inset-0 opacity-0 animate-fade-in">
        <img
          src={imageUrl}
          alt="Construction framing transitioning to architectural rendering"
          className="w-full h-full object-cover animate-scale-in"
          style={{
            transform: "scale(0.98)",
            animation: "scaleIn 500ms ease-out forwards",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,30,57,0.85)] via-[rgba(11,30,57,0.70)] to-[rgba(11,30,57,0.45)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center min-h-[90vh] py-20">
          <div className="max-w-3xl space-y-8">
            <h1 className="hero-animate reveal text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {heroTitle ||
                "Transparent, Reliable Private Financing for Real Estate Investors"}
            </h1>

            <p
              className="hero-animate reveal text-xl md:text-2xl text-gray-200 max-w-2xl"
              style={{ transitionDelay: "200ms" }}
            >
              {heroSubtitle ||
                "Close faster, scale smarter on DSCR, Bridge, Fix & Flip, and New Construction projects."}
            </p>

            <div
              className="hero-animate reveal flex flex-col sm:flex-row gap-4"
              style={{ transitionDelay: "350ms" }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-rsc hover:bg-rsc-dark text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl group"
                  >
                    {heroButtonText || "Get My Funding"}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/WhzyK9fTSZCrGWhdbwPD"
                    style={{
                      width: "100%",
                      height: "2448px",
                      border: "none",
                      borderRadius: "3px",
                    }}
                    id="inline-WhzyK9fTSZCrGWhdbwPD"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Get My Funding - Website Form"
                    data-height="2448"
                    data-layout-iframe-id="inline-WhzyK9fTSZCrGWhdbwPD"
                    data-form-id="WhzyK9fTSZCrGWhdbwPD"
                    title="Get My Funding - Website Form"
                  />
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold bg-transparent text-gold hover:bg-gold/10 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg"
              >
                View Loan Programs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
