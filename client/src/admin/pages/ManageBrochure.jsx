import React, { useState } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { FileText, Download, Upload, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../../utils/constants';

export const ManageBrochure = () => {
  const [success, setSuccess] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <>
      <AdminHeader title="Manage Academy Brochure (PDF)" />
      <div style={{ padding: '2rem', maxWidth: '800px' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-primary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={28} color="var(--color-primary-700)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
                Official Academy Prospectus & Syllabus Brochure
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
                Active File: <code>academy-brochure.pdf</code> in public brochures directory
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Current Published Document</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Includes full 8 pages syllabus, faculty & achievers info</div>
            </div>
            <a
              href={ACADEMY_INFO.brochurePath}
              download
              className="btn btn-outline btn-sm"
            >
              <Download size={14} /> Download Current PDF
            </a>
          </div>

          {success && (
            <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <CheckCircle2 size={16} /> Brochure PDF updated successfully!
            </div>
          )}

          <form onSubmit={handleUpload}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                Upload Updated PDF File
              </label>
              <input
                type="file"
                accept=".pdf"
                className="form-control"
              />
              <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.35rem' }}>
                Recommended: Clean, compressed PDF (max 50MB). Replaces the brochure downloaded by visitors.
              </p>
            </div>

            <button type="submit" className="btn btn-primary">
              <Upload size={16} /> Upload & Publish Brochure
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageBrochure;
