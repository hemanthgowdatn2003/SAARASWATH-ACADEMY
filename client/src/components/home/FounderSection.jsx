import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { Award, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';
import { getAssetUrl } from '../../utils/helpers';

export const FounderSection = () => {
  return (
    <section className="section-py" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Column 1: Founder Photograph Container */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              maxWidth: '420px',
              width: '100%'
            }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid #FFFFFF',
                backgroundColor: 'var(--color-light-cyan)',
                aspectRatio: '1 / 1',
                maxHeight: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: '2px solid var(--color-gold)'
              }}>
                <img
                  src={ACADEMY_INFO.founderPhoto}
                  alt="Dr. Vasanth Kumar N - Founder and Director"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getAssetUrl('/images/founder/dr_vasanth_kumar.jpg');
                  }}
                />
              </div>

              {/* Verified experience badge */}
              <div style={{
                position: 'absolute',
                bottom: '-1.25rem',
                left: '1.25rem',
                backgroundColor: 'var(--color-deep-navy)',
                color: '#FFFFFF',
                padding: '0.9rem 1.4rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderLeft: '4px solid var(--color-gold)'
              }}>
                <Award size={28} color="var(--color-gold)" />
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                    15+ Years
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-light-gold)', fontWeight: 600 }}>
                    Academic Mentoring
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Founder Details & Intro based strictly on brochure */}
          <div>
            <span className="section-tag" style={{ color: 'var(--color-gold)' }}>
              ACADEMY LEADERSHIP
            </span>

            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--color-deep-navy)',
              marginBottom: '0.35rem',
              letterSpacing: '-0.02em'
            }}>
              Dr. Vasanth Kumar N
            </h2>

            <div style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--color-primary-blue)',
              marginBottom: '1.25rem'
            }}>
              Founder and Director • Saaraswath IAS/KAS Academy, Mysuru
            </div>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.7,
              color: 'var(--color-text-main)',
              marginBottom: '1rem'
            }}>
              With over 15 years of experience mentoring Biotechnology students, Civil Services aspirants, and competitive-examination aspirants. He is committed to providing strong academic guidance, conceptual clarity, exam-oriented preparation, and focused career development.
            </p>

            <div style={{
              backgroundColor: 'var(--color-soft-blue)',
              borderLeft: '4px solid var(--color-primary-blue)',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              margin: '1.5rem 0 2rem'
            }}>
              <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-deep-navy)', lineHeight: 1.6 }}>
                "Our mission at Saaraswath Academy is to build a structured, transparent, and supportive ecosystem in Mysuru where every student receives conceptual clarity, comprehensive notes, and individual mentorship to conquer UPSC and KPSC examinations."
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-deep-navy)', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--color-primary-blue)" />
                <span>Over 15 years mentoring civil services & competitive aspirants</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-deep-navy)', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--color-primary-blue)" />
                <span>Strong academic guidance, conceptual clarity & career development</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--color-deep-navy)', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--color-primary-blue)" />
                <span>Direct personal mentorship available at Kuvempunagar campus</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">
                Read Academy Profile <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppLink("Hello Dr. Vasanth Kumar N, I would like to schedule an academic counseling session at Saaraswath Academy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: '#25D366', color: '#128C7E' }}
              >
                <MessageCircle size={18} color="#25D366" /> Consult with Director on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
