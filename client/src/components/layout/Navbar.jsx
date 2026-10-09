import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, BookOpen, GraduationCap, FileText, Trophy, Image, Sparkles } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { getAssetUrl } from '../../utils/helpers';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown on route change
  useEffect(() => {
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isMoreActive = [
    '/study-materials',
    '/upsc',
    '/kas',
    '/achievements',
    '/gallery',
    '/admissions'
  ].includes(location.pathname);

  return (
    <>
      <header
        className="navbar-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: 'var(--color-deep-navy, #173568)',
          boxShadow: '0 4px 18px rgba(23, 53, 104, 0.25)',
          borderBottom: '3px solid var(--color-gold, #E9AE20)'
        }}
      >
        <div
          className="container main-navbar-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.65rem 1.5rem',
            gap: '1.25rem',
            minHeight: '74px'
          }}
        >
          {/* Left: Official Academy Emblem & Typography */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <div style={{ height: '62px', display: 'flex', alignItems: 'center' }}>
              <img
                src={getAssetUrl('/images/logo/academy-logo-tight.png')}
                alt="Saaraswath IAS/KAS Academy Official Logo"
                style={{
                  height: '62px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: '1.38rem',
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  display: 'block',
                  lineHeight: 1.15,
                  whiteSpace: 'nowrap'
                }}
              >
                SAARASWATH
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--color-gold, #E9AE20)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'block',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap'
                }}
              >
                IAS / KAS ACADEMY • MYSURU
              </span>
            </div>
          </Link>

          {/* Center: Simplified, user-friendly navigation with dropdown at the very last */}
          <nav
            className="desktop-nav-menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap'
            }}
          >
            {/* 1. Home */}
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-gold, #E9AE20)' : '#FFFFFF',
                padding: '0.4rem 0.2rem',
                borderBottom: isActive ? '2px solid var(--color-gold, #E9AE20)' : '2px solid transparent',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              })}
            >
              Home
            </NavLink>

            {/* 2. About Us */}
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-gold, #E9AE20)' : '#FFFFFF',
                padding: '0.4rem 0.2rem',
                borderBottom: isActive ? '2px solid var(--color-gold, #E9AE20)' : '2px solid transparent',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              })}
            >
              About Us
            </NavLink>

            {/* 3. Courses */}
            <NavLink
              to="/courses"
              style={({ isActive }) => ({
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-gold, #E9AE20)' : '#FFFFFF',
                padding: '0.4rem 0.2rem',
                borderBottom: isActive ? '2px solid var(--color-gold, #E9AE20)' : '2px solid transparent',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              })}
            >
              Courses
            </NavLink>

            {/* 4. Faculty */}
            <NavLink
              to="/faculty"
              style={({ isActive }) => ({
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-gold, #E9AE20)' : '#FFFFFF',
                padding: '0.4rem 0.2rem',
                borderBottom: isActive ? '2px solid var(--color-gold, #E9AE20)' : '2px solid transparent',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              })}
            >
              Faculty
            </NavLink>

            {/* 5. Contact */}
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-gold, #E9AE20)' : '#FFFFFF',
                padding: '0.4rem 0.2rem',
                borderBottom: isActive ? '2px solid var(--color-gold, #E9AE20)' : '2px solid transparent',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              })}
            >
              Contact
            </NavLink>

            {/* 6. Dropdown AT THE LAST: More Resources */}
            <div
              ref={dropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(p => !p)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: isMoreActive ? 700 : 500,
                  color: isMoreActive ? 'var(--color-gold, #E9AE20)' : '#FFFFFF',
                  padding: '0.4rem 0.2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  borderBottom: isMoreActive ? '2px solid var(--color-gold, #E9AE20)' : '2px solid transparent',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>More</span>
                <ChevronDown
                  size={15}
                  color={isMoreActive ? 'var(--color-gold, #E9AE20)' : '#FFFFFF'}
                  style={{
                    transform: moreDropdownOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </button>

              {moreDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
                    border: '1px solid #cbd5e1',
                    borderTop: '3px solid var(--color-gold, #E9AE20)',
                    padding: '0.65rem 0',
                    minWidth: '260px',
                    zIndex: 1100,
                    animation: 'fadeIn 0.18s ease-out'
                  }}
                >
                  {/* Study Materials */}
                  <NavLink
                    to="/study-materials"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-navy, #173568)',
                      textDecoration: 'none',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F3F8FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <BookOpen size={18} color="var(--color-primary-blue, #2457A7)" />
                    <div>
                      <div style={{ lineHeight: 1.2 }}>Study Materials</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 400 }}>Question papers & revision notes</div>
                    </div>
                  </NavLink>

                  {/* Exam Preparation: UPSC CSE */}
                  <NavLink
                    to="/upsc"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-navy, #173568)',
                      textDecoration: 'none',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F3F8FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <GraduationCap size={18} color="var(--color-primary-blue, #2457A7)" />
                    <div>
                      <div style={{ lineHeight: 1.2 }}>UPSC CSE Program</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 400 }}>Civil Services Examination</div>
                    </div>
                  </NavLink>

                  {/* Exam Preparation: KPSC KAS */}
                  <NavLink
                    to="/kas"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-navy, #173568)',
                      textDecoration: 'none',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F3F8FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <FileText size={18} color="var(--color-gold, #E9AE20)" />
                    <div>
                      <div style={{ lineHeight: 1.2 }}>KPSC KAS Program</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 400 }}>Gazetted Probationers Exam</div>
                    </div>
                  </NavLink>

                  {/* Achievers */}
                  <NavLink
                    to="/achievements"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-navy, #173568)',
                      textDecoration: 'none',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F3F8FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <Trophy size={18} color="var(--color-gold, #E9AE20)" />
                    <div>
                      <div style={{ lineHeight: 1.2 }}>Top Achievers</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 400 }}>Rank holders & officer alumni</div>
                    </div>
                  </NavLink>

                  {/* Campus Gallery */}
                  <NavLink
                    to="/gallery"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-navy, #173568)',
                      textDecoration: 'none',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F3F8FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <Image size={18} color="var(--color-primary-blue, #2457A7)" />
                    <div>
                      <div style={{ lineHeight: 1.2 }}>Campus Gallery</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 400 }}>Classrooms & workshops</div>
                    </div>
                  </NavLink>

                  {/* Admissions */}
                  <NavLink
                    to="/admissions"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-deep-navy, #173568)',
                      textDecoration: 'none',
                      borderTop: '1px solid #f1f5f9',
                      transition: 'background-color 0.15s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F3F8FF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <Sparkles size={18} color="var(--color-gold, #E9AE20)" />
                    <div>
                      <div style={{ lineHeight: 1.2 }}>Admissions & Counseling</div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 400 }}>Batch timings & guidance</div>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Clean aligned Gold Enroll Now button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
            <Link
              to="/admissions"
              className="navbar-enroll-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-gold, #E9AE20)',
                color: 'var(--color-deep-navy, #173568)',
                fontWeight: 800,
                fontSize: '0.92rem',
                padding: '0.58rem 1.4rem',
                borderRadius: '8px',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                lineHeight: 1,
                boxShadow: '0 4px 14px rgba(233, 174, 32, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d99e15';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-gold, #E9AE20)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Enroll Now
            </Link>

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-hamburger-btn"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#FFFFFF',
                padding: '0.4rem'
              }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
