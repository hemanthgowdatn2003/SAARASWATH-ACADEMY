import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { ACADEMY_INFO } from '../utils/constants';

export const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection guidelines of Saaraswath IAS/KAS Academy Mysuru."
      />

      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3rem' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Privacy Policy</h1>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Last updated: October 2026
          </p>
        </div>
      </div>

      <section className="section-py bg-white">
        <div className="container container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#334155', lineHeight: 1.7 }}>
            <p>
              At <strong>{ACADEMY_INFO.name}</strong>, we respect your privacy and are committed to protecting the personal information you share with us through our website and academic enquiry channels.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)', marginTop: '1rem' }}>
              1. Information We Collect
            </h3>
            <p>
              When you submit an admission inquiry or request course brochures, we may collect your name, phone number, email address, academic qualification, and preferred program. This information is strictly utilized to provide academic guidance and admissions counseling.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)', marginTop: '1rem' }}>
              2. How We Use Your Information
            </h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>To contact you regarding batch schedules, syllabus details, and admission counseling.</li>
              <li>To send requested academic brochures, question papers, and seminar updates.</li>
              <li>To improve our coaching curriculum and student experience.</li>
            </ul>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)', marginTop: '1rem' }}>
              3. Data Security & Third Parties
            </h3>
            <p>
              We do not sell, rent, or trade your personal data to any external marketing agencies. All records remain confidential within our administrative desk.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary-900)', marginTop: '1rem' }}>
              4. Contact Us
            </h3>
            <p>
              If you have any questions about this policy, you may reach us at <strong>{ACADEMY_INFO.email}</strong> or visit our office at {ACADEMY_INFO.address}.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
