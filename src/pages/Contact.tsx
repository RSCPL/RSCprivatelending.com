import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { client } from "../lib/sanity";
import { siteSettingsQuery, contactPageQuery } from "../lib/queries";

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

type ContactPageData = {
  pageTitle?: string;
  pageSubtitle?: string;
  heroEyebrow?: string;
  heroImage?: any;
  contactSectionTitle?: string;
  contactSectionSubtitle?: string;
  formDisclaimer?: string;
  officeTitle?: string;
  officeDescription?: string;
};

const Contact = () => {
  const { toast } = useToast();

  const [siteSettings, setSiteSettings] = useState<SiteSettingsData | null>(
    null,
  );
  const [contactPage, setContactPage] = useState<ContactPageData | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyStatus: "",
    asIsValue: "",
    message: "",
    agreedToTerms: false,
  });

  useEffect(() => {
    client.fetch(siteSettingsQuery).then((data) => {
      setSiteSettings(data);
    });

    client.fetch(contactPageQuery).then((data) => {
      setContactPage(data);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Terms of Service and Privacy Policy.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      propertyStatus: "",
      asIsValue: "",
      message: "",
      agreedToTerms: false,
    });
  };

  const displayPhone = siteSettings?.phone || "+1-808-427-3312";
  const displayEmail = siteSettings?.email || "info@RSCPrivateLending.com";
  const displayAddress =
    contactPage?.officeDescription ||
    siteSettings?.address ||
    "118 Vintage Park Blvd #W317\nHouston, TX 77070";

  return (
    <div className="min-h-screen">
      <Navbar
        companyName={siteSettings?.companyName}
        primaryCtaText={siteSettings?.primaryCtaText}
        primaryCtaLink={siteSettings?.primaryCtaLink}
      />

      <section className="bg-[#3B4E6B] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {contactPage?.heroEyebrow && (
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-4">
                {contactPage.heroEyebrow}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              {contactPage?.pageTitle || "Contact Us"}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {contactPage?.pageSubtitle ||
                "We're here to assist with loan inquiries, program questions, and general requests. For loan scenarios or deal submissions, please use the secure form below."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Phone</h3>
              <p className="text-gray-600 mb-2">
                For faster responses, call or text us at:
              </p>
              <a
                href={`tel:${displayPhone}`}
                className="text-lg font-semibold text-navy hover:text-rsc-red transition-colors"
              >
                {displayPhone}
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Email</h3>
              <p className="text-gray-600 mb-2">General inquiries:</p>
              <a
                href={`mailto:${displayEmail}`}
                className="text-lg font-semibold text-navy hover:text-rsc-red transition-colors break-all"
              >
                {displayEmail}
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                {contactPage?.officeTitle || "Office"}
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {displayAddress}
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            {contactPage?.contactSectionSubtitle ||
              "For loan scenario submissions or funding requests, please complete the secure form below."}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              {contactPage?.contactSectionTitle || "Send Us a Message"}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {contactPage?.contactSectionSubtitle ||
                "We're here to assist with loan inquiries, program questions, and general requests. Expect clear communication and prompt responses."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="fullName"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              <div>
                <Label
                  htmlFor="propertyStatus"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Property Status *
                </Label>
                <Select
                  value={formData.propertyStatus}
                  onValueChange={(value) =>
                    setFormData({ ...formData, propertyStatus: value })
                  }
                >
                  <SelectTrigger className="h-12 border-gray-300 focus:border-rsc-red">
                    <SelectValue placeholder="Currently have a property in mind?" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="not-sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="asIsValue"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Property AS-IS Value (if applicable)
                </Label>
                <Input
                  id="asIsValue"
                  type="number"
                  placeholder="$0"
                  value={formData.asIsValue}
                  onChange={(e) =>
                    setFormData({ ...formData, asIsValue: e.target.value })
                  }
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-gray-700 font-medium mb-2 block"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[140px] border-gray-300 focus:border-rsc-red resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      agreedToTerms: checked as boolean,
                    })
                  }
                  className="mt-1"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                >
                  {contactPage?.formDisclaimer ||
                    "I agree to the Terms of Service and Privacy Policy. By submitting this form, I consent to being contacted by RSC Private Lending regarding my inquiry."}
                </Label>
              </div>

              <div className="pt-6 pb-2">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-rsc hover:bg-rsc-dark text-white h-12 px-12 rounded-full text-base font-medium transition-colors"
                >
                  Submit Message
                </Button>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mt-4">
                By submitting this form, you agree to our Privacy Policy and
                Terms of Service.
              </p>
            </form>
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

export default Contact;
