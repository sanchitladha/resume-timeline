import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import type { EducationItem } from '../data/resumeData';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="education-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="education-grid">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
          >
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <h3 className="institution">{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="year">{edu.year}</p>
            {edu.details && <p className="details">{edu.details}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
