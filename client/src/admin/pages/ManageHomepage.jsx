import React, { useState } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { Save, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../../utils/constants';

export const ManageHomepage = () => {
  const [formData, setFormData] = useState({
    heroTitle: 'The Success Blueprint for UPSC & KAS Aspirants',
    heroSubtitle: `Led by ${ACADEMY_INFO.founder} with 15+ years of academic mentorship experience. Offering conceptual clarity, rigorous answer writing, standard reference coverage, and individual focus in Kuvempunagar, Mysuru.`,
    bannerText: 'Admissions Open for 2026-27 Batches',
    directorQuote: 'Success in civil services isn\'t merely about reading countless books; it is about building conceptual clarity, disciplined revision habits, and the courage to articulate ideas with conviction.',
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <AdminHeader title="Manage Homepage Content" />
      <div style={{ padding: '2rem', maxWidth: '850px' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
            Homepage Headings & Banners
          </h2>

          {saved && (
            <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <CheckCircle2 size={16} /> Homepage content saved successfully!
            </div>
          )}

          <form onSubmit={handleSave}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                Main Hero Heading
              </label>
              <input
                type="text"
                className="form-control"
                value={formData.heroTitle}
                onChange={(e) => setFormData(p => ({ ...p, heroTitle: e.target.value }))}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                Hero Subheading / Value Proposition
              </label>
              <textarea
                rows={3}
                className="form-textarea"
                value={formData.heroSubtitle}
                onChange={(e) => setFormData(p => ({ ...p, heroSubtitle: e.target.value }))}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                Top Admission Announcement Banner
              </label>
              <input
                type="text"
                className="form-control"
                value={formData.bannerText}
                onChange={(e) => setFormData(p => ({ ...p, bannerText: e.target.value }))}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                Director Quote Spotlight
              </label>
              <textarea
                rows={3}
                className="form-textarea"
                value={formData.directorQuote}
                onChange={(e) => setFormData(p => ({ ...p, directorQuote: e.target.value }))}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <Save size={16} /> Update Homepage
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageHomepage;
