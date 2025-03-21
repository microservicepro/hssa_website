'use client';

import "../styles/globals.css";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero";
import HealthFactsCarousel from "../components/HealthFactsCarousel";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <HeroSection />
      <main className="main-content">
        <section className="section-container">
          <div className="feature-grid">
            <div className="feature-card hover-lift" style={{ animationDelay: '100ms' }}>
              <h3 className="feature-title">Our Mission</h3>
              <p className="feature-text">To create a supportive community that fosters academic excellence and professional growth for health science students.</p>
            </div>
            <div className="feature-card hover-lift" style={{ animationDelay: '200ms' }}>
              <h3 className="feature-title">Our Vision</h3>
              <p className="feature-text">To be the leading student organization that empowers the next generation of healthcare professionals.</p>
            </div>
            <div className="feature-card hover-lift" style={{ animationDelay: '300ms' }}>
              <h3 className="feature-title">Get Involved</h3>
              <p className="feature-text">Join our community of passionate students and make a difference in healthcare education.</p>
              <button className="button-primary feature-button">Join Now</button>
            </div>
          </div>
          
          {/* Add our interactive health facts carousel */}
          <HealthFactsCarousel />
        </section>
      </main>
      <Footer />
    </div>
  );
}
<div className="slideshow">
  <img src="/images/community1.jpg" alt="Community Image 1" />
  <img src="/images/community2.jpg" alt="Community Image 2" />
  <img src="/images/community3.jpg" alt="Community Image 3" />
  <img src="/images/community4.jpg" alt="Community Image 4" />
</div>
