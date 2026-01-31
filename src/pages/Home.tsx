import OurEsteemedClients from '../components/clientCategories';
import IndustriesWeServe from '../components/Industries';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomeAboutus from '../components/home/HomeAboutus';
import ServicesHome from '../components/home/ServicesHome';
import WhychooseHome from '../components/home/WhychooseHome';
import Process from '../components/home/Process';
import CareerHome from '../components/home/CareerHome';
import HomeCTA from '../components/home/HomeCTA';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HomeHeroSection/>

      {/* About Preview */}
      <HomeAboutus/>

      {/* Services Overview */}
      <ServicesHome/>

      {/* Why Choose Us */}
      <WhychooseHome/>

      <IndustriesWeServe/>

      {/* Our Process */}
      <Process/>

      {/* Testimonials */}
      <Testimonials/>

      {/* Careers Preview */}
      <CareerHome/>

      {/* Our Esteemed Clients */}
      <OurEsteemedClients/>
      {/* Final CTA */}
      <HomeCTA/>
    </div>
  );
};

export default Home;
