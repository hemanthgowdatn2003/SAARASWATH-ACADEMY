import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const UPSCKASSection = () => {
  return (
    <section className="section-py" style={{ backgroundColor: '#090f22', color: '#ffffff' }}>
      <div className="container">
        <SectionTitle
          subtitle="Exam Blueprint"
          title="Mastering UPSC & KAS Patterns"
          dark
          description="A systematic roadmap from preliminary screening to mains answer writing and personality interview."
        />

        <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Card 1: UPSC CSE Pattern */}
          <div className="glass-card-dark" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge badge-gold">All India Services</span>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total: 2025 Marks</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              UPSC Civil Services Examination
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              The nation's most prestigious exam for IAS, IPS, IFS, and IRS. Cleared through three structured stages:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: '#fbbf24' }}>Stage 1 - Prelims (400 Marks)</strong>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Paper 1: GS-I (100 Qs, 200 Marks) + Paper 2: CSAT (80 Qs, 200 Marks - Qualifying 33%)
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: '#60a5fa' }}>Stage 2 - Mains (1750 Marks)</strong>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Essay (250) + GS I, II, III, IV (4x250) + Optional Paper 1 & 2 (2x250) + Qualifying Lang
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: '#34d399' }}>Stage 3 - Personality Test (275 Marks)</strong>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Interview board evaluation for administrative aptitude and leadership ethics.
                </p>
              </div>
            </div>

            <Link to="/upsc" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              Explore Full UPSC Syllabus & Strategy <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: KPSC KAS Pattern */}
          <div className="glass-card-dark" style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge badge-blue">Karnataka State Services</span>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total: 1275 Marks</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              KPSC KAS Gazetted Probationers
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              The premiere recruitment for Karnataka Group A (Assistant Commissioner, DSP) and Group B (Tahsildar):
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: '#fbbf24' }}>Stage 1 - KAS Prelims (400 Marks)</strong>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Paper 1: Humanities & Karnataka History (200 M) | Paper 2: Science, Mental Ability & State Schemes (200 M)
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: '#60a5fa' }}>Stage 2 - KAS Mains (1250 Marks)</strong>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Essay (250) + GS I (Karnataka Heritage & Society) + GS II (Polity) + GS III (Tech/Disaster) + GS IV (Ethics)
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: '#34d399' }}>State Specific Reference Books</strong>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  Special focus on Suryanath Kamath, B.N. Chalapathi, Dr. Ranganath, and State Economic Survey.
                </p>
              </div>
            </div>

            <Link to="/kas" className="btn btn-outline-white" style={{ width: '100%', justifyContent: 'center' }}>
              Explore Full KAS Syllabus & Kannada Pedagogy <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
