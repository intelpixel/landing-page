import React from 'react';
import { ChevronRight, Search, Filter, FolderOpen, BarChart } from 'lucide-react';
import Layout from '../components/Layout';

function AIResearchers() {
  return (
    <Layout>
      <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Find the perfect</span>
                <span className="block text-blue-600">datasets for your AI</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Access high-quality, anonymized medical imaging datasets to train and validate your AI models with confidence.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Explore Datasets <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="/researchers.png"
                  alt="Intelpixel datasets dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Search className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Search through our friendly SaaS portal</h3>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Enter your search criteria and start exploring our indexed data sets through our intuitive interface.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Filter className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Refine your search criteria</h3>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Use filters such as modality, indication, device manufacturer, bodypart, and geographic location to find exactly what you need.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <FolderOpen className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Finalize requirements and license data</h3>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                When you have what you need, we will license and provide immediate access to anonymized DICOM files, reports, and metadata.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <BarChart className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Come back for more data</h3>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                Our datasets are constantly expanding. Come back and explore our portal for more data to refine your models or build new ones.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to explore?</span>
            <span className="block text-blue-200">Start discovering datasets today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="mailto:jonathan@intelpixel.io" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}

export default AIResearchers;