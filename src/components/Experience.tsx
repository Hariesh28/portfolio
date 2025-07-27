import React from 'react';
import { Calendar, MapPin, Building, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Experience: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Trainee-Support',
      company: 'Tech Mahindra',
      location: 'Chennai, India',
      period: 'Jun 2025 – Present',
      type: 'Hybrid',
      achievements: [
        'Prototyped an AI model using Graph Neural Networks and Knowledge Graphs to automate chemical mixing for a leading chemical company, demonstrating potential to replace manual batching',
        'Developed custom data processing pipelines in Python and Jupyter to ingest sensor data, train models, and visualize process optimizations',
        'Contributed to a proof-of-concept analytics dashboard by handling backend debugging and resolving integration issues, ensuring consistent data flow and system responsiveness',
        'Automated data-integrity checks in Python, reducing manual audits by 40%, and documented playbooks to onboard new team members'
      ],
      technologies: ['Python', 'Data Engineering', 'Graph Neural Networks', 'Jupyter', 'Machine Learning', 'Data Engineering', 'Knowledge Graphs']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building innovative solutions and driving impact through data science and engineering
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  isInView ? `animate-fade-in-right animation-delay-${index * 200}` : 'opacity-0'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                {/* Experience Card */}
                <div className="ml-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                          <Building className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1">
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                I'm actively seeking opportunities to apply my data science expertise in challenging
                roles where I can drive innovation and create meaningful impact.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;