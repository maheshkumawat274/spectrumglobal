// import { CheckCircle, MapPin, Briefcase, ArrowRight, Heart } from "lucide-react";
// import Card from "../components/ui/Card";
// import { Link } from "react-router-dom";
// import Button from "../components/ui/button";
// import { usePopup } from "../components/popup/usePopup";
// import { useEffect, useState } from "react";
// import { apiGet } from "../services/api";

// /* ================= TYPES ================= */
// type Opening = {
//   id: number;
//   title: string;
//   location: string;
//   job_type: string;
//   description: string;
//   level: string;
// };

// /* ================= COMPONENT ================= */
// const Careers = () => {
//   const { openPopup } = usePopup();

//   const [positions, setPositions] = useState<Opening[]>([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= FETCH OPENINGS ================= */
//   useEffect(() => {
//     apiGet<Opening[]>("openings/get_openings.php")
//       .then(setPositions)
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="bg-white">
//       {/* ================= HERO ================= */}
//       <div
//         className="relative h-[50vh] md:h-[70vh] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pond5.com/team-indian-office-employees-discussing-088720859_prevstill.jpeg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <div className="text-center text-white px-4">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4">
//               Join Our Team
//             </h1>
//             <p className="text-lg max-w-xl mx-auto">
//               Build a rewarding career where your work makes a real difference.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ================= WHY JOIN ================= */}
//       <section className="py-20 bg-white border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Why Join Spectrum Global
//             </h2>
//             <p className="text-gray-600 text-lg">
//               We offer more than a job—we offer a career.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Collaborative Culture",
//                 description: "Work in a supportive team.",
//                 icon: Heart,
//               },
//               {
//                 title: "Continuous Learning",
//                 description: "Upskill with training programs.",
//                 icon: CheckCircle,
//               },
//               {
//                 title: "Competitive Compensation",
//                 description: "Attractive salary & benefits.",
//                 icon: Briefcase,
//               },
//               {
//                 title: "Work-Life Balance",
//                 description: "Flexible work environment.",
//                 icon: MapPin,
//               },
//             ].map((item, i) => (
//               <Card key={i} className="p-8 text-center">
//                 <item.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
//                 <h3 className="font-bold text-gray-900">{item.title}</h3>
//                 <p className="text-gray-600 text-sm mt-2">
//                   {item.description}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= OPEN POSITIONS ================= */}
//       <section className="py-20 bg-white border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Open Positions
//           </h2>

//           {loading && <p className="text-gray-500">Loading openings...</p>}

//           {!loading && positions.length === 0 && (
//             <p className="text-gray-500">No openings available.</p>
//           )}

//           <div className="space-y-6 mt-10">
//             {positions.map((position) => (
//               <Card key={position.id} className="p-8 hover:bg-blue-50">
//                 <div className="flex flex-col md:flex-row justify-between gap-6">
//                   <div>
//                     <div className="flex items-center gap-3 mb-3">
//                       <h3 className="text-xl font-bold text-gray-900">
//                         {position.title}
//                       </h3>
//                       <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
//                         {position.level}
//                       </span>
//                     </div>

//                     <p className="text-gray-600 mb-4">
//                       {position.description}
//                     </p>

//                     <div className="flex gap-6 text-sm text-gray-600">
//                       <span className="flex items-center gap-2">
//                         <MapPin className="w-4 h-4" />
//                         {position.location}
//                       </span>
//                       <span className="flex items-center gap-2">
//                         <Briefcase className="w-4 h-4" />
//                         {position.job_type}
//                       </span>
//                     </div>
//                   </div>

//                   <Button onClick={openPopup} variant="outline">
//                     Apply Now
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </Button>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CONTACT ================= */}
//       <section className="py-20 bg-gray-50 text-center">
//         <h2 className="text-4xl font-bold text-gray-900 mb-6">
//           Questions About Careers?
//         </h2>
//         <Link to="/contact-us">
//           <Button size="lg">
//             Get In Touch
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </Button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Careers;

import { CheckCircle, MapPin, Briefcase, ArrowRight, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import Button from '../components/ui/button';
import { usePopup } from '../components/popup/usePopup';
import { apiGet } from '../services/api';
import { useEffect, useState } from 'react';

type Opening = {
  id: number;
  title: string;
  location: string;
  job_type: string;
  description: string;
  level: string;
};
const Careers = () => {
  const { openPopup } = usePopup();
   const [positions, setPositions] = useState<Opening[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH OPENINGS ================= */
  useEffect(() => {
    apiGet<Opening[]>("openings/get_openings.php")
      .then(setPositions)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.pond5.com/team-indian-office-employees-discussing-088720859_prevstill.jpeg')" }}>
           {/* Overlay */}
           <div className="absolute inset-0 bg-black opacity-50"></div>
     
           {/* Centered Text */}
           <div className="relative z-10 flex items-center justify-center h-full">
             <div className="text-center text-white px-4">
               <h1 className="text-3xl md:text-5xl font-bold mb-4">Join Our Team</h1>
               <p className="text-lg max-w-xl mx-auto">
                  Build a rewarding career where your work makes a real difference for hundreds of organizations across sectors.
               </p>
             </div>
           </div>
         </div>

      {/* Culture Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Spectrum Global</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer more than a job—we offer a career where you can grow, learn, and make an impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Collaborative Culture',
                description: 'Work in a team that values ideas, respects perspectives, and celebrates successes together.',
                icon: Heart,
              },
              {
                title: 'Continuous Learning',
                description: 'Access to training, certifications, and development programs to grow your skills.',
                icon: CheckCircle,
              },
              {
                title: 'Competitive Compensation',
                description: 'Attractive salary, performance bonuses, and comprehensive benefits package.',
                icon: Briefcase,
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work arrangements, wellness programs, and support for personal well-being.',
                icon: MapPin,
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Benefits & Perks</h2>
              <div className="space-y-4">
                {[
                  'Comprehensive health insurance (self + family)',
                  'Annual performance bonuses',
                  'Professional development budget',
                  'Flexible work hours & remote work',
                  'Paid time off & vacation benefits',
                  'Wellness programs & gym membership',
                  'Team outings & company events',
                  'Referral bonus program',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl">
              <img src='https://teambuildinghub.com/wp-content/uploads/2022/03/team-building-benefits-featured-image.webp' className='w-full h-full object-cover rounded-md'/>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 text-lg">
              We're currently looking for talented professionals across various roles
            </p>
          </div>

          {loading && <p className="text-gray-500">Loading openings...</p>}

          {!loading && positions.length === 0 && (
            <p className="text-gray-500">No openings available.</p>
          )}

          <div className="space-y-6 mt-10">
            {positions.map((position) => (
              <Card
                key={position.id}
                className="
                  relative overflow-hidden rounded-2xl border border-gray-200 
                  bg-white p-3 sm:p-8 transition-all duration-300
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                  hover:-translate-y-1
                "
              >
                {/* subtle accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-blue-600" />
              
                <div className="flex flex-col lg:flex-row justify-between gap-10">
              
                  {/* LEFT CONTENT */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
                        {position.title}
                      </h3>
              
                      <span className="rounded-full bg-blue-50 text-blue-700 
                                       text-xs font-medium px-3 py-1">
                        {position.level}
                      </span>
                    </div>
              
                    <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
                      {position.description}
                    </p>
              
                    <div className="flex flex-wrap gap-8 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        {position.location}
                      </span>
              
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        {position.job_type}
                      </span>
                    </div>
                  </div>
              
                  {/* RIGHT CTA */}
                  <div className="flex items-center">
                    <button
                      onClick={openPopup}
                      className="
                        group flex items-center gap-2 rounded-xl
                        border border-blue-600 px-7 py-3
                        text-sm font-semibold text-blue-600
                        transition-all duration-300
                        hover:bg-blue-600 hover:text-white
                      "
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
              
                </div>
              </Card>
              
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              Don't see a role that fits? We're always interested in hearing from talented professionals.
            </p>
            <Button onClick={openPopup} variant="outline">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-10 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Application Process</h2>
            <p className="text-gray-600 text-lg">
              Simple, transparent, and designed to help us know you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Application',
                description: 'Submit your resume and cover letter through our portal.',
              },
              {
                number: '02',
                title: 'Screening',
                description: 'Our HR team reviews your application and background.',
              },
              {
                number: '03',
                title: 'Interviews',
                description: 'Multiple rounds with team members and leadership.',
              },
              {
                number: '04',
                title: 'Offer',
                description: 'Receive offer and finalize joining details.',
              },
            ].map((step, index) => (
              <Card key={index} className="p-8">
                <div className="text-4xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance */}
      <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              We Believe in Transparency & Confidentiality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">We Promise You</h3>
                <ul className="space-y-2">
                  {[
                    'Transparent communication throughout the process',
                    'Respectful, timely feedback',
                    'Complete confidentiality of your information',
                    'Fair and unbiased evaluation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">We Ask of You</h3>
                <ul className="space-y-2">
                  {[
                    'Honest communication about your skills & experience',
                    'Professional conduct throughout interviews',
                    'Respect for our time and process',
                    'Discretion regarding other candidates',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Our Careers?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Reach out to our HR team. We'd love to hear from you and answer any questions you might have.
          </p>
          <Link to="/contact-us">
            <Button variant="primary" size="lg">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;