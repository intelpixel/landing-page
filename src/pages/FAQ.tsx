import React from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';
import Layout from '../components/Layout';

function FAQ() {
  return (
    <Layout>
      <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Find answers to common questions about Intelpixel's medical imaging data platform
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">What modalities do you support?</h3>
                  <p className="mt-4 text-gray-600">
                    We are focusing initially on X-Ray, CT, and MRI but plan to cover all modalities on a global basis, based on market demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">How is data accessed?</h3>
                  <p className="mt-4 text-gray-600">
                    To make it easy for organizations to get started, we have a cloud-based platform that allows for extensive search/filter options and a variety of image viewing and access. Every organization will receive a password protected access to our portal to find required medical imaging data.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">How are we different from other data providers?</h3>
                  <p className="mt-4 text-gray-600">
                    Because we offer a standardized and fully indexed and searchable platform, the process to procure required data is much easier. Spend less time sourcing data and more time doing critical research and development.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">What is the source of our data?</h3>
                  <p className="mt-4 text-gray-600">
                    Our data is sourced from trusted partners around the globe, allowing us to capture the most diverse and expansive data set available.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">What other services do we offer?</h3>
                  <p className="mt-4 text-gray-600">
                    In addition to our data platform, we offer a number of data enrichment services such as annotation software and algorithm training.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">How do we charge for our services?</h3>
                  <p className="mt-4 text-gray-600">
                    Data can be licensed based on project needs or through a platform license. Additional data enrichment services are based specific requirements and the scope of work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Still have questions?</span>
            <span className="block text-blue-200">We're here to help.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="mailto:jonathan@intelpixel.io" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Contact us <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}

export default FAQ;