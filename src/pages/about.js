'use client';

import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  const values = [
    { title: "Community", description: "Building strong connections among health science students" },
    { title: "Innovation", description: "Promoting new ideas and approaches in healthcare" },
    { title: "Leadership", description: "Developing tomorrow's healthcare leaders" },
    { title: "Excellence", description: "Striving for the highest standards in everything we do" }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <section className="section-container page-section">
          <h2 className="section-title">About Us</h2>
          
          <div className="about-intro">
            <p className="intro-text">
              The AESS Health Science Student Association is a dynamic community dedicated to enriching the academic and professional lives of health science students at our university. Founded in 2020, we&apos;ve grown to become one of the most active student organizations on campus.
            </p>
          </div>

          <h3 className="subsection-title">Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="get-involved-section">
            <h3 className="subsection-title">Get Involved</h3>
            <p className="involvement-text">
              We welcome all health science students to join our community. Whether you&apos;re interested in leadership opportunities, professional development, or simply wanting to connect with fellow students, there&apos;s a place for you here.
            </p>
            <button className="button-primary">Join Today</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}