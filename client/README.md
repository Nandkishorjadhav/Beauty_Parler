# Lumière Beauty - Luxury Beauty Products Portfolio Website

A stunning, museum-quality luxury beauty products portfolio website built with React, featuring elegant animations, smooth interactions, and a sophisticated design inspired by premium beauty brands like Chanel, La Mer, and Charlotte Tilbury.

![Lumière Beauty](https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop)

## ✨ Features

### Design & Aesthetics
- **Luxury Design Language**: Classic luxury color palette with rose gold accents
- **Premium Typography**: Playfair Display (serif) and Montserrat (sans-serif)
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **Responsive Design**: Fully responsive across all devices
- **Elegant Micro-interactions**: Hover effects, transitions, and scroll animations

### Sections
1. **Hero Section**: Full-screen hero with animated content and floating elements
2. **Featured Collections**: Swiper carousel showcasing curated product collections
3. **Product Gallery**: Interactive product grid with category filtering and quick view
4. **Brand Story**: About section with values and company mission
5. **Testimonials**: Customer reviews carousel with ratings and statistics
6. **Newsletter**: Email subscription with form validation and toast notifications
7. **Premium Footer**: Comprehensive footer with links, social media, and newsletter

### Key Functionalities
- **Product Filtering**: Filter products by category (All, Skincare, Makeup, Haircare, etc.)
- **Quick View Modal**: View product details without leaving the page
- **Wishlist Feature**: Add products to wishlist (UI ready)
- **Newsletter Subscription**: Email validation with success notifications
- **Smooth Scrolling**: Navigate between sections smoothly
- **Loading States**: Skeleton loaders and optimized image loading

## 🛠️ Tech Stack

### Core
- **React 18+** - Modern React with hooks
- **Vite** - Lightning-fast build tool and dev server
- **JavaScript** - Clean, modern ES6+ code

### Libraries & Packages
- **Framer Motion** - Advanced animations and transitions
- **Swiper.js** - Touch-enabled carousels and sliders
- **React Hot Toast** - Beautiful toast notifications
- **Prop Types** - Runtime type checking for React props

### Styling
- **Plain CSS** - Custom CSS with CSS variables
- **CSS Custom Properties** - Design tokens for consistency
- **CSS Grid & Flexbox** - Modern layout techniques

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (20.19+ or 22.12+ recommended for Vite)
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
client/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── common/        # Reusable components
│   │   │   ├── Button.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── layout/        # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/      # Page sections
│   │       ├── Hero.jsx
│   │       ├── FeaturedCollections.jsx
│   │       ├── ProductGallery.jsx
│   │       ├── BrandStory.jsx
│   │       ├── Testimonials.jsx
│   │       └── Newsletter.jsx
│   ├── data/              # Mock data
│   │   ├── products.js
│   │   ├── collections.js
│   │   └── testimonials.js
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global utility styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & design tokens
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
```css
--color-primary: #FFFFFF       /* Pure White */
--color-cream: #FAF9F6         /* Warm Cream */
--color-rose-gold: #B76E79     /* Rose Gold (Accent) */
--color-champagne: #F4E4C1     /* Champagne Gold */
--color-charcoal: #2C2C2C      /* Charcoal (Text) */
--color-soft-black: #1A1A1A    /* Soft Black */
--color-pearl: #E8E8E8         /* Pearl Gray */
```

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Montserrat (Sans-serif)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

### Spacing Scale
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 2rem     /* 32px */
--spacing-lg: 4rem     /* 64px */
--spacing-xl: 6rem     /* 96px */
```

## 🎭 Key Components

### ProductCard
- Image hover effects with alternate view
- Quick view and wishlist actions
- Rating display with stars
- Category and price information

### Header
- Fixed header with scroll detection
- Mobile-responsive navigation
- Search, wishlist, and cart icons
- Smooth scroll navigation

### Hero Section
- Full-screen background image
- Animated text content
- CTA buttons
- Scroll indicator
- Floating decorative elements

### Product Gallery
- Category filtering with smooth transitions
- Grid layout (responsive)
- Quick view modal
- Product details with benefits and ingredients

### Newsletter
- Email validation
- Toast notifications
- Responsive form layout
- Benefits display

## 📱 Responsive Breakpoints

```css
Mobile: < 480px
Tablet: 480px - 768px
Desktop: 768px - 1024px
Large Desktop: > 1024px
```

## ⚡ Performance Optimizations

- Lazy loading images with native `loading="lazy"`
- Optimized animations with Framer Motion
- Code splitting ready
- Optimized bundle size
- Smooth 60fps animations
- Reduced motion support for accessibility

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Color contrast compliance
- Screen reader friendly

## 🎯 Future Enhancements

### Phase 2 Features
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product search
- [ ] Advanced filtering (price, rating, etc.)
- [ ] Product comparison
- [ ] Wishlist persistence
- [ ] User reviews and ratings
- [ ] Backend integration

### Advanced Features
- [ ] AR Virtual Try-On
- [ ] AI Skin Analysis
- [ ] Subscription service
- [ ] Loyalty/Rewards program
- [ ] Live chat support
- [ ] Multi-currency support
- [ ] Blog/Beauty guide
- [ ] Affiliate program

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License.

## 👥 Credits

### Design Inspiration
- Chanel Beauty
- La Mer
- Charlotte Tilbury
- Glossier
- The Ordinary

### Images
- Unsplash (Product and hero images)
- RandomUser.me (Testimonial avatars)

### Fonts
- Google Fonts (Playfair Display, Montserrat)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with 💛 by a passionate developer**

*Where Science Meets Beauty* ✨
