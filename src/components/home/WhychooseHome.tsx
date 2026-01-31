import { Award, Briefcase, Users, Zap } from "lucide-react"

const WhychooseHome = () => {
  return (
    <>
     <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2B73B3] font-semibold text-sm uppercase tracking-wide mb-2">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Business-Aligned Solutions',
                description: 'Every initiative directly connects to your strategic objectives and bottom line.',
              },
              {
                icon: Zap,
                title: 'Practical & Implementable',
                description: 'Solutions you can execute, not complex theories. We ensure lasting impact.',
              },
              {
                icon: Users,
                title: 'Experienced Consultants',
                description: 'Our team brings 10+ years of industry expertise and proven track records.',
              },
              {
                icon: Briefcase,
                title: 'Partnership-Driven',
                description: 'We work alongside you as true partners invested in your long-term success.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[#2B73B3]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WhychooseHome