import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Award, Clock, Star } from 'lucide-react';
import './AboutContent.css';

const stats = [
  { icon: <Clock size={24} />, label: 'Years Experience', value: '12+' },
  { icon: <Camera size={24} />, label: 'Photos Taken', value: '500k+' },
  { icon: <Award size={24} />, label: 'Awards Won', value: '25+' },
  { icon: <Star size={24} />, label: 'Happy Clients', value: '1200+' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        <div className="about-image">
          <motion.img 
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=2070" 
            alt="Photographer at work" 
            className="about-img"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <div className="about-img-overlay glass">
            <h4 className="photographer-name">Thanushan Sivakumar</h4>
            <p className="photographer-title">Founder & Lead Photographer</p>
          </div>
        </div>

        <div className="about-content">
          <motion.h2 
            className="section-title text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            OUR STORY
          </motion.h2>
          <motion.h3 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Passionate About Every Shot
          </motion.h3>
          <motion.p 
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Founded in 2012, LensCraft Studio started as a small personal project in Jaffna and has grown into one of the most respected photography studios in the region. We believe that every individual has a unique story, and our mission is to capture those stories through a lens of artistic excellence.
          </motion.p>
          <motion.p 
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our style is often described as cinematic, elegant, and deeply authentic. We blend traditional cultural richness with modern visual storytelling, creating everlasting memories that you and your loved ones will cherish for a lifetime.
          </motion.p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="stat-icon text-gold">
                  {stat.icon}
                </div>
                <div className="stat-info">
                  <h4 className="stat-value">{stat.value}</h4>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
