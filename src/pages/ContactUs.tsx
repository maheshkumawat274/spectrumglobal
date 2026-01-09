
import Card from '../components/ui/Card';
import ContactSection from '../components/contact/ContactSection';
import ContactMap from '../components/contact/ContactMap';

const ContactUs = () => {
  

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://www.companyregistrationsworldwide.com/wp-content/uploads/2020/06/Contact-us_topbanner_cropped.jpg')" }}>
           {/* Overlay */}
           <div className="absolute inset-0 bg-black opacity-50"></div>
     
           {/* Centered Text */}
           <div className="relative z-10 flex items-center justify-center h-full">
             <div className="text-center text-white px-4">
               <h1 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h1>
               <p className="text-lg max-w-xl mx-auto">
                  Have questions about our services? Want to discuss your HR challenges? We'd love to hear from you.
               </p>
             </div>
           </div>
         </div>

      <ContactSection/>
      <ContactMap/>

      {/* Service Details */}
      <section className="py-10 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Can Help</h2>
            <p className="text-gray-600 text-lg">
              Whether you're looking to solve specific HR challenges or transform your entire people function, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Recruitment Challenges',
                description: 'Struggling to find the right talent? We have the expertise and networks to help you attract, identify, and hire top performers.',
              },
              {
                title: 'Team Development',
                description: 'Want to upskill your team? Our customized training and coaching programs build capabilities and unlock potential.',
              },
              {
                title: 'HR Infrastructure',
                description: 'Building or scaling your HR function? We help you establish systems, policies, and compliance frameworks that support growth.',
              },
              {
                title: 'Organizational Design',
                description: 'Restructuring your organization? We help you design effective structures and job frameworks that drive performance.',
              },
              {
                title: 'Change Management',
                description: 'Implementing major HR initiatives? We ensure smooth adoption and sustainable change across your organization.',
              },
              {
                title: 'Strategic HR Planning',
                description: 'Aligning HR with business strategy? We help you build HR roadmaps that support your long-term business objectives.',
              },
            ].map((item, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-5 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Quick Response Guaranteed</h2>
            <p className="text-gray-600 text-lg">
              We typically respond to inquiries within 24 business hours. For urgent matters, please call us directly.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
