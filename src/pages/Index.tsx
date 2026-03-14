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
import { homepageQuery, siteSettingsQuery } from "../lib/queries";

type HomepageData = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  recentDealsTitle?: string;
  recentDealsSubtitle?: string;
  recentDealsItems?: {
    image?: any;
    type?: string;
    location?: string;
    amount?: string;
    note?: string;
    ltc?: string;
  }[];
  whyRscTitle?: string;
  whyRscSubtitle?: string;
  whyRscItems?: {
    title?: string;
    description?: string;
  }[];
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
const [siteSettings, setSiteSettings] = useState<SiteSettingsData | null>(null);
const Index = () => {
  const [homepage, setHomepage] = useState<HomepageData | null>(null);

  useEffect(() => {
    client.fetch(homepageQuery).then((data) => {
      console.log("SANITY DATA:", data);
      setHomepage(data);
    });
    client.fetch(siteSettingsQuery).then((data) => {
      console.log("SITE SETTINGS:", data);
      setSiteSettings(data);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar
        companyName={siteSettings?.companyName}
        primaryCtaText={siteSettings?.primaryCtaText}
        primaryCtaLink={siteSettings?.primaryCtaLink}
      />
      <Hero
        heroTitle={homepage?.heroTitle}
        heroSubtitle={homepage?.heroSubtitle}
        heroButtonText={homepage?.heroButtonText}
        heroImage={homepage?.heroImage}
      />
      <LoanPrograms loanPrograms={homepage?.loanPrograms} />
      <WhyRSC
        whyRscTitle={homepage?.whyRscTitle}
        whyRscSubtitle={homepage?.whyRscSubtitle}
        whyRscItems={homepage?.whyRscItems}
      />
      <RecentDeals
        recentDealsTitle={homepage?.recentDealsTitle}
        recentDealsSubtitle={homepage?.recentDealsSubtitle}
        recentDealsItems={homepage?.recentDealsItems}
      />
      <FundingProcess />
      <FAQ faqItems={homepage?.faqItems} />{" "}
      <CTABanner
        ctaTitle={homepage?.ctaTitle}
        ctaSubtitle={homepage?.ctaSubtitle}
        ctaButtonText={homepage?.ctaButtonText}
      />
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

export default Index;
