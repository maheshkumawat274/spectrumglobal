import { Link } from "react-router-dom"
import Button from "../ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const CareerHome = () => {
  return (
    <>
     <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-[#2B73B3] font-semibold text-sm uppercase tracking-wide mb-2">
                  Join Our Team
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Build Your Career with Spectrum Global
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're looking for passionate professionals who are driven by impact and excellence. Join a team where your work directly influences the success of hundreds of organizations.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#2B73B3] flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Collaborative, innovative work environment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#2B73B3] flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Continuous learning & professional development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#2B73B3] flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Competitive compensation & benefits</p>
                </div>
              </div>

              <Link to="/career">
                <Button variant="primary">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="h-96 rounded-2xl">
              <img src="/imgs/training4.jpeg" className="h-full w-full object-cover rounded-md mx-1 sm:mx-18" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareerHome