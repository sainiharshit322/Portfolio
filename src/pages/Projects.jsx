import { useState, useEffect } from "react"
import {
  Github,
  ExternalLink,
  Code2,
  Brain,
  Server,
  Globe,
  Smartphone,
  Search,
  Star,
  GitBranch,
  Calendar,
  Zap,
} from "lucide-react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "YouTube Sentiment Analyzer",
      description:
        "Advanced AI-powered application that analyzes sentiment of YouTube comments in real-time. Features include emotion detection, trend analysis, and comprehensive reporting dashboard.",
      longDescription:
        "Built with modern tech stack including React for frontend, FastAPI for backend, and PostgreSQL for data storage. Implements machine learning models for accurate sentiment classification and provides actionable insights for content creators.",
      tags: ["React", "FastAPI", "Docker", "AI", "PostgreSQL", "Machine Learning"],
      category: "ai",
      github: "https://github.com/harshit/youtube-sentiment",
      live: "https://youtube-sentiment-analyzer.vercel.app",
      image: "/placeholder.svg?height=200&width=400",
      status: "completed",
      featured: true,
      stats: {
        stars: 45,
        forks: 12,
        commits: 127,
      },
    },
    {
      title: "DevOps Automation Suite",
      description:
        "Comprehensive DevOps toolkit featuring automated CI/CD pipelines, container orchestration, and infrastructure monitoring with real-time alerts.",
      longDescription:
        "Enterprise-grade solution built with Docker, Kubernetes, and OpenStack. Includes automated testing, deployment strategies, and comprehensive monitoring dashboards for production environments.",
      tags: ["Docker", "Kubernetes", "OpenStack", "CI/CD", "Python", "Monitoring"],
      category: "devops",
      github: "https://github.com/harshit/devops-suite",
      live: "https://devops-dashboard.example.com",
      image: "/placeholder.svg?height=200&width=400",
      status: "completed",
      featured: true,
      stats: {
        stars: 78,
        forks: 23,
        commits: 203,
      },
    },
    {
      title: "AI-Powered Task Manager",
      description:
        "Smart task management application with AI-driven priority suggestions, deadline predictions, and productivity insights using natural language processing.",
      longDescription:
        "Revolutionary task manager that learns from user behavior to optimize productivity. Features include smart categorization, automated scheduling, and integration with popular productivity tools.",
      tags: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Tailwind CSS"],
      category: "ai",
      github: "https://github.com/harshit/ai-task-manager",
      live: "https://smart-tasks.vercel.app",
      image: "/placeholder.svg?height=200&width=400",
      status: "completed",
      featured: false,
      stats: {
        stars: 32,
        forks: 8,
        commits: 89,
      },
    },
    {
      title: "Real-time Chat Platform",
      description:
        "Modern chat application with real-time messaging, file sharing, video calls, and end-to-end encryption for secure communication.",
      longDescription:
        "Full-featured communication platform built with WebSocket technology. Includes group chats, media sharing, voice/video calls, and advanced security features for enterprise use.",
      tags: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Redis"],
      category: "fullstack",
      github: "https://github.com/harshit/chat-platform",
      live: "https://secure-chat.example.com",
      image: "/placeholder.svg?height=200&width=400",
      status: "in-progress",
      featured: true,
      stats: {
        stars: 56,
        forks: 15,
        commits: 156,
      },
    },
    {
      title: "E-commerce Analytics Dashboard",
      description:
        "Comprehensive analytics platform for e-commerce businesses with sales tracking, customer insights, and predictive analytics for inventory management.",
      longDescription:
        "Data-driven solution providing deep insights into e-commerce performance. Features include real-time sales monitoring, customer behavior analysis, and AI-powered recommendations for business growth.",
      tags: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js", "AWS"],
      category: "fullstack",
      github: "https://github.com/harshit/ecommerce-analytics",
      live: "https://analytics-dashboard.example.com",
      image: "/placeholder.svg?height=200&width=400",
      status: "completed",
      featured: false,
      stats: {
        stars: 41,
        forks: 11,
        commits: 134,
      },
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, nutrition monitoring, and social features for motivation and community building.",
      longDescription:
        "Comprehensive fitness solution with personalized workout recommendations, meal planning, progress tracking, and social features to keep users motivated and engaged.",
      tags: ["React Native", "Firebase", "Node.js", "Machine Learning", "Health APIs"],
      category: "mobile",
      github: "https://github.com/harshit/fitness-tracker",
      live: "https://play.google.com/store/apps/fitness-tracker",
      image: "/placeholder.svg?height=200&width=400",
      status: "in-progress",
      featured: false,
      stats: {
        stars: 29,
        forks: 7,
        commits: 98,
      },
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: Globe, count: projects.length },
    { id: "ai", label: "AI/ML", icon: Brain, count: projects.filter((p) => p.category === "ai").length },
    {
      id: "fullstack",
      label: "Full Stack",
      icon: Code2,
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    { id: "devops", label: "DevOps", icon: Server, count: projects.filter((p) => p.category === "devops").length },
    { id: "mobile", label: "Mobile", icon: Smartphone, count: projects.filter((p) => p.category === "mobile").length },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = projects.filter((project) => project.featured)

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Star className="w-3 h-3" />
      case "in-progress":
        return <Zap className="w-3 h-3" />
      default:
        return <Calendar className="w-3 h-3" />
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto p-8 text-gray-800 dark:text-gray-200 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            A showcase of my technical journey - from AI-powered applications to full-stack solutions
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 dark:border-gray-700/30">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{projects.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 dark:border-gray-700/30">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {projects.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </div>
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 dark:border-gray-700/30">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {projects.reduce((sum, p) => sum + p.stats.stars, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
          </div>
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 dark:border-gray-700/30">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {projects.reduce((sum, p) => sum + p.stats.commits, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Commits</div>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30 dark:border-gray-700/30"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                      >
                        {getStatusIcon(project.status)}
                        <span className="ml-1 capitalize">{project.status.replace("-", " ")}</span>
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 dark:border-gray-700/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {project.stats.stars}
                        </span>
                        <span className="flex items-center">
                          <GitBranch className="w-4 h-4 mr-1" />
                          {project.stats.forks}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors border border-white/20 dark:border-gray-700/20"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm text-white rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl border border-white/30 dark:border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/20 dark:bg-gray-800/20 backdrop-blur-md text-gray-600 dark:text-gray-400 hover:bg-white/30 dark:hover:bg-gray-700/30 border border-white/30 dark:border-gray-700/30"
                }`}
              >
                {category.icon && <category.icon className="w-4 h-4 mr-2" />}
                {category.label}
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30 dark:border-gray-700/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                  >
                    {getStatusIcon(project.status)}
                    <span className="ml-1 capitalize">{project.status.replace("-", " ")}</span>
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 dark:border-gray-700/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center">
                      <GitBranch className="w-4 h-4 mr-1" />
                      {project.stats.forks}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors border border-white/20 dark:border-gray-700/20"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm text-white rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-white/30 dark:border-gray-700/30">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}