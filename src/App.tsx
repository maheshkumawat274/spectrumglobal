import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Header from './components/header/Header';
import Careers from './pages/Career';
import Footer from './components/footer/Footer';
import ScrollTop from './components/ScrollTop';
import { PopupProvider } from './components/popup/PopupProvider';
import PopupModal from './components/popup/PopupModel';

export function App() {
  return (
    <PopupProvider>
    <Router>
      <ScrollTop/>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        <PopupModal/>
      </div>
    </Router>
    </PopupProvider>
  );
}
