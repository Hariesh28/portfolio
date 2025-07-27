import React from 'react';
import { Heart, Github, Linkedin, Code, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/hariesh-r-1104312b3',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/Hariesh28',
      label: 'GitHub'
    },
    {
      icon: Code,
      href: 'https://leetcode.com/u/hariesh28',
      label: 'LeetCode'
    },
    {
      icon: Mail,
      href: 'mailto:hariesh28606@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">H</span>ariesh R
            </div>
            <p className="text-gray-300 leading-relaxed">
              Associate Data Scientist passionate about transforming data into actionable insights 
              and building intelligent systems that drive business value.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 hariesh28606@gmail.com</p>
              <p>📱 +91 78250 33030</p>
              <p>📍 Chennai, India</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400">
                Open to new opportunities and collaborations in data science and AI.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Hariesh R. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of ☕</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Back to Top
              </button>
              <span>•</span>
              <span>Built with React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;