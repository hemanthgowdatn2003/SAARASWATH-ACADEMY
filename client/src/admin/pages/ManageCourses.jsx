import React, { useState, useEffect } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { AdminTable } from '../components/AdminTable';
import { courseService } from '../../services/courseService';
import { Plus, Edit2, Trash2, CheckCircle2, AlertCircle, RefreshCw, X } from 'lucide-react';

export const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal & Form State
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'UPSC',
    duration: '',
    mode: 'Classroom & Hybrid Online',
    badge: 'Popular',
    description: '',
    eligibility: 'Graduation in any discipline',
    batchTimings: 'Regular & Weekend Batches'
  });

  const fetchCourses = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await courseService.getAllCourses();
      setCourses(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch courses from backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const openCreateModal = () => {
    setEditId(null);
    setFormData({
      title: '',
      category: 'UPSC',
      duration: '',
      mode: 'Classroom & Hybrid Online',
      badge: 'Popular',
      description: '',
      eligibility: 'Graduation in any discipline',
      batchTimings: 'Regular & Weekend Batches'
    });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditId(item.id || item._id);
    setFormData({
      title: item.title || '',
      category: item.category || 'UPSC',
      duration: item.duration || '',
      mode: item.mode || 'Classroom & Hybrid Online',
      badge: item.badge || 'Popular',
      description: item.description || '',
      eligibility: item.eligibility || '',
      batchTimings: item.batchTimings || ''
    });
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      if (editId) {
        await courseService.updateCourse(editId, formData);
      } else {
        await courseService.createCourse(formData);
      }
      setModalOpen(false);
      fetchCourses();
    } catch (err) {
      setError(err.message || 'Operation failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        await courseService.deleteCourse(id);
        fetchCourses();
      } catch (err) {
        alert(err.message || 'Failed to delete course');
      }
    }
  };

  const columns = [
    {
      header: 'Title',
      accessor: 'title',
      render: (row) => (
        <div>
          <strong style={{ color: 'var(--color-primary-900)' }}>{row.title}</strong>
          {row.badge && <span className="badge badge-gold" style={{ marginLeft: '0.5rem', fontSize: '0.68rem' }}>{row.badge}</span>}
        </div>
      )
    },
    {
      header: 'Category',
      accessor: 'category',
      render: (row) => <span className="badge badge-blue">{row.category}</span>
    },
    { header: 'Duration', accessor: 'duration' },
    { header: 'Mode', accessor: 'mode' },
  ];

  return (
    <>
      <AdminHeader title="Manage Courses" />
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
              Course Catalog ({courses.length})
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Add, modify, and update courses visible on the public website.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={fetchCourses} className="btn btn-outline btn-sm">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={openCreateModal} className="btn btn-primary btn-sm">
              <Plus size={16} /> Add New Course
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
            Loading course catalog from backend...
          </div>
        ) : (
          <AdminTable
            columns={columns}
            data={courses}
            actions={(row) => (
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => openEditModal(row)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-primary-600)', cursor: 'pointer', padding: '0.3rem' }}
                  title="Edit Course"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(row.id || row._id, row.title)}
                  style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.3rem' }}
                  title="Delete Course"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          />
        )}

        {/* Create / Edit Modal */}
        {modalOpen && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '580px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-deep-navy)' }}>
                  {editId ? 'Edit Course Details' : 'Add New Course'}
                </h3>
                <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Course Title *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Category *</label>
                    <select
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))}
                    >
                      <option value="UPSC">UPSC</option>
                      <option value="KAS">KAS</option>
                      <option value="Police Services">Police Services</option>
                      <option value="Foundation">Foundation</option>
                      <option value="Optional">Optional</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Duration *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1 Year / 10 Months"
                      className="form-control"
                      value={formData.duration}
                      onChange={(e) => setFormData(p => ({ ...p, duration: e.target.value }))}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Learning Mode</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.mode}
                      onChange={(e) => setFormData(p => ({ ...p, mode: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Badge / Tag</label>
                    <input
                      type="text"
                      placeholder="e.g. Flagship / State Premier"
                      className="form-control"
                      value={formData.badge}
                      onChange={(e) => setFormData(p => ({ ...p, badge: e.target.value }))}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Description</label>
                  <textarea
                    rows={3}
                    className="form-textarea"
                    value={formData.description}
                    onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Eligibility</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.eligibility}
                      onChange={(e) => setFormData(p => ({ ...p, eligibility: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Batch Timings</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.batchTimings}
                      onChange={(e) => setFormData(p => ({ ...p, batchTimings: e.target.value }))}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm">
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                    {submitting ? 'Saving...' : editId ? 'Save Changes' : 'Create Course'}
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

export default ManageCourses;
