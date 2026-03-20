import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Camera, Users } from 'lucide-react';
import './TeamSection.css';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    facebook?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Thanushan Sivakumar',
    role: 'Founder & Lead Photographer',
    bio: 'With over 15 years of experience capturing Sri Lanka\'s most beautiful moments. Specialized in wedding and portrait photography.',
    image: '/team/member1.png',
    socials: {
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Priyanka Nadarajah',
    role: 'Creative Director',
    bio: 'An award-winning creative mind who blends traditional Jaffna aesthetics with modern visual storytelling.',
    image: '/team/member2.png',
    socials: {
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Kavisan Rajaratnam',
    role: 'Senior Cinematographer',
    bio: 'Master of cinematic wedding films. Known for capturing raw emotions with a touch of elegance and artistry.',
    image: '/team/member3.png',
    socials: {
      instagram: '#',
      facebook: '#',
    },
  },
  {
    name: 'Dharshini Yogeswaran',
    role: 'Photo Editor & Retoucher',
    bio: 'Expert in color grading and photo retouching, ensuring every image meets our premium studio standards.',
    image: '/team/member4.png',
    socials: {
      instagram: '#',
      facebook: '#',
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="section-padding team-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="team-label">
            <Users size={16} />
            Our Team
          </span>
          <h2 className="team-title">
            Meet The <span className="highlight">Creative Minds</span>
          </h2>
          <p className="team-subtitle">
            A passionate team of Sri Lankan professionals dedicated to
            capturing your most precious moments with artistry and excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="team-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
            >
              {/* Image */}
              <div className="team-card-image">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="card-accent" />
              </div>

              {/* Info Overlay */}
              <div className="team-card-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <div className="team-divider" />
                <p className="team-member-bio">{member.bio}</p>
                <div className="team-social">
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      className="social-link"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      className="social-link"
                      aria-label={`${member.name} Facebook`}
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                  <a
                    href="#"
                    className="social-link"
                    aria-label={`${member.name} Portfolio`}
                  >
                    <Camera size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
