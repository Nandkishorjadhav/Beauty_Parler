import { motion } from 'framer-motion';
import './BrandStory.css';

const BrandStory = () => {
  const values = [
    {
      icon: '🌿',
      title: 'Clean Beauty',
      description: 'Science-backed formulations with pure, effective ingredients'
    },
    {
      icon: '♻️',
      title: 'Sustainable',
      description: 'Earth-conscious packaging and carbon-neutral shipping'
    },
    {
      icon: '🐰',
      title: 'Cruelty-Free',
      description: "We've never tested on animals. PETA certified"
    },
    {
      icon: '✨',
      title: 'Inclusive Beauty',
      description: 'For all skin tones, types, and ages'
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
              Founded in 2020, Lumière was born from a simple belief: beauty should be a ritual, not a routine. We believe that every ingredient tells a story, and every product is a promise.
            </p>
            <p className="story-text">
              Our journey began in a small laboratory in California, where we combined cutting-edge science with the finest botanical ingredients. Today, we're proud to offer luxury beauty products that are as kind to your skin as they are to the planet.
            </p>

            <blockquote className="story-quote">
              "Every ingredient tells a story. Every product is a promise."
              <cite>— Isabella Chen, Founder & CEO</cite>
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
              Learn More About Our Mission
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
