import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { ACADEMY_INFO } from '../utils/constants';
import { Phone, CheckCircle2, Download, MapPin } from 'lucide-react';

export const Admissions = () => {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || '';

  const steps = [
    { num: '01', title: 'Free Counseling Call', desc: 'Discuss your aspirations, optional subject suitability, and eligibility with our senior academic mentors.' },
    { num: '02', title: 'Batch Selection', desc: 'Choose between Morning, Evening, or Weekend Batches depending on your current degree or work routine.' },
    { num: '03', title: 'Registration & Study Kit', desc: 'Complete admission paperwork and receive your standard syllabus map, NCERT roadmap, and initial study materials.' },
    { num: '04', title: 'Mentorship Induction', desc: 'Meet Dr. Vasanth Kumar N for your individual preparation diagnostic and begin classroom lectures.' }
  ];

  return (
    <PageLayout>
      <SEO
        title="Admissions 2026-27"
        description="Apply for UPSC, KAS, PSI/PC, and Foundation batches at Saaraswath IAS/KAS Academy Mysuru. Free academic counseling and brochure download."
      />

      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-accent-400)' }}>ADMISSIONS OPEN 2026-27</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Join Saaraswath Academy
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto' }}>
            Take the first decisive step towards securing your rank in Karnataka State and All India Civil Services.
          </p>
        </div>
      </div>

      <section className="section-py bg-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
            {/* Left Column: Form */}
            <div>
              <EnquiryForm preselectedCourse={preselectedCourse} />
            </div>

            {/* Right Column: Admission Process & Fast Help */}
            <div>
              <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
                  Admission Procedure in 4 Steps
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {steps.map((s, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-100)', color: 'var(--color-primary-700)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.95rem' }}>
                        {s.num}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--color-primary-900)', marginBottom: '0.2rem' }}>
                          {s.title}
                        </h4>
                        <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5 }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Help Call Card */}
              <div className="glass-card" style={{ padding: '2rem', backgroundColor: '#0f172a', color: '#ffffff' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fbbf24' }}>
                  Need Immediate Admission Help?
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '1.25rem' }}>
                  Speak directly with our academic desk or visit our Kuvempunagar center in Mysuru today.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={16} color="#fbbf24" />
                    <span>+91 {ACADEMY_INFO.phoneNumbers[0]} / {ACADEMY_INFO.phoneNumbers[1]}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <MapPin size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{ACADEMY_INFO.address}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={`https://wa.me/91${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Saaraswath IAS/KAS Academy, I would like to know more about your UPSC/KAS coaching courses and admission details.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      fontWeight: 700
                    }}
                  >
                    Chat with Admission Desk on WhatsApp
                  </a>

                  <a
                    href={ACADEMY_INFO.brochurePath}
                    download
                    className="btn btn-gold btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Download size={15} /> Download Brochure PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Admissions;
