import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Users, Video, Edit3, Image } from 'lucide-react';
import Button from '../atoms/Button';
import './ServicesList.css';

const services = [
  {
    icon: <Heart size={36} />,
    title: 'Wedding Photography',
    description: 'Capturing the deep emotional bond and timeless elegance of your most special day.',
    price: 'Starting from LKR 150,000'
  },
  {
    icon: <Users size={36} />,
    title: 'Pre-Wedding Shoots',
    description: 'Stunning outdoor and indoor sessions that showcase your unique love story across Jaffna\'s landscapes.',
    price: 'Starting from LKR 60,000'
  },
  {
    icon: <Camera size={36} />,
    title: 'Portrait Photography',
    description: 'High-end studio portraits for fashion, professional profiles, or personal branding.',
    price: 'Starting from LKR 25,000'
  },
  {
    icon: <Video size={36} />,
    title: 'Event Coverage',
    description: 'Comprehensive coverage of corporate events, concerts, and family celebrations.',
    price: 'Starting from LKR 80,000'
  },
  {
    icon: <Image size={36} />,
    title: 'Studio Shoots',
    description: 'Creative and artistic studio sessions with professional lighting and backdrops.',
    price: 'Starting from LKR 40,000'
  },
  {
    icon: <Edit3 size={36} />,
    title: 'Photo Retouching',
    description: 'Expert editing and high-end retouching to make every shot look flawless.',
    price: 'Starting from LKR 5,000/image'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            OUR SERVICES
          </motion.h2>
          <motion.h3 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Excellence in Every Frame
          </motion.h3>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon text-gold">
                {service.icon}
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              <div className="service-footer">
                <span className="service-price text-gold">{service.price}</span>
                <Button variant="outline" size="sm" href="#contact">Learn More →</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
