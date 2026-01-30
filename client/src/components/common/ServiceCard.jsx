import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import './ServiceCard.css';

const ServiceCard = ({ service, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleBooking = (e) => {
    e.stopPropagation();
    toast.success(`Booking request sent for ${service.name}! We'll contact you shortly. 📞`, {
      duration: 3000,
      style: {
        background: 'var(--color-rose-gold)',
        color: 'white'
      }
    });
  };

  const handleEnquiry = (e) => {
    e.stopPropagation();
    toast('Enquiry sent! Our team will reach out to you soon. ✨', {
      icon: '✨',
      duration: 3000
    });
  };

  return (
    <motion.div
      className="service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(service)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="service-image-container">
        <img src={service.image} alt={service.name} className="service-image" />
        <div className={`service-overlay ${isHovered ? 'active' : ''}`}>
          <motion.button
            className="quick-view-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(service);
            }}
          >
            View Details
          </motion.button>
        </div>
        <div className="service-badge">{service.duration}</div>
      </div>

      <div className="service-info">
        <p className="service-category">{service.category}</p>
        <h3 className="service-name">{service.name}</h3>
        <p className="service-description">{service.description}</p>
        
        <div className="service-features">
          {service.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">• {feature}</span>
          ))}
        </div>

        <div className="service-footer">
          <div className="service-price">
            <span className="price-label">Starting from</span>
            <span className="price-value">{service.price}</span>
          </div>
          
          <div className="service-actions">
            <motion.button
              className="btn-enquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnquiry}
            >
              Enquire
            </motion.button>
            <motion.button
              className="btn-book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    duration: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.array
  }),
  onQuickView: PropTypes.func
};

export default ServiceCard;
