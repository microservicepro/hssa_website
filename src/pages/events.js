'use client';

import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const events = [
  {
    title: "HSSA Spring Elections",
    date: "March 21-24 2025",
  
    location: "Link in ",
    description: 
    category: "Elections"
  },
  {
    title: "Volunteer Healthcare Clinic",
    date: "April 10, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Community Center",
    description: "Gain practical experience while serving our community. Open to all health science students.",
    category: "Volunteer"
  },
  {
    title: "Research Symposium",
    date: "May 20, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "Science Complex Auditorium",
    description: "Present your research and learn from peers in this annual symposium.",
    category: "Academic"
  }
];

export default function Events() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <section className="section-container page-section">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="event-card hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="category-badge">
                  {event.category}
                </span>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-details">
                  <p className="event-date">{event.date}</p>
                  <p className="event-time">{event.time}</p>
                  <p className="event-location">{event.location}</p>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="button-primary event-button">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
