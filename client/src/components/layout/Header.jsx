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


  const serviceLinks = [
    { name: 'Hair Care', href: '#hair-care' },
    { name: 'Skin Care', href: '#skin-care' },
    { name: 'Waxing', href: '#waxing' },
    { name: 'Bridal Makeup', href: '#bridal-makeup' },
    { name: 'Party Makeup', href: '#party-makeup' }
  ];

  const navItems = [
    { name: 'Services', href: '#services', dropdown: serviceLinks },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Dropdown state for mobile
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968) {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              item.dropdown ? (
                <div className="nav-link nav-dropdown" key={item.name} tabIndex={0}>
                  {item.name}
                  <div className="dropdown-content">
                    {item.dropdown.map((sub, i) => (
                      <a key={sub.name} href={sub.href} className="dropdown-link">
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
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
              )
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
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
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
            <motion.nav
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map(item => (
                item.dropdown ? (
                  <div key={item.name} className="mobile-nav-link mobile-dropdown">
                    <button
                      className="mobile-dropdown-btn"
                      onClick={() => setServicesDropdownOpen(open => !open)}
                      aria-expanded={servicesDropdownOpen}
                    >
                      {item.name}
                    </button>
                    {servicesDropdownOpen && (
                      <div className="mobile-dropdown-content">
                        {item.dropdown.map(sub => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="mobile-dropdown-link"
                            onClick={e => {
                              setMobileMenuOpen(false);
                              setServicesDropdownOpen(false);
                              // Smooth scroll
                              if (sub.href.startsWith('#')) {
                                const el = document.querySelector(sub.href);
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={e => {
                      setMobileMenuOpen(false);
                      // Smooth scroll
                      if (item.href.startsWith('#')) {
                        const el = document.querySelector(item.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
