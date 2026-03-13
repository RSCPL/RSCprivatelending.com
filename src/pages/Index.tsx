import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LoanPrograms } from "@/components/LoanPrograms";
import { WhyRSC } from "@/components/WhyRSC";
import { RecentDeals } from "@/components/RecentDeals";
import { FundingProcess } from "@/components/FundingProcess";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { homepageQuery } from "../lib/queries";

type HomepageData = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  loanPrograms?: {
    title?: string;
    description?: string;
  }[];
  faqItems?: {
    question?: string;
    answer?: string;
  }[];
  heroImage?: any;
};

const Index = () => {
  const [homepage, setHomepage] = useState<HomepageData | null>(null);

  useEffect(() => {
    client.fetch(homepageQuery).then((data) => {
      console.log("SANITY DATA:", data);
      setHomepage(data);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero
        heroTitle={homepage?.heroTitle}
        heroSubtitle={homepage?.heroSubtitle}
        heroButtonText={homepage?.heroButtonText}
        heroImage={homepage?.heroImage}
      />
      <LoanPrograms loanPrograms={homepage?.loanPrograms} />
      <WhyRSC />
      <RecentDeals />
      <FundingProcess />
      <FAQ faqItems={homepage?.faqItems} />{" "}
      <CTABanner
        ctaTitle={homepage?.ctaTitle}
        ctaSubtitle={homepage?.ctaSubtitle}
        ctaButtonText={homepage?.ctaButtonText}
      />
      <Footer />
    </div>
  );
};

export default Index;
