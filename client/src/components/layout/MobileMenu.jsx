import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, Mail, Lock, ChevronDown, BookOpen, GraduationCap, FileText, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';
import { getAssetUrl } from '../../utils/helpers';

export const MobileMenu = ({ isOpen, onClose }) => {
  const [examOpen, setExamOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(23, 53, 104, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '86%',
          maxWidth: '360px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          boxShadow: '-8px 0 28px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 1.25rem',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header: Logo & Close Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src={getAssetUrl('/images/logo/academy-logo-tight.png')}
              alt="Saaraswath Academy Logo"
              style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
            />
            <div>
              <span style={{ fontWeight: 800, color: 'var(--color-deep-navy, #173568)', fontSize: '1.18rem', letterSpacing: '-0.02em', display: 'block' }}>
                SAARASWATH
              </span>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-gold, #E9AE20)', fontWeight: 700, letterSpacing: '0.08em' }}>
                IAS / KAS ACADEMY • MYSURU
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', color: '#64748b' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Primary CTA for mobile */}
        <Link
          to="/admissions"
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-primary-700, #2457A7)',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '0.95rem',
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(36, 87, 167, 0.25)'
          }}
        >
          Enroll Now / Admission Enquiry
        </Link>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem' }}>
          <NavLink
            to="/"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
            })}
          >
            About Us
          </NavLink>

          <NavLink
            to="/courses"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
            })}
          >
            Courses
          </NavLink>

          {/* Exam Preparation Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setExamOpen(p => !p)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--color-deep-navy, #173568)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>Exam Preparation</span>
              <ChevronDown size={16} style={{ transform: examOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {examOpen && (
              <div style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--color-gold, #E9AE20)', margin: '0.2rem 0 0.4rem 0.85rem' }}>
                <NavLink
                  to="/upsc"
                  onClick={onClose}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', fontSize: '0.88rem', color: '#1e293b', textDecoration: 'none' }}
                >
                  UPSC CSE (Civil Services)
                </NavLink>
                <NavLink
                  to="/kas"
                  onClick={onClose}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', fontSize: '0.88rem', color: '#1e293b', textDecoration: 'none' }}
                >
                  KPSC KAS (Gazetted Probationers)
                </NavLink>
              </div>
            )}
          </div>

          {/* Study Materials Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMaterialsOpen(p => !p)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.6rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--color-deep-navy, #173568)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>Study Materials</span>
              <ChevronDown size={16} style={{ transform: materialsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {materialsOpen && (
              <div style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--color-primary-blue, #2457A7)', margin: '0.2rem 0 0.4rem 0.85rem' }}>
                <NavLink
                  to="/study-materials"
                  onClick={onClose}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', fontSize: '0.88rem', color: '#1e293b', textDecoration: 'none' }}
                >
                  All Study Materials
                </NavLink>
                <NavLink
                  to="/study-materials?type=Question+Paper"
                  onClick={onClose}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', fontSize: '0.88rem', color: '#1e293b', textDecoration: 'none' }}
                >
                  Previous Year Papers
                </NavLink>
                <NavLink
                  to="/study-materials?type=Study+Notes"
                  onClick={onClose}
                  style={{ display: 'block', padding: '0.45rem 0.5rem', fontSize: '0.88rem', color: '#1e293b', textDecoration: 'none' }}
                >
                  Core Study Notes
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/faculty"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
            })}
          >
            Faculty
          </NavLink>

          <NavLink
            to="/achievements"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
            })}
          >
            Achievers
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
            })}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={onClose}
            style={({ isActive }) => ({
              padding: '0.6rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--color-primary-blue, #2457A7)' : 'var(--color-deep-navy, #173568)',
              backgroundColor: isActive ? '#F3F8FF' : 'transparent',
              textDecoration: 'none',
            })}
          >
            Contact
          </NavLink>
        </nav>

        {/* Bottom Drawer Actions */}
        <div style={{ marginTop: 'auto', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
          <a
            href={getWhatsAppLink()}
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
              fontSize: '0.9rem',
              padding: '0.65rem',
              borderRadius: '8px',
              marginBottom: '0.75rem',
              textDecoration: 'none'
            }}
            onClick={onClose}
          >
            Chat on WhatsApp
          </a>

          <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Phone size={13} color="var(--color-primary-blue, #2457A7)" />
              <a href={`tel:${ACADEMY_INFO.phoneNumbers[0]}`} style={{ color: 'inherit' }}>+91 {ACADEMY_INFO.phoneNumbers[0]}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Mail size={13} color="var(--color-primary-blue, #2457A7)" />
              <a href={`mailto:${ACADEMY_INFO.email}`} style={{ color: 'inherit' }}>{ACADEMY_INFO.email}</a>
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <NavLink to="/admin/login" onClick={onClose} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', fontSize: '0.75rem' }}>
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
