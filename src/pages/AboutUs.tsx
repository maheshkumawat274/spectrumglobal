import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/button';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://www.indiaconnected.nl/app/uploads/2024/06/gettyimages-618674894-640x640-1.jpg')" }}>
           {/* Overlay */}
           <div className="absolute inset-0 bg-black opacity-50"></div>
     
           {/* Centered Text */}
           <div className="relative z-10 flex items-center justify-center h-full">
             <div className="text-center text-white px-4">
               <h1 className="text-3xl md:text-5xl font-bold mb-4">About Spectrum Global</h1>
               <p className="text-lg max-w-xl mx-auto">
                 Empowering organizations through strategic, practical HR solutions that drive sustainable growth and organizational excellence.
               </p>
             </div>
           </div>
         </div>

      {/* Company Story */}
      <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                
                <p>
                  Our Founder Mr. Anshul Kumar, brings over two decades of hands-on experience in shaping talent, leaders, and organizations that are built to scale.
                </p>
                <p>
                 Having led HR and learning functions across industries with organizations such as MetLife, Deutsche Post Bank, Ebony Retail, and ERA Group, he understands what it takes to build teams that perform in fast-changing, competitive environments. His work is driven by a sharp focus on execution, accountability, and real-world impact.
                </p>
                
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl">
              <img src='https://www.libertyspecialtymarkets.com/_r/1919x1919/static/2024-01/AboutUs_PartneringWithUs_1920x1080.jpg?t=1704451104' className='h-full w-full object-cover rounded-md
              '/>
            </div>
          </div>
          <div className='space-y-4 text-gray-600 leading-relaxed pt-3 text-lg'>
           <p>He founded Spectrum Global to challenge traditional HR consulting—by combining strategic thinking with speed, ownership, and outcome-driven delivery. Today, the firm partners with organizations that are serious about growth, leadership strength, and culture as a competitive advantage.</p>
           <h2 className='text-xl font-semibold'>
           Leadership Philosophy
           </h2>
           <p>Talent is not potential—it is performance over time. When people are challenged, trusted, and developed with intent, organizations don’t just grow, they lead.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-10 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe in a three-pillar approach that combines expertise, data, and execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise-Driven</h3>
              <p className="text-gray-600">
                Our consultants bring deep industry knowledge and proven methodologies. We don't apply one-size-fits-all solutions; we customize based on your unique context.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Informed</h3>
              <p className="text-gray-600">
                Every decision is backed by data, insights, and a clear understanding of your business metrics. We measure impact and iterate continuously.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation-Focused</h3>
              <p className="text-gray-600">
                Theory without action creates no value. We ensure every solution is practically implementable and builds lasting capability within your organization.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-gray-600 text-lg">
              We combine strategic thinking with practical execution to deliver sustainable results
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-[#2B73B3]flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Deep Diagnostics</h3>
                    <p className="text-gray-600">
                      We conduct thorough assessments to understand your current state, challenges, and opportunities across all HR dimensions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <img src='https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/colleagues-discussing-diagnostic-analytics.jpg&w=1200&h=630' className='w-full h-full object-cover rounded-md'/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <img src='https://www.audencia.com/sites/default/files/styles/imgnews_mobile/public/2024-02/audencia.panka.fr_uploads_img_multiethnic-team-of-people-working-on-business-col-2022-08-31-19-36-14-utc.jpg.webp?itok=nDR8Len5' className='w-full h-full rounded-md object-cover'/>
              </div>
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Customized Design</h3>
                    <p className="text-gray-600">
                      We craft tailored solutions that align with your business strategy, organizational culture, and resource constraints.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Capability Building</h3>
                    <p className="text-gray-600">
                      We don't just implement; we build internal capability so your team can sustain and evolve these initiatives independently.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <img src='https://images.squarespace-cdn.com/content/v1/5ed1852153132a108d661d8f/1602122028216-JDLCLHKDIXNU0QL6B9MC/american-express-corporate-training-workshop.jpg' className='w-full h-full object-cover rounded-md'/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <img src='https://procurehr.com/wp-content/uploads/2024/09/665f188161ed592f1a45be67_f1788944df0a44cb0171bc8d014a1c21.Best-Ways-To-Get-Clients-for-Your-HR-Consultancy-Blog.jpg' className='h-full w-full object-cover rounded-md'/>
              </div>
              <div>
                <div className="flex items-start space-x-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Measurement</h3>
                    <p className="text-gray-600">
                      We establish clear KPIs, track progress, and provide regular insights. Our engagement doesn't end at implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with Spectrum Global</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Over 500 successful projects across industries with measurable outcomes and client satisfaction rates exceeding 95%.',
              },
              {
                title: 'Scalable Solutions',
                description: 'From startups to large enterprises, our solutions grow and adapt to your organizational needs.',
              },
              {
                title: 'Industry Expertise',
                description: 'Our consultants bring 10+ years of combined experience across corporate, manufacturing, technology, and other sectors.',
              },
              {
                title: 'Business Focus',
                description: 'Every recommendation ties directly to business outcomes, not just HR metrics. We speak your language.',
              },
              {
                title: 'Partnership Mindset',
                description: 'We work as your partners, not vendors. Your success is our success.',
              },
              {
                title: 'Practical Solutions',
                description: 'No ivory tower consulting. Our solutions are designed for real-world implementation and sustainability.',
              },
            ].map((item, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
            <p className="text-gray-600 text-lg">
              Led by experienced professionals committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Vikram Patel',
                role: 'Founder & CEO',
                bio: '15+ years in HR consulting and organizational transformation',
              },
              {
                name: 'Priya Rao',
                role: 'Head of Talent Solutions',
                bio: 'Expert in recruitment, talent acquisition, and employer branding',
              },
              {
                name: 'Anil Desai',
                role: 'Director, HR Systems & Compliance',
                bio: 'Specialist in HR policies, compliance, and organizational systems',
              },
            ].map((member, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#2B73B3]font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-[#2B73B3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can drive HR excellence in your organization.
          </p>
          <Button variant="primary" size="lg" className="bg-white text-[#2B73B3] hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
