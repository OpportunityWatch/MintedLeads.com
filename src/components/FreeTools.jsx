import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGift, FiDatabase, FiMail, FiTarget, FiDownload, FiArrowRight } = FiIcons;

const FreeTools = () => {
  return (
    <section id="free-tools" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get Started <span className="text-cyan-400">FREE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of our lead generation tools with our free starter package and lead intelligence platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Free Offer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <div className="text-center mb-8">
              <SafeIcon icon={FiGift} className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Free Outbound Starter Package
              </h3>
              <p className="text-gray-300 text-lg">
                Everything you need to start generating leads today - completely free.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiDatabase} className="h-5 w-5 text-cyan-400 mr-3" />
                <span>FreshMintedLeads intelligence tool access</span>
              </div>
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiMail} className="h-5 w-5 text-cyan-400 mr-3" />
                <span>Pre-built email templates and sequences</span>
              </div>
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiTarget} className="h-5 w-5 text-cyan-400 mr-3" />
                <span>Basic lead targeting and research tools</span>
              </div>
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiDownload} className="h-5 w-5 text-cyan-400 mr-3" />
                <span>Instant download and setup guides</span>
              </div>
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center group">
              <SafeIcon icon={FiDownload} className="mr-2" />
              Download Free Package
              <SafeIcon icon={FiArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* FreshMintedLeads Tool */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-8 border border-gray-700"
          >
            <div className="mb-6">
              <SafeIcon icon={FiDatabase} className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">FreshMintedLeads</h3>
              <p className="text-gray-300">
                Our powerful lead intelligence platform that finds, analyzes, and scores prospects for your business.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Advanced prospect search and filtering</li>
                  <li>• Contact information verification</li>
                  <li>• Lead scoring and prioritization</li>
                  <li>• Company insights and intelligence</li>
                  <li>• Export to your CRM or email platform</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-2">Perfect For:</h5>
                <p className="text-gray-400 text-sm">
                  Sales teams, entrepreneurs, and businesses looking to build high-quality prospect lists without the manual research.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Integration Note */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-2">Seamless Integration</h4>
            <p className="text-gray-400">
              Our tools integrate with n8n workflows and SuiteDash CRM for complete automation and tracking.
            </p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h4 className="text-xl font-semibold text-white mb-4">
            Ready for a Custom Solution?
          </h4>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can create a tailored lead generation system for your business.
          </p>
          <a
            href="#booking"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Book Your Strategy Session
            <SafeIcon icon={FiArrowRight} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeTools;