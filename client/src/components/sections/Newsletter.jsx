import { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Success
    toast.success('Welcome to the Inner Circle! Check your inbox for your 15% off code ✨', {
      duration: 4000,
      style: {
        background: 'var(--color-rose-gold)',
        color: 'white',
        fontWeight: '500'
      }
    });
    
    setEmail('');
  };

  return (
    <>
      <Toaster position="top-center" />
      <section className="newsletter section" id="newsletter">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="newsletter-text">
              <motion.h2
                className="newsletter-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Join the Inner Circle
              </motion.h2>
              <motion.p
                className="newsletter-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Get 15% off your first order + exclusive beauty tips
              </motion.p>
            </div>

            <motion.form
              className="newsletter-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <motion.button
                  type="submit"
                  className="newsletter-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
              
              <div className="newsletter-benefits">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Early access to new launches</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Exclusive member-only offers</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Expert skincare advice</span>
                </div>
              </div>

              <p className="newsletter-note">
                No spam, just glow. Unsubscribe anytime.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
