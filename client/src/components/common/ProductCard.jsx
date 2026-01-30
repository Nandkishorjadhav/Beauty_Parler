import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView, onWishlist }) => {
  const { 
    id, 
    name, 
    price, 
    image, 
    altImage, 
    rating, 
    reviewCount, 
    badge,
    category 
  } = product;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < fullStars ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {badge && (
        <div className="product-badge">
          <span className={`badge ${badge === 'New' ? 'badge-new' : ''}`}>
            {badge}
          </span>
        </div>
      )}

      <div className="product-image-container">
        <motion.img
          src={image}
          alt={name}
          className="product-image"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        
        {altImage && (
          <img
            src={altImage}
            alt={`${name} alternate view`}
            className="product-image-alt"
            loading="lazy"
          />
        )}

        <div className="product-overlay">
          <div className="product-actions">
            <button
              onClick={() => onQuickView && onQuickView(product)}
              className="btn-secondary btn-small"
            >
              Quick View
            </button>
            <button
              onClick={() => onWishlist && onWishlist(id)}
              className="btn-icon btn-wishlist"
              aria-label="Add to wishlist"
            >
              ♡
            </button>
          </div>
        </div>
      </div>

      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3 className="product-name">{name}</h3>
        
        {rating && (
          <div className="product-rating">
            <div className="stars">
              {renderStars(rating)}
            </div>
            {reviewCount && (
              <span className="review-count">({reviewCount})</span>
            )}
          </div>
        )}

        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    altImage: PropTypes.string,
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    badge: PropTypes.string,
    category: PropTypes.string
  }).isRequired,
  onQuickView: PropTypes.func,
  onWishlist: PropTypes.func
};

export default ProductCard;
