import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';

export const AdmissionCTA = () => {
  return (
    <section
      className="admission-cta-section"
      style={{
        background: 'linear-gradient(135deg, var(--color-deep-navy, #173568) 0%, var(--color-primary-blue, #2457A7) 100%)',
        color: '#FFFFFF',
        padding: '3.75rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '3px solid var(--color-gold, #E9AE20)'
      }}
    >
      <div className="container text-center" style={{ maxWidth: '780px', position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(233, 174, 32, 0.2)',
            border: '1px solid var(--color-gold, #E9AE20)',
            padding: '0.35rem 1rem',
            borderRadius: 'var(--radius-full, 999px)',
            color: 'var(--color-light-gold, #FFF5D6)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '1.25rem'
          }}
        >
          <Sparkles size={14} color="var(--color-gold, #E9AE20)" /> ADMISSIONS & COUNSELING
        </div>

        <h2
          style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '0.85rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.25
          }}
        >
          Begin Your Civil Services Preparation Today
        </h2>

        <p
          style={{
            fontSize: '1.02rem',
            color: '#e2e8f0',
            maxWidth: '620px',
            margin: '0 auto 2rem',
            lineHeight: 1.65
          }}
        >
          Get in touch with our academic counselors at Kuvempunagar campus or submit an enquiry to schedule direct mentorship with <strong>{ACADEMY_INFO.founder}</strong>.
        </p>

        {/* Clean Two Primary Action Buttons */}
        <div
          className="cta-btn-row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
        >
          <Link
            to="/admissions"
            className="btn btn-gold"
            style={{
              padding: '0.75rem 1.8rem',
              fontWeight: 800,
              fontSize: '0.96rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '8px'
            }}
          >
            <span>Enquire Now</span>
            <ArrowRight size={17} />
          </Link>

          <a
            href="https://wa.me/917619415566"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.96rem',
              padding: '0.75rem 1.8rem',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
              textDecoration: 'none'
            }}
          >
            <MessageCircle size={18} />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5 }}>
          Campus: {ACADEMY_INFO.address}
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
