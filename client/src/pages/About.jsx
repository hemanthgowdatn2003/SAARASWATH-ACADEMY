import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { ACADEMY_INFO, getWhatsAppLink } from '../utils/constants';
import { getAssetUrl } from '../utils/helpers';
import { Target, Compass, BookOpen, Users, Award, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <PageLayout>
      <SEO
        title="About Us & Founder"
        description="Learn about Saaraswath IAS/KAS Academy Mysuru, founded in 2019 by Dr. Vasanth Kumar N. Discover our mission, values, and civil services training methodology."
      />

      {/* Header Banner */}
      <div style={{ backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-gold)' }}>OUR HERITAGE & MISSION</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            About Saaraswath Academy
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto' }}>
            Mysuru's dedicated training center committed to guiding young aspirants into distinguished civil servants of Karnataka and India.
          </p>
        </div>
      </div>

      {/* Main Story & Vision Section */}
      <section className="section-py" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <SectionTitle
                subtitle="The Genesis"
                title="Founded with a Vision for Accessible Excellence"
                align="left"
              />
              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Established in <strong>2019</strong>, <strong>Saaraswath IAS/KAS Academy</strong> was founded with the conviction that students from Mysuru, Mandya, Hassan, Chamarajanagar, and across Karnataka should receive top-quality civil services guidance right in Mysuru without needing to relocate to Delhi or Bengaluru.
              </p>
              <p style={{ fontSize: '1.02rem', color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Located conveniently at #608, 1st Floor, P & T Block (Near Jnanaganga school), Panchamantra Road, Kuvempunagar, the academy provides an immersive, disciplined, and resourceful ecosystem with full classroom amenities, well-curated reference libraries, and expert faculty.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/courses" className="btn btn-primary">
                  Explore Programs <ArrowRight size={16} />
                </Link>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ backgroundColor: '#25D366', color: '#ffffff', fontWeight: 700 }}
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Official Academy Emblem Showcase - 100% visible, uncropped, authentic transparent logo */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, var(--color-soft-blue) 100%)',
                boxShadow: 'var(--shadow-xl)',
                border: '2px solid var(--color-light-cyan)',
                padding: '2.5rem 2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '440px',
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
                  backgroundColor: 'var(--color-gold)',
                  borderRadius: '0 0 4px 4px'
                }} />

                <img
                  src={getAssetUrl('/images/logo/academy-logo-tight.png')}
                  alt="Official Saaraswath IAS/KAS Academy Emblem"
                  style={{
                    maxHeight: '360px',
                    maxWidth: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0 10px 24px rgba(23, 53, 104, 0.16))'
                  }}
                />

                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--color-border)',
                  width: '100%'
                }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                    color: 'var(--color-deep-navy)',
                    letterSpacing: '0.04em'
                  }}>
                    SAARASWATH IAS / KAS ACADEMY
                  </span>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>
                    Official Emblem • Since 2019
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section: Two-Column Layout with authentic portrait */}
          <div style={{
            backgroundColor: 'var(--color-soft-blue)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)',
            marginBottom: '5rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}>
              {/* Photo Side */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '360px'
                }}>
                  <div style={{
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-xl)',
                    border: '4px solid #FFFFFF',
                    outline: '2px solid var(--color-gold)',
                    aspectRatio: '1 / 1',
                    backgroundColor: '#FFFFFF'
                  }}>
                    <img
                      src={ACADEMY_INFO.founderPhoto}
                      alt="Dr. Vasanth Kumar N"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 15%',
                        display: 'block'
                      }}
                    />
                  </div>
                  <div style={{
                    textAlign: 'center',
                    marginTop: '1rem'
                  }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-deep-navy)' }}>
                      Dr. Vasanth Kumar N
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Founder and Director
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Information Side */}
              <div>
                <span className="section-tag" style={{ color: 'var(--color-gold)' }}>
                  DIRECTOR'S PROFILE
                </span>

                <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.5rem' }}>
                  Dr. Vasanth Kumar N
                </h3>

                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-blue)', marginBottom: '1.25rem' }}>
                  Founder & Director • Saaraswath IAS/KAS Academy, Mysuru
                </div>

                <p style={{ fontSize: '1.02rem', color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  With over 15 years of experience mentoring Biotechnology students, Civil Services aspirants, and competitive-examination aspirants. He is committed to providing strong academic guidance, conceptual clarity, exam-oriented preparation, and focused career development.
                </p>

                <div style={{
                  backgroundColor: '#FFFFFF',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--color-primary-blue)',
                  marginBottom: '1.75rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <p style={{ fontSize: '0.92rem', fontStyle: 'italic', color: 'var(--color-deep-navy)', lineHeight: 1.6 }}>
                    "Every aspirant possesses potential. What separates success from trial is a structured strategy—understanding what to study, what to avoid, and training under relentless answer writing review."
                  </p>
                </div>

                <a
                  href={getWhatsAppLink("Hello Dr. Vasanth Kumar N, I would like to consult with you regarding civil services preparation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <MessageCircle size={18} /> Schedule Counseling on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Four Core Pillars */}
          <SectionTitle
            subtitle="Core Philosophy"
            title="The Four Pillars of Saaraswath"
            description="The values that guide every classroom lecture, test paper, and mentorship interaction."
          />

          <div className="grid-4" style={{ marginTop: '2.5rem' }}>
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <Target size={32} color="var(--color-primary-blue)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>Conceptual Precision</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Mastering foundational principles of polity, geography, history, and economy before attempting advanced analytical debates.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <BookOpen size={32} color="var(--color-gold)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>Authoritative Sources</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Relying exclusively on standard literature, Karnataka gazettes, state economic survey, and verified NCERT syllabi.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <Users size={32} color="var(--color-primary-blue)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>Bilingual Inclusivity</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Complete guidance for both Kannada medium and English medium students with equal rigor and dedicated study materials.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <Award size={32} color="var(--color-gold)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-deep-navy)' }}>Unwavering Mentorship</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Continuous access to experienced mentors who evaluate answer sheets and refine exam-taking strategy every week.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
