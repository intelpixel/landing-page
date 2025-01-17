import React from 'react';
import { ChevronRight, Users, Globe, Target } from 'lucide-react';
import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
      <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              About Intelpixel
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Revolutionizing medical imaging data access for AI innovation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Global Reach</h3>
              <p className="mt-4 text-gray-500">
                Connecting healthcare providers and AI researchers across continents to accelerate medical innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-gray-500">
                To democratize access to medical imaging data while ensuring privacy and compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="mt-4 text-gray-500">
                Led by industry veterans with deep expertise in healthcare, AI, and data management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Experienced Management Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the leaders driving innovation in medical imaging data
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {/* Jonathan Brickman */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center">
                  <img
                    className="w-32 h-32 rounded-full mx-auto mb-6"
                    src="https://intelpixel.io/lib_UYFkERUlcHfipxLh/jonathan.jpg"
                    alt="Jonathan Brickman"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">Jonathan Brickman</h3>
                  <p className="text-lg font-medium text-blue-600">Co-Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Santosh Bhavani */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center">
                  <img
                    className="w-32 h-32 rounded-full mx-auto mb-6"
                    src="https://intelpixel.io/lib_UYFkERUlcHfipxLh/santosh.jpg"
                    alt="Santosh Bhavani"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">Santosh Bhavani</h3>
                  <p className="text-lg font-medium text-blue-600">Co-Founder & CTO</p>
                </div>
              </div>
            </div>

            {/* Era Dwivedi */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center">
                  <img
                    className="w-32 h-32 rounded-full mx-auto mb-6"
                    src="https://intelpixel.io/lib_UYFkERUlcHfipxLh/era.jpg"
                    alt="Era Dwivedi"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">Era Dwivedi</h3>
                  <p className="text-lg font-medium text-blue-600">Data Management - India</p>
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
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Join us in transforming healthcare.</span>
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

export default About;