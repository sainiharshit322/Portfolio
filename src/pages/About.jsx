"use client"

import { useState, useEffect } from "react"
import {
  Code2,
  Brain,
  Server,
  Database,
  Cloud,
  Zap,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase,
  Heart,
  Coffee,
  Rocket,
  Target,
  Users,
  BookOpen,
} from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      color: "text-blue-500",
      bgColor: "bg-blue-50/50 dark:bg-blue-900/20",
      technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      icon: Server,
      color: "text-green-500",
      bgColor: "bg-green-50/50 dark:bg-green-900/20",
      technologies: ["FastAPI", "Node.js", "Python", "Express.js", "REST APIs", "GraphQL"],
    },
    {
      category: "AI/ML",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-50/50 dark:bg-purple-900/20",
      technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Scikit-learn", "Pandas"],
    },
    {
      category: "DevOps",
      icon: Cloud,
      color: "text-orange-500",
      bgColor: "bg-orange-50/50 dark:bg-orange-900/20",
      technologies: ["Docker", "OpenStack", "AWS", "CI/CD", "Linux", "Git"],
    },
    {
      category: "Database",
      icon: Database,
      color: "text-red-500",
      bgColor: "bg-red-50/50 dark:bg-red-900/20",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"],
    },
  ]

  const timeline = [
    {
      year: "2024",
      title: "Advanced Full-Stack Development",
      description: "Mastering modern frameworks and building production-ready applications with AI integration",
      icon: Rocket,
      color: "bg-blue-500",
    },
    {
      year: "2023",
      title: "DevOps & Cloud Computing",
      description: "Learned containerization, orchestration, and cloud deployment strategies",
      icon: Cloud,
      color: "bg-green-500",
    },
    {
      year: "2022",
      title: "AI & Machine Learning Journey",
      description: "Started exploring artificial intelligence and machine learning technologies",
      icon: Brain,
      color: "bg-purple-500",
    },
    {
      year: "2021",
      title: "Programming Foundation",
      description: "Began my coding journey with Python and web development fundamentals",
      icon: Code2,
      color: "bg-orange-500",
    },
  ]

  const achievements = [
    {
      icon: Award,
      label: "10+ Projects Completed",
      description: "Built diverse applications from web apps to AI tools",
    },
    {
      icon: Users,
      label: "Open Source Contributor",
      description: "Active contributor to various open source projects",
    },
    {
      icon: BookOpen,
      label: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
    },
    {
      icon: Target,
      label: "Problem Solver",
      description: "Love tackling complex challenges with innovative solutions",
    },
  ]

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "India" },
    { icon: GraduationCap, label: "Education", value: "Computer Science Student" },
    { icon: Briefcase, label: "Status", value: "Open for Opportunities" },
    { icon: Coffee, label: "Fuel", value: "Coffee & Code" },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: Users },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "journey", label: "Journey", icon: Calendar },
    { id: "achievements", label: "Achievements", icon: Award },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements - Same as Home */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto p-8 text-gray-800 dark:text-gray-200 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting innovative solutions at the intersection of technology and creativity
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full p-2 shadow-lg max-w-2xl mx-auto border border-white/30 dark:border-gray-700/30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-700/20"
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
              {/* Main Description */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 dark:border-gray-700/30">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-red-500" />
                    My Story
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      I'm a passionate student developer who believes in the power of technology to solve real-world
                      problems. My journey began with curiosity about how websites work, and it has evolved into a deep
                      love for creating intelligent, scalable software systems.
                    </p>
                    <p>
                      What drives me is the intersection of{" "}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Development</span>,
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {" "}
                        Artificial Intelligence
                      </span>
                      , and
                      <span className="font-semibold text-green-600 dark:text-green-400"> DevOps</span>. I love building
                      applications that not only look great but also leverage cutting-edge AI capabilities and are
                      deployed with modern DevOps practices.
                    </p>
                    <p>
                      I'm actively seeking <span className="font-semibold">internships</span>,{" "}
                      <span className="font-semibold">freelance projects</span>, and{" "}
                      <span className="font-semibold">career opportunities</span> where I can contribute to meaningful
                      projects while continuing to learn and grow as a developer.
                    </p>
                  </div>
                </div>

                {/* What I'm Working On */}
                <div className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Rocket className="w-6 h-6 mr-2 text-blue-500" />
                    Currently Working On
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-gray-700/20">
                      <h4 className="font-semibold mb-2">AI-Powered Web Apps</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Building intelligent applications that leverage LLMs and machine learning
                      </p>
                    </div>
                    <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-gray-700/20">
                      <h4 className="font-semibold mb-2">DevOps Automation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Creating CI/CD pipelines and containerized deployment solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 dark:border-gray-700/30">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    {personalInfo.map((info, index) => (
                      <div key={index} className="flex items-center">
                        <div className="p-2 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-lg mr-3 border border-white/20 dark:border-gray-600/20">
                          <info.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="bg-gradient-to-br from-yellow-200/30 to-orange-200/30 dark:from-yellow-900/20 dark:to-orange-900/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-300/30 dark:border-yellow-700/30">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Coffee className="w-5 h-5 mr-2 text-orange-500" />
                    Fun Fact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I debug best at 2 AM with a cup of coffee and lo-fi music playing in the background! ☕
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.category}
                    className={`${skill.bgColor} backdrop-blur-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/20 dark:border-gray-700/20`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-lg shadow-md border border-white/30 dark:border-gray-700/30">
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                      </div>
                      <h3 className="text-xl font-bold ml-3">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm border border-white/20 dark:border-gray-700/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Journey Tab */}
          {activeTab === "journey" && (
            <div className="animate-fadeIn">
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start mb-12">
                      {/* Timeline Dot */}
                      <div
                        className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="ml-8 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex-1 border border-white/30 dark:border-gray-700/30">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl font-bold text-gray-400 dark:text-gray-500 mr-4">{item.year}</span>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30 dark:border-gray-700/30"
                  >
                    <div className="flex items-start">
                      <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold mb-2">{achievement.label}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
