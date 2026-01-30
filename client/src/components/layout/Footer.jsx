import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '👍', url: '#' },
    { name: 'Pinterest', icon: '📌', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
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
          </motion.div>

          {/* Quick Links */}
          <div className="footer-links">
            <a href="#services" className="footer-link">Services</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="social-icon"
                aria-label={social.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Lumière Beauty Salon. All rights reserved.</p>
          <div className="footer-contact">
            <span>📞 +91-XXXX-XXXXXX</span>
            <span className="separator">•</span>
            <span>📍 Your Location</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
