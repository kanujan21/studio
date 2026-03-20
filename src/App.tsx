import React, { useEffect } from 'react';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import PortfolioGrid from './components/organisms/PortfolioGrid';
import ServicesList from './components/organisms/ServicesList';
import AboutContent from './components/organisms/AboutContent';
import TeamSection from './components/organisms/TeamSection';
import ContactSection from './components/organisms/ContactSection';
import Footer from './components/organisms/Footer';
import './index.css';

const App: React.FC = () => {
  useEffect(() => {
    // Basic SEO updates
    document.title = "LensCraft Studio | Professional Photography & Cinematography";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LensCraft Studio offers professional, premium photography services including Weddings, Portraits, Events, and more. Capturing moments that matter.");
    }
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <ServicesList />
        <AboutContent />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
