import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LoanPrograms } from "@/components/LoanPrograms";
import { WhyRSC } from "@/components/WhyRSC";
import { RecentDeals } from "@/components/RecentDeals";
import { FundingProcess } from "@/components/FundingProcess";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LoanPrograms />
      <WhyRSC />
      <RecentDeals />
      <FundingProcess />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
