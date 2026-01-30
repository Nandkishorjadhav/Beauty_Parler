import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: ['Products', 'Collections', 'Best Sellers', 'Gift Sets', 'New Arrivals'],
    about: ['Our Story', 'Ingredients', 'Sustainability', 'Press', 'Careers'],
    support: ['FAQ', 'Shipping', 'Returns', 'Contact', 'Size Guide']
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '👍', url: '#' },
    { name: 'Pinterest', icon: '📌', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' }
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
          <p className="footer-tagline">Where science meets beauty</p>
          <p className="footer-description">
            Discover clean, science-backed beauty products crafted with the finest ingredients. 
            Elevate your beauty ritual with our luxurious collection.
          </p>
        </motion.div>

        {/* Links Sections */}
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-title">Shop</h3>
            {footerLinks.shop.map((link) => (
              <a key={link} href="#" className="footer-link">
                {link}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3 className="footer-title">About</h3>
            {footerLinks.about.map((link) => (
              <a key={link} href="#" className="footer-link">
                {link}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            {footerLinks.support.map((link) => (
              <a key={link} href="#" className="footer-link">
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
          <h3 className="footer-title">Stay in the Glow ✨</h3>
          <p className="newsletter-text">
            Get 15% off your first order + exclusive beauty tips
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
          <p className="newsletter-note">No spam, just glow.</p>
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
          <div className="payment-icons">
            <span className="payment-text">We Accept:</span>
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>💳 Amex</span>
            <span>💳 PayPal</span>
          </div>

          <div className="footer-legal">
            <p>&copy; {currentYear} Lumière Beauty. All rights reserved.</p>
            <div className="legal-links">
              <a href="#" className="legal-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#" className="legal-link">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#" className="legal-link">Cookies</a>
            </div>
          </div>

          <p className="footer-made">Made with 💛 in California</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
