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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyStatus: "",
    asIsValue: "",
    message: "",
    agreedToTerms: false,
  });

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

    // Form submission logic here
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
    });
    
    // Reset form
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#3B4E6B] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We're here to assist with loan inquiries, program questions, and general requests. 
              For loan scenarios or deal submissions, please use the secure form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phone Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Phone className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Phone</h3>
              <p className="text-gray-600 mb-2">For faster responses, call or text us at:</p>
              <a 
                href="tel:+18084273312" 
                className="text-lg font-semibold text-navy hover:text-rsc-red transition-colors"
              >
                +1-808-427-3312
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Email</h3>
              <p className="text-gray-600 mb-2">General inquiries:</p>
              <a 
                href="mailto:info@RSCPrivateLending.com" 
                className="text-lg font-semibold text-navy hover:text-rsc-red transition-colors break-all"
              >
                info@RSCPrivateLending.com
              </a>
            </div>

            {/* Office Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Office</h3>
              <p className="text-gray-600 leading-relaxed">
                118 Vintage Park Blvd #W317<br />
                Houston, TX 77070
              </p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
            For loan scenario submissions or funding requests, please complete the secure form below.
          </p>
        </div>
      </section>

      {/* Message Form Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're here to assist with loan inquiries, program questions, and general requests. 
              Expect clear communication and prompt responses.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-gray-700 font-medium mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              {/* Property Status */}
              <div>
                <Label htmlFor="propertyStatus" className="text-gray-700 font-medium mb-2 block">
                  Property Status *
                </Label>
                <Select
                  required
                  value={formData.propertyStatus}
                  onValueChange={(value) => setFormData({ ...formData, propertyStatus: value })}
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

              {/* AS-IS Value */}
              <div>
                <Label htmlFor="asIsValue" className="text-gray-700 font-medium mb-2 block">
                  Property AS-IS Value (if applicable)
                </Label>
                <Input
                  id="asIsValue"
                  type="number"
                  placeholder="$0"
                  value={formData.asIsValue}
                  onChange={(e) => setFormData({ ...formData, asIsValue: e.target.value })}
                  className="h-12 border-gray-300 focus:border-rsc-red"
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] border-gray-300 focus:border-rsc-red resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, agreedToTerms: checked as boolean })
                  }
                  className="mt-1"
                />
                <Label 
                  htmlFor="terms" 
                  className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                >
                  I agree to the Terms of Service and Privacy Policy. By submitting this form, 
                  I consent to being contacted by RSC Private Lending regarding my inquiry.
                </Label>
              </div>

              {/* Submit Button */}
              <div className="pt-6 pb-2">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-rsc hover:bg-rsc-dark text-white h-12 px-12 rounded-full text-base font-medium transition-colors"
                >
                  Submit Message
                </Button>
              </div>

              {/* Privacy Note */}
              <p className="text-sm text-gray-500 leading-relaxed mt-4">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
