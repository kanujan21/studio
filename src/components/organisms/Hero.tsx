import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Camera3D from '../3d/Camera3D';
import Button from '../atoms/Button';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      {/* Background Media */}
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070" 
          alt="Photography Background" 
          className="bg-img"
        />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="hero-subtitle">CAPTURING MOMENTS THAT MATTER</h2>
            <h1 className="hero-title">
              LENSCRAFT <span className="text-gold">STUDIO</span>
            </h1>
            <p className="hero-description">
              Professional cinematography and photography services that turn your special moments into timeless works of art. From weddings to high-end portraits.
            </p>
            <div className="hero-actions">
              <Button variant="primary" size="lg" href="#portfolio">View Portfolio</Button>
              <Button variant="glass" size="lg" href="#contact">Book a Session</Button>
            </div>
          </motion.div>
        </div>

        <div className="hero-3d">
          <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }} style={{ width: '100%', height: '100%' }}>
            <Suspense fallback={null}>
              <Camera3D />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <div className="scroll-line"></div>
        <span className="scroll-text">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;
