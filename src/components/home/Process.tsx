import { ArrowRight } from "lucide-react"
import Card from "../ui/Card"

const Process = () => {
  return (
    <>
     <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2B73B3] font-semibold text-sm uppercase tracking-wide mb-2">
              Our Approach
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              A Structured, Results-Driven Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Understand',
                description: 'We dive deep into your business context, challenges, and goals.',
              },
              {
                number: '02',
                title: 'Design',
                description: 'Craft tailored solutions aligned with your strategic objectives.',
              },
              {
                number: '03',
                title: 'Implement',
                description: 'Execute with precision, managing change and building internal capability.',
              },
              {
                number: '04',
                title: 'Sustain',
                description: 'Ensure long-term success through monitoring, support, and optimization.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-20 -right-4 text-gray-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
                <Card className="p-8 h-full">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Process