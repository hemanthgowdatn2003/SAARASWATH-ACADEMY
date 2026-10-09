import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { ACADEMY_INFO } from '../utils/constants';

export const Terms = () => {
  return (
    <PageLayout>
      <SEO
        title="Terms of Service"
        description="Terms and conditions for student admissions, code of conduct, and academic guidelines at Saaraswath Academy."
      />

      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3rem' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Terms and Conditions</h1>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Academic Guidelines & Enrollment Agreement
          </p>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#334155', lineHeight: 1.7 }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)' }}>
              1. Admission & Enrollment
            </h3>
            <p>
              Admission to all UPSC, KAS, and competitive coaching batches at {ACADEMY_INFO.name} is subject to eligibility verification and seat availability.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)' }}>
              2. Classroom Discipline & Code of Conduct
            </h3>
            <p>
              Enrolled students are expected to maintain the highest standards of decorum, attendance, and respect towards faculty and fellow aspirants in the classroom and study halls.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)' }}>
              3. Study Material & Intellectual Property
            </h3>
            <p>
              All proprietary study notes, booklets, test papers, and model answers provided by {ACADEMY_INFO.name} are for the personal educational use of the enrolled student only. Unauthorized reproduction, distribution, or digital re-hosting is strictly prohibited.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)' }}>
              4. Changes to Schedules & Faculty
            </h3>
            <p>
              The management reserves the right to modify class schedules or assign faculty specialists based on pedagogical requirements and exam cycle demands.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
