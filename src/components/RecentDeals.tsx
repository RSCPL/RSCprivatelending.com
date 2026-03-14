import { MapPin, DollarSign, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import dallasTxImage from "@/assets/deal-dallas-tx.png";
import houstonTxImage from "@/assets/deal-houston-tx.png";
import petersburgFlImage from "@/assets/deal-petersburg-fl.png";
import honoluluHiImage from "@/assets/deal-honolulu-hi.png";
import { urlFor } from "../lib/sanity";

type RecentDealItem = {
  image?: any;
  type?: string;
  location?: string;
  amount?: string;
  note?: string;
  ltc?: string;
};

type RecentDealsProps = {
  recentDealsTitle?: string;
  recentDealsSubtitle?: string;
  recentDealsItems?: RecentDealItem[];
};

const fallbackDeals = [
  {
    image: dallasTxImage,
    type: "Mid-Construction Refinance",
    location: "Dallas, TX",
    amount: "$3,847,254.00",
    note: "Mid-Construction",
    ltc: "Refinance",
  },
  {
    image: houstonTxImage,
    type: "Mid-Construction Refinance",
    location: "Houston, TX",
    amount: "$3,364,987.10",
    note: "Mid-Construction",
    ltc: "Refinance",
  },
  {
    image: petersburgFlImage,
    type: "DSCR",
    location: "Petersburg, FL",
    amount: "$2,500,000.00",
    note: "DSCR",
    ltc: "Rental",
  },
  {
    image: honoluluHiImage,
    type: "Fix and Flip",
    location: "Honolulu, HI",
    amount: "$1,475,250",
    note: "Fix and Flip",
    ltc: "Renovation",
  },
];

export const RecentDeals = ({
  recentDealsTitle,
  recentDealsSubtitle,
  recentDealsItems,
}: RecentDealsProps) => {
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

  const deals =
    recentDealsItems && recentDealsItems.length > 0
      ? recentDealsItems
      : fallbackDeals;

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {recentDealsTitle || "Recent Deals"}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {recentDealsSubtitle ||
              "Real results for real estate investors across the country"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 stagger-children">
          {deals.map((deal, index) => {
            const imageSrc =
              typeof deal.image === "string"
                ? deal.image
                : deal.image
                  ? urlFor(deal.image).width(800).url()
                  : undefined;

            return (
              <div
                key={index}
                className="reveal group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gold transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg cursor-pointer flex flex-col"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  {imageSrc && (
                    <img
                      src={imageSrc}
                      alt={deal.type || "Recent deal"}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                      <span>{deal.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-rsc transition-colors duration-200">
                    {deal.type}
                  </h3>

                  <div className="flex items-center text-rsc text-2xl font-bold mb-4">
                    <DollarSign className="w-6 h-6 flex-shrink-0" />
                    <span>{(deal.amount || "").replace("$", "")}</span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-700 mt-auto">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gold flex-shrink-0" />
                      <span>{deal.note}</span>
                    </div>
                    <div className="font-semibold text-navy">{deal.ltc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
