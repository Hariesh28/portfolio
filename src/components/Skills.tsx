import React, { useState, useEffect } from "react";
import { Code, Database, Brain, BarChart3, Cloud, Wrench } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Skills: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [animatedBars, setAnimatedBars] = useState<Set<number>>(new Set());

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "blue",
      skills: [
        {
          name: "Python",
          level: 95,
          description: "Expert with data science & ML libraries",
        },
        {
          name: "SQL",
          level: 90,
          description: "Advanced queries, joins & schema design",
        },
        {
          name: "C/C++",
          level: 80,
          description: "Competitive programming & performance optimization",
        },
        {
          name: "Java",
          level: 80,
          description: "Object‑oriented design and Android basics",
        },
      ],
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      color: "purple",
      skills: [
        {
          name: "Machine Learning",
          level: 90,
          description: "Supervised & unsupervised models with scikit‑learn",
        },
        {
          name: "Deep Learning",
          level: 85,
          description: "CNNs & RNNs using TensorFlow & PyTorch",
        },
        {
          name: "Natural Language Processing",
          level: 80,
          description:
            "Transformers, embeddings, and FinBERT for financial NLP",
        },
        {
          name: "Computer Vision",
          level: 75,
          description: "Image pipelines & OpenCV",
        },
      ],
    },
    {
      icon: Database,
      title: "Data Engineering & DevOps",
      color: "green",
      skills: [
        {
          name: "Git & GitHub",
          level: 95,
          description: "Version control & collaborative workflows",
        },
        {
          name: "MySQL & NoSQL",
          level: 90,
          description: "Database design & query optimization",
        },
        {
          name: "Docker",
          level: 80,
          description: "Containerization for reproducible deployments",
        },
        {
          name: "CI/CD Pipelines",
          level: 75,
          description: "Automated testing & deployment pipelines",
        },
      ],
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      color: "orange",
      skills: [
        {
          name: "Matplotlib & Seaborn",
          level: 90,
          description: "Custom plots & statistical charts",
        },
        {
          name: "Streamlit",
          level: 85,
          description: "Rapid prototyping of data apps",
        },
        {
          name: "Tableau",
          level: 75,
          description: "Interactive web-based dashboards",
        },
        {
          name: "Pandas Plotting",
          level: 65,
          description: "Quick in-notebook plotting for EDA and reports",
        },
      ],
    },
    {
      icon: Cloud,
      title: "Deployment & Infrastructure",
      color: "indigo",
      skills: [
        {
          name: "Render",
          level: 85,
          description:
            "Deployed full-stack apps with domain setup and background workers",
        },
        {
          name: "Ngrok",
          level: 80,
          description:
            "Tunneled local apps securely for real-time demo and testing",
        },
        {
          name: "Streamlit Cloud",
          level: 80,
          description:
            "Hosted interactive data apps with automatic GitHub integration",
        },
        {
          name: "Heroku & Netlify",
          level: 75,
          description: "One-click deployment for backend and frontend web apps",
        },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "red",
      skills: [
        {
          name: "Jupyter & VS Code",
          level: 95,
          description:
            "Preferred environments for prototyping and full-scale development",
        },
        {
          name: "Pandas & NumPy",
          level: 95,
          description:
            "Extensive use for data cleaning, preprocessing, and analysis",
        },
        {
          name: "Scikit‑learn",
          level: 90,
          description:
            "Go-to ML library for pipelines, modeling, and evaluation",
        },
        {
          name: "PyTorch",
          level: 50,
          description:
            "Currently exploring deep learning fundamentals and model building",
        },
      ],
    },
  ];

  useEffect(() => {
    if (isInView) {
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((_, skillIndex) => {
          setTimeout(() => {
            setAnimatedBars(
              (prev) => new Set([...prev, categoryIndex * 100 + skillIndex])
            );
          }, categoryIndex * 200 + skillIndex * 100);
        });
      });
    }
  }, [isInView]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 text-blue-600 border-blue-200 dark:border-blue-800",
      purple:
        "bg-purple-500 text-purple-600 border-purple-200 dark:border-purple-800",
      green:
        "bg-green-500 text-green-600 border-green-200 dark:border-green-800",
      orange:
        "bg-orange-500 text-orange-600 border-orange-200 dark:border-orange-800",
      indigo:
        "bg-indigo-500 text-indigo-600 border-indigo-200 dark:border-indigo-800",
      red: "bg-red-500 text-red-600 border-red-200 dark:border-red-800",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-7xl mx-auto ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for data science, machine learning, and
              software development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 ${getColorClasses(
                  category.color
                )} ${
                  isInView
                    ? `animate-fade-in-up animation-delay-${
                        categoryIndex * 100
                      }`
                    : "opacity-0"
                }`}
              >
                {/* Category Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        category.color === "blue"
                          ? "bg-blue-100 dark:bg-blue-900/30"
                          : category.color === "purple"
                          ? "bg-purple-100 dark:bg-purple-900/30"
                          : category.color === "green"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : category.color === "orange"
                          ? "bg-orange-100 dark:bg-orange-900/30"
                          : category.color === "indigo"
                          ? "bg-indigo-100 dark:bg-indigo-900/30"
                          : "bg-red-100 dark:bg-red-900/30"
                      }`}
                    >
                      <category.icon
                        className={`w-6 h-6 ${
                          category.color === "blue"
                            ? "text-blue-600 dark:text-blue-400"
                            : category.color === "purple"
                            ? "text-purple-600 dark:text-purple-400"
                            : category.color === "green"
                            ? "text-green-600 dark:text-green-400"
                            : category.color === "orange"
                            ? "text-orange-600 dark:text-orange-400"
                            : category.color === "indigo"
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const skillId = categoryIndex * 100 + skillIndex;
                      const isAnimated = animatedBars.has(skillId);

                      return (
                        <div key={skillIndex} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                category.color === "blue"
                                  ? "bg-blue-500"
                                  : category.color === "purple"
                                  ? "bg-purple-500"
                                  : category.color === "green"
                                  ? "bg-green-500"
                                  : category.color === "orange"
                                  ? "bg-orange-500"
                                  : category.color === "indigo"
                                  ? "bg-indigo-500"
                                  : "bg-red-500"
                              }`}
                              style={{
                                width: isAnimated ? `${skill.level}%` : "0%",
                              }}
                            ></div>
                          </div>

                          {/* Skill Description */}
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {skill.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-4xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm constantly expanding my skill set and staying updated with
                the latest technologies in data science and AI. Currently
                exploring advanced topics in generative AI, MLOps, and
                cloud-native data architectures.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Generative AI",
                  "MLOps",
                  "LangChain",
                  "MLflow",
                  "Hugging Face",
                  "Streamlit Cloud",
                  "Prompt Engineering",
                  "Data Versioning",
                  "Experiment Tracking",
                  "Model Deployment",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
