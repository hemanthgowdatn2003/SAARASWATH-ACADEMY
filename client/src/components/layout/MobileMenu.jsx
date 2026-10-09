import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, ChevronDown, Phone, Mail, Lock, BookOpen, GraduationCap, FileText, Sparkles, Trophy, Users, Image as ImageIcon } from 'lucide-react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';
import { getAssetUrl } from '../../utils/helpers';

export const MobileMenu = ({ isOpen, onClose }) => {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Support keyboard navigation (Close on Escape key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        backdropFilter: 'blur(4px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '88%',
          maxWidth: '350px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          boxShadow: '-8px 0 28px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.25rem 1.15rem',
          overflowY: 'auto',
          animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header: Academy Branding & Close Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {!logoError ? (
              <img
                src={getAssetUrl('/images/logo/academy-logo-tight.png')}
                alt="Saaraswath Academy Logo"
                style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block' }}
                onError={() => setLogoError(true)}
              />
            ) : (
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: 'var(--color-gold, #E9AE20)',
                  color: 'var(--color-deep-navy, #173568)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1rem'
                }}
              >
                SA
              </div>
            )}
            <div>
              <span
                style={{
                  fontWeight: 800,
                  color: 'var(--color-deep-navy, #173568)',
                  fontSize: '1.15rem',
                  letterSpacing: '-0.02em',
                  display: 'block',
                  lineHeight: 1.1
                }}
              >
                SAARASWATH
              </span>
              <div
                style={{
                  fontSize: '0.66rem',
                  color: 'var(--color-gold, #E9AE20)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                IAS / KAS ACADEMY
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Primary Action Button inside Drawer */}
        <Link
          to="/admissions"
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-gold, #E9AE20)',
            color: 'var(--color-deep-navy, #173568)',
            fontWeight: 800,
            fontSize: '0.94rem',
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(233, 174, 32, 0.3)',
            minHeight: '44px'
          }}
        >
          <Sparkles size={16} style={{ marginRight: '0.45rem' }} /> Enroll Now / Admissions
        </Link>

        {/* Main Navigation Links with comfortable 44px+ touch targets */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '1.25rem' }}>
          {/* 1. Home */}
          <NavLink
            to="/"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.7rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.94rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            Home
          </NavLink>

          {/* 2. About Us */}
          <NavLink
            to="/about"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.7rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.94rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            About Us
          </NavLink>

          {/* 3. Courses (Expandable: UPSC Preparation, KAS Preparation) */}
          <div>
            <button
              type="button"
              onClick={() => setCoursesOpen(p => !p)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.7rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.94rem',
                fontWeight: 600,
                color: 'var(--color-deep-navy, #173568)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                minHeight: '44px'
              }}
            >
              <span>Courses</span>
              <ChevronDown
                size={17}
                style={{
                  transform: coursesOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                  color: '#64748b'
                }}
              />
            </button>
            {coursesOpen && (
              <div
                style={{
                  paddingLeft: '0.75rem',
                  borderLeft: '2px solid var(--color-gold, #E9AE20)',
                  margin: '0.2rem 0 0.4rem 0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                <NavLink
                  to="/courses"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 0.5rem',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    minHeight: '40px'
                  }}
                >
                  All Academic Programs
                </NavLink>
                <NavLink
                  to="/upsc"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 0.5rem',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    minHeight: '40px'
                  }}
                >
                  <GraduationCap size={16} color="var(--color-primary-blue, #2457A7)" />
                  UPSC Preparation (CSE)
                </NavLink>
                <NavLink
                  to="/kas"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 0.5rem',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    minHeight: '40px'
                  }}
                >
                  <FileText size={16} color="var(--color-gold, #E9AE20)" />
                  KAS Preparation (KPSC)
                </NavLink>
              </div>
            )}
          </div>

          {/* 4. Study Materials (Expandable) */}
          <div>
            <button
              type="button"
              onClick={() => setMaterialsOpen(p => !p)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.7rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.94rem',
                fontWeight: 600,
                color: 'var(--color-deep-navy, #173568)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                minHeight: '44px'
              }}
            >
              <span>Study Materials</span>
              <ChevronDown
                size={17}
                style={{
                  transform: materialsOpen ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s ease',
                  color: '#64748b'
                }}
              />
            </button>
            {materialsOpen && (
              <div
                style={{
                  paddingLeft: '0.75rem',
                  borderLeft: '2px solid var(--color-primary-blue, #2457A7)',
                  margin: '0.2rem 0 0.4rem 0.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}
              >
                <NavLink
                  to="/study-materials"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 0.5rem',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    minHeight: '40px'
                  }}
                >
                  <BookOpen size={16} color="var(--color-primary-blue, #2457A7)" />
                  All Materials
                </NavLink>
                <NavLink
                  to="/study-materials?type=Question+Paper"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 0.5rem',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    minHeight: '40px'
                  }}
                >
                  Previous Year Papers
                </NavLink>
                <NavLink
                  to="/study-materials?type=Study+Notes"
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 0.5rem',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    textDecoration: 'none',
                    minHeight: '40px'
                  }}
                >
                  Core Study Notes
                </NavLink>
              </div>
            )}
          </div>

          {/* 5. Faculty */}
          <NavLink
            to="/faculty"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.7rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.94rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            Faculty
          </NavLink>

          {/* 6. Achievements */}
          <NavLink
            to="/achievements"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.7rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.94rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            Achievements
          </NavLink>

          {/* 7. Gallery */}
          <NavLink
            to="/gallery"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.7rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.94rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            Gallery
          </NavLink>

          {/* 8. Contact */}
          <NavLink
            to="/contact"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.7rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.94rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center'
            })}
          >
            Contact
          </NavLink>
        </nav>

        {/* Bottom Drawer Actions */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
          <a
            href="https://wa.me/917619415566"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.92rem',
              padding: '0.7rem',
              borderRadius: '8px',
              marginBottom: '0.85rem',
              textDecoration: 'none',
              minHeight: '44px'
            }}
            onClick={onClose}
          >
            Chat on WhatsApp (+91 7619415566)
          </a>

          <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Phone size={14} color="var(--color-primary-blue, #2457A7)" />
              <a href={`tel:${ACADEMY_INFO.phoneNumbers[0]}`} style={{ color: 'inherit', textDecoration: 'none' }}>+91 {ACADEMY_INFO.phoneNumbers[0]}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Mail size={14} color="var(--color-primary-blue, #2457A7)" />
              <a href={`mailto:${ACADEMY_INFO.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{ACADEMY_INFO.email}</a>
            </div>
            <div style={{ marginTop: '0.35rem' }}>
              <NavLink to="/admin/login" onClick={onClose} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', fontSize: '0.75rem', textDecoration: 'none' }}>
                <Lock size={12} /> Admin Portal
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
