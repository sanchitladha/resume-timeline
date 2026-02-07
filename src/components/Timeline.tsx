import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChartLine,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaDollarSign,
  FaClipboardCheck,
  FaChartBar
} from 'react-icons/fa';
import type { WorkExperienceItem } from '../data/resumeData';

interface TimelineProps {
  experiences: WorkExperienceItem[];
}

const getIconForDescription = (description: string) => {
  const lowerDesc = description.toLowerCase();

  if (lowerDesc.includes('budget') || lowerDesc.includes('arr') || lowerDesc.includes('uplift')) {
    return <FaDollarSign className="icon" />;
  }
  if (lowerDesc.includes('strategy') || lowerDesc.includes('roadmap')) {
    return <FaClipboardCheck className="icon" />;
  }
  if (lowerDesc.includes('product') || lowerDesc.includes('incubator')) {
    return <FaRocket className="icon" />;
  }
  if (lowerDesc.includes('growth') || lowerDesc.includes('sales')) {
    return <FaChartLine className="icon" />;
  }
  if (lowerDesc.includes('ai') || lowerDesc.includes('genai')) {
    return <FaLightbulb className="icon" />;
  }
  if (lowerDesc.includes('team') || lowerDesc.includes('collaboration')) {
    return <FaUsers className="icon" />;
  }
  if (lowerDesc.includes('code') || lowerDesc.includes('technical')) {
    return <FaCode className="icon" />;
  }

  return <FaChartBar className="icon" />;
};

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="timeline-container">
      <div className="timeline-line" />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          {/* Timeline Node */}
          <motion.div
            className="timeline-node"
            style={{
              borderColor: exp.color,
              backgroundColor: expandedIndex === index ? exp.color : 'white'
            }}
            onClick={() => toggleExpand(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="node-pulse" style={{ borderColor: exp.color }} />
          </motion.div>

          {/* Company & Position */}
          <motion.div
            className="timeline-content"
            onClick={() => toggleExpand(index)}
          >
            <div className="timeline-header">
              <h3 className="company-name" style={{ color: exp.color }}>
                {exp.company}
              </h3>
              <span className="duration">{exp.duration}</span>
            </div>
            <h4 className="position">{exp.position}</h4>
            <p className="location">{exp.location}</p>

            {/* Expandable Description */}
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  className="description-container"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Featured Content */}
                  {exp.featuredContent && (
                    <motion.div
                      className="featured-content"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {exp.featuredContent.image && (
                        <img
                          src={exp.featuredContent.image}
                          alt={exp.featuredContent.imageAlt || 'Featured content'}
                          className="featured-image"
                        />
                      )}
                      {exp.featuredContent.link && exp.featuredContent.linkText && (
                        <a
                          href={exp.featuredContent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="featured-link"
                        >
                          {exp.featuredContent.linkText} →
                        </a>
                      )}
                    </motion.div>
                  )}

                  {/* Sub-Positions (Multiple Roles) */}
                  {exp.subPositions && (
                    <div className="sub-positions">
                      {exp.subPositions.map((subPos, subIndex) => (
                        <motion.div
                          key={subIndex}
                          className="sub-position"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + (subIndex * 0.15) }}
                        >
                          <div className="sub-position-header">
                            <h5 className="sub-position-title">{subPos.position}</h5>
                            <span className="sub-position-duration">{subPos.duration}</span>
                          </div>

                          {/* Featured Content for Sub-Position */}
                          {subPos.featuredContent && (
                            <motion.div
                              className="featured-content"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 + (subIndex * 0.15) }}
                            >
                              {subPos.featuredContent.image && (
                                <img
                                  src={subPos.featuredContent.image}
                                  alt={subPos.featuredContent.imageAlt || 'Featured content'}
                                  className="featured-image"
                                />
                              )}
                              {subPos.featuredContent.link && subPos.featuredContent.linkText && (
                                <a
                                  href={subPos.featuredContent.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="featured-link"
                                >
                                  {subPos.featuredContent.linkText} →
                                </a>
                              )}
                            </motion.div>
                          )}

                          {/* Description for Sub-Position */}
                          {subPos.description && (
                            <ul className="description-list">
                              {subPos.description.map((desc, descIndex) => (
                                <motion.li
                                  key={descIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + (subIndex * 0.15) + (descIndex * 0.1) }}
                                  className="description-item"
                                >
                                  <span className="icon-wrapper">
                                    {getIconForDescription(desc)}
                                  </span>
                                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                                </motion.li>
                              ))}
                            </ul>
                          )}

                          {/* Grouped Description for Sub-Position */}
                          {subPos.groupedDescription && (
                            <div className="grouped-description">
                              {subPos.groupedDescription.map((group, groupIndex) => (
                                <motion.div
                                  key={groupIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + (subIndex * 0.15) + (groupIndex * 0.15) }}
                                  className="description-group"
                                >
                                  {group.heading && group.items.length > 0 && (
                                    <h5 className="group-heading">{group.heading}</h5>
                                  )}
                                  {group.items.length > 0 && (
                                    <ul className="description-list">
                                      {group.items.map((item, itemIndex) => (
                                        <motion.li
                                          key={itemIndex}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.3 + (subIndex * 0.15) + (groupIndex * 0.15) + (itemIndex * 0.1) }}
                                          className="description-item"
                                        >
                                          <span className="icon-wrapper">
                                            {getIconForDescription(item)}
                                          </span>
                                          <span dangerouslySetInnerHTML={{ __html: item }} />
                                        </motion.li>
                                      ))}
                                    </ul>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Regular Description */}
                  {exp.description && (
                    <ul className="description-list">
                      {exp.description.map((desc, descIndex) => (
                        <motion.li
                          key={descIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: descIndex * 0.1 }}
                          className="description-item"
                        >
                          <span className="icon-wrapper">
                            {getIconForDescription(desc)}
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: desc }} />
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {/* Grouped Description */}
                  {exp.groupedDescription && (
                    <div className={`grouped-description ${exp.groupedDescription[0]?.items.length === 0 ? 'has-master-heading' : ''}`}>
                      {exp.groupedDescription.map((group, groupIndex) => (
                        <motion.div
                          key={groupIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: groupIndex * 0.15 }}
                          className={`description-group ${group.items.length === 0 ? 'master-heading-group' : 'project-group'}`}
                        >
                          {group.heading && (
                            <h5 className={group.items.length === 0 ? "master-heading" : "group-heading"}>
                              {group.heading}
                            </h5>
                          )}
                          {group.items.length > 0 && (
                            <ul className="description-list">
                              {group.items.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (groupIndex * 0.15) + (itemIndex * 0.1) }}
                                  className="description-item"
                                >
                                  <span className="icon-wrapper">
                                    {getIconForDescription(item)}
                                  </span>
                                  <span dangerouslySetInnerHTML={{ __html: item }} />
                                </motion.li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {expandedIndex !== index && (
              <p className="click-hint">Click to expand</p>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
