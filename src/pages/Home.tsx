import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Briefcase, Zap, Award, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/button';
import OurEsteemedClients from '../components/clientCategories';
import IndustriesWeServe from '../components/Industries';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Talk to an Expert
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
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
                <img src='https://www.globalcoachcenter.com/wp-content/uploads/2024/05/Firefly-Business-workers-in-office-in-India-collaborating-in-conference-room-39423-1024x585.jpg' className='h-full w-full object-cover rounded-md'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-10 md:py-20 lg:py-1 mb-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
                <img src='/imgs/about.webp' className='h-full w-full object-cover rounded-md'/>
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

      {/* Services Overview */}
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

      {/* Why Choose Us */}
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

      <IndustriesWeServe/>

      {/* Our Process */}
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

      {/* Testimonials */}
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

      {/* Careers Preview */}
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

              <Link to="/careers">
                <Button variant="primary">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="h-96 rounded-2xl">
              <img src="https://images.pond5.com/team-indian-office-employees-discussing-088720859_prevstill.jpeg" className="h-full w-full object-contain rounded-md mx-1 sm:mx-18" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Esteemed Clients */}
      <OurEsteemedClients/>
      {/* Final CTA */}
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
    </div>
  );
};

export default Home;
