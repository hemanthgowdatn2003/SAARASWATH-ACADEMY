import React, { useState } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { FileText, Save, CheckCircle2 } from 'lucide-react';

export const ManageSyllabus = () => {
  const [saved, setSaved] = useState(false);
  const [upscNotes, setUpscNotes] = useState(
    'UPSC CSE Prelims: GS-I (200 M, 100 Qs), CSAT Paper II (200 M, 80 Qs, Qualifying 33%). Mains: 1750 Written Marks + 275 Personality Test.'
  );
  const [kasNotes, setKasNotes] = useState(
    'KPSC KAS Prelims: Paper 1 (200 M, 100 Qs) + Paper 2 (200 M, 100 Qs). Mains: 1250 Written Marks + Personality Test = 1275 Marks.'
  );

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <AdminHeader title="Manage Syllabus & Exam Schemes" />
      <div style={{ padding: '2rem', maxWidth: '900px' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
            Curriculum & Examination Pattern Overview
          </h2>

          {saved && (
            <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
              <CheckCircle2 size={16} /> Syllabus settings updated successfully!
            </div>
          )}

          <form onSubmit={handleSave}>
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                UPSC Civil Services Syllabus Summary
              </label>
              <textarea
                rows={4}
                className="form-textarea"
                value={upscNotes}
                onChange={(e) => setUpscNotes(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                KPSC KAS Gazetted Probationers Syllabus Summary
              </label>
              <textarea
                rows={4}
                className="form-textarea"
                value={kasNotes}
                onChange={(e) => setKasNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              <Save size={16} /> Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageSyllabus;
