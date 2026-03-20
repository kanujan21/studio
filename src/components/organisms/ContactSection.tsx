import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import Button from '../atoms/Button';
import './ContactSection.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CONTACT US
          </motion.h2>
          <motion.h3 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Capture Your Session
          </motion.h3>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="contact-card glass">
              <h4 className="contact-info-title">Head Studio Office</h4>
              <p className="contact-info-description">Visit our studio in the heart of Jaffna. We'd love to discuss your next project over a coffee or a traditional tea.</p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon text-gold"><MapPin size={24} /></div>
                  <div className="info-text">
                    <h5>Address</h5>
                    <p>No. 45, Palaly Road, Jaffna, Sri Lanka</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon text-gold"><Phone size={24} /></div>
                  <div className="info-text">
                    <h5>Phone</h5>
                    <p>070 181 2037</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon text-gold"><Mail size={24} /></div>
                  <div className="info-text">
                    <h5>Email</h5>
                    <p>lenscraftjaffna@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="social-links-container">
                <h5>Follow Our Journey</h5>
                <div className="social-links">
                  <a href="#" className="social-link"><Instagram size={20} /></a>
                  <a href="#" className="social-link"><Facebook size={20} /></a>
                  <a href="#" className="social-link"><Twitter size={20} /></a>
                </div>
              </div>

              <div className="whatsapp-action">
                <Button variant="primary" size="lg" className="wa-btn">
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="booking-form glass">
              <div className="form-group-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Your first name" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Your last name" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="example@email.com" required />
              </div>
              <div className="form-group">
                <label>Service Interested In</label>
                <select required>
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="events">Event Coverage</option>
                  <option value="studio">Studio Session</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message / Details</label>
                <textarea rows={5} placeholder="Tell us about your upcoming session..."></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="submit-btn">Send Booking Request</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
