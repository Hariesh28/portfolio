import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const highlights = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about identifying complex challenges and developing innovative ML solutions that drive real business impact.'
    },
    {
      icon: Users,
      title: 'Team Collaborator',
      description: 'Experienced in cross-functional collaboration, working closely with stakeholders to deliver data-driven insights.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focused',
      description: 'Always exploring cutting-edge technologies and methodologies to stay ahead in the rapidly evolving AI landscape.'
    },
    {
      icon: Award,
      title: 'Results Driven',
      description: 'Committed to delivering measurable outcomes, from 40% reduction in manual processes to 99% SLA adherence.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-6xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transforming data into actionable insights through innovative machine learning solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey in Data Science
              </h3>

              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p>
                  As a B.Tech AI & Data Science student at Shiv Nadar University (2023–2027) with a strong
                  GPA of 8.78, I've dedicated myself to mastering the art and science of data-driven
                  decision making.
                </p>

                <p>
                  My professional journey began at Tech Mahindra, where I had the opportunity to work on
                  groundbreaking projects, including developing an AI model for automating chemical mixing
                  processes for a leading chemical manufacturer. This experience taught me the importance
                  of bridging the gap between theoretical knowledge and practical implementation.
                </p>

                <p>
                  What drives me is the potential of AI and machine learning to solve real-world problems.
                  Whether it's optimizing industrial processes, building intelligent recommendation systems,
                  or creating tools that enhance user experiences, I'm passionate about leveraging technology
                  to make a meaningful impact.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">12+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">8.78</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Academic GPA</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 ${
                    isInView ? `animate-fade-in-left animation-delay-${(index + 1) * 100}` : 'opacity-0'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Beyond Data Science
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Music</h4>
                <p className="text-gray-600 dark:text-gray-300">Electronic keyboard enthusiast (Grade 4 Trinity)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fitness</h4>
                <p className="text-gray-600 dark:text-gray-300">Marathon runner and cycling enthusiast</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Languages</h4>
                <p className="text-gray-600 dark:text-gray-300">English (Fluent), Tamil (Native)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;