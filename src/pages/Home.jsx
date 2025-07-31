import { useEffect, useState } from "react"
import { Download, Code, Server, Brain, ChevronDown } from "lucide-react"

export default function Home() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const fullText = "Full-Stack Developer | AI + DevOps Enthusiast | Open to Internships & Freelance Work"

  useEffect(() => {
    setIsVisible(true)

    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [currentIndex, fullText])

  const skills = [
    { icon: Code, label: "Frontend", color: "text-blue-500" },
    { icon: Server, label: "Backend", color: "text-green-500" },
    { icon: Brain, label: "AI/ML", color: "text-purple-500" },
  ]

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div
        className={`text-center px-4 max-w-4xl mx-auto z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Main Heading with Animation */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Hi, I'm Harshit
          </h1>
          <div className="text-4xl mb-4 animate-bounce">👋</div>
        </div>

        {/* Typing Animation for Description */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Skills Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className={`flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                <skill.icon
                  className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {skill.label}
              </span>
            </div>
          ))}
        </div>

        {/* Enhanced Resume Button */}
        <div className="mb-12">
          <a
            href="/resume.pdf"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
          </a>
        </div>

        {/* Stats or Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Built</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
