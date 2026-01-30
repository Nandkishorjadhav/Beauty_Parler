import { motion } from 'framer-motion';
import './BeautyGallery.css';

const BeautyGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
      title: 'Bridal Makeup',
      time: '3-4 hours',
      category: 'Makeup'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
      title: 'Hair Styling',
      time: '1-2 hours',
      category: 'Hair Care'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
      title: 'Facial Treatment',
      time: '45-60 mins',
      category: 'Skin Care'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
      title: 'Nail Art',
      time: '30-45 mins',
      category: 'Nail Care'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600',
      title: 'Hair Spa',
      time: '1-1.5 hours',
      category: 'Hair Care'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600',
      title: 'Waxing Services',
      time: '30-90 mins',
      category: 'Body Care'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1549891117-667d82c1baee?w=600',
      title: 'Party Makeup',
      time: '1-2 hours',
      category: 'Makeup'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600',
      title: 'Hair Coloring',
      time: '2-3 hours',
      category: 'Hair Care'
    }
  ];

  return (
    <section className="beauty-gallery" id="gallery">
      <div className="gallery-container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="gallery-title">Our Work Gallery</h2>
          <p className="gallery-subtitle">Experience the artistry behind every service</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="gallery-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <span className="gallery-category">{item.category}</span>
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <div className="gallery-time">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyGallery;
