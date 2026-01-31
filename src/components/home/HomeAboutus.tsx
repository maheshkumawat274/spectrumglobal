
import { Link } from 'react-router-dom'
import Button from '../ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const HomeAboutus = () => {
  return (
    <>
     <section className="py-10 md:py-20 lg:py-1 mb-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
                <img src='/imgs/traning3.jpeg' className='h-full w-full object-cover rounded-md'/>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[#2B73B3] font-semibold text-sm uppercase tracking-wide mb-2">
                  About Spectrum Global
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Transforming Talent into Competitive Advantage
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Spectrum Global Consulting partners with forward-thinking organizations to align their people strategies with business objectives. Our results-driven approach combines deep industry expertise, proven methodologies, and practical implementation support.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#2B73B3] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Strategic Partnership</h3>
                    <p className="text-gray-600 text-sm">We collaborate as true partners, not just consultants.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#2B73B3] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Solutions</h3>
                    <p className="text-gray-600 text-sm">From startups to enterprises, our solutions grow with you.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#2B73B3] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Measurable Impact</h3>
                    <p className="text-gray-600 text-sm">Every initiative is tied to concrete business outcomes.</p>
                  </div>
                </div>
              </div>

              <Link to="/about-us">
                <Button variant="outline" className="mt-4">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeAboutus