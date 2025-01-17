import React from 'react';
import { Shield } from 'lucide-react';
import Layout from '../components/Layout';

function Privacy() {
  return (
    <Layout>
      <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Our commitment to protecting your privacy
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Intelpixel, Inc. is committed to protecting your privacy and we have prepared this privacy policy ("Privacy Policy") to explain how we collect, use, and disclose any Personal Information that we collect. "Personal Information" is defined as any information that can be used to identify an individual.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-8">
              This Privacy Policy applies to the processing of your Personal Information when you visit our website at www.intelpixel.com or a website of any of Intelpixel's affiliates (the "Site"), if you contact us by any means, and if you make use of any of Intelpixel's products, subscription and support services, software, or mobile applications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The types of Personal Information Intelpixel collects</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>Personal identifiers, contact details, and characteristics (e.g., name and e-mail address).</li>
              <li>Website user statistics (e.g., IP address, browser type, and interaction data).</li>
              <li>Employee data.</li>
              <li>Delivery information, physical address, business contact information.</li>
              <li>Demographic information.</li>
              <li>Payment information (e.g., credit card details).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Intelpixel gets your Personal Information and why we have it</h2>
            <p className="text-gray-600 mb-4">
              Most of the Personal Information we process is provided to us directly by you for one of the following reasons:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>To enable you to access the Site and use Intelpixel's products and services.</li>
              <li>To provide and improve customer support.</li>
              <li>To send marketing communications.</li>
              <li>For internal training purposes.</li>
              <li>To maintain our records and other administrative functions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who has access to your Personal Information?</h2>
            <p className="text-gray-600 mb-8">
              We will only share your Personal Information with those that need access to the information for us to achieve the purpose for which we have collected it, or to comply with an obligation imposed by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Intelpixel stores your Personal Information</h2>
            <p className="text-gray-600 mb-8">
              The security of your Personal Information is important to us. We use reasonable and appropriate safeguards to protect information from unauthorized use, disclosure, or access.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Privacy Policy changes and questions</h2>
            <p className="text-gray-600 mb-4">
              Intelpixel reserves the right to change this Privacy Policy at any time. If a change is made, we will post the updated Privacy Policy on the Site.
            </p>
            <p className="text-gray-600">
              If you have any concerns or questions about our use of your Personal Information, please contact us at{' '}
              <a href="mailto:santosh@intelpixel.io" className="text-blue-600 hover:text-blue-700">
                santosh@intelpixel.io
              </a>.
            </p>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}

export default Privacy;