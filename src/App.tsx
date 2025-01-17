import React from 'react';
import { Brain, Database, LineChart, Lock, ChevronRight, Microscope } from 'lucide-react';
import Layout from './components/Layout';


function App() {
  return (
    <Layout>
      <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Unlock the value of</span>
                <span className="block text-blue-600">medical imaging data</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                High-quality, anonymized, and indexed medical imaging datasets to fuel your healthcare AI projects.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <a href="mailto:jonathan@intelpixel.io" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                  Contact us <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="/datasets.png"
                  alt="Intelpixel datasets dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">9M+</div>
              <div className="mt-2 text-sm text-blue-100">Studies indexed and searchable</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">500+</div>
              <div className="mt-2 text-sm text-blue-100">Healthcare sites across US, MENA, and Asia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">10</div>
              <div className="mt-2 text-sm text-blue-100">Imaging modalities</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">For Providers</h3>
              <p className="mt-4 text-gray-500">
                Monetize your de-identified medical imaging data while contributing to cutting-edge research.
              </p>
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium">
                Request a demo
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                <Microscope className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">For Researchers</h3>
              <p className="mt-4 text-gray-500">
                Find and access the exact datasets you need, eliminating the complexities of data acquisition and preparation.
              </p>
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium">
                Explore datasets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="relative p-6 bg-white rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Find Diverse Datasets</h3>
              <p className="mt-2 text-gray-500">
                Explore millions of medical imaging studies from the US, MENA, and Asia, with hundreds of free samples available.
              </p>
            </div>
            <div className="relative p-6 bg-white rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Cloud Access</h3>
              <p className="mt-2 text-gray-500">
                Access medical imaging data instantly in the cloud. Skip the weeks or months spent negotiating licenses.
              </p>
            </div>
            <div className="relative p-6 bg-white rounded-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Latest Updates</h3>
              <p className="mt-2 text-gray-500">
                Stay ahead with instant access to the latest datasets. Get notified when new data is published.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Success Stories</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              See how organizations are leveraging our platform
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Medical Device Company</h3>
                <p className="mt-2 text-gray-500">
                  Acquired enough data to proceed with FDA 510k filing within 6 months by accessing specific US images with labeled organs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Medical Imaging AI Startup</h3>
                <p className="mt-2 text-gray-500">
                  Successfully expanded to new regions by accessing diverse datasets for algorithm validation and refinement.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Clinical Research Organization</h3>
                <p className="mt-2 text-gray-500">
                  Completed clinical trial by accessing comprehensive patient records through our collaboration with a large health system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Why wait?</span>
            <span className="block text-blue-200">Get started today</span>
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

export default App;