'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path ? 'active-link' : '';
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/" className="logo-link">
            <span className="logo-icon">
              A
            </span>
            AESS HSSA
          </Link>
        </div>
        <div className="navbar-links">
          <Link 
            href="/" 
            className={`nav-link ${isActive('/')}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`nav-link ${isActive('/about')}`}
          >
            About
          </Link>
          <Link 
            href="/events" 
            className={`nav-link ${isActive('/events')}`}
          >
            Events
          </Link>
          <Link 
            href="/contact" 
            className={`nav-link ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}


