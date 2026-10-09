import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, Download } from 'lucide-react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-deep-navy)', color: '#cbd5e1', paddingTop: '4.5rem', borderTop: '3px solid var(--color-gold)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Column 1: Brand & Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '6px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/logo/academy-logo-tight.png"
                  alt="Saaraswath Academy Logo"
                  style={{ height: '62px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', display: 'block' }}>
                  SAARASWATH
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  IAS / KAS ACADEMY • MYSURU
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem', color: '#e2e8f0' }}>
              Founded in 2019 under the academic leadership of <strong>{ACADEMY_INFO.founder}</strong>. Providing disciplined civil services mentoring, conceptual clarity, and comprehensive study material in Mysuru.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  width: 'fit-content',
                  textDecoration: 'none'
                }}
              >
                Chat on WhatsApp (+91 {ACADEMY_INFO.whatsappNumber})
              </a>

              <a
                href={ACADEMY_INFO.brochurePath}
                download
                className="btn btn-outline-white btn-sm"
                style={{ display: 'inline-flex', gap: '0.4rem', fontSize: '0.82rem', width: 'fit-content' }}
              >
                <Download size={14} /> Download Official Brochure (PDF)
              </a>
            </div>
          </div>

          {/* Column 2: Flagship Courses */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', borderBottom: '2px solid var(--color-gold)', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Flagship Programs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>
                <Link to="/upsc" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={13} color="var(--color-gold)" /> UPSC Civil Services (Prelims + Mains)
                </Link>
              </li>
              <li>
                <Link to="/kas" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={13} color="var(--color-gold)" /> KPSC KAS Gazetted Probationers
                </Link>
              </li>
              <li>
                <Link to="/courses/psi-pc-foundation" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={13} color="var(--color-gold)" /> Karnataka PSI & PC Comprehensive
                </Link>
              </li>
              <li>
                <Link to="/courses/foundation-degree" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={13} color="var(--color-gold)" /> 3-Year Degree + IAS/KAS Foundation
                </Link>
              </li>
              <li>
                <Link to="/courses/kannada-literature-optional" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={13} color="var(--color-gold)" /> Kannada Literature Optional
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', borderBottom: '2px solid var(--color-gold)', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><Link to="/about" style={{ color: '#cbd5e1' }}>About the Academy & Founder</Link></li>
              <li><Link to="/study-materials" style={{ color: '#cbd5e1' }}>Previous Year Papers & Study Notes</Link></li>
              <li><Link to="/faculty" style={{ color: '#cbd5e1' }}>Our Distinguished Faculty</Link></li>
              <li><Link to="/achievements" style={{ color: '#cbd5e1' }}>Top Achievers & Results</Link></li>
              <li><Link to="/gallery" style={{ color: '#cbd5e1' }}>Classrooms & Campus Gallery</Link></li>
              <li><Link to="/admissions" style={{ color: '#cbd5e1' }}>Admissions & Counseling</Link></li>
              <li><Link to="/contact" style={{ color: '#cbd5e1' }}>Contact & Location</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', borderBottom: '2px solid var(--color-gold)', paddingBottom: '0.4rem', display: 'inline-block' }}>
              Contact Academy
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{ACADEMY_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:${ACADEMY_INFO.phoneNumbers[0]}`} style={{ color: '#ffffff', fontWeight: 600 }}>+91 {ACADEMY_INFO.phoneNumbers[0]}</a>
                  <span style={{ margin: '0 0.3rem' }}>/</span>
                  <a href={`tel:${ACADEMY_INFO.phoneNumbers[1]}`} style={{ color: '#ffffff', fontWeight: 600 }}>{ACADEMY_INFO.phoneNumbers[1]}</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${ACADEMY_INFO.email}`} style={{ color: '#ffffff' }}>{ACADEMY_INFO.email}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.2rem' }}>
                <Clock size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <span>Mon - Sun: 7:00 AM - 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: '#94a3b8' }}>
          <div>
            © {new Date().getFullYear()} Saaraswath IAS/KAS Academy, Mysuru. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: '#cbd5e1' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: '#cbd5e1' }}>Terms of Service</Link>
            <Link to="/admin/login" style={{ color: '#cbd5e1' }}>Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
