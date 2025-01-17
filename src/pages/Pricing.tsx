import React from 'react';
import { ChevronRight, Check, X, FileImage, Brain, Database } from 'lucide-react';
import Navigation from '../components/Navigation';

function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Flexible Pricing for Every Need
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Choose between annual subscription plans or pay-as-you-go options
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            Subscription Plans
          </h2>
          <p className="text-center text-gray-600 mb-12">All subscription plans require a 1-year commitment</p>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-600 mb-6">
                <FileImage className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">X-Ray Access</h3>
              <p className="mt-4 text-gray-500 min-h-[80px]">
                Access to our X-ray imaging database with up to 1 million studies per year.
              </p>
              <div className="mt-8">
                <p className="text-4xl font-extrabold text-gray-900">$999<span className="text-xl font-normal text-gray-500">/mo</span></p>
                <p className="mt-1 text-sm text-gray-500">Billed annually</p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to 1M studies per year</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Full metadata access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Basic API access</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 mr-3" />
                  <span>CT scans</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <X className="h-5 w-5 mr-3" />
                  <span>MRI studies</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-blue-600 rounded-2xl shadow-xl p-8 transform scale-105">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white text-blue-600 mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Premium Access</h3>
              <p className="mt-4 text-blue-100 min-h-[80px]">
                Access to all 10 imaging modalities with up to 1 million studies per year.
              </p>
              <div className="mt-8">
                <p className="text-4xl font-extrabold text-white">$2,499<span className="text-xl font-normal text-blue-200">/mo</span></p>
                <p className="mt-1 text-sm text-blue-200">Billed annually</p>
              </div>
              <ul className="mt-8 space-y-4 text-white">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Up to 1M studies per year</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Access to all 10 modalities</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-200 mr-3" />
                  <span>CT, MRI, Ultrasound & more</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Advanced API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-blue-200 mr-3" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Get started
              </button>
            </div>

            {/* Unlimited Plan */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-600 mb-6">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="mt-4 text-gray-500 min-h-[80px]">
                Unlimited access to all modalities with custom protocols and comprehensive reports.
              </p>
              <div className="mt-8">
                <p className="text-4xl font-extrabold text-gray-900">Custom<span className="text-xl font-normal text-gray-500"> pricing</span></p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited studies per year</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Pathology reports included</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom acquisition protocols</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom data pipelines</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pay As You Go */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
            Pay As You Go
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">X-Ray Studies</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">$5<span className="text-xl font-normal text-gray-500">/study</span></p>
              <p className="mt-2 text-sm text-gray-500">Includes DICOM image and radiology report</p>
              <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Purchase
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">CT Scans</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">$15<span className="text-xl font-normal text-gray-500">/study</span></p>
              <p className="mt-2 text-sm text-gray-500">Includes DICOM image and radiology report</p>
              <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Purchase
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900">MRI Studies</h3>
              <p className="mt-4 text-4xl font-bold text-gray-900">$15<span className="text-xl font-normal text-gray-500">/study</span></p>
              <p className="mt-2 text-sm text-gray-500">Includes DICOM image and radiology report</p>
              <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need help choosing?</span>
            <span className="block text-blue-200">Our team is here to assist you.</span>
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
  );
}

export default Pricing;