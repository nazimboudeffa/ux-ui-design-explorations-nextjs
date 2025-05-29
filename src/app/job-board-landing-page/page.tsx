import Link from 'next/link'
import { ArrowRight, Search, MapPin, Briefcase, Users, TrendingUp, Bell, Shield, Zap, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                JobConnect
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
                Find Jobs
              </Link>
              <Link href="/companies" className="text-gray-700 hover:text-blue-600 transition-colors">
                Companies
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">
                Resources
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link 
                href="/signin" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/post-job" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Dream Career
              </span>{' '}
              Today
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Connect with top employers and discover opportunities that match your skills, 
              passion, and career goals. Your next big break is just a search away.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      className="w-full pl-12 pr-4 py-4 text-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="City, state, or remote"
                      className="w-full pl-12 pr-4 py-4 text-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold">
                    Search Jobs
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50,000+</div>
                <div className="text-gray-600">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">15,000+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2M+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JobConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make job searching simple, efficient, and successful with cutting-edge 
              tools and personalized recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Smart Job Matching",
                description: "Our AI-powered algorithm matches you with jobs that perfectly fit your skills, experience, and career preferences."
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-600" />,
                title: "Instant Applications",
                description: "Apply to multiple jobs with one click using your saved profile and customizable cover letters."
              },
              {
                icon: <Briefcase className="w-8 h-8 text-green-600" />,
                title: "Company Insights",
                description: "Get insider information about company culture, salary ranges, and interview processes from real employees."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Network Building",
                description: "Connect with industry professionals, mentors, and potential colleagues in your field."
              },
              {
                icon: <Bell className="w-8 h-8 text-red-600" />,
                title: "Job Alerts",
                description: "Never miss an opportunity with personalized job alerts delivered to your inbox and mobile device."
              },
              {
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                title: "Career Growth",
                description: "Access courses, certifications, and career coaching to continuously improve your skills and marketability."
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="mb-4 p-3 bg-white rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who have found their perfect career match 
            through JobConnect. Start your journey today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Create Free Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/browse"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Browse Jobs
            </Link>
          </div>

          {/* Email Signup */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl max-w-md mx-auto">
            <p className="text-white mb-4 font-medium">Get job alerts in your inbox</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who found their dream jobs through JobConnect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer at Google",
                content: "JobConnect helped me land my dream job at Google. The personalized job recommendations were spot on!"
              },
              {
                name: "Mike Chen",
                role: "Product Manager at Spotify",
                content: "The networking features on JobConnect connected me with my current mentor who helped me transition into product management."
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist at Netflix",
                content: "I received 5 interview invitations within the first week of using JobConnect. The platform really works!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  {testimonial.content}
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">JobConnect</div>
              <p className="text-gray-400 mb-4">
                Connecting talent with opportunity. Building careers, one match at a time.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
                <li><Link href="/career-advice" className="hover:text-white transition-colors">Career Advice</Link></li>
                <li><Link href="/resume-help" className="hover:text-white transition-colors">Resume Help</Link></li>
                <li><Link href="/salary-guide" className="hover:text-white transition-colors">Salary Guide</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/post-jobs" className="hover:text-white transition-colors">Post Jobs</Link></li>
                <li><Link href="/find-talent" className="hover:text-white transition-colors">Find Talent</Link></li>
                <li><Link href="/employer-branding" className="hover:text-white transition-colors">Employer Branding</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JobConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}