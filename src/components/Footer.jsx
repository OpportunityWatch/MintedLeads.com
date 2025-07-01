import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiLinkedin, FiTwitter } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">
                Minter<span className="text-cyan-400">Mark</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-powered digital marketing solutions that transform dead leads into live revenue. 
              Custom workflows, performance-based results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <SafeIcon icon={FiTwitter} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Lead Reactivation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Cold Email Campaigns</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AI Workflow Agents</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Smart Chatbots</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <SafeIcon icon={FiMail} className="h-4 w-4 mr-2" />
                <a href="mailto:hello@mintermark.com" className="hover:text-cyan-400 transition-colors">
                  hello@mintermark.com
                </a>
              </li>
              <li className="flex items-center">
                <SafeIcon icon={FiPhone} className="h-4 w-4 mr-2" />
                <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MinterMark. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;