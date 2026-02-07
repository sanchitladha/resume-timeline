import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

interface HeaderProps {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone?: string;
    location?: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ name, title, summary, contact }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="header-container">
        {/* Profile Image */}
        <motion.div className="profile-image-container" variants={imageVariants}>
          <img
            src="/profile.jpg"
            alt={name}
            className="profile-image"
          />
        </motion.div>

        {/* Header Content */}
        <div className="header-content">
          <motion.h1 className="hero-name" variants={itemVariants}>
            {name}
          </motion.h1>

          <motion.h2 className="hero-tagline" variants={itemVariants}>
            {title}
          </motion.h2>

          <motion.p className="hero-summary" variants={itemVariants}>
            {summary}
          </motion.p>

          <motion.div className="contact-links" variants={itemVariants}>
            <a href={`mailto:${contact.email}`} className="contact-link">
              <FaEnvelope /> {contact.email}
            </a>
            {contact.phone && (
              <span className="contact-link">
                <FaPhone /> {contact.phone}
              </span>
            )}
            {contact.location && (
              <span className="contact-link">
                <FaMapMarkerAlt /> {contact.location}
              </span>
            )}
            <a
              href="https://www.linkedin.com/in/sanchit-ladha-ba634610/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};
