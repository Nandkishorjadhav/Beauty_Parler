import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Real Results, Real People</h2>
          <p className="section-subtitle">
            Discover why thousands trust Lumière for their beauty routine
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    {testimonial.verified && (
                      <span className="verified-badge">✓ Verified Buyer</span>
                    )}
                  </div>
                </div>

                <div className="testimonial-rating">
                  <span className="stars">{renderStars(testimonial.rating)}</span>
                </div>

                <p className="testimonial-text">"{testimonial.text}"</p>

                <p className="testimonial-product">
                  Purchased: <span>{testimonial.product}</span>
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          className="testimonial-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat">
            <h3 className="stat-number">4.8</h3>
            <p className="stat-label">Average Rating</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">2,450+</h3>
            <p className="stat-label">Happy Customers</p>
          </div>
          <div className="stat">
            <h3 className="stat-number">98%</h3>
            <p className="stat-label">Would Recommend</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
