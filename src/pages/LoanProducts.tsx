import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hammer, Building2, TrendingUp, Home, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { client } from "../lib/sanity";
import { siteSettingsQuery, loanProductsPageQuery } from "../lib/queries";

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

type LoanProductItem = {
  id?: string;
  title?: string;
  description?: string;
  details?: string;
};

type LoanProductsPageData = {
  pageTitle?: string;
  pageSubtitle?: string;
  pageEyebrow?: string;
  heroImage?: any;
  productsSectionTitle?: string;
  productsSectionSubtitle?: string;
  products?: LoanProductItem[];
  calculatorTitle?: string;
  calculatorSubtitle?: string;
  contactSectionTitle?: string;
  contactSectionSubtitle?: string;
};

const fallbackLoanProducts = [
  {
    id: "fix-flip",
    title: "Fix and Flip",
    description:
      "Short-term financing for investors renovating and repositioning properties for resale. Clear criteria, fast execution.",
    details:
      "Our fix and flip loans provide disciplined capital for property acquisition and renovation. We structure terms based on property fundamentals and renovation scope, with competitive rates and transparent draw schedules.",
  },
  {
    id: "ground-up",
    title: "Ground-Up Construction",
    description:
      "Flexible financing for new construction projects with disciplined underwriting and competitive terms.",
    details:
      "Ground-up construction financing backed by thorough project analysis and structured milestone-based funding. We support experienced developers with institutional-grade underwriting and reliable execution.",
  },
  {
    id: "bridge",
    title: "Investor Loans Bridge",
    description:
      "Short-term capital to bridge timing gaps between acquisitions and long-term financing. Reliable and structured execution.",
    details:
      "Bridge loans designed for real estate investors navigating timing challenges. Quick closings with transparent terms, allowing seamless transitions between property phases or financing structures.",
  },
  {
    id: "dscr",
    title: "DSCR",
    description:
      "Long-term rental financing based on DSCR performance metrics. Ideal for stabilized investment properties.",
    details:
      "Debt Service Coverage Ratio loans for income-producing properties. We underwrite based on property cash flow with flexible terms for experienced investors managing rental portfolios.",
  },
];

const icons = [Hammer, Building2, TrendingUp, Home];

const LoanProducts = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(10.5);
  const [constructionBudget, setConstructionBudget] = useState(150000);
  const [amortizationType, setAmortizationType] = useState("interest-only");
  const [hasProperty, setHasProperty] = useState<string>("");

  const [siteSettings, setSiteSettings] = useState<SiteSettingsData | null>(
    null,
  );
  const [loanProductsPage, setLoanProductsPage] =
    useState<LoanProductsPageData | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client.fetch(siteSettingsQuery).then((data) => {
      setSiteSettings(data);
    });

    client.fetch(loanProductsPageQuery).then((data) => {
      setLoanProductsPage(data);
    });

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

    const elements = heroRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const totalLoanAmount = loanAmount + constructionBudget;
  const monthlyInterestRate = interestRate / 100 / 12;

  const calculateMonthlyPayment = () => {
    if (amortizationType === "interest-only") {
      return totalLoanAmount * monthlyInterestRate;
    } else {
      const n = loanTerm;
      return (
        totalLoanAmount *
        ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, n)) /
          (Math.pow(1 + monthlyInterestRate, n) - 1))
      );
    }
  };

  const monthlyPayment = calculateMonthlyPayment();
  const loanToValue = (
    (totalLoanAmount / (totalLoanAmount * 1.3)) *
    100
  ).toFixed(2);
  const balloonAmount =
    amortizationType === "interest-only" ? totalLoanAmount : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const products =
    loanProductsPage?.products && loanProductsPage.products.length > 0
      ? loanProductsPage.products.map((product, index) => ({
          ...product,
          icon: icons[index % icons.length],
        }))
      : fallbackLoanProducts.map((product, index) => ({
          ...product,
          icon: icons[index % icons.length],
        }));

  return (
    <div className="min-h-screen">
      <Navbar
        companyName={siteSettings?.companyName}
        primaryCtaText={siteSettings?.primaryCtaText}
        primaryCtaLink={siteSettings?.primaryCtaLink}
      />

      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center bg-[#3B4E6B] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#3B4E6B]/95 to-[#2a3a4f]/95" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl reveal">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {loanProductsPage?.pageTitle ||
                "Explore Our Institutional Loan Suite"}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              {loanProductsPage?.pageSubtitle ||
                "Disciplined, transparent, and flexible financing solutions for serious real estate investors and developers."}
            </p>
            <p className="text-lg text-gray-300 mb-10">
              {loanProductsPage?.pageEyebrow ||
                "Built on quiet confidence, strong processes, and investor-first execution."}
            </p>
            <Button
              size="lg"
              className="bg-rsc-red hover:bg-rsc-red-dark text-white px-8 py-6 text-lg rounded-full font-semibold transition-all duration-200"
            >
              {siteSettings?.primaryCtaText || "Submit Deal Scenario"}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                {loanProductsPage?.productsSectionTitle || "Loan Products"}
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                {loanProductsPage?.productsSectionSubtitle ||
                  "Structured financing solutions with transparent criteria and reliable execution"}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {products.map((product, index) => (
                <AccordionItem
                  key={product.id || index}
                  value={product.id || `product-${index}`}
                  className="border border-border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left w-full">
                      <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors duration-200">
                        <product.icon
                          className="w-6 h-6 text-navy"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-rsc-red transition-colors duration-200">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-2">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {product.details}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="loan-calculator" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md border border-border p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                {loanProductsPage?.calculatorTitle || "Loan Calculator"}
              </h2>
              <p className="text-gray-600 mb-10">
                {loanProductsPage?.calculatorSubtitle ||
                  "Estimate your loan structure with transparent calculations"}
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <Label className="text-base font-semibold text-navy mb-3 flex items-center gap-2">
                      Base Loan Amount
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Primary loan amount for property acquisition
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[loanAmount]}
                        onValueChange={([value]) => setLoanAmount(value)}
                        min={50000}
                        max={5000000}
                        step={10000}
                        className="flex-1"
                      />
                      <span className="text-lg font-semibold text-navy min-w-[140px] text-right">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold text-navy mb-3">
                      Loan Term (months)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[loanTerm]}
                        onValueChange={([value]) => setLoanTerm(value)}
                        min={6}
                        max={36}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-lg font-semibold text-navy min-w-[140px] text-right">
                        {loanTerm} months
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold text-navy mb-3">
                      Interest Rate (%)
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[interestRate]}
                        onValueChange={([value]) => setInterestRate(value)}
                        min={7}
                        max={15}
                        step={0.25}
                        className="flex-1"
                      />
                      <span className="text-lg font-semibold text-navy min-w-[140px] text-right">
                        {interestRate.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold text-navy mb-3">
                      Construction Budget
                    </Label>
                    <div className="flex items-center gap-4">
                      <Slider
                        value={[constructionBudget]}
                        onValueChange={([value]) =>
                          setConstructionBudget(value)
                        }
                        min={0}
                        max={1000000}
                        step={5000}
                        className="flex-1"
                      />
                      <span className="text-lg font-semibold text-navy min-w-[140px] text-right">
                        {formatCurrency(constructionBudget)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold text-navy mb-3">
                      Amortization Type
                    </Label>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={
                          amortizationType === "interest-only"
                            ? "default"
                            : "outline"
                        }
                        onClick={() => setAmortizationType("interest-only")}
                        className={
                          amortizationType === "interest-only"
                            ? "bg-rsc-red hover:bg-rsc-red-dark"
                            : ""
                        }
                      >
                        Interest Only
                      </Button>
                      <Button
                        type="button"
                        variant={
                          amortizationType === "fully-amortized"
                            ? "default"
                            : "outline"
                        }
                        onClick={() => setAmortizationType("fully-amortized")}
                        className={
                          amortizationType === "fully-amortized"
                            ? "bg-rsc-red hover:bg-rsc-red-dark"
                            : ""
                        }
                      >
                        Fully Amortized
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-bold text-navy mb-8">
                    Payment Summary
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-gray-700 font-medium">
                        Monthly Payment
                      </span>
                      <span className="text-2xl font-bold text-navy">
                        {formatCurrency(monthlyPayment)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-gray-700 font-medium">
                        Total Loan Amount
                      </span>
                      <span className="text-xl font-semibold text-navy">
                        {formatCurrency(totalLoanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-gray-700 font-medium">
                        Loan-to-Value
                      </span>
                      <span className="text-xl font-semibold text-navy">
                        {loanToValue}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        Balloon Amount
                      </span>
                      <span className="text-xl font-semibold text-navy">
                        {formatCurrency(balloonAmount)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                    Calculations are estimates. Final terms subject to
                    underwriting and approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                {loanProductsPage?.contactSectionTitle ||
                  "Connect With Our Lending Team"}
              </h2>
              <p className="text-xl text-gray-700">
                {loanProductsPage?.contactSectionSubtitle ||
                  "We're here to answer questions about loan structures, eligibility, or deal scenarios. Expect disciplined, transparent guidance."}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-border p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="text-base font-semibold text-navy mb-2"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-base font-semibold text-navy mb-2"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-base font-semibold text-navy mb-2"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold text-navy mb-3">
                    Currently have a property in mind?
                  </Label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasProperty"
                        value="yes"
                        checked={hasProperty === "yes"}
                        onChange={(e) => setHasProperty(e.target.value)}
                        className="w-4 h-4 text-rsc-red"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasProperty"
                        value="no"
                        checked={hasProperty === "no"}
                        onChange={(e) => setHasProperty(e.target.value)}
                        className="w-4 h-4 text-rsc-red"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="asIsValue"
                    className="text-base font-semibold text-navy mb-2"
                  >
                    AS-IS Value
                  </Label>
                  <Input
                    id="asIsValue"
                    type="text"
                    placeholder="$500,000"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-base font-semibold text-navy mb-2"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or scenario..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Checkbox id="terms" className="mt-1" />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                  >
                    By submitting this form, I consent to RSC Private Lending
                    contacting me regarding loan products and services. I
                    understand this is not a commitment to lend and all loans
                    are subject to underwriting approval.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-rsc-red hover:bg-rsc-red-dark text-white py-6 text-lg rounded-full font-semibold transition-all duration-200"
                >
                  Submit
                </Button>
              </form>
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

export default LoanProducts;
