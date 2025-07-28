import React, { useState } from "react";
import { Github, ExternalLink, Calendar, Award, Filter } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Projects: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Machine Learning",
    "Web Development",
    "AI/NLP",
    "Data Engineering",
    "Developer Tools",
  ];

  const projects = [
    {
      title: "Python Sorting Algorithms Library",
      description:
        "pip‑installable Python library implementing 10 core sorting algorithms and utilities, emphasizing modularity and reusability.",
      category: "Developer Tools",
      technologies: [
        "Python",
        "PyPI",
        "GitHub Actions",
        "pytest",
        "Type Hints",
        "Documentation",
      ],
      image:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Hariesh28/Sorting-Algorithms-Library",
      demo: "https://pypi.org/project/sorting-techniques/",
      date: "Jan 2025",
      status: "Published on PyPI – 2.3k+ downloads",
      highlights: [
        "Implemented 10 classic sorting algorithms from scratch",
        "Applied type hints & docstrings for clarity",
        "Achieved 100% pytest coverage with CI via GitHub Actions",
        "Published on PyPI with 2,300+ downloads and growing",
      ],
    },
    {
      title: "Birthday Reminder App",
      description:
        "Full‑stack application with Google OAuth, MySQL database, and AI‑powered personalized greeting generation.",
      category: "Web Development",
      technologies: [
        "Python",
        "Streamlit",
        "MySQL",
        "SQLAlchemy",
        "Google OAuth",
        "OpenAI Gemini",
        "Docker",
        "APScheduler",
      ],
      image: "/images/Calender.png",
      github: "https://github.com/Hariesh28/Birthday-Reminder",
      demo: "https://birthday-reminder-qn9e.onrender.com/",
      date: "Mar 2025",
      status: "Production Ready",
      highlights: [
        "Secured login via Google OAuth 2.0",
        "Automated birthday email scheduling",
        "AI‑powered personalized message generation",
        "Packaged as Android APK for cross‑platform mobile use",
        "Containerized with Docker for easy deployment",
      ],
    },
    {
      title: "Handwritten Character Classifier",
      description:
        "Custom neural network implemented from scratch in NumPy for robust multi‑class handwriting recognition, with optional GPU/CUDA acceleration.",
      category: "Machine Learning",
      technologies: [
        "Python",
        "NumPy",
        "OpenCV",
        "CLAHE",
        "CUDA",
        "GitHub Actions",
        "pytest",
        "Unit Testing",
      ],
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Hariesh28/NeuralNetwork",
      demo: "",
      date: "Apr 2025",
      status: "Completed Project",
      highlights: [
        "Designed and implemented a fully‑connected neural network in pure NumPy",
        "Applied OpenCV + CLAHE for advanced image preprocessing on 2.57M samples",
        "Enabled GPU/CUDA acceleration for 5× faster training",
        "Achieved 76.4% accuracy on held‑out handwriting dataset",
        "Built a pytest suite with 100% coverage and GitHub Actions CI",
      ],
      hasActions: true,
    },
    {
      title: "CarQuest: AI Car Recommender",
      description:
        "Dynamic recommendation platform that scrapes automotive listings, powers a conversational chatbot via Gemini API, and delivers real‑time suggestions through an intuitive Streamlit UI.",
      category: "AI/NLP",
      technologies: [
        "Python",
        "BeautifulSoup",
        "Selenium",
        "MySQL",
        "Gemini API",
        "Docker",
        "Streamlit",
      ],
      image:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Hariesh28/CarQuest",
      demo: "https://carquest.streamlit.app/",
      date: "Jan 2025",
      status: "Live Demo Available",
      highlights: [
        "Scraped 2K+ car listings with BeautifulSoup & Selenium, normalizing data across diverse sources",
        "Optimized MySQL schema and queries for 35% faster retrieval times",
        "Integrated conversational chatbot using OpenAI Gemini API for natural preference understanding",
        "Containerized entire solution in Docker, achieving 99.9% uptime",
      ],
      hasActions: true,
    },
    {
      title: "MarketGuardians: Financial News Verifier",
      description:
        "Advanced ML system for detecting fake financial news using hybrid FinBERT + Random Forest model with explainable AI features.",
      category: "Machine Learning",
      technologies: [
        "Python",
        "FinBERT",
        "Random Forest",
        "SMOTE",
        "Streamlit",
        "Scikit‑learn",
      ],
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Hariesh28/MarketGuardians",
      demo: "#",
      date: "Oct 2024",
      status: "Anna University Hackathon – Top 15",
      highlights: [
        "Processed 50K+ financial news articles",
        "Balanced classes with SMOTE, reducing bias",
        "Achieved F1 score of 0.92",
        "Reduced false positives by 35%",
        "Built explainable‑AI dashboard with SHAP visualizations",
      ],
    },
    {
      title: "Chemical Mixing Automation PoC",
      description:
        "Proof‑of‑Concept AI solution using Graph Neural Networks and Knowledge Graphs to automate chemical mixing processes.",
      category: "Data Engineering",
      technologies: [
        "Python",
        "Graph Neural Networks",
        "Knowledge Graphs",
        "Streamlit",
        "Jupyter",
        "NumPy",
        "Pandas",
      ],
      image:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Hariesh28/Chemical-Mixing-PoC",
      demo: "#",
      date: "Nov 2024",
      status: "Proof of Concept",
      highlights: [
        "Prototyped AI model with GNN for optimal mixing ratios",
        "Constructed Knowledge Graph to model process flows & constraints",
        "Deployed interactive Streamlit dashboard for real‑time tuning",
        "Automated data‑integrity checks, reducing manual audits by 40%",
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate my expertise in
              data science, machine learning, and full-stack development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
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
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                  isInView
                    ? `animate-fade-in-up animation-delay-${idx * 200}`
                    : "opacity-0"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
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
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {project.highlights.map((hl, i) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Hariesh28"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-200 font-medium"
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
