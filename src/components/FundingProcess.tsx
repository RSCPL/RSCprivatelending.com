import { FileText, Search, FileCheck, Handshake } from "lucide-react";
import { useEffect, useRef } from "react";

type FundingProcessStep = {
  title?: string;
  description?: string;
};

type FundingProcessProps = {
  fundingProcessTitle?: string;
  fundingProcessSubtitle?: string;
  fundingProcessSteps?: FundingProcessStep[];
};

const fallbackSteps = [
  {
    icon: FileText,
    title: "Submit Scenario",
    description: "Share your deal details through our streamlined online form.",
  },
  {
    icon: FileCheck,
    title: "Evaluation and Term Sheet Issuance",
    description:
      "Our team reviews the scenario and issues a clear, transparent term sheet.",
  },
  {
    icon: Search,
    title: "Processing & Underwriting",
    description:
      "We collect required documents, verify key details, and conduct disciplined underwriting to validate the deal and finalize approvals.",
  },
  {
    icon: Handshake,
    title: "Closing Coordination and Funding",
    description:
      "We coordinate docs, schedule closing, and wire funds so your project can move forward.",
  },
];

const icons = [FileText, FileCheck, Search, Handshake];

export const FundingProcess = ({
  fundingProcessTitle,
  fundingProcessSubtitle,
  fundingProcessSteps,
}: FundingProcessProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (lineRef.current) {
              lineRef.current.style.transform = "scaleX(1)";
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps =
    fundingProcessSteps && fundingProcessSteps.length > 0
      ? fundingProcessSteps.map((step, index) => ({
          ...step,
          icon: icons[index % icons.length],
        }))
      : fallbackSteps;

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {fundingProcessTitle || "Our Funding Process"}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {fundingProcessSubtitle ||
              "From application to funding in as little as 10 days"}
          </p>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-r from-rsc to-gold origin-left"
              style={{
                transform: "scaleX(0)",
                transition: "transform 0.8s ease-out",
              }}
            />
          </div>

          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[16px] border-l-gold"
            style={{ marginRight: "-8px" }}
          />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="reveal text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-white border-4 border-navy rounded-full flex items-center justify-center group hover:bg-rsc hover:border-rsc transition-all duration-300 hover:translate-y-[-3px] cursor-pointer relative z-10">
                    <step.icon className="w-10 h-10 text-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-navy mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal flex gap-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white border-4 border-navy rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-navy" />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
