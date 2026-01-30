import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 🔹 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <Toaster position="top-center" />

      <motion.header
        className={`header ${scrolled ? 'header-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="header-container">

          {/* Logo */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#home">
              <h1 className="logo-text">LUMIÈRE</h1>
              <p className="logo-tagline">Beauty Atelier</p>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Header Icons */}
          <div className="header-icons">

            {/* Search */}
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() =>
                toast('Search feature coming soon! 🔍', {
                  icon: '🔍',
                  duration: 2000
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Wishlist */}
            <button
              className="icon-btn"
              aria-label="Wishlist"
              onClick={() =>
                toast.success('View your wishlist! ♡', {
                  duration: 2000,
                  style: {
                    background: 'var(--color-rose-gold)',
                    color: 'white'
                  }
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* Booking */}
            <button
              className="icon-btn"
              aria-label="Booking"
              onClick={() =>
                toast('View your bookings 📅', {
                  icon: '📅',
                  duration: 2000
                })
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
