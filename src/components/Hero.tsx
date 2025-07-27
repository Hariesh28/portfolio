import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code } from 'lucide-react';
import { useAnimation } from '../contexts/AnimationContext';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { animationsEnabled } = useAnimation();
  
  const titles = [
    'Associate Data Scientist',
    'Machine Learning Engineer',
    'AI Solutions Developer',
    'Data Engineering Specialist'
  ];

  useEffect(() => {
    if (!animationsEnabled) {
      setDisplayText(titles[0]);
      return;
    }

    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const eraseInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentTitle.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(eraseInterval);
              setCurrentIndex((prev) => (prev + 1) % titles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex, animationsEnabled]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className={`mb-8 ${animationsEnabled ? 'animate-fade-in-up' : ''}`}>
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">HR</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`space-y-6 ${animationsEnabled ? 'animate-fade-in-up animation-delay-200' : ''}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Hariesh R
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium">
                {displayText}
                <span className={`${animationsEnabled ? 'animate-pulse' : ''}`}>|</span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              B.Tech AI & Data Science student with hands-on experience in prototyping ML solutions 
              for high-impact use cases. Passionate about transforming data into actionable insights 
              and building intelligent systems that drive business value.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hariesh28606@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  hariesh28606@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+917825033030" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 78250 33030
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/hariesh-r-1104312b3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Hariesh28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transform hover:scale-110 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/hariesh28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transform hover:scale-110 transition-all duration-200"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Learn More About Me
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 font-medium"
              >
                View My Work
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${animationsEnabled ? 'animate-bounce' : ''}`}>
            <button
              onClick={scrollToAbout}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;