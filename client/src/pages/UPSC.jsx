import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Award, FileText, ArrowRight, Download } from 'lucide-react';
import { ACADEMY_INFO } from '../utils/constants';

export const UPSC = () => {
  return (
    <PageLayout>
      <SEO
        title="UPSC Civil Services Examination Guide"
        description="Complete UPSC Civil Services (IAS/IPS/IFS) Exam Pattern, Syllabus, Marks Scheme, and Preparation Strategy at Saaraswath Academy Mysuru."
      />

      {/* Header */}
      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-accent-400)' }}>UNION PUBLIC SERVICE COMMISSION</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            UPSC Civil Services (IAS/IPS/IFS)
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
            The comprehensive examination structure, marks weightage, and syllabus blueprint taught at Saaraswath Academy, Mysuru.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-gold btn-sm">
              Enroll for UPSC Batch <ArrowRight size={16} />
            </Link>
            <a href={ACADEMY_INFO.brochurePath} download className="btn btn-outline-white btn-sm">
              <Download size={15} /> Download Brochure PDF
            </a>
          </div>
        </div>
      </div>

      <section className="section-py bg-light">
        <div className="container">
          {/* Overview summary */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1rem' }}>
              Pattern & Structure of UPSC Civil Services Examination
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              The UPSC Civil Services Examination is the premier recruitment gateway for the All India Services (IAS, IPS) and Central Civil Services (IFS, IRS, etc.). It is conducted in three sequential tiers:
            </p>

            <div className="grid-3">
              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Stage 1</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.5rem 0 0.25rem' }}>Preliminary Examination</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>2 Objective MCQ Papers (400 Marks Total). Screening test for Mains qualification.</p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Stage 2</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.5rem 0 0.25rem' }}>Main Examination</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>9 Written Descriptive Papers (1750 Marks counted for Merit + 2 Qualifying Papers).</p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                <span className="badge badge-green" style={{ marginBottom: '0.5rem' }}>Stage 3</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.5rem 0 0.25rem' }}>Personality Test</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Interview board evaluation (275 Marks). Grand Total: 2025 Marks.</p>
              </div>
            </div>
          </div>

          {/* Prelims Detail Table */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
              Part A: UPSC Preliminary Examination Pattern
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                    <th style={{ padding: '0.85rem 1rem' }}>Paper</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Questions & Duration</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Marks</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Evaluation Nature</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>General Studies Paper I (GS-I)</td>
                    <td style={{ padding: '1rem' }}>100 Questions – 2 Hours</td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-primary-700)' }}>200 Marks</td>
                    <td style={{ padding: '1rem' }}>Determines Prelims Cut-off / Rank</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>General Studies Paper II (CSAT)</td>
                    <td style={{ padding: '1rem' }}>80 Questions – 2 Hours</td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-primary-700)' }}>200 Marks</td>
                    <td style={{ padding: '1rem', color: 'var(--color-accent-700)', fontWeight: 600 }}>Qualifying only (Min. 33% required)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '1.5rem', backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary-900)', marginBottom: '0.5rem' }}>
                GS-I Detailed Syllabus Modules:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.5rem', fontSize: '0.86rem', color: '#475569' }}>
                <li>✓ Current Events of National & International Importance</li>
                <li>✓ History of India & Indian National Movement</li>
                <li>✓ Indian & World Geography (Physical, Social, Economic)</li>
                <li>✓ Indian Polity, Constitution & Governance</li>
                <li>✓ Economic & Social Development, Inclusion & Poverty</li>
                <li>✓ Environmental Ecology, Biodiversity & Climate Change</li>
                <li>✓ General Science & Everyday Technology</li>
              </ul>
            </div>
          </div>

          {/* Mains Detail Table */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
              Part B: UPSC Main Examination Scheme (1750 Written Marks)
            </h3>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                    <th style={{ padding: '0.85rem 1rem' }}>Paper</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Subject</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Marks</th>
                    <th style={{ padding: '0.85rem 1rem' }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper A</td>
                    <td style={{ padding: '0.85rem 1rem' }}>Indian Language (Kannada/Hindi/etc. - Qualifying 25%)</td>
                    <td style={{ padding: '0.85rem 1rem' }}>300 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper B</td>
                    <td style={{ padding: '0.85rem 1rem' }}>English (Qualifying 25%)</td>
                    <td style={{ padding: '0.85rem 1rem' }}>300 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper I</td>
                    <td style={{ padding: '0.85rem 1rem' }}>Essay</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>250 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper II</td>
                    <td style={{ padding: '0.85rem 1rem' }}>General Studies-I (Indian Heritage, Culture, History & Geography)</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>250 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper III</td>
                    <td style={{ padding: '0.85rem 1rem' }}>General Studies-II (Governance, Constitution, Polity & IR)</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>250 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper IV</td>
                    <td style={{ padding: '0.85rem 1rem' }}>General Studies-III (Tech, Economy, Bio-diversity, Security & Disaster)</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>250 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper V</td>
                    <td style={{ padding: '0.85rem 1rem' }}>General Studies-IV (Ethics, Integrity and Aptitude)</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>250 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper VI</td>
                    <td style={{ padding: '0.85rem 1rem' }}>Optional Subject - Paper 1 (e.g. Kannada Sahitya, Geography, etc.)</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>250 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 600 }}>Paper VII</td>
                    <td style={{ padding: '0.85rem 1rem' }}>Optional Subject - Paper 2</td>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700 }}>250 Marks</td>
                    <td style={{ padding: '0.85rem 1rem' }}>3 Hours</td>
                  </tr>
                  <tr style={{ backgroundColor: 'var(--color-primary-50)', fontWeight: 800 }}>
                    <td colSpan="2" style={{ padding: '1rem', color: 'var(--color-primary-900)' }}>Written Sub-Total: 1750 Marks | Personality Test: 275 Marks</td>
                    <td colSpan="2" style={{ padding: '1rem', color: 'var(--color-accent-700)' }}>Grand Total: 2025 Marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link to="/admissions" className="btn btn-primary btn-lg">
              Register for Next UPSC Batch in Mysuru <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default UPSC;
