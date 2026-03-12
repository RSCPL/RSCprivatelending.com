import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const POF = () => {
  return (
    <>
      <Helmet>
        <title>POF Generator - RSC Private Lending</title>
        <meta name="description" content="Generate a Proof of Funds (POF) letter to demonstrate your financial capability for real estate transactions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600">
        <Navbar />
        
        {/* Main Content */}
        <main className="pt-32 pb-20 min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Heading */}
                <div>
                  <h1 className="text-5xl font-bold mb-4">
                    <span className="text-white">Generate a </span>
                    <span className="text-rsc">POF.</span>
                  </h1>
                  <p className="text-lg text-gray-300 mb-2">
                    Please input the POF details you require.
                  </p>
                  <p className="text-sm text-gray-400">
                    This will only be sent to existing, vetted clients.
                  </p>
                </div>

                {/* Info Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-rsc mb-4">
                    What is a Proof of Funds?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    A Proof of Funds (POF) letter is a document that demonstrates you have the financial capability to complete a real estate transaction. This is essential for:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-rsc mr-2 mt-1">•</span>
                      <span>Making competitive offers on properties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rsc mr-2 mt-1">•</span>
                      <span>Showing sellers you're a serious buyer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rsc mr-2 mt-1">•</span>
                      <span>Expediting the purchasing process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rsc mr-2 mt-1">•</span>
                      <span>Building trust with real estate agents and sellers</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Form Card */}
              <div className="lg:sticky lg:top-32">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* Red Header */}
                  <div className="bg-rsc py-6 px-8">
                    <h2 className="text-2xl font-bold text-white text-center">
                      POF Generator
                    </h2>
                  </div>
                  
                  {/* Form Container */}
                  <div className="p-8">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/tmYEtGbd3zERl77T0zhM"
                      style={{
                        width: '100%',
                        height: '1400px',
                        border: 'none',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}
                      scrolling="no"
                      id="inline-tmYEtGbd3zERl77T0zhM" 
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="RSC POF Generator "
                      data-height="508"
                      data-layout-iframe-id="inline-tmYEtGbd3zERl77T0zhM"
                      data-form-id="tmYEtGbd3zERl77T0zhM"
                      title="RSC POF Generator "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
      
      {/* Form Embed Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </>
  );
};

export default POF;
