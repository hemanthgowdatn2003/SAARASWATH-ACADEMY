import React, { useState, useEffect } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { AdminTable } from '../components/AdminTable';
import { facultyService } from '../../services/facultyService';
import { Plus, Edit2, Trash2, RefreshCw, AlertCircle, X, User } from 'lucide-react';
import { getAssetUrl } from '../../utils/helpers';

export const ManageFaculty = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: 'Faculty',
    specialization: '',
    experience: '',
    bio: '',
    image: '',
  });

  const fetchFaculty = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await facultyService.getAllFaculty();
      setFacultyList(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch faculty from backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  const openCreateModal = () => {
    setEditId(null);
    setFormData({
      name: '',
      role: 'Faculty',
      specialization: '',
      experience: '',
      bio: '',
      image: '/images/founder/dr-vasanth-kumar.jpg',
    });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditId(item.id || item._id);
    setFormData({
      name: item.name || '',
      role: item.role || 'Faculty',
      specialization: item.specialization || '',
      experience: item.experience || '',
      bio: item.bio || '',
      image: item.image || '/images/founder/dr-vasanth-kumar.jpg',
    });
    setModalOpen(true);
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setSubmitting(true);
      const res = await facultyService.uploadFacultyPhoto(file);
      if (res && res.imageUrl) {
        setFormData(p => ({ ...p, image: res.imageUrl }));
      }
    } catch (err) {
      alert('Photo upload failed: ' + (err.message || 'Unknown error'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      if (editId) {
        await facultyService.updateFaculty(editId, formData);
      } else {
        await facultyService.createFaculty(formData);
      }
      setModalOpen(false);
      fetchFaculty();
    } catch (err) {
      setError(err.message || 'Operation failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}" from faculty list?`)) {
      try {
        await facultyService.deleteFaculty(id);
        fetchFaculty();
      } catch (err) {
        alert(err.message || 'Failed to delete faculty');
      }
    }
  };

  const columns = [
    {
      header: 'Photo & Name',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={getAssetUrl(row.image || '/images/founder/dr-vasanth-kumar.jpg')}
            alt={row.name}
            style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 15%', border: '2px solid var(--color-gold)' }}
            onError={(e) => { e.target.src = getAssetUrl('/images/founder/dr-vasanth-kumar.jpg'); }}
          />
          <div>
            <strong style={{ color: 'var(--color-primary-900)' }}>{row.name}</strong>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{row.role}</div>
          </div>
        </div>
      )
    },
    { header: 'Specialization', accessor: 'specialization' },
    { header: 'Experience', accessor: 'experience' },
  ];

  return (
    <>
      <AdminHeader title="Manage Faculty" />
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
              Faculty Members ({facultyList.length})
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Resource persons and subject mentors showcased across the academy portal.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={fetchFaculty} className="btn btn-outline btn-sm">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={openCreateModal} className="btn btn-primary btn-sm">
              <Plus size={16} /> Add Faculty Member
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
            Loading faculty profiles from backend...
          </div>
        ) : (
          <AdminTable
            columns={columns}
            data={facultyList}
            actions={(row) => (
              <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => openEditModal(row)}
                  style={{ background: 'none', border: 'none', color: 'var(--color-primary-600)', cursor: 'pointer', padding: '0.35rem' }}
                  title="Edit Faculty"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(row.id || row._id, row.name)}
                  style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.35rem' }}
                  title="Delete Faculty"
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
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '520px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-deep-navy)' }}>
                  {editId ? 'Edit Faculty Profile' : 'Add Faculty Member'}
                </h3>
                <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Faculty Name *</label>
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
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Designation / Role</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.role}
                      onChange={(e) => setFormData(p => ({ ...p, role: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 8+ Years"
                      className="form-control"
                      value={formData.experience}
                      onChange={(e) => setFormData(p => ({ ...p, experience: e.target.value }))}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Subject Specialization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Geography & Ecology"
                    className="form-control"
                    value={formData.specialization}
                    onChange={(e) => setFormData(p => ({ ...p, specialization: e.target.value }))}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Faculty Photograph</label>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <img
                      src={formData.image || '/images/founder/dr-vasanth-kumar.jpg'}
                      alt="Preview"
                      style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-gold)' }}
                      onError={(e) => { e.target.src = '/images/founder/dr-vasanth-kumar.jpg'; }}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      style={{ fontSize: '0.85rem' }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="/images/faculty/sri-raghu-m-raj.jpg"
                    className="form-control"
                    value={formData.image}
                    onChange={(e) => setFormData(p => ({ ...p, image: e.target.value }))}
                  />
                  <span style={{ fontSize: '0.74rem', color: '#64748b' }}>Upload an image file directly or enter a photo URL/path.</span>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Short Biography</label>
                  <textarea
                    rows={3}
                    className="form-textarea"
                    value={formData.bio}
                    onChange={(e) => setFormData(p => ({ ...p, bio: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm">Cancel</button>
                  <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                    {submitting ? 'Saving...' : editId ? 'Save Profile' : 'Add Faculty'}
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

export default ManageFaculty;
