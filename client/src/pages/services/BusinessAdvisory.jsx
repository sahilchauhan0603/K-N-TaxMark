import React from 'react';
import { Link } from 'react-router-dom';

const BusinessAdvisory = () => {
  const scrollToServices = () => {
    const section = document.getElementById('business-services-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6">
              Grow Your <span className="text-pink-600">Business</span> with Expert Advisory
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              From startup registration to company incorporation and ongoing legal advisory, our business advisory services help you grow and stay compliant at every stage.
            </p>
            <button
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
              onClick={scrollToServices}
            >
              Get Started Today
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80" 
              alt="Business Advisory" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Services Section */}
        <div id="business-services-section" className="mb-16">
          <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Our Business Advisory Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                  alt="Startup Registration" 
                  className="w-12 h-12 mr-4" 
                />
                <h3 className="text-xl font-semibold text-gray-800">Startup & MSME Registration</h3>
              </div>
              <p className="text-gray-600">
                Hassle-free registration for startups and MSMEs, including all documentation and compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3448/3448558.png" 
                  alt="Company Incorporation" 
                  className="w-12 h-12 mr-4" 
                />
                <h3 className="text-xl font-semibold text-gray-800">Company Incorporation</h3>
              </div>
              <p className="text-gray-600">
                End-to-end support for company formation, structuring, and legal compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1907/1907555.png" 
                  alt="Advisory" 
                  className="w-12 h-12 mr-4" 
                />
                <h3 className="text-xl font-semibold text-gray-800">Legal & Financial Advisory</h3>
              </div>
              <p className="text-gray-600">
                Ongoing legal, financial, and compliance advisory for smooth business operations.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-8 shadow-lg text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">Let Us Help You Build & Scale</h3>
              <p className="text-pink-100">
                Book a strategy session and get expert guidance for your business growth and compliance.
              </p>
            </div>
            <Link
              to="/contact-us"
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 text-center"
            >
              Book a Strategy Session
            </Link>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Expert Team
              </h3>
              <p className="text-gray-600">
                Experienced professionals for business, legal, and financial advisory.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Timely Support
              </h3>
              <p className="text-gray-600">
                Fast, reliable, and proactive support for all your business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Confidential & Secure
              </h3>
              <p className="text-gray-600">
                Your business data is protected with strict confidentiality and security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-6 h-6 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
                End-to-End Guidance
              </h3>
              <p className="text-gray-600">
                From registration to scaling, we support your business journey.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-pink-500 pl-4">
              <p className="text-gray-600 italic mb-4">
                "The business advisory team helped us incorporate our company and set up all compliance. Highly recommended!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/33.jpg" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Rohit Gupta</p>
                  <p className="text-sm text-gray-500">Startup Founder</p>
                </div>
              </div>
            </div>
            <div className="border-l-4 border-pink-500 pl-4">
              <p className="text-gray-600 italic mb-4">
                "Excellent legal and financial advice. Our business is in safe hands."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Client" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Meera Singh</p>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAdvisory;
