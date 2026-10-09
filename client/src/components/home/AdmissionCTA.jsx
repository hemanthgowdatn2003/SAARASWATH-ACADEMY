import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';

export const AdmissionCTA = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--color-deep-navy) 0%, var(--color-primary-blue) 100%)',
      color: '#FFFFFF',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '3px solid var(--color-gold)'
    }}>
      <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          backgroundColor: 'rgba(233, 174, 32, 0.2)',
          border: '1px solid var(--color-gold)',
          padding: '0.4rem 1.1rem',
          borderRadius: 'var(--radius-full)',
          color: 'var(--color-light-gold)',
          fontSize: '0.82rem',
          fontWeight: 700,
          marginBottom: '1.25rem'
        }}>
          <Sparkles size={15} color="var(--color-gold)" /> ADMISSIONS OPEN FOR NEW UPSC & KAS BATCHES
        </div>

        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FFFFFF',
          marginBottom: '1rem',
          letterSpacing: '-0.02em'
        }}>
          Begin Your Journey to the Civil Services Today
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#e2e8f0',
          maxWidth: '650px',
          margin: '0 auto 2.25rem',
          lineHeight: 1.65
        }}>
          Book an individual academic counseling session with <strong>{ACADEMY_INFO.founder}</strong> and discover your personalized blueprint for clearing civil services.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <Link to="/admissions" className="btn btn-gold btn-lg">
            Apply Online for Admission <ArrowRight size={18} />
          </Link>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg"
            style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
            }}
          >
            <MessageCircle size={20} /> Chat on WhatsApp (+91 {ACADEMY_INFO.whatsappNumber})
          </a>
          <a
            href={`tel:${ACADEMY_INFO.phoneNumbers[0]}`}
            className="btn btn-outline-white btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Phone size={18} /> Call: +91 {ACADEMY_INFO.phoneNumbers[0]}
          </a>
        </div>

        <div style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
          Campus: {ACADEMY_INFO.address}
        </div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
