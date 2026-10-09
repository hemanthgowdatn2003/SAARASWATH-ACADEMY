import React, { useState, useEffect } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { AdminTable } from '../components/AdminTable';
import { achievementService } from '../../services/achievementService';
import { Plus, Edit2, Trash2, Award, RefreshCw, AlertCircle, X } from 'lucide-react';

export const ManageAchievements = () => {
  const [achievers, setAchievers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    exam: 'UPSC Civil Services',
    batch: 'Batch 2024-25',
    role: '',
    quote: '',
    image: '/images/achievements/sri-pooja.jpg'
  });

  const fetchAchievers = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await achievementService.getAllAchievements();
      setAchievers(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch achievers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAchievers();
  }, []);

  const openCreateModal = () => {
    setEditId(null);
    setFormData({
      name: '',
      exam: 'UPSC Civil Services',
      batch: 'Batch 2024-25',
      role: '',
      quote: '',
      image: '/images/achievements/sri-pooja.jpg'
    });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditId(item.id || item._id);
    setFormData({
      name: item.name || '',
      exam: item.exam || 'UPSC Civil Services',
      batch: item.batch || 'Batch 2024-25',
      role: item.role || '',
      quote: item.quote || '',
      image: item.image || '/images/achievements/sri-pooja.jpg'
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      if (editId) {
        await achievementService.updateAchievement(editId, formData);
      } else {
        await achievementService.createAchievement(formData);
      }
      setModalOpen(false);
      fetchAchievers();
    } catch (err) {
      setError(err.message || 'Operation failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}" from achievers?`)) {
      try {
        await achievementService.deleteAchievement(id);
        fetchAchievers();
      } catch (err) {
        alert(err.message || 'Failed to delete');
      }
    }
  };

  const columns = [
    {
      header: 'Officer / Candidate',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.image || '/images/founder/dr-vasanth-kumar.jpg'}
            alt={row.name}
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
            onError={(e) => { e.target.src = '/images/founder/dr-vasanth-kumar.jpg'; }}
          />
          <div>
            <strong style={{ color: 'var(--color-primary-900)' }}>{row.name}</strong>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{row.role}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Exam Qualified',
      accessor: 'exam',
      render: (row) => <span className="badge badge-gold">{row.exam}</span>
    },
    { header: 'Batch', accessor: 'batch' },
  ];

  return (
    <>
      <AdminHeader title="Manage Achievements & Selections" />
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
              Officer Hall of Fame ({achievers.length})
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Selected candidates and competitive exam rank holders from Saaraswath Academy.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={fetchAchievers} className="btn btn-outline btn-sm">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={openCreateModal} className="btn btn-primary btn-sm">
              <Plus size={16} /> Add Candidate Record
            </button>
          </div>
        </div>

        {error && (
          <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={18} /> {error}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b' }}>
            Loading achievers from backend...
          </div>
        ) : (
          <AdminTable
            columns={columns}
            data={achievers}
            actions={(row) => (
              <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => openEditModal(row)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-primary-600)', cursor: 'pointer', padding: '0.35rem' }}
                  title="Edit Record"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(row.id || row._id, row.name)}
                  style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.35rem' }}
                  title="Delete Record"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          />
        )}

        {/* Modal */}
        {modalOpen && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '520px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-deep-navy)' }}>
                  {editId ? 'Edit Candidate Record' : 'Add Candidate Selection'}
                </h3>
                <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Candidate Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Exam Qualified *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. KPSC KAS / PSI"
                      className="form-control"
                      value={formData.exam}
                      onChange={(e) => setFormData(p => ({ ...p, exam: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Batch Year</label>
                    <input
                      type="text"
                      placeholder="e.g. Batch 2024"
                      className="form-control"
                      value={formData.batch}
                      onChange={(e) => setFormData(p => ({ ...p, batch: e.target.value }))}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Designation / Current Role</label>
                  <input
                    type="text"
                    placeholder="e.g. Assistant Commissioner / PSI Selection"
                    className="form-control"
                    value={formData.role}
                    onChange={(e) => setFormData(p => ({ ...p, role: e.target.value }))}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Photograph Path or URL</label>
                  <input
                    type="text"
                    placeholder="/images/achievements/sri-pooja.jpg"
                    className="form-control"
                    value={formData.image}
                    onChange={(e) => setFormData(p => ({ ...p, image: e.target.value }))}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Testimonial / Quote</label>
                  <textarea
                    rows={3}
                    className="form-textarea"
                    placeholder="Candidate feedback on mentoring..."
                    value={formData.quote}
                    onChange={(e) => setFormData(p => ({ ...p, quote: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm">Cancel</button>
                  <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                    {submitting ? 'Saving...' : editId ? 'Save Changes' : 'Add Candidate'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageAchievements;
