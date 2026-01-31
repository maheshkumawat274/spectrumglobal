import { Link } from "react-router-dom"
import Button from "../ui/button"
import Homebtn1 from "../ui/Homebtn1"


const HomeHeroSection = () => {
  return (
    <>
     <section className="relative min-h-screen pt-5 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Empowering People. Strengthening Organizations.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Strategic HR consulting solutions designed for enterprise excellence. We transform how organizations attract, develop, and retain top talent.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-us">
                  <Button className="w-full sm:w-auto text-lg bg-[#2B73B3] hover:underline cursor-pointer ">
                    Talk to an Expert
                    
                  </Button>
                </Link>
                <Link to="/services">
                  <Homebtn1/>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2B73B3]">500+</div>
                  <p className="text-sm sm:text-md text-gray-600">Successful Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2B73B3]">50+</div>
                  <p className="text-sm sm:text-md text-gray-600">Expert Consultants</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#2B73B3]">10Y+</div>
                  <p className="text-sm sm:text-md text-gray-600">Industry Experience</p>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative h-96 md:h-full ">
              <div className="absolute inset-3 sm:inset-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <img src='/imgs/traning2.jpeg' className='h-full w-full object-cover rounded-md'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeHeroSection