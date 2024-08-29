import React from 'react';
import { Features, Feedbacks, Footer, HeroSection, Navbar, ProductDescription, Products, WhyChooseUs } from './components';
import { video, videoBg } from './assets';

const App = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={videoBg} 
          autoPlay
          loop
          muted
        />
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Features section */}
      <ProductDescription />
      <Products />
      <WhyChooseUs />
      <Feedbacks />
      <Footer />
    </div>
  );
};

export default App;
