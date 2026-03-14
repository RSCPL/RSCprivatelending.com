import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { client } from "../lib/sanity";
import { siteSettingsQuery, ourStoryPageQuery } from "../lib/queries";

type SiteSettingsData = {
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
  primaryCtaText?: string;
  primaryCtaLink?: string;
};

type OurStoryPageData = {
  pageTitle?: string;
  pageSubtitle?: string;
  heroImage?: any;
  sections?: {
    title?: string;
    body?: string;
    image?: any;
  }[];
  testimonials?: {
    quote?: string;
    author?: string;
  }[];
};

const OurStory = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [siteSettings, setSiteSettings] = useState<SiteSettingsData | null>(
    null,
  );
  const [ourStoryPage, setOurStoryPage] = useState<OurStoryPageData | null>(
    null,
  );

  const fallbackTestimonials = [
    {
      quote:
        "Red Sun Capital closed one of my multifamily deals after two lenders fell through. Their clarity and discipline made all the difference.",
      author: "— John D., Real Estate Investor",
    },
    {
      quote:
        "Working with RSC has been a game-changer for my investment business. Their speed and structured approach allowed me to close deals with confidence.",
      author: "— Sarah M., Property Developer",
    },
    {
      quote:
        "The transparency and communication from the RSC team is unmatched. No hidden fees, no surprises—just straightforward, professional lending.",
      author: "— Michael T., Real Estate Investor",
    },
  ];

  const testimonials =
    ourStoryPage?.testimonials && ourStoryPage.testimonials.length > 0
      ? ourStoryPage.testimonials
      : fallbackTestimonials;

  useEffect(() => {
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".hero-animate");
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("is-visible");
        }, index * 150);
      });
    }

    client.fetch(siteSettingsQuery).then((data) => {
      setSiteSettings(data);
    });

    client.fetch(ourStoryPageQuery).then((data) => {
      setOurStoryPage(data);
    });
  }, []);

  const sections = ourStoryPage?.sections || [];
  const section1 = sections[0];
  const section2 = sections[1];
  const section3 = sections[2];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        companyName={siteSettings?.companyName}
        primaryCtaText={siteSettings?.primaryCtaText}
        primaryCtaLink={siteSettings?.primaryCtaLink}
      />

      <section
        ref={heroRef}
        className="relative min-h-[85vh] overflow-hidden pt-24 bg-[#3B4E6B]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="flex items-center min-h-[85vh] py-20">
            <div className="max-w-3xl space-y-8">
              <h1 className="hero-animate reveal text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                {ourStoryPage?.pageTitle ||
                  "Private Lending. More Disciplined. More Reliable."}
              </h1>

              <p
                className="hero-animate reveal text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                style={{ transitionDelay: "200ms" }}
              >
                {ourStoryPage?.pageSubtitle ||
                  "We've evolved into a more institutional, structured, and dependable lending partner for real estate investors nationwide."}
              </p>

              <p
                className="hero-animate reveal text-lg text-gray-400 max-w-2xl"
                style={{ transitionDelay: "300ms" }}
              >
                Built on quiet confidence, strong processes, and investor-first
                execution.
              </p>

              <div
                className="hero-animate reveal pt-4"
                style={{ transitionDelay: "400ms" }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-rsc hover:bg-rsc-dark text-white font-semibold px-10 py-6 text-lg rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl"
                    >
                      {siteSettings?.primaryCtaText || "Submit a Scenario"}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-12">
            {section1?.title || "A More Disciplined Red Sun Capital"}
          </h2>

          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {section1?.body ||
                `Red Sun Capital has matured. Our processes are more structured, our lending discipline sharper, and our execution more reliable.
This evolution is subtle but intentional — a natural progression built on years of experience.

We've been here for years, but today we operate with institutional-grade lending standards while maintaining the relationship-focused approach that sets us apart. This is Red Sun Capital refined.

Our commitment remains the same: empowering real estate investors with financing solutions that work. But now, we deliver with even greater structure, clarity, and professionalism.`}
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-16">
            {section2?.title || "Our Mission"}
          </h2>

          <div className="grid md:grid-cols-[60%_40%] gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {section2?.body ||
                  `To empower real estate investors through disciplined private lending, transparent communication, and reliable execution.

We've built a structured lending platform that removes the guesswork from private financing. Our processes are refined, our criteria clear, and our communication consistent.

Every loan is underwritten with discipline and transparency. We've eliminated the chaos of traditional private lending by implementing institutional-grade standards while maintaining the flexibility and speed that real estate investors need.`}
              </p>
            </div>

            <div className="flex items-start justify-center pt-4">
              <Card className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-center">
                    <Target className="w-10 h-10 text-rsc" />
                  </div>
                  <h3 className="text-xl font-bold text-navy text-center">
                    Our Vision
                  </h3>
                  <p className="text-center text-gray-700 leading-relaxed">
                    To be the most trusted and structured private lending
                    partner for real estate investors nationwide, known for our
                    institutional processes and relationship-focused approach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-rsc" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Client-Focused</h3>
              <p className="text-gray-700 leading-relaxed">
                We prioritize investors' goals with personalized solutions and
                consistent communication.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-rsc" />
              </div>
              <h3 className="text-2xl font-bold text-navy">
                Disciplined Lending
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We underwrite with clarity and structure, ensuring every loan is
                supported by sound analysis and transparent terms.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-rsc" />
              </div>
              <h3 className="text-2xl font-bold text-navy">
                Execution & Reliability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We measure our success by successful closings — executed with
                speed, consistency, and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#3B4E6B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {section3?.title || "Why Choose Red Sun Capital?"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto whitespace-pre-line">
              {section3?.body ||
                "Built on professional principles with the flexibility real estate investors need"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-rsc">
                Speed With Structure
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Our refined processes allow us to close deals quickly without
                sacrificing discipline. Experience certainty from application to
                funding.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-rsc">Experienced Team</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Decades of combined real estate and lending experience lead to
                smarter, more reliable decisions. You're working with seasoned
                professionals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-rsc">
                Flexible Terms, Clear Criteria
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                We offer adaptable loan structures backed by transparent lending
                standards. Customized solutions with no surprises.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-rsc">
                Institutional-Level Transparency
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                No vague terms. No hidden fees. Only clear communication and
                straightforward processes from start to finish.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-rsc hover:bg-rsc-dark text-white font-semibold px-10 py-6 text-lg rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl"
                >
                  {siteSettings?.primaryCtaText || "Get Started Today"}
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
                  id="inline-WhzyK9fTSZCrGWhdbwPD-cta"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Get My Funding - Website Form"
                  data-height="2448"
                  data-layout-iframe-id="inline-WhzyK9fTSZCrGWhdbwPD-cta"
                  data-form-id="WhzyK9fTSZCrGWhdbwPD"
                  title="Get My Funding - Website Form"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-navy via-navy-light to-[#5A3A4E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
              {testimonials[currentTestimonial].quote}
            </p>
            <div className="pt-4">
              <p className="text-lg text-gray-400">
                {testimonials[currentTestimonial].author}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-rsc w-8"
                        : "bg-white/30 w-2"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer
        companyName={siteSettings?.companyName}
        phone={siteSettings?.phone}
        email={siteSettings?.email}
        address={siteSettings?.address}
        footerText={siteSettings?.footerText}
        tagline={siteSettings?.tagline}
        copyrightText={siteSettings?.copyrightText}
        disclaimer1={siteSettings?.disclaimer1}
        disclaimer2={siteSettings?.disclaimer2}
        disclaimer3={siteSettings?.disclaimer3}
      />
    </div>
  );
};

export default OurStory;
