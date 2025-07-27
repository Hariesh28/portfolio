import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Award, Filter } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Machine Learning', 'Web Development', 'Data Engineering', 'AI/NLP'];

  const projects = [
    {
      title: 'MarketGuardians: Financial News Verifier',
      description: 'Advanced ML system for detecting fake financial news using hybrid FinBERT + Random Forest model with explainable AI features.',
      longDescription: 'Developed a comprehensive solution to combat financial misinformation by scraping and labeling 50K+ financial news articles. Implemented advanced preprocessing techniques including SMOTE for class imbalance and achieved F1 score of 0.92 with 35% reduction in false positives.',
      category: 'Machine Learning',
      technologies: ['Python', 'FinBERT', 'Random Forest', 'SMOTE', 'Streamlit', 'Scikit-learn'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Hariesh28/MarketGuardians',
      demo: '#',
      date: 'Oct 2024',
      status: 'Anna University Hackathon - Top 15',
      highlights: [
        'Processed 50K+ financial news articles',
        'Achieved F1 score of 0.92',
        'Reduced false positives by 35%',
        'Implemented explainable AI dashboard'
      ]
    },
    {
      title: 'Birthday Reminder App',
      description: 'Full-stack application with Google OAuth, MySQL database, and AI-powered personalized greeting generation.',
      longDescription: 'Built a comprehensive birthday management system using modern web technologies. Features include secure authentication, automated email reminders, and AI-generated personalized messages using OpenAI\'s Gemini API.',
      category: 'Web Development',
      technologies: ['Python', 'Streamlit', 'MySQL', 'SQLAlchemy', 'Google OAuth', 'OpenAI Gemini', 'Docker', 'APScheduler'],
      image: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Hariesh28/Birthday-Reminder',
      demo: '#',
      date: 'Mar 2025',
      status: 'Production Ready',
      highlights: [
        'Google OAuth integration',
        'Automated email scheduling',
        'AI-powered greeting generation',
        'Containerized deployment'
      ]
    },
    {
      title: 'Handwritten Character Classifier',
      description: 'Neural network built from scratch using NumPy for multi-class character recognition with advanced preprocessing.',
      longDescription: 'Engineered a fully-connected neural network from scratch using only NumPy, trained on 2.57M samples. Implemented advanced image preprocessing techniques and achieved impressive accuracy for a from-scratch implementation.',
      category: 'Machine Learning',
      technologies: ['Python', 'NumPy', 'OpenCV', 'CLAHE', 'GitHub Actions', 'Unit Testing'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Hariesh28/Handwritten-Character-Classifier',
      demo: '#',
      date: 'Apr 2025',
      status: 'Open Source Library',
      highlights: [
        'Built neural network from scratch',
        'Trained on 2.57M samples',
        'Achieved 76.4% accuracy',
        'Packaged as Python library'
      ]
    },
    {
      title: 'CarQuest: AI Car Recommender',
      description: 'Intelligent car recommendation system with web scraping, chatbot integration, and optimized database performance.',
      longDescription: 'Comprehensive car recommendation platform featuring web scraping of 10K+ listings, intelligent chatbot using Rasa & TensorFlow, and optimized database with Redis caching for enhanced performance.',
      category: 'AI/NLP',
      technologies: ['Python', 'BeautifulSoup', 'Selenium', 'MySQL', 'Redis', 'Rasa', 'TensorFlow', 'Docker', 'Streamlit'],
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Hariesh28/CarQuest',
      demo: '#',
      date: 'Jan 2025',
      status: 'Live Demo Available',
      highlights: [
        'Scraped 10K+ car listings',
        '35% faster query performance',
        'AI chatbot with NLU',
        '99.9% uptime deployment'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-7xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate my expertise in data science, 
              machine learning, and full-stack development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-4">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                  isInView ? `animate-fade-in-up animation-delay-${index * 200}` : 'opacity-0'
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.date}</span>
                        </div>
                        {project.status && (
                          <div className="flex items-center space-x-1">
                            <Award className="w-3 h-3" />
                            <span>{project.status}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                    <ul className="grid grid-cols-1 gap-1 text-sm text-gray-600 dark:text-gray-300">
                      {project.highlights.slice(0, 2).map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Hariesh28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-200 font-medium"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;