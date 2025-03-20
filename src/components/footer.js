'use client';

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-heading">AESS HSSA</h3>
              <p className="footer-text">Advancing Excellence in Health Sciences Through Community, Innovation, and Leadership</p>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-list">
                <li>Email: contact@aess-hssa.ca</li>
                <li>Phone: (123) 456-7890</li>
                <li>Location: Health Sciences Building</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Follow Us</h3>
              <div className="footer-social">
                <a href="#" className="footer-social-link">Twitter</a>
                <a href="#" className="footer-social-link">LinkedIn</a>
                <a href="#" className="footer-social-link">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} AESS HSSA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
