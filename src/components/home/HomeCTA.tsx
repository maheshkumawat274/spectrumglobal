import { Link } from "react-router-dom"
import Button from "../ui/button"
import { ArrowRight } from "lucide-react"

const HomeCTA = () => {
  return (
    <>
     <section className="py-10 md:py-20 bg-[#2B73B3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Stronger Teams Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your HR strategy and drive organizational excellence? Let's start the conversation.
          </p>
          <Link to="/contact-us">
            <Button variant="primary" size="lg" className="bg-white text-[#2B73B3] hover:bg-gray-100">
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomeCTA