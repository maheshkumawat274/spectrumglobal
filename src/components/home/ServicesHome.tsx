
import { Link } from 'react-router-dom'
import Button from '../ui/button'
import { Briefcase, TrendingUp, Users } from 'lucide-react'
import Card from '../ui/Card'

const ServicesHome = () => {
  return (
    <>
     <section id="services" className="py-10 md:py-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2B73B3] font-semibold text-sm uppercase tracking-wide mb-2">
              Our Services
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive HR Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three core service pillars designed to address every aspect of modern HR management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#2B73B3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Recruitment & Talent Acquisition
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Strategic talent acquisition that goes beyond filling vacancies. We identify and attract the right fit for your culture and future.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-gray-700">What we deliver:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ End-to-end recruitment</li>
                  <li>✓ Executive search & placement</li>
                  <li>✓ Competency-based hiring</li>
                  <li>✓ Employer branding</li>
                </ul>
              </div>
              <Link to="/services">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </Card>

            {/* Service 2 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Training & Development
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Unlock your team's potential through customized learning programs and leadership development initiatives.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-gray-700">What we deliver:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Leadership development</li>
                  <li>✓ Communication training</li>
                  <li>✓ Performance coaching</li>
                  <li>✓ Customized L&D programs</li>
                </ul>
              </div>
              <Link to="/services">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </Card>

            {/* Service 3 */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                HR Systems, Policies & Compliance
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Build robust HR infrastructure that ensures compliance and enables scalability across your organization.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-gray-700">What we deliver:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ HR policies & manuals</li>
                  <li>✓ Performance systems</li>
                  <li>✓ Job frameworks</li>
                  <li>✓ Compliance assurance</li>
                </ul>
              </div>
              <Link to="/services">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesHome