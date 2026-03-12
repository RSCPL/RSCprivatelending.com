import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyNotice = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#3B4E6B] pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Effective Date: April 01, 2025
            </p>
            <p className="text-gray-400 text-base mt-4 max-w-2xl mx-auto">
              Your privacy is important to us. This policy describes how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                This policy describes Red Sun Capital, LLC dba RSC Private Lending ("Red Sun Capital, LLC dba RSC Private Lending," "we" or "our") collection, processing, transfer, and storage of data from visitors to our website (our "Website"). This Privacy Policy applies only to the data collected on the Website and not to other data collected or processed by Red Sun Capital, LLC dba RSC Private Lending.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">1.</span> Our Commitment to Your Privacy
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                This Privacy Policy describes:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base md:text-lg leading-relaxed">
                <li>How information about you is collected through our Website;</li>
                <li>How we use and with whom we share this information;</li>
                <li>How you can access and update this information; and</li>
                <li>The choices you can make about how we collect, use and share your information.</li>
              </ul>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                If you have any questions regarding this Privacy Policy or our information collection and use practices, please contact us using the information in the "Contact Us" section below.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">2.</span> Information Collected Through Our Website
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Red Sun Capital, LLC dba RSC Private Lending collects information from Website visitors and also obtains information from third parties (including from service providers) in the course of providing our services (our "Services"), which we may add to the data we obtain through the Website. The information collected through our website includes:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Personal and Investment-related Information.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    You may provide us information about you, which may include personal information and information relating to or necessary for the initiation, processing, or completion of certain financial transactions, including the management of investments.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Transactional Information.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We may also create transactional records of each of the transactions or other events occurring through our Website. This transactional information is generally collected (i) to enable our Services, including investment document creation, origination, management, and distribution, (ii) to enable the services provided by third parties, and (iii) to enable Red Sun Capital, LLC dba RSC Private Lending to comply with various legal obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Device and Usage Information.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Like most online services, our Website collects standard technical, non-personal information when you use it, including internet protocol (IP) addresses, browser types, internet service providers (ISPs), the pages and content you view or interact with on our Website, the information you search for, and the dates and times that you visit our Website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Cookies and Other Technologies.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Our Website collects certain information through the use of "cookies" and other tracking technologies. Cookies are small files that your browser places on your computer. We may use session cookies, persistent cookies, and other tracking technologies to better understand how you interact with our Website, to monitor usage by our users and web traffic routing on our services, and to improve and personalize our Website. Many Internet browsers automatically accept cookies. You may be able to instruct your browser to stop accepting cookies or to prompt you before accepting cookies from the websites you visit. Google provides some additional privacy options relating to Google analytics, described at <a href="http://www.google.com/policies/privacy/partners/" className="text-rsc-red hover:underline">www.google.com/policies/privacy/partners/</a>. We do not respond to "do not track" browser signals at this time. We may also use web beacons, which are transparent graphic images on a webpage or within the body of one of our marketing emails, to allow us to measure visitor actions and assess the effectiveness of our email marketing campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">3.</span> How We Use Information
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                We and service providers working on our behalf use information collected on our Website in a variety of ways intended to provide our Website and Services and to operate our business, including the following:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">To Provide our Services.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We use the information that we collect (i) to operate, maintain, enhance and provide our Website and our Services, (ii) to provide other services and information that you request, and (iii) to provide customer support to you and other parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">To Improve, Analyze, and Personalize our Website and Services.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We use the information that we collect to understand and analyze usage trends and preferences; to monitor and analyze the effectiveness of our Website and Services; to improve our Website and Services and develop new products, services, features, and functionality; and to personalize our Website and Services, such as remembering your information so that you will not have to re-enter it during your visit or the next time you use our Website, or providing customized content and information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">To Contact You.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We may use your email address or other information we collect to contact you for administrative purposes such as customer service or to send communications, including marketing or promotional communications, relating to our Website and Services. Generally, you have the ability to opt out of receiving promotional communications as described below.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Aggregate Data.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We aggregate data collected through our Website and use it for purposes such as creating and sharing reports about the use of our products and services, including users' interests, usage patterns, and trends.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Advertising.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We may use non-identifiable information that you provide or that we collect to improve or tailor the effectiveness of advertising on our Website and to provide advertisements and other content that is tailored to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">4.</span> How We Share Information
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                We may share, transfer, or disclose your information if you consent to us doing so, as well as in the following circumstances:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">To Service Providers.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We work with third-party service providers to provide services including transaction processing or administration; Website hosting and other similar services, development and maintenance; advertising and marketing services; and other services related to our Website and Services for us. These third parties may have access to or process your information as part of providing those services for us. Generally, we limit the information provided to these service providers to that which is reasonably necessary for them to perform their functions, and we require them to agree to maintain the confidentiality of such information. These service providers are not permitted to use information we share that might identify you for any purpose other than to provide services to Red Sun Capital, LLC dba RSC Private Lending or to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">In Aggregate Form.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We may make certain aggregated non-personal information available to third parties for various purposes, including (i) compliance with various reporting obligations; (ii) for business or marketing purposes; or (iii) to assist such parties in understanding our users' interests, usage patterns, and investment trends.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Compliance with Laws and Law Enforcement; Protection of Our Rights.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We may disclose your information (including your personal information) to a third party if (a) we believe that disclosure is reasonably necessary to comply with any applicable law, regulation, legal process, or governmental request, (b) to enforce our agreements, policies, and terms of service, (c) to protect the security or integrity of our Website or Services, (d) to protect the property, rights, and safety of Red Sun Capital, LLC dba RSC Private Lending, our users, or the public from harm or illegal activities, (e) to respond to an emergency which we believe in good faith requires us to disclose information to assist in preventing the death or serious bodily injury of any person, or (f) to investigate and defend ourselves against any third-party claims or allegations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">In Significant Business Transactions.</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Your information, including personal information, may be disclosed and otherwise transferred to an acquirer, successor, or assignee as part of any merger, acquisition, debt financing, sale of assets, or similar transaction, or in the event of an insolvency, bankruptcy, or receivership in which information is transferred to one or more third parties as one of our business assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">5.</span> Our Policy Concerning Children
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our website is not directed to children under 13, and we do not knowingly collect any personal information from children under the age of 13 through our website. If we become aware that a child under 13 has provided us with personal information through our website, we will take steps to delete such information.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">6.</span> Privacy Policies of Linked Sites and Advertisers
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our Website may contain links to other sites, as well as advertisements from companies linking to their own sites. We are not responsible for the privacy practices or the content of such sites. If you have any questions about how these other sites use your information, you should contact them directly.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">7.</span> Security
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Red Sun Capital, LLC dba RSC Private Lending has certain measures in place to maintain the security, confidentiality, and integrity of the information gathered through the Website, and to help protect against the loss, misuse, and alteration of such information. While we take measures to protect your personal information against security breaches and unauthorized access, we cannot guarantee that our safeguards will be effective all of the time against all security threats.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">8.</span> Changes to Our Privacy Policy
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                This Privacy Policy may be revised from time to time. If we decide to make material changes to our Privacy Policy, we will make reasonable efforts to notify you of the changes by sending a notice to the primary email address provided to us and/or by placing a notice on our Website.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">9.</span> How to Access and Update Your Information
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                You can access and update the information that you have provided to us as follows:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                <li>If you are a client, you can access and update certain personal information in connection with your account by logging into your account online.</li>
                <li>You may contact us at <a href="mailto:go@redsuncapital.com" className="text-rsc-red hover:underline">go@redsuncapital.com</a> and request to review, amend, or delete certain personal information collected by us.</li>
              </ul>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Please note that we may not be able to delete all information we collect through our Website.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                You may opt-out of receiving marketing emails at any time by following the steps to "unsubscribe" described in the footer of our marketing emails. Your opt-out will become effective in 10 days or less.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                <span className="text-rsc-red">10.</span> Contact Us
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                If you have any questions, comments or concerns regarding our Privacy Policy and/or practices, please send an email to: <a href="mailto:info@RSCPrivateLending.com" className="text-rsc-red hover:underline">info@RSCPrivateLending.com</a>
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Red Sun Capital, LLC dba RSC Private Lending<br />
                118 Vintage Park Blvd #W317<br />
                Houston, TX 77070
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyNotice;
