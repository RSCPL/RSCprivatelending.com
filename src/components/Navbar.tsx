import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import rscLogo from "@/assets/rsc-logo.png";
import rscLogoScrolled from "@/assets/rsc-logo-scrolled.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'py-5' : 'py-7'
          }`}>
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="https://rscprivatelending.com" className="block">
                <img 
                  src={isScrolled ? rscLogoScrolled : rscLogo} 
                  alt="RSC Private Lending" 
                  className="h-16 w-auto transition-all duration-300"
                />
              </a>
            </div>
            
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center ml-12">
              <a 
                href="/" 
                className={`text-base font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isScrolled ? 'text-navy hover:text-rsc-red' : 'text-white hover:text-gold'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-rsc-red' : 'bg-gold'
                }`}></span>
              </a>
              <a 
                href="/our-story" 
                className={`text-base font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isScrolled ? 'text-navy hover:text-rsc-red' : 'text-white hover:text-gold'
                }`}
              >
                Our Story
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-rsc-red' : 'bg-gold'
                }`}></span>
              </a>
              <a 
                href="/loan-products" 
                className={`text-base font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isScrolled ? 'text-navy hover:text-rsc-red' : 'text-white hover:text-gold'
                }`}
              >
                Loan Products
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-rsc-red' : 'bg-gold'
                }`}></span>
              </a>
              <a 
                href="/loan-products#loan-calculator" 
                className={`text-base font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isScrolled ? 'text-navy hover:text-rsc-red' : 'text-white hover:text-gold'
                }`}
              >
                Resources
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-rsc-red' : 'bg-gold'
                }`}></span>
              </a>
              <a 
                href="/#faqs" 
                className={`text-base font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isScrolled ? 'text-navy hover:text-rsc-red' : 'text-white hover:text-gold'
                }`}
              >
                FAQs
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-rsc-red' : 'bg-gold'
                }`}></span>
              </a>
              <a 
                href="/contact" 
                className={`text-base font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isScrolled ? 'text-navy hover:text-rsc-red' : 'text-white hover:text-gold'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                  isScrolled ? 'bg-rsc-red' : 'bg-gold'
                }`}></span>
              </a>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex flex-shrink-0">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="flex items-center justify-center bg-[#E14141] hover:bg-[#c63434] text-white font-semibold text-base rounded-full transition-all duration-200 hover:translate-y-[-1px] hover:shadow-md whitespace-nowrap border-0 px-8 py-3.5"
                  >
                    Submit a Scenario
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/WhzyK9fTSZCrGWhdbwPD"
                    style={{ width: '100%', height: '2448px', border: 'none', borderRadius: '3px' }}
                    id="inline-WhzyK9fTSZCrGWhdbwPD"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Get My Funding - Website Form"
                    data-height="2448"
                    data-layout-iframe-id="inline-WhzyK9fTSZCrGWhdbwPD"
                    data-form-id="WhzyK9fTSZCrGWhdbwPD"
                    title="Get My Funding - Website Form"
                  />
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden flex items-center justify-center w-11 h-11 transition-colors ${
                isScrolled ? 'text-navy hover:text-rsc-red' : 'text-white hover:text-gold'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className={`fixed left-0 right-0 z-40 shadow-xl lg:hidden animate-fade-in ${
            isScrolled ? 'top-[84px]' : 'top-[104px]'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg">
              <nav className="flex flex-col py-6 px-6 gap-1">
                <a 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy text-base font-medium hover:text-rsc-red hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  Home
                </a>
                <a 
                  href="/our-story" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy text-base font-medium hover:text-rsc-red hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg relative z-10"
                >
                  Our Story
                </a>
                <a 
                  href="/loan-products" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy text-base font-medium hover:text-rsc-red hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg relative z-10"
                >
                  Loan Products
                </a>
                <a 
                  href="/loan-products#loan-calculator" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy text-base font-medium hover:text-rsc-red hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg relative z-10"
                >
                  Resources
                </a>
                <a 
                  href="/#faqs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy text-base font-medium hover:text-rsc-red hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  FAQs
                </a>
                <a 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy text-base font-medium hover:text-rsc-red hover:bg-gray-50 transition-all duration-200 py-3 px-4 rounded-lg"
                >
                  Contact
                </a>
                
                {/* Mobile CTA Button */}
                <div className="mt-4 px-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full flex items-center justify-center bg-[#E14141] hover:bg-[#c63434] text-white font-semibold rounded-full transition-all duration-200 border-0 py-3"
                      >
                        Submit a Scenario
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
                      <iframe
                        src="https://api.leadconnectorhq.com/widget/form/WhzyK9fTSZCrGWhdbwPD"
                        style={{ width: '100%', height: '2448px', border: 'none', borderRadius: '3px' }}
                        id="inline-WhzyK9fTSZCrGWhdbwPD-mobile"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Get My Funding - Website Form"
                        data-height="2448"
                        data-layout-iframe-id="inline-WhzyK9fTSZCrGWhdbwPD-mobile"
                        data-form-id="WhzyK9fTSZCrGWhdbwPD"
                        title="Get My Funding - Website Form"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
