import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <Camera className="logo-icon" size={32} />
              <span className="logo-text">LENSCRAFT <span className="text-gold">STUDIO</span></span>
            </div>
            <p className="footer-tagline">Capturing the soul of every moment, one frame at a time.</p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><Instagram size={18} /></a>
              <a href="#" className="social-icon"><Facebook size={18} /></a>
              <a href="#" className="social-icon"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Wedding Photography</a></li>
              <li><a href="#">Portrait Sessions</a></li>
              <li><a href="#">Event Coverage</a></li>
              <li><a href="#">Fashion Shoots</a></li>
              <li><a href="#">Commercial Work</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <Mail size={16} className="text-gold" />
              <span>lenscraftjaffna@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} className="text-gold" />
              <span>070 181 2037</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LensCraft Studio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <p>Made with <Heart size={14} className="text-gold" fill="#d4af37" /> for creators</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
