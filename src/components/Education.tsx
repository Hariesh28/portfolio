import React from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Education: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const education = {
    institution: "Shiv Nadar University, Chennai",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "2023 – 2027",
    location: "Chennai, India",
    gpa: "8.93",
    status: "Currently Pursuing",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Probability & Statistics",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Artificial Intelligence",
      "Data Mining",
      "Big Data Analytics",
    ],
    achievements: [
      "Ranked in Top 15 at Anna University Hackathon for an AI-based financial news verifier",
      "Developed a cross-platform app prototype at SNUC Hacks hackathon",
      "Completed and deployed multiple end-to-end AI/ML projects using real-world data",
      "Contributed to AI & DS student initiatives and technical communities on campus",
    ],
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Building a strong foundation in artificial intelligence and data
              science
            </p>
          </div>

          {/* Education Card */}
          <div
            className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl overflow-hidden ${
              isInView ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {education.institution}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {education.degree}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GPA Badge */}
                <div className="flex flex-col items-center lg:items-end space-y-2">
                  <div className="bg-green-100 dark:bg-green-900/30 px-6 py-3 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {education.gpa}
                    </div>
                    <div className="text-sm text-green-700 dark:text-green-300 text-center">
                      GPA
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                    {education.status}
                  </span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Coursework */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Relevant Coursework
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.coursework.map((course, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors ${
                          isInView
                            ? `animate-fade-in-left animation-delay-${
                                300 + index * 50
                              }`
                            : "opacity-0"
                        }`}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Academic Achievements
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {education.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg ${
                          isInView
                            ? `animate-fade-in-right animation-delay-${
                                300 + index * 100
                              }`
                            : "opacity-0"
                        }`}
                      >
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-purple-600 dark:text-purple-400 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Academic Focus & Future Goals
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My academic journey at Shiv Nadar University has provided me
                  with a comprehensive understanding of AI and Data Science
                  fundamentals. Through rigorous coursework and hands-on
                  projects, I've developed expertise in machine learning
                  algorithms, statistical analysis, and data engineering
                  practices. I'm particularly interested in the intersection of
                  AI and real-world applications, focusing on how data science
                  can solve complex business problems and drive innovation
                  across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
