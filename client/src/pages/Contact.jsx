import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { ContactForm } from '../components/forms/ContactForm';
import { ACADEMY_INFO, getWhatsAppLink } from '../utils/constants';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <PageLayout>
      <SEO
        title="Contact Us & Campus Location"
        description="Visit Saaraswath IAS/KAS Academy in Kuvempunagar, Mysuru. Contact our admissions team by phone, email, or WhatsApp."
      />

      <div style={{ backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-gold)' }}>CONNECT WITH US</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Contact & Campus Location
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto' }}>
            We're here to help you plan your preparation journey. Reach out to our Kuvempunagar center anytime.
          </p>
        </div>
      </div>

      <section className="section-py" style={{ backgroundColor: 'var(--color-soft-blue)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', marginBottom: '4rem' }}>
            {/* Contact details cards */}
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '1.5rem' }}>
                Saaraswath IAS/KAS Academy
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Official WhatsApp Card */}
                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: '4px solid #25D366' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageCircle size={24} color="#16a34a" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.2rem' }}>
                      Official WhatsApp Desk
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '0.6rem' }}>
                      Fast response for syllabus, admission queries, and fees: <strong>+91 {ACADEMY_INFO.whatsappNumber}</strong>
                    </p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm"
                      style={{ backgroundColor: '#25D366', color: '#ffffff', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <MessageCircle size={15} /> Open WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-light-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} color="var(--color-primary-blue)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>
                      Academy Campus Address
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                      {ACADEMY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-light-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} color="var(--color-accent-700)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>
                      Telephone & Counseling Desks
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                      <a href={`tel:${ACADEMY_INFO.phoneNumbers[0]}`} style={{ fontWeight: 700, color: 'var(--color-primary-blue)' }}>
                        +91 {ACADEMY_INFO.phoneNumbers[0]}
                      </a>
                      <span style={{ margin: '0 0.5rem' }}>/</span>
                      <a href={`tel:${ACADEMY_INFO.phoneNumbers[1]}`} style={{ fontWeight: 700, color: 'var(--color-primary-blue)' }}>
                        +91 {ACADEMY_INFO.phoneNumbers[1]}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} color="#065f46" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>
                      Official Email
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                      <a href={`mailto:${ACADEMY_INFO.email}`} style={{ color: 'var(--color-primary-blue)', fontWeight: 600 }}>
                        {ACADEMY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} color="#0369a1" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '0.25rem' }}>
                      Working Hours
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                      Monday – Sunday: 7:00 AM to 8:30 PM (All 7 days open)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Map Embed Container */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '1rem' }}>
              Find Us in Kuvempunagar, Mysuru
            </h3>
            <iframe
              title="Saaraswath Academy Location Map"
              src="https://maps.google.com/maps?q=Kuvempunagar%2C%20Mysuru%20P%26T%20Block&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: 'var(--radius-md)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
