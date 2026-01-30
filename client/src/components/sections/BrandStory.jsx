import { motion } from 'framer-motion';
import './BrandStory.css';

const BrandStory = () => {
  const values = [
    {
      icon: '💇',
      title: 'Expert Stylists',
      description: 'Certified professionals with years of experience'
    },
    {
      icon: '✨',
      title: 'Premium Products',
      description: 'Only the finest international brands and products'
    },
    {
      icon: '🧼',
      title: 'Hygienic Standards',
      description: 'Sanitized tools and clean environment guaranteed'
    },
    {
      icon: '💎',
      title: 'Personalized Care',
      description: 'Customized services for your unique beauty needs'
    }
  ];

  return (
    <section className="brand-story section" id="about">
      <div className="container">
        <div className="story-grid">
          {/* Image Side */}
          <motion.div
            className="story-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop"
              alt="Brand Story"
            />
            <div className="image-accent"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              Founded in 2020, Lumière Beauty Salon was born from a passion for enhancing natural beauty and empowering confidence. We believe that every visit should be a transformative experience, not just an appointment.
            </p>
            <p className="story-text">
              Our journey began with a vision to create a sanctuary where expertise meets luxury. With our team of certified professionals and commitment to using premium products, we've become a trusted destination for those seeking exceptional beauty services in a welcoming, hygienic environment.
            </p>

            <blockquote className="story-quote">
              "Your beauty, our expertise. Every service is a promise of excellence."
              <cite>— Isabella Chen, Founder & Master Stylist</cite>
            </blockquote>

            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="btn btn-primary story-cta"
              onClick={() => {
                // Open about modal or scroll to contact
                const contactSection = document.getElementById('newsletter');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Appointment Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
