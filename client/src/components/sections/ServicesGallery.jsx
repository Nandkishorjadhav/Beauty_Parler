import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import ServiceCard from '../common/ServiceCard';
import { services, categories } from '../../data/services';
import './ServicesGallery.css';

const ServicesGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices =
    activeCategory === 'All Services'
      ? services
      : services.filter((service) => service.category === activeCategory);

  const handleQuickView = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleBooking = () => {
    toast.success(`Booking request sent for ${selectedService.name}! We'll contact you shortly. 📞`, {
      duration: 3000,
      style: {
        background: 'var(--color-rose-gold)',
        color: 'white'
      }
    });
    closeModal();
  };

  return (
    <>
      <Toaster position="top-center" />
      <section className="services-gallery section" id="services">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Premium beauty and grooming services tailored just for you
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="category-filter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="services-grid"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onQuickView={handleQuickView}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="service-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="service-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  ×
                </button>

                <div className="modal-content">
                  <div className="modal-image">
                    <img src={selectedService.image} alt={selectedService.name} />
                    <div className="modal-badge">{selectedService.duration}</div>
                  </div>

                  <div className="modal-info">
                    <p className="modal-category">{selectedService.category}</p>
                    <h3 className="modal-title">{selectedService.name}</h3>
                    <p className="modal-description">{selectedService.description}</p>

                    <div className="modal-features">
                      <h4>What's Included:</h4>
                      <ul>
                        {selectedService.features.map((feature, index) => (
                          <li key={index}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-price">
                      <span className="price-label">Starting from</span>
                      <span className="price-value">{selectedService.price}</span>
                    </div>

                    <div className="modal-actions">
                      <motion.button
                        className="btn-enquiry"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          toast('Enquiry sent! Our team will reach out to you soon. ✨', {
                            icon: '✨',
                            duration: 3000
                          });
                          closeModal();
                        }}
                      >
                        Enquire Now
                      </motion.button>
                      <motion.button
                        className="btn-book-modal"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBooking}
                      >
                        Book Appointment
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default ServicesGallery;
