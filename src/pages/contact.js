'use client';

import { useState } from 'react';
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: 'General Inquiry', message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <section className="section-container page-section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Have questions or want to get involved? We&apos;d love to hear from you.
          </p>
          
          <div className="contact-layout">
            <div className="contact-form-container">
              <div className="card">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option>General Inquiry</option>
                      <option>Membership</option>
                      <option>Events</option>
                      <option>Volunteering</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary full-width"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="contact-info">
              <h3 className="info-title">Contact Information</h3>
              <div className="info-details">
                <p className="info-item">
                  <span className="info-label">Email:</span>
                  <a href="mailto:contact@aess-hssa.ca" className="info-link">contact@aess-hssa.ca</a>
                </p>
                <p className="info-item">
                  <span className="info-label">Phone:</span>
                  <a href="tel:+11234567890" className="info-link">(123) 456-7890</a>
                </p>
                <p className="info-address">
                  <span className="info-label">Address:</span>
                  Health Sciences Building<br />
                  123 University Avenue<br />
                  City, State 12345
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
