import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { FacultyCard } from '../components/common/FacultyCard';
import { INITIAL_FACULTY, getWhatsAppLink } from '../utils/constants';
import { facultyService } from '../services/facultyService';
import { MessageCircle } from 'lucide-react';

export const Faculty = () => {
  const [facultyList, setFacultyList] = useState(INITIAL_FACULTY);

  useEffect(() => {
    facultyService.getAllFaculty().then(data => {
      if (Array.isArray(data) && data.length > 0) setFacultyList(data);
    }).catch(() => {});
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Distinguished Faculty & Mentors"
        description="Meet the experienced resource persons and subject matter specialists at Saaraswath IAS/KAS Academy Mysuru."
      />

      {/* Header Banner */}
      <div style={{ backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-gold)' }}>ACADEMIC LEADERSHIP</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Our Distinguished Faculty
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            Experienced educators and subject matter specialists with comprehensive mastery of UPSC CSE and KPSC KAS examinations.
          </p>
          <a
            href={getWhatsAppLink("Hello Saaraswath Academy, I would like to know more about the faculty and subjects.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{ backgroundColor: '#25D366', color: '#ffffff', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <MessageCircle size={16} /> Connect with Faculty Desk on WhatsApp
          </a>
        </div>
      </div>

      {/* Faculty Grid: 3 cards desktop, 2 tablet, 1 mobile */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-soft-blue)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.25rem'
          }}>
            {facultyList.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Faculty;
