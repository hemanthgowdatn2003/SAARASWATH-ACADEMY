import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../../utils/constants';
import { getAssetUrl } from '../../utils/helpers';

export const FounderSection = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="section-py founder-section" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div
          className="founder-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(260px, 340px) 1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Column 1: Compact, face-visible photograph */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="founder-photo-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '300px',
                borderRadius: 'var(--radius-xl, 20px)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '3px solid #FFFFFF',
                outline: '2px solid var(--color-gold, #E9AE20)',
                backgroundColor: 'var(--color-light-cyan, #EAF7FF)',
                aspectRatio: '4 / 4.6'
              }}
            >
              {!photoError ? (
                <img
                  src={getAssetUrl('/images/founder/dr-vasanth-kumar.jpg')}
                  alt="Dr. Vasanth Kumar N - Founder and Director"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block'
                  }}
                  onError={() => {
                    // Try alternate path if first one fails
                    setPhotoError(true);
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-deep-navy, #173568)',
                    color: '#FFFFFF',
                    padding: '1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <Award size={40} color="var(--color-gold, #E9AE20)" style={{ marginBottom: '0.75rem' }} />
                  <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#FFFFFF' }}>Dr. Vasanth Kumar N</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-light-gold, #FFF5D6)' }}>Founder & Director</div>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Simplified introduction & Read More */}
          <div className="founder-info-col">
            <span
              className="section-tag"
              style={{
                color: 'var(--color-gold, #E9AE20)',
                fontWeight: 800,
                letterSpacing: '0.1em',
                fontSize: '0.8rem',
                display: 'block',
                marginBottom: '0.35rem'
              }}
            >
              ACADEMY LEADERSHIP
            </span>

            <h2
              className="founder-name"
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'var(--color-deep-navy, #173568)',
                marginBottom: '0.25rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}
            >
              Dr. Vasanth Kumar N
            </h2>

            <div
              className="founder-title"
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--color-primary-blue, #2457A7)',
                marginBottom: '1rem'
              }}
            >
              Founder and Director, Saaraswath IAS/KAS Academy
            </div>

            <p
              className="founder-bio"
              style={{
                fontSize: '1rem',
                lineHeight: 1.68,
                color: 'var(--color-text-main, #334155)',
                marginBottom: '1.75rem',
                maxWidth: '600px'
              }}
            >
              With over 15 years of dedicated academic mentorship guiding Civil Services and competitive examination aspirants. Committed to providing strong conceptual clarity, exam-oriented preparation, and personal mentorship to help every student succeed.
            </p>

            <Link
              to="/about"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.6rem',
                fontWeight: 700,
                fontSize: '0.92rem'
              }}
            >
              <span>Read More About Director</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
