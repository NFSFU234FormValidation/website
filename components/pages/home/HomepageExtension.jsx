// components/pages/home/HomepageExtension.js
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2 text-sm">
    <FontAwesomeIcon icon={icon} className="text-primary" />
    <span>{text}</span>
  </div>
);

const HomepageExtension = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 break-words whitespace-normal">NFSFU234FormValidation Browser Extension</h2>
          <p className="text-gray-600">Enhance your form validation workflow with our new browser extension (Alpha)</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-inner bg-gray-200">
              {/* Replace with actual extension preview or icon */}
              <div className="flex items-center justify-center text-4xl text-gray-400">
                <Image src={'/NFSFU234FormValidation-logo.png'} alt='Logo' width={320} height={320} />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">Powerful Validation at Your Fingertips</h3>
            <p className="text-gray-600 mb-6">
              Experience seamless form validation with our browser extension, 
              bringing the power of NFSFU234FormValidation directly to your browser.
            </p>
            <div className="space-y-3 mb-8">
              <FeatureItem icon={faPuzzlePiece} text="Seamless Integration" />
              <FeatureItem icon={faPuzzlePiece} text="Comprehensive Validation Options" />
              <FeatureItem icon={faPuzzlePiece} text="Customizable Settings" />
            </div>
              <Link href="/blog/nfsfu234-form-validation-extension-release" className="inline-flex items-center text-primary hover:text-primary-dark transition duration-300">
                Learn More
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageExtension;