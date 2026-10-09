import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';

export const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #F3F8FF 0%, #FFFFFF 50%, #EAF7FF 100%)',
        padding: '3.75rem 0 4.25rem',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Heading, Value proposition, and Action Buttons */}
          <div>
            {/* Small Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                backgroundColor: 'var(--color-light-gold, #FFF5D6)',
                border: '1px solid var(--color-gold, #E9AE20)',
                padding: '0.35rem 1rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.25rem'
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: 'var(--color-deep-navy, #173568)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                ★ SINCE 2019 • MYSURU
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="hero-heading"
              style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '0.85rem',
                color: 'var(--color-deep-navy, #173568)',
                letterSpacing: '-0.025em'
              }}
            >
              Your Journey to Civil Services <span style={{ color: 'var(--color-primary-blue, #2457A7)' }}>Starts Here</span>
            </h1>

            {/* Supporting Heading */}
            <h2
              style={{
                fontSize: '1.28rem',
                fontWeight: 700,
                color: 'var(--color-gold, #E9AE20)',
                marginBottom: '1.15rem',
                letterSpacing: '-0.01em'
              }}
            >
              UPSC & KAS Exam Preparation in Mysuru
            </h2>

            {/* Academy Introduction */}
            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.65,
                color: 'var(--color-text-muted, #536b8e)',
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              Saaraswath IAS/KAS Academy is committed to providing conceptual clarity, rigorous answer writing, standard reference coverage, and disciplined exam preparation under the direct leadership of <strong>{ACADEMY_INFO.founder}</strong>.
            </p>

            {/* Call-to-action buttons: All 3 buttons with identical height, radius, and alignment */}
            <div
              className="hero-btn-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '2.25rem'
              }}
            >
              <Link
                to="/courses"
                style={{
                  height: '46px',
                  padding: '0 1.35rem',
                  backgroundColor: 'var(--color-primary-blue, #2457A7)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  borderRadius: 'var(--radius-md, 10px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(36, 87, 167, 0.25)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-deep-navy, #173568)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-blue, #2457A7)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Explore Courses</span>
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/admissions"
                style={{
                  height: '46px',
                  padding: '0 1.35rem',
                  backgroundColor: 'var(--color-gold, #E9AE20)',
                  color: 'var(--color-deep-navy, #173568)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  borderRadius: 'var(--radius-md, 10px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(233, 174, 32, 0.28)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d99e15';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold, #E9AE20)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Enquire Now
              </Link>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  height: '46px',
                  padding: '0 1.35rem',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  borderRadius: 'var(--radius-md, 10px)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.28)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#20ba59';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Micro value badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--color-deep-navy, #173568)', fontWeight: 600 }}>
                <CheckCircle2 size={17} color="var(--color-primary-blue, #2457A7)" />
                <span>UPSC & KAS Prelims-cum-Mains</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--color-deep-navy, #173568)', fontWeight: 600 }}>
                <CheckCircle2 size={17} color="var(--color-primary-blue, #2457A7)" />
                <span>Kannada & English Medium</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--color-deep-navy, #173568)', fontWeight: 600 }}>
                <CheckCircle2 size={17} color="var(--color-primary-blue, #2457A7)" />
                <span>Personal Director Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Polished visual card showcasing the official academy logo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl, 24px)',
                padding: '2rem 1.75rem',
                boxShadow: '0 12px 32px rgba(23, 53, 104, 0.08)',
                border: '1.5px solid rgba(36, 87, 167, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '430px',
                width: '100%',
                position: 'relative'
              }}
            >
              {/* Subtle top gold accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '25%',
                  right: '25%',
                  height: '4px',
                  backgroundColor: 'var(--color-gold, #E9AE20)',
                  borderRadius: '0 0 4px 4px'
                }}
              />

              {/* Exact official logo displayed with original colours & balanced height */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 0 1.25rem'
                }}
              >
                <img
                  src="/images/logo/academy-logo-tight.png"
                  alt="Saaraswath IAS/KAS Academy Official Emblem"
                  style={{
                    maxHeight: '240px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0 10px 20px rgba(23, 53, 104, 0.14))'
                  }}
                />
              </div>

              {/* Brand descriptor beneath logo */}
              <div
                style={{
                  textAlign: 'center',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid #e2e8f0',
                  width: '100%'
                }}
              >
                <div
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: 'var(--color-deep-navy, #173568)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2
                  }}
                >
                  SAARASWATH IAS/KAS ACADEMY
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-gold, #E9AE20)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginTop: '0.3rem'
                  }}
                >
                  The Success Blueprint • Kuvempunagar, Mysuru
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
