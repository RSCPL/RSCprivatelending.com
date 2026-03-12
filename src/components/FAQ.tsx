import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a hard money loan?",
    answer: "A hard money loan is a short-term financing option secured by real estate, commonly used by real estate investors who need quick, reliable funding."
  },
  {
    question: "Do I pay any costs upfront?",
    answer: "Some programs may require an appraisal or due diligence fee upfront. Most other costs are typically collected at closing."
  },
  {
    question: "Are there any prepayment penalties?",
    answer: "It depends on the loan program. Some have no prepayment penalties, while others may include a small fee. Terms vary based on experience, credit, and loan structure."
  },
  {
    question: "How long does it take to get a hard money loan?",
    answer: "Approvals are typically issued within 24–48 hours, with funding available as fast as 5–10 business days."
  },
  {
    question: "What types of assets do you lend on?",
    answer: "We lend on residential investment properties, commercial properties, and multi-family assets."
  },
  {
    question: "What is your minimum/maximum loan amount?",
    answer: "Loan amounts generally range from $150,000 to $10,000,000, depending on asset type, experience, and location."
  },
  {
    question: "What documents do I need for a residential transaction?",
    answer: "Typical requirements include: property details, purchase agreement, updated scope of work (if rehab), proof of funds, and borrower information."
  },
  {
    question: "What states do you currently lend in?",
    answer: "We operate in multiple states across the U.S. Contact us for current state availability."
  },
  {
    question: "What are the advantages of a hard money loan?",
    answer: "Hard money loans offer fast funding, flexible approval criteria, and are ideal for investors needing speed and certainty."
  }
];

export const FAQ = () => {
  return (
    <section id="faqs" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear answers to common questions about our lending programs and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border bg-background"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-foreground/80 py-6 px-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
