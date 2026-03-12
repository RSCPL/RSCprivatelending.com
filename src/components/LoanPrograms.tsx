import { Building, Home, Hammer, TrendingUp, Construction, Building2 } from "lucide-react";
import { useEffect, useRef } from "react";

const programs = [
  {
    icon: Building,
    title: "DSCR Loans",
    description: "Income-based financing for rental properties with flexible terms and competitive rates.",
    link: "#"
  },
  {
    icon: TrendingUp,
    title: "Bridge Loans",
    description: "Short-term financing solutions to bridge gaps in your investment strategy.",
    link: "#"
  },
  {
    icon: Hammer,
    title: "Fix & Flip",
    description: "Fast funding for renovation projects with draw schedules tailored to your timeline.",
    link: "#"
  },
  {
    icon: Construction,
    title: "Ground-Up Construction",
    description: "Comprehensive financing for new construction projects from foundation to completion.",
    link: "#"
  },
  {
    icon: Home,
    title: "Mid-Construction",
    description: "Take over stalled projects or refinance existing construction loans.",
    link: "#"
  },
  {
    icon: Building2,
    title: "Commercial DSCR",
    description: "Specialized financing for commercial real estate investment properties.",
    link: "#"
  }
];

export const LoanPrograms = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Loan Programs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Flexible financing solutions designed for real estate investors at every stage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {programs.map((program, index) => (
            <div
              key={index}
              className="reveal group bg-white rounded-xl p-8 border border-gray-200 hover:border-gold transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer"
            >
              <div className="mb-6 transform transition-transform duration-250 group-hover:scale-110">
                <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center group-hover:bg-rsc transition-colors duration-200">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-navy mb-3 group-hover:text-rsc transition-colors duration-200">
                {program.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {program.description}
              </p>
              
              <a 
                href={program.link}
                className="text-gold font-semibold hover:text-gold-dark transition-colors duration-200 inline-flex items-center group"
              >
                Learn More
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
