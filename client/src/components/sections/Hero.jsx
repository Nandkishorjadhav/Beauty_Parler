import { motion } from 'framer-motion';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <motion.img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&h=1080&fit=crop"
          alt="Luxury beauty products"
          className="hero-image"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Where Beauty
            <br />
            <span className="hero-title-accent">Meets Expertise</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Experience comprehensive grooming services including hair styling,
            <br />
            skin care treatments, waxing, and bridal makeup.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Button variant="primary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              View Services
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Appointment
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="floating-element floating-1"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-element floating-2"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Hero;
