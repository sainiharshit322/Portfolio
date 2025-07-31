import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Coffee,
  Briefcase,
  Heart,
  Zap,
} from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
      })

      setTimeout(() => setSubmitStatus(null), 10000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sainiharshit322@gmail.com",
      href: "mailto:sainiharshit322@gmail.com",
      color: "text-red-500",
      description: "Best way to reach me",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-green-500",
      description: "Available 9 AM - 6 PM IST",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null,
      color: "text-blue-500",
      description: "Open to remote work",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harshit-dev",
      color: "hover:text-blue-600",
      description: "Professional network",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/harshit",
      color: "hover:text-gray-900 dark:hover:text-white",
      description: "Code repositories",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/harshit_dev",
      color: "hover:text-blue-400",
      description: "Tech updates & thoughts",
    },
  ]

  const projectTypes = [
    { value: "internship", label: "Internship Opportunity", icon: Briefcase },
    { value: "freelance", label: "Freelance Project", icon: Coffee },
    { value: "collaboration", label: "Collaboration", icon: Heart },
    { value: "consultation", label: "Technical Consultation", icon: Zap },
    { value: "other", label: "Other", icon: MessageSquare },
  ]

  const availability = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM IST",
      status: "available",
    },
    {
      day: "Saturday",
      time: "10:00 AM - 2:00 PM IST",
      status: "limited",
    },
    {
      day: "Sunday",
      time: "Emergency only",
      status: "unavailable",
    },
  ]

  const getAvailabilityColor = (status) => {
    switch (status) {
      case "available":
        return "text-green-500"
      case "limited":
        return "text-yellow-500"
      case "unavailable":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto p-8 text-gray-800 dark:text-gray-200 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm available for internships, freelance projects, and exciting
            collaborations. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/30 dark:border-gray-700/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Send className="w-6 h-6 mr-2 text-blue-500" />
                Send Me a Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-700 dark:text-green-400">
                    Message sent successfully! I'll get back to you within 24 hours.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/20 dark:border-gray-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me more about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 dark:border-gray-700/30">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg mr-3">
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      )}
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 dark:border-gray-700/30">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg hover:bg-white/40 dark:hover:bg-gray-700/40 transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="w-5 h-5 mr-3" />
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 dark:border-gray-700/30">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-500" />
                Availability
              </h3>
              <div className="space-y-3">
                {availability.map((slot, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{slot.day}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{slot.time}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(slot.status)}`}></div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />I typically respond within 24 hours
                </p>
              </div>
            </div>

            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30 dark:border-gray-700/30">
              <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">2+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">10+ projects completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">100% client satisfaction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm">Fast turnaround time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 dark:border-gray-700/30">
              <h4 className="font-bold mb-2">What's your typical response time?</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I usually respond to emails within 24 hours, often much sooner during business hours.
              </p>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 dark:border-gray-700/30">
              <h4 className="font-bold mb-2">Do you work on weekends?</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I'm available for urgent matters on weekends, but prefer to schedule regular work during weekdays.
              </p>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 dark:border-gray-700/30">
              <h4 className="font-bold mb-2">What technologies do you specialize in?</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I specialize in React, Node.js, Python, AI/ML, and DevOps technologies. Check out my projects for more
                details.
              </p>
            </div>
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 dark:border-gray-700/30">
              <h4 className="font-bold mb-2">Do you offer free consultations?</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Yes! I offer a free 30-minute consultation to discuss your project requirements and see if we're a good
                fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}