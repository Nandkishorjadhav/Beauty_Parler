import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: ['Hair Care', 'Skin Care', 'Waxing', 'Bridal Makeup', 'Party Makeup'],
    about: ['Our Story', 'Our Team', 'Contact Us'],
    support: ['FAQ', 'Booking', 'Location']
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '👍', url: '#' },
    { name: 'Pinterest', icon: '📌', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="footer-logo">LUMIÈRE</h2>
          <p className="footer-tagline">Beauty Atelier</p>
          <p className="footer-description">
            Your destination for premium beauty services and personalized care.
          </p>
        </motion.div>

        {/* Links Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            {footerLinks.services.map((link) => (
              <a key={link} href="#services" className="footer-link">
                {link}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3 className="footer-title">About</h3>
            {footerLinks.about.map((link) => (
              <a key={link} href="#about" className="footer-link">
                {link}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            {footerLinks.support.map((link) => (
              <a key={link} href="#contact" className="footer-link">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="footer-newsletter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="footer-title">Book an Appointment 📅</h3>
          <p className="newsletter-text">
            Get in touch for your beauty transformation
          </p>
          <form className="newsletter-form">
            <input
              type="text"
              placeholder="Your email or phone"
              className="newsletter-input"
              aria-label="Contact information"
            />
            <button type="submit" className="newsletter-btn">
              Book Now
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <div className="footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="social-icon"
                aria-label={social.name}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="social-emoji">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} Lumière Beauty Salon. All rights reserved.</p>
            <div className="legal-links">
              <span>📞 +91-XXXX-XXXXXX</span>
              <span className="separator">•</span>
              <span>📍 Your Location</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
