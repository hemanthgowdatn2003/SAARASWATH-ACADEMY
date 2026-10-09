import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { Target, Award, Compass, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../../utils/constants';

export const AboutPreview = () => {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          {/* Visual Showcase: Official Academy Emblem Showcase - 100% Visible & Uncropped */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(145deg, #FFFFFF 0%, var(--color-soft-blue, #F3F8FF) 100%)',
              boxShadow: 'var(--shadow-xl)',
              border: '2px solid var(--color-light-cyan, #EAF7FF)',
              padding: '2.5rem 2rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '460px',
              textAlign: 'center',
              position: 'relative'
            }}>
              {/* Gold Top Accent Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '25%',
                right: '25%',
                height: '4px',
                backgroundColor: 'var(--color-gold, #E9AE20)',
                borderRadius: '0 0 4px 4px'
              }} />

              <img
                src="/images/logo/academy-logo-tight.png"
                alt="Official Saaraswath IAS/KAS Academy Emblem"
                style={{
                  maxHeight: '350px',
                  maxWidth: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 10px 24px rgba(23, 53, 104, 0.16))'
                }}
              />
            </div>

            {/* Float badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '1.5rem',
              backgroundColor: 'var(--color-primary-900)',
              color: '#ffffff',
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <Award size={36} color="var(--color-accent-400)" />
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fbbf24', lineHeight: 1 }}>Since 2019</div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Excellence in Mysuru</div>
              </div>
            </div>
          </div>

          {/* Description & Pillars */}
          <div>
            <SectionTitle
              subtitle="About Saaraswath Academy"
              title="Shaping Tomorrow's Bureaucrats & Leaders"
              align="left"
              description="Located in Kuvempunagar, Mysuru, Saaraswath IAS/KAS Academy was established to provide top-tier, structured civil services guidance right here in Mysuru without needing to relocate to Delhi or Bengaluru."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Target size={22} color="var(--color-primary-600)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--color-primary-900)' }}>
                    Conceptual Clarity & Strategy First
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    Focus on foundational understanding of NCERTs and standard reference books rather than rote memorization.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-accent-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Compass size={22} color="var(--color-accent-600)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--color-primary-900)' }}>
                    Bilingual Teaching (English & Kannada)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    Exclusive study material and question bank discussions in both Kannada and English medium for complete comfort.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/about" className="btn btn-primary">
                Read Academy Story <ArrowRight size={16} />
              </Link>
              <Link to="/faculty" className="btn btn-outline">
                Meet the Faculty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
