import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Download, ArrowRight, Library } from 'lucide-react';
import { ACADEMY_INFO } from '../utils/constants';

export const KAS = () => {
  const referenceBooks = [
    {
      subject: "ಭೂಗೋಳಶಾಸ್ತ್ರ (Geography)",
      books: "ಪ್ರಥಮ & ದ್ವಿತೀಯ ಪಿಯುಸಿ (1st & 2nd PUC) ಪಠ್ಯಪುಸ್ತಕಗಳು, ಡಾ. ರಂಗನಾಥ್ (ಭಾರತ ಮತ್ತು ಕರ್ನಾಟಕ ಭೂಗೋಳಶಾಸ್ತ್ರ), Atlas – Orient BlackSwan."
    },
    {
      subject: "ಇತಿಹಾಸ ಮತ್ತು ಪರಂಪರೆ (History & Heritage)",
      books: "ಪಿಯುಸಿ ಇತಿಹಾಸ, ಪ್ರಾಚೀನ ಭಾರತ (ಆರ್. ಎಸ್. ಶರ್ಮಾ), ಮಧ್ಯಕಾಲೀನ (ಸತೀಶ್ ಚಂದ್ರ), ಆಧುನಿಕ ಭಾರತ (ಬಿಪಿನ್ ಚಂದ್ರ), ಕರ್ನಾಟಕ ಇತಿಹಾಸ (ಸೂರ್ಯನಾಥ್ ಕಾಮತ್), ಭಾರತೀಯ ಪರಂಪರೆ (ಶ್ರೀನಿವಾಸ್ ಟಿ)."
    },
    {
      subject: "ರಾಜ್ಯಶಾಸ್ತ್ರ ಮತ್ತು ಆಡಳಿತ (Polity & Governance)",
      books: "ಭಾರತದ ಸಂವಿಧಾನ (ಪಿ. ಎಸ್. ಗಂಗಾಧರ್), ಸಾರ್ವಜನಿಕ ಆಡಳಿತ & ಅಂತರರಾಷ್ಟ್ರೀಯ ಸಂಬಂಧಗಳು (ಡಾ. ಎನ್. ಮಾಲಪ್ಪ)."
    },
    {
      subject: "ಅರ್ಥಶಾಸ್ತ್ರ (Economics)",
      books: "ಅರ್ಥಶಾಸ್ತ್ರ (ಗರಣಿ ಕೃಷ್ಣಮೂರ್ತಿ / ಹೆಚ್.ಆರ್.ಕೆ), ಭಾರತ ಮತ್ತು ಕರ್ನಾಟಕದ ಇತ್ತೀಚಿನ ಆರ್ಥಿಕ ಸಮೀಕ್ಷೆ (Economic Survey & State Budget)."
    },
    {
      subject: "ವಿಜ್ಞಾನ, ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಪರಿಸರ (Science & Ecology)",
      books: "ಸಾಮಾನ್ಯ ವಿಜ್ಞಾನ (ವಿನೋದ್ ಕುಮಾರ್ ಚೌಹಾಣ್), ಪರಿಸರ ಅಧ್ಯಯನ (ಪಿ. ವಿ. ಬೈರಪ್ಪ), ಕೃಷಿ & ಆರೋಗ್ಯ (ಎನ್. ಎಸ್. ಶ್ರೀಕಾಂತ್)."
    },
    {
      subject: "ಸಾಮಾನ್ಯ ಮನೋಸಾಮರ್ಥ್ಯ (Mental Ability & CSAT)",
      books: "ಗಣಿತ ಮತ್ತು ತಾರ್ಕಿಕ ಸಾಮರ್ಥ್ಯ – ಮಂಜುನಾಥ್ ಬ್ಯಾಡಗಿ ಅಥವಾ ಆರ್. ಎಸ್. ಅಗರ್ವಾಲ್ (R.S. Aggarwal)."
    },
    {
      subject: "ನೈತಿಕತೆ ಮತ್ತು ಸಮಗ್ರತೆ (Ethics - GS IV)",
      books: "ನೈತಿಕತೆ, ಸಮಗ್ರತೆ ಮತ್ತು ಸಾಮರ್ಥ್ಯ (Ethics, Integrity and Aptitude) – ಡಿ. ಕೆ. ಬಾಲಾಜಿ (IAS)."
    }
  ];

  return (
    <PageLayout>
      <SEO
        title="KPSC KAS Gazetted Probationers Exam Guide"
        description="Comprehensive guide to KPSC KAS Prelims, Mains Syllabus, Marks pattern, and authentic Kannada reference booklist at Saaraswath Academy Mysuru."
      />

      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-accent-400)' }}>KARNATAKA PUBLIC SERVICE COMMISSION</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            KPSC KAS Gazetted Probationers
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
            Complete exam pattern, Karnataka state syllabus weightage, and standard Kannada reference book recommendations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-gold btn-sm">
              Join KAS Special Batch <ArrowRight size={16} />
            </Link>
            <a href={ACADEMY_INFO.brochurePath} download className="btn btn-outline-white btn-sm">
              <Download size={15} /> Download Brochure PDF
            </a>
          </div>
        </div>
      </div>

      <section className="section-py bg-light">
        <div className="container">
          {/* Exam Structure */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1rem' }}>
              KAS Prelims & Main Exam Pattern
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The Karnataka Recruitment of KAS - Gazetted Probationers exam consists of two competitive stages:
              <br />
              1. <strong>Preliminary Examination</strong> (Objective type screening test to select candidates for Mains)
              <br />
              2. <strong>Main Examination & Personality Test</strong> (Written examination of 1250 marks + Interview for service allocation)
            </p>

            <div className="grid-2" style={{ gap: '2rem' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>Prelims Paper 1 (200 M - 2 Hrs)</span>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.86rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <li>• Current Events of National & International Importance</li>
                  <li>• Humanities - History of India (Special emphasis on Karnataka Movement)</li>
                  <li>• World Geography & Geography of India with focus on Karnataka</li>
                  <li>• Indian Polity and Economy, Rural Development & Planning</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Prelims Paper 2 (200 M - 2 Hrs)</span>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.86rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <li>• Current events of State Importance & Government Programmes</li>
                  <li>• General Science, Technology, Environment and Climate Change</li>
                  <li>• General Mental Ability (Comprehension, Logical Reasoning, Decision Making)</li>
                  <li>• Basic Numeracy & Data Interpretation (Class X / SSLC Level)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Standard Reference Books (Authentic Kannada Academy list) */}
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Library size={28} color="var(--color-accent-600)" />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
                  ಕರ್ನಾಟಕ ಕೆ.ಎ.ಎಸ್ ಪರೀಕ್ಷೆಗೆ ಅಧಿಕೃತ ಪಠ್ಯಪುಸ್ತಕಗಳ ಪಟ್ಟಿ (Standard Reference Books)
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  ಸಾರಸ್ವತ್ ಅಕಾಡೆಮಿ ಸೂಚಿಸಿರುವ ಪ್ರಮಾಣಿತ ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಆಧಾರ ಗ್ರಂಥಗಳು
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {referenceBooks.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '1.25rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--color-primary-600)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-900)', marginBottom: '0.35rem' }}>
                    {idx + 1}. {item.subject}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.55 }}>
                    {item.books}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/admissions" className="btn btn-primary btn-lg">
              Enroll in KAS Mentorship Program in Mysuru <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default KAS;
