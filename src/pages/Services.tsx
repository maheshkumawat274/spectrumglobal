import { CheckCircle, Users, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';

import Card from '../components/ui/Card';
import Button from '../components/ui/button';

const Services = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=max&fm=jpg&ixid=M3wzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTcxODIxNTg0OXw&ixlib=rb-4.0.3&q=75&utm_medium=referral&utm_source=vocal.media&w=720')" }}>
           {/* Overlay */}
           <div className="absolute inset-0 bg-black opacity-50"></div>
     
           {/* Centered Text */}
           <div className="relative z-10 flex items-center justify-center h-full">
             <div className="text-center text-white px-4">
               <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
               <p className="text-lg max-w-xl mx-auto">
                  Comprehensive HR solutions designed for organizations at every stage of growth
               </p>
             </div>
           </div>
         </div>

      {/* Service 1: Recruitment & Talent Acquisition */}
      <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Recruitment & Talent Acquisition
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Finding the right talent is crucial. We go beyond job posting to identify, attract, and acquire professionals who align with your culture and drive your business forward.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our recruitment approach combines strategic planning, deep candidate networks, and rigorous assessment to ensure long-term organizational fit.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl">
              <img src="/imgs/training4.jpeg" className='h-full w-full object-cover rounded-md'/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What We Offer</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>End-to-end recruitment support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Executive search & C-suite placement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Competency-based hiring framework</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Employer branding strategy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Candidate experience optimization</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Methodology</h3>
              <div className="space-y-4 text-gray-600 text-sm">
                <div>
                  <p className="font-medium mb-1">1. Requirement Clarity</p>
                  <p>Deep dive into role requirements, team dynamics, and success metrics.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">2. Sourcing & Screening</p>
                  <p>Targeted sourcing using networks and comprehensive candidate assessment.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">3. Selection & Placement</p>
                  <p>Structured interviews, reference checks, and seamless onboarding support.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Benefits</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Reduced time-to-hire</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Improved retention rates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Better cultural fit</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Cost-effective talent acquisition</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Service 2: Training & Development */}
      <section className="py-10 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
              <img src='/imgs/training5.jpeg' className='w-full h-full object-cover rounded-md'/>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Training & Development
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Your people are your greatest asset. We design and deliver learning programs that build capabilities, enhance performance, and inspire growth.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From leadership development to technical skill-building, our programs are tailored to your organizational context and business objectives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What We Offer</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Leadership & people management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Communication & presentation skills</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Performance management coaching</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>HR capability building</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Customized learning programs</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Methodology</h3>
              <div className="space-y-4 text-gray-600 text-sm">
                <div>
                  <p className="font-medium mb-1">1. Assessment</p>
                  <p>Identify skill gaps and learning needs across teams.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">2. Design</p>
                  <p>Create tailored, engaging content aligned to roles and objectives.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">3. Delivery & Support</p>
                  <p>Interactive sessions, coaching, and ongoing reinforcement for adoption.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Benefits</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Enhanced team capability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Improved performance & productivity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Leadership pipeline development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Higher employee engagement</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Service 3: HR Systems, Policies & Compliance */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                HR Systems, Policies & Compliance
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Robust HR infrastructure is the backbone of organizational scalability. We help you build systems and policies that ensure compliance, fairness, and operational excellence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From HR manuals to performance systems and compensation structures, we create frameworks that support growth while managing risk.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
              <img src='https://www.techfunnel.com/wp-content/uploads/2019/01/Roles-and-Responsibilities-of-the-HR-Compliance-Officer.jpg' className='w-full h-full object-cover rounded-md'/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What We Offer</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>HR policies & procedures manuals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Performance management systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Job frameworks & grading</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Compensation structure design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Compliance assurance & labor law</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Methodology</h3>
              <div className="space-y-4 text-gray-600 text-sm">
                <div>
                  <p className="font-medium mb-1">1. Audit & Assessment</p>
                  <p>Evaluate current HR infrastructure and compliance gaps.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">2. Design & Development</p>
                  <p>Create tailored systems aligned with business strategy.</p>
                </div>
                <div>
                  <p className="font-medium mb-1">3. Implementation & Training</p>
                  <p>Roll out with stakeholder engagement and capability building.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Benefits</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Full compliance with regulations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Standardized processes & fairness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Scalable infrastructure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Reduced legal & operational risk</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why These Services */}
      <section className="py-10 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why These Three Services Matter
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Together, they form a complete HR ecosystem that drives organizational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-blue-100 mb-4">1</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Attract Top Talent</h3>
              <p className="text-gray-600">Recruitment brings in the best minds aligned with your values.</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-green-100 mb-4">2</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Develop & Retain</h3>
              <p className="text-gray-600">Training ensures they grow, stay engaged, and become future leaders.</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-purple-100 mb-4">3</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Build Systems</h3>
              <p className="text-gray-600">Systems & compliance ensure fair, compliant, scalable operations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-[#2B73B3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your HR Strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can drive excellence in your organization.
          </p>
          <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
