import React from 'react';
import { Scale } from 'lucide-react';
import Layout from '../components/Layout';

function Terms() {
  return (
    <Layout>
      <div className="bg-white">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-6">
              <Scale className="h-8 w-8" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Terms of Use
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-8">
              Thank you for visiting dcmshare.com (the "Site"). Your access and use of this Site is subject to the following terms of use and all applicable laws. By accessing or using this Site, which includes browsing, viewing, transmitting, downloading or using information from the Site in any way, you agree to be legally bound by these terms of use and all terms and conditions contained or referenced herein (collectively, "Terms of Use").
            </p>
            <p className="text-gray-600 mb-8">
              If you do NOT agree to these Terms of Use, please do not use this Site. You are responsible to ensure that your access to this Site and material available on or through it are legal in each jurisdiction in or through which you access, use or view the Site or such material.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Use of Content</h2>
            <p className="text-gray-600 mb-4">
              Between the parties, Intelpixel, Inc. owns or has rights to all of the information, artwork, images, data, graphics, text, software and other content of, or available from, the Site (the "Content").
            </p>
            <p className="text-gray-600 mb-4">
              The Content may be used under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
              <li>The Content may not be altered in any manner</li>
              <li>The Content is only to be used for personal, educational and non-commercial use</li>
              <li>The Content will not be redistributed, published, broadcast or copied</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Privacy and Security</h2>
            <p className="text-gray-600 mb-8">
              Intelpixel is committed to protecting your privacy. Please refer to our{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </a>{' '}
              to learn more about how we collect, use and disclose any Personal Information that we collect.
            </p>
            <p className="text-gray-600 mb-8">
              Despite Intelpixel's efforts, interception or unauthorized access may occur, and Intelpixel shall not be responsible for such interceptions or unauthorized access, or any direct, indirect, special, incidental, or consequential damages suffered by a user.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-8">
              All Intelpixel graphics, logos, design, page headers, scripts, product names, and service names are trademarks of Intelpixel or its affiliates. The trademarks may not be used without the prior written consent of Intelpixel.
            </p>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}

export default Terms;