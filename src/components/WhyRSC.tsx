import { Shield, Zap, DollarSign, Users } from "lucide-react";
import { useEffect, useRef } from "react";

type WhyRscItem = {
  title?: string;
  description?: string;
};

type WhyRSCProps = {
  whyRscTitle?: string;
  whyRscSubtitle?: string;
  whyRscItems?: WhyRscItem[];
};

const fallbackValues = [
  {
    icon: Shield,
    title: "Data-Driven, Common Sense Underwriting",
    description:
      "Clear, disciplined evaluation that builds sustainable lending relationships.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing & Terms",
    description:
      "Competitive rates, no hidden fees, and straightforward structures you can rely on.",
  },
  {
    icon: Zap,
    title: "Fast Term Sheets & Closings",
    description:
      "Term sheets in 24 hours and closings in as little as 10 days.",
  },
  {
    icon: Users,
    title: "Investor-First Support",
    description:
      "Dedicated relationship managers who understand real estate investing.",
  },
];

const icons = [Shield, DollarSign, Zap, Users];

export const WhyRSC = ({
  whyRscTitle,
  whyRscSubtitle,
  whyRscItems,
}: WhyRSCProps) => {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values =
    whyRscItems && whyRscItems.length > 0
      ? whyRscItems.map((item, index) => ({
          ...item,
          icon: icons[index % icons.length],
        }))
      : fallbackValues;

  return (
    <section ref={sectionRef} className="py-24 bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {whyRscTitle || "Why RSC Private Lending?"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {whyRscSubtitle ||
              "Built on institutional principles with the flexibility real estate investors need"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {values.map((value, index) => (
            <div
              key={index}
              className="reveal group bg-navy-light rounded-xl p-8 border border-navy-lighter hover:border-gold transition-all duration-200 hover:translate-y-[-4px] cursor-pointer"
            >
              <div className="mb-6 transform transition-all duration-250">
                <div className="w-16 h-16 bg-rsc/10 rounded-lg flex items-center justify-center group-hover:bg-rsc transition-colors duration-200">
                  <value.icon className="w-8 h-8 text-rsc group-hover:text-white transition-colors duration-200" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
