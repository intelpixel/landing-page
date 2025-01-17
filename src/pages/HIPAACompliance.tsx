import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';

function HIPAACompliance() {
  return (
    <Layout>
      <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              HIPAA Compliance
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Our commitment to protecting your medical data
            </p>
          </div>
        </div>
      </section>

      {/* HIPAA Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-8">
              Intelpixel, Inc. is committed to maintaining the privacy and security of your medical images.
            </p>
            <p className="text-gray-600 mb-8">
              We have entered into a Business Associate Agreement (BAA) with Wasabi Cloud Storage to ensure that all stored data is handled in compliance with HIPAA regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-8">
              All data stored with Wasabi is encrypted both in transit and at rest. Access to data is restricted to authorized personnel only, and all access is logged and monitored.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Access and Auditing</h2>
            <p className="text-gray-600 mb-8">
              We conduct regular audits to ensure compliance with HIPAA standards and to verify that all data access is appropriate and secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Incident Response</h2>
            <p className="text-gray-600 mb-8">
              In the event of a data breach, we have a comprehensive incident response plan in place to quickly address and mitigate any potential risks to PHI.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              If you have any questions about our HIPAA compliance, please contact us at{' '}
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

export default HIPAACompliance;