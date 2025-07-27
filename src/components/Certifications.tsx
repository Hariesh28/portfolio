import React from 'react';
import { AlignCenterVertical as Certificate, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Certifications: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const certifications = [
    {
      title: 'Anna University Hackathon Top 15 Certificate',
      issuer: 'Anna University',
      date: 'Oct 2024',
      status: 'Completed',
      type: 'Achievement',
      description: 'Recognized for developing MarketGuardians: Financial News Verifier, achieving top 15 position among hundreds of participants.',
      skills: ['Machine Learning', 'FinBERT', 'Data Science', 'Team Leadership'],
      credentialId: 'AU-HACK-2024-15'
    },
    {
      title: 'Python for Machine Learning & Data Science Masterclass',
      issuer: 'Udemy',
      date: 'In Progress',
      status: 'In Progress',
      type: 'Course',
      description: 'Comprehensive course covering advanced Python techniques for ML and data science applications.',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
      progress: 75
    },
    {
      title: 'NLP – Natural Language Processing with Python',
      issuer: 'Udemy',
      date: 'In Progress',
      status: 'In Progress',
      type: 'Course',
      description: 'Deep dive into NLP techniques, text processing, and language model implementation.',
      skills: ['NLP', 'NLTK', 'spaCy', 'Text Processing', 'Language Models'],
      progress: 60
    },
    {
      title: 'Deep Learning Fundamentals with Python',
      issuer: 'Udemy',
      date: 'In Progress',
      status: 'In Progress',
      type: 'Course',
      description: 'Exploring neural networks, deep learning architectures, and practical implementations.',
      skills: ['Deep Learning', 'TensorFlow', 'Keras', 'Neural Networks'],
      progress: 45
    },
    {
      title: 'Python for Computer Vision with OpenCV',
      issuer: 'Udemy',
      date: 'In Progress',
      status: 'In Progress',
      type: 'Course',
      description: 'Hands-on computer vision projects using OpenCV and Python for image processing.',
      skills: ['Computer Vision', 'OpenCV', 'Image Processing', 'Python'],
      progress: 30
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Achievement':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Course':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Courses
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Continuous learning and professional development in data science and AI
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isInView ? `animate-fade-in-up animation-delay-${index * 100}` : 'opacity-0'
                }`}
              >
                {/* Card Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        {cert.status === 'Completed' ? (
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        ) : (
                          <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status and Type Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(cert.type)}`}>
                      {cert.type}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6">
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Progress Bar (for in-progress courses) */}
                  {cert.progress && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Progress
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${cert.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID (for completed certifications) */}
                  {cert.credentialId && (
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Credential ID:</span>
                        <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                          {cert.credentialId}
                        </p>
                      </div>
                      <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                        <ExternalLink className="w-3 h-3" />
                        <span>Verify</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-4xl">
              <Certificate className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Commitment to Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in the importance of staying current with rapidly evolving technologies 
                in data science and AI. Through structured courses, hands-on projects, and industry 
                certifications, I continuously expand my knowledge and skills to deliver cutting-edge 
                solutions. My learning journey reflects my dedication to excellence and my passion 
                for leveraging the latest advancements in artificial intelligence and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;