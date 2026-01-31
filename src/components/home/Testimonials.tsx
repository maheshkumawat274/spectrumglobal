import Card from "../ui/Card"


const Testimonials = () => {
  return (
    <>
     <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2B73B3] font-semibold text-sm uppercase tracking-wide mb-2">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Spectrum Global transformed our recruitment process. Within 6 months, we reduced hiring time by 40% and improved retention significantly.',
                author: 'Rajesh Kumar',
                role: 'CEO',
                company: 'Technology Services',
                initials: 'RK',
              },
              {
                quote: 'Their training programs enhanced our leadership capabilities. The impact on team performance has been remarkable.',
                author: 'Priya Sharma',
                role: 'Head of Operations',
                company: 'Manufacturing',
                initials: 'PS',
              },
              {
                quote: 'Professional, practical, and results-oriented. They understood our compliance needs and implemented robust HR systems seamlessly.',
                author: 'Arun Mehta',
                role: 'HR Manager',
                company: 'Corporate Services',
                initials: 'AM',
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#2B73B3] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role} – {testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials