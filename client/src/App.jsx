import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturedCollections from './components/sections/FeaturedCollections';
import ServicesGallery from './components/sections/ServicesGallery';
import BeautyGallery from './components/sections/BeautyGallery';
import BrandStory from './components/sections/BrandStory';
import Testimonials from './components/sections/Testimonials';
import Newsletter from './components/sections/Newsletter';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <ServicesGallery />
        <BeautyGallery />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
