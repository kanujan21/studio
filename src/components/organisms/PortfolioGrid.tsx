import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import './PortfolioGrid.css';

const categories = ['All', 'Wedding', 'Portrait', 'Events', 'Fashion'];

const portfolioItems = [
  { id: 1, category: 'Wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070', title: 'Eternal Vows' },
  { id: 2, category: 'Portrait', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=2070', title: 'Soul Reflection' },
  { id: 3, category: 'Events', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2070', title: 'Grand Celebration' },
  { id: 4, category: 'Wedding', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2070', title: 'Bridal Glow' },
  { id: 5, category: 'Fashion', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2070', title: 'Urban Edge' },
  { id: 6, category: 'Portrait', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=2070', title: 'The Gaze' },
  { id: 7, category: 'Events', src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070', title: 'Night Magic' },
  { id: 8, category: 'Fashion', src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2070', title: 'Timeless Style' },
  { id: 9, category: 'Wedding', src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&q=80&w=2070', title: 'Sunset Kiss' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-padding portfolio-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title text-gold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            PORTFOLIO
          </motion.h2>
          <motion.h3 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Glimpse into Our Lens
          </motion.h3>
        </div>

        {/* Filters */}
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          className="portfolio-grid"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="portfolio-card"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="card-img-wrapper">
                  <img src={item.src} alt={item.title} className="card-img" />
                  <div className="card-overlay">
                    <Maximize2 className="zoom-icon" size={24} />
                    <div className="card-info">
                      <span className="card-category text-gold">{item.category}</span>
                      <h4 className="card-title">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="lightbox-close" 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </button>
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={portfolioItems.find(p => p.id === selectedImage)?.src} 
                className="lightbox-img" 
                alt="" 
              />
              <div className="lightbox-info">
                <h4 className="lightbox-title text-gold">
                  {portfolioItems.find(p => p.id === selectedImage)?.title}
                </h4>
                <p>{portfolioItems.find(p => p.id === selectedImage)?.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
