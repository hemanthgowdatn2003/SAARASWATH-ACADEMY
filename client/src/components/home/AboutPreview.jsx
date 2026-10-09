import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { Target, Award, Compass, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../../utils/constants';
import { getAssetUrl } from '../../utils/helpers';

export const AboutPreview = () => {
  return (
    <section className="section-py bg-white" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-tag" style={{ color: 'var(--color-gold, #E9AE20)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.82rem', display: 'block', marginBottom: '0.5rem' }}>
            ABOUT SAARASWATH ACADEMY
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-deep-navy, #173568)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Premier Civil Services Coaching in Mysuru
          </h2>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-text-muted, #536b8e)', maxWidth: '720px', margin: '0 auto' }}>
            Established in 2019 in Kuvempunagar, Mysuru by Dr. Vasanth Kumar N, Saaraswath IAS/KAS Academy provides top-tier civil services mentorship right in Mysuru. We combine deep conceptual clarity, rigorous answer writing, and bilingual support to empower aspirants for consistent exam success.
          </p>
        </div>

        {/* Three important highlights */}
        <div
          className="about-highlights-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-lg, 16px)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'var(--color-primary-50, #EAF3FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={22} color="var(--color-primary-blue, #2457A7)" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-navy, #173568)' }}>
              Conceptual Clarity First
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55 }}>
              In-depth coverage of standard reference texts and NCERT fundamentals rather than superficial memorization.
            </p>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-lg, 16px)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#FFF5D6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={22} color="#D97706" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-navy, #173568)' }}>
              Bilingual Mentorship
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55 }}>
              Comprehensive teaching, notes, and question discussions in both English and Kannada medium.
            </p>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: 'var(--radius-lg, 16px)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={22} color="#059669" />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-deep-navy, #173568)' }}>
              Proven Leadership
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55 }}>
              Over 15 years of mentoring experience under the personal direction of Dr. Vasanth Kumar N.
            </p>
          </div>
        </div>

        {/* Read More button */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/about"
            className="btn btn-outline"
            style={{
              padding: '0.75rem 2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 700
            }}
          >
            <span>Read More About Us</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
