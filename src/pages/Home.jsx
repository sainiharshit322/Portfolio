"use client"

import { useEffect, useState } from "react"
import {
  Download,
  Code,
  Server,
  Brain,
  ChevronDown,
  Star,
  Coffee,
  Zap,
  Heart,
  Award,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
  Rocket,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Github,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
} from "lucide-react"

export default function Home() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [particles, setParticles] = useState([])
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [timeOfDay, setTimeOfDay] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeSkill, setActiveSkill] = useState(null)

  const roles = [
    "Full-Stack Developer specializing in React, Node.js, and AI Integration"
  ]

  const achievements = [
    {
      icon: Award,
      label: "Excellence Rating",
      value: "98%",
      color: "text-yellow-500",
      description: "Client Satisfaction",
    },
    { icon: Users, label: "Global Clients", value: "75+", color: "text-blue-500", description: "Worldwide Reach" },
    {
      icon: Rocket,
      label: "Projects Delivered",
      value: "50+",
      color: "text-green-500",
      description: "Successfully Completed",
    },
    { icon: Zap, label: "Response Time", value: "<2h", color: "text-purple-500", description: "Average Response" },
    { icon: TrendingUp, label: "Growth Rate", value: "150%", color: "text-red-500", description: "Year over Year" },
    { icon: Shield, label: "Uptime", value: "99.9%", color: "text-cyan-500", description: "System Reliability" },
  ]

  const technologies = [
    { name: "React/Next.js", level: 95, color: "bg-blue-500", icon: Code2, category: "Frontend" },
    { name: "Node.js/Express", level: 90, color: "bg-green-500", icon: Server, category: "Backend" },
    { name: "Python/FastAPI", level: 88, color: "bg-yellow-500", icon: Code, category: "Backend" },
    { name: "AI/ML/LLMs", level: 85, color: "bg-purple-500", icon: Brain, category: "AI/ML" },
    { name: "Docker/K8s", level: 82, color: "bg-cyan-500", icon: Cloud, category: "DevOps" },
    { name: "PostgreSQL/MongoDB", level: 87, color: "bg-red-500", icon: Database, category: "Database" },
    { name: "React Native", level: 80, color: "bg-pink-500", icon: Smartphone, category: "Mobile" },
    { name: "UI/UX Design", level: 78, color: "bg-orange-500", icon: Palette, category: "Design" },
  ]

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web application development with modern frameworks and best practices",
      features: ["React/Next.js", "Node.js/Python", "Database Design", "API Development"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Intelligent features powered by machine learning and large language models",
      features: ["OpenAI Integration", "Custom ML Models", "Data Analysis", "Automation"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: "DevOps & Deployment",
      description: "Scalable infrastructure setup with CI/CD pipelines and monitoring",
      features: ["Docker/Kubernetes", "AWS/GCP", "CI/CD Pipelines", "Monitoring"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance",
      features: ["React Native", "iOS/Android", "App Store Deploy", "Push Notifications"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Inc.",
    text: "Harshit delivered an exceptional AI-powered dashboard that exceeded our expectations. His attention to detail and technical expertise is remarkable.",
    rating: 5,
    project: "AI Analytics Dashboard",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Codesoft",
    text: "Working with Harshit was a game-changer for our project. He brought innovative solutions and delivered on time, every time.",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "InnovateLab",
    text: "Harshit's DevOps knowledge and AI integration skills helped us modernize our entire infrastructure with incredible results.",
    rating: 5,
    project: "Infrastructure Modernization",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "HealthTech Solutions",
    text: "The mobile app Harshit built for us has been downloaded over 50k times with 4.8 stars. Exceptional work!",
    rating: 5,
    project: "Healthcare Mobile App",
  },
];

  const quickStats = [
    { label: "Lines of Code", value: "500K+", icon: Code },
    { label: "Coffee Consumed", value: "2.5K+", icon: Coffee },
    { label: "GitHub Commits", value: "3.2K+", icon: Github },
    { label: "Hours Coding", value: "8K+", icon: Clock },
  ]

  const contactMethods = [
    { icon: Mail, label: "Email", value: "sainiharshit322@gmail.com", href: "mailto:sainiharshit322@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 84478 12209", href: "tel:+918447812209" },
    { icon: MapPin, label: "Location", value: "India (Remote Available)", href: null },
    { icon: Calendar, label: "Availability", value: "Open for Projects", href: "/contact" },
  ]

  useEffect(() => {
    setIsVisible(true)
    generateParticles()
    updateTimeOfDay()

    const interval = setInterval(() => {
      setCurrentTime(new Date())
      updateTimeOfDay()
    }, 1000)

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => {
      clearInterval(interval)
      clearInterval(testimonialInterval)
    }
  }, [])

  const updateTimeOfDay = () => {
    const hour = new Date().getHours()
    if (hour < 12) setTimeOfDay("Good Morning")
    else if (hour < 17) setTimeOfDay("Good Afternoon")
    else setTimeOfDay("Good Evening")
  }

useEffect(() => {
  if (currentIndex < roles[0].length) {
    const typingSpeed = 35; // fixed delay

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + roles[0][currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }
}, [currentIndex, roles]);



  const generateParticles = () => {
    const newParticles = []
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.2,
        color: ["blue", "purple", "pink", "cyan"][Math.floor(Math.random() * 4)],
      })
    }
    setParticles(newParticles)
  }

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200
          const screenHeight = typeof window !== "undefined" ? window.innerHeight : 800

          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          if (newX > screenWidth) newX = 0
          if (newX < 0) newX = screenWidth
          if (newY > screenHeight) newY = 0
          if (newY < 0) newY = screenHeight

          return { ...particle, x: newX, y: newY }
        }),
      )
    }

    const interval = setInterval(animateParticles, 100)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    {
      icon: Code,
      label: "Frontend",
      color: "text-blue-500",
      description: "React, Next.js, Vue, TypeScript",
      projects: "25+ Projects",
      experience: "3+ Years",
    },
    {
      icon: Server,
      label: "Backend",
      color: "text-green-500",
      description: "Node.js, Python, FastAPI, GraphQL",
      projects: "30+ APIs",
      experience: "3+ Years",
    },
    {
      icon: Brain,
      label: "AI/ML",
      color: "text-purple-500",
      description: "OpenAI, TensorFlow, PyTorch, LangChain",
      projects: "15+ AI Apps",
      experience: "2+ Years",
    },
    {
      icon: Cloud,
      label: "DevOps",
      color: "text-orange-500",
      description: "Docker, Kubernetes, AWS, CI/CD",
      projects: "20+ Deployments",
      experience: "2+ Years",
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white overflow-hidden"
    >
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full bg-${particle.color}-400`}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px rgba(59, 130, 246, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
      </div>

      {/* Time and Greeting */}
      <div className="absolute top-8 left-8 z-20">
        <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 dark:border-gray-700/30">
          <p className="text-sm text-gray-600 dark:text-gray-400">{timeOfDay}! 👋</p>
          <p className="text-lg font-semibold">{currentTime.toLocaleTimeString()}</p>
        </div>
      </div>

      <div
        className={`text-center px-4 max-w-7xl mx-auto z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Enhanced Main Heading */}
        <div className="mb-12">
          <div className="mb-4">
          </div>
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-pointer">
              Harshit
            </span>{" "}
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-pointer delay-100">
              Saini
            </span>
          </h1>
          <div className="text-6xl mb-6 flex justify-center space-x-4">
            <span className="inline-block animate-bounce hover:animate-spin transition-all duration-300 cursor-pointer">
              👋
            </span>
            <span className="inline-block animate-bounce hover:animate-pulse transition-all duration-300 cursor-pointer delay-200">
              💻
            </span>
            <span className="inline-block animate-bounce hover:animate-ping transition-all duration-300 cursor-pointer delay-400">
              🚀
            </span>
          </div>
        </div>

        {/* Enhanced Typing Animation */}
        <div className="mb-16 h-20 flex items-center justify-center">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium text-center leading-relaxed">
              {displayedText}
              <span className={`animate-pulse ${isTypingComplete ? "opacity-0" : "opacity-100"} text-blue-500`}>|</span>
            </p>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200 flex items-center justify-center">
            <Sparkles className="w-8 h-8 mr-3 text-yellow-500" />
            My Expertise
            <Sparkles className="w-8 h-8 ml-3 text-yellow-500" />
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className={`group cursor-pointer transition-all duration-500 hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} ${activeSkill === index ? "scale-110" : ""}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="relative p-8 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <skill.icon
                    className={`w-12 h-12 ${skill.color} group-hover:scale-125 transition-transform duration-500 mx-auto mb-4`}
                  />
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">
                    {skill.label}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{skill.description}</p>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-gray-500">{skill.projects}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{skill.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">What I Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/30 dark:border-gray-700/30"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">{service.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <div className="space-y-1">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Progress Bars */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <tech.icon className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-400" />
                    <span className="font-semibold">{tech.name}</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-white/30 dark:bg-gray-700/30 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${tech.color} h-3 rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                    style={{
                      width: isVisible ? `${tech.level}%` : "0%",
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/resume.pdf"
            download="Harshit_Resume.pdf"
            className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg"
          >
            <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Download Resume
            <Sparkles className="w-5 h-5 ml-3 group-hover:animate-spin" />
          </a>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 border border-white/30 dark:border-gray-700/30 group"
            >
              <div className="flex flex-col items-center text-center">
                <achievement.icon
                  className={`w-10 h-10 ${achievement.color} mb-4 group-hover:scale-125 transition-transform duration-300`}
                />
                <div className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">{achievement.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-1">{achievement.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Fun Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 dark:border-gray-700/20"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                <div className="text-xl font-bold text-gray-800 dark:text-gray-200">{stat.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-200">Client Success Stories</h3>
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/30">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center mb-4">
                <div className="text-left">
                  <p className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Project: {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Contact Preview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Get In Touch</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={method.label}
                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-xl p-4 text-center border border-white/30 dark:border-gray-700/30 hover:scale-105 transition-all duration-300"
              >
                <method.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{method.label}</div>
                {method.href ? (
                  <a href={method.href} className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    {method.value}
                  </a>
                ) : (
                  <div className="text-xs text-gray-600 dark:text-gray-400">{method.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/30 dark:border-gray-700/30 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm currently available for new opportunities and exciting projects. Whether you need a full-stack
              application, AI integration, mobile app, or DevOps solutions, let's discuss how we can bring your vision
              to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl font-semibold text-lg"
              >
                <Coffee className="w-6 h-6 mr-3" />
                Schedule a Call
                <Calendar className="w-5 h-5 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}