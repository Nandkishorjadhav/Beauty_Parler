import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  icon = false,
  ...props 
}) => {
  const baseClass = icon ? 'btn-icon' : 'btn';
  const variantClass = icon ? '' : `btn-${variant}`;
  
  return (
    <motion.button
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
      whileHover={{ scale: icon ? 1.1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.bool
};

export default Button;
