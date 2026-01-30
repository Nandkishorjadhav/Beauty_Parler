import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../common/ProductCard';
import { products, categories } from '../../data/products';
import './ProductGallery.css';

const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const handleWishlist = (productId) => {
    console.log('Added to wishlist:', productId);
    // Toast notification would go here
  };

  return (
    <section className="product-gallery section" id="products">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Collection</h2>
          <p className="section-subtitle">
            Explore our curated selection of luxury beauty essentials
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
              <span className="category-count">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="products-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard
                  product={product}
                  onQuickView={handleQuickView}
                  onWishlist={handleWishlist}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            className="no-products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No products found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && selectedProduct && (
          <motion.div
            className="quick-view-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQuickView(false)}
          >
            <motion.div
              className="quick-view-modal"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setShowQuickView(false)}
              >
                ✕
              </button>

              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>

                <div className="modal-info">
                  <p className="modal-category">{selectedProduct.category}</p>
                  <h2 className="modal-title">{selectedProduct.name}</h2>
                  
                  {selectedProduct.rating && (
                    <div className="modal-rating">
                      <div className="stars">
                        {'★'.repeat(Math.floor(selectedProduct.rating))}
                        {'☆'.repeat(5 - Math.floor(selectedProduct.rating))}
                      </div>
                      <span className="review-count">
                        ({selectedProduct.reviewCount} reviews)
                      </span>
                    </div>
                  )}

                  <p className="modal-price">${selectedProduct.price.toFixed(2)}</p>
                  <p className="modal-description">{selectedProduct.description}</p>

                  {selectedProduct.benefits && (
                    <div className="modal-benefits">
                      <h3>Key Benefits</h3>
                      <ul>
                        {selectedProduct.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProduct.ingredients && (
                    <div className="modal-ingredients">
                      <h3>Star Ingredients</h3>
                      <div className="ingredient-tags">
                        {selectedProduct.ingredients.map((ingredient, index) => (
                          <span key={index} className="ingredient-tag">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="modal-actions">
                    <button className="btn btn-primary">Add to Cart</button>
                    <button className="btn-icon" onClick={() => handleWishlist(selectedProduct.id)}>
                      ♡
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductGallery;
