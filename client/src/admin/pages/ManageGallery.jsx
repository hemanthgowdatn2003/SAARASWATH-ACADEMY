import React, { useState, useEffect } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { galleryService } from '../../services/galleryService';
import { Plus, Edit2, Trash2, Image as ImageIcon, RefreshCw, AlertCircle, X } from 'lucide-react';

export const ManageGallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Classroom',
    image: '/images/classroom/classroom_3.jpeg',
    description: '',
  });

  const fetchGallery = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await galleryService.getAllGallery();
      setItems(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch gallery items');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const openCreateModal = () => {
    setEditId(null);
    setFormData({
      title: '',
      category: 'Classroom',
      image: '/images/classroom/classroom_3.jpeg',
      description: '',
    });
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditId(item.id || item._id);
    setFormData({
      title: item.title || '',
      category: item.category || 'Classroom',
      image: item.image || '/images/classroom/classroom_3.jpeg',
      description: item.description || '',
    });
    setModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setSubmitting(true);
      const res = await galleryService.uploadImageFile(file);
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
        await galleryService.updateGalleryItem(editId, formData);
      } else {
        await galleryService.createGalleryItem(formData);
      }
      setModalOpen(false);
      fetchGallery();
    } catch (err) {
      setError(err.message || 'Operation failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Delete "${title}" from campus gallery?`)) {
      try {
        await galleryService.deleteGalleryItem(id);
        fetchGallery();
      } catch (err) {
        alert(err.message || 'Failed to delete');
      }
    }
  };

  return (
    <>
      <AdminHeader title="Manage Campus Gallery" />
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
              Campus Photos ({items.length})
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Manage interactive classroom, seminar, and campus photography.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={fetchGallery} className="btn btn-outline btn-sm">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={openCreateModal} className="btn btn-primary btn-sm">
              <Plus size={16} /> Add Image
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
            Loading gallery from backend...
          </div>
        ) : items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b' }}>
            No gallery images found. Click "Add Image" to create one.
          </div>
        ) : (
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {items.map((item) => (
              <div key={item.id || item._id} style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ height: '180px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = '/images/classroom/classroom_3.jpeg'; }}
                  />
                  <span className="badge badge-gold" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-900)', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem', minHeight: '38px' }}>
                    {item.description || 'Campus activity at Saaraswath Academy'}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                    <button
                      onClick={() => openEditModal(item)}
                      style={{ background: 'none', border: 'none', color: 'var(--color-primary-600)', cursor: 'pointer', padding: '0.3rem' }}
                      title="Edit Image"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id || item._id, item.title)}
                      style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.3rem' }}
                      title="Delete Image"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '520px', width: '100%', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-deep-navy)' }}>
                  {editId ? 'Edit Gallery Photo' : 'Add Campus Photo'}
                </h3>
                <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Photo Title *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={formData.title}
                    onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Category</label>
                  <select
                    className="form-select"
                    value={formData.category}
                    onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))}
                  >
                    <option value="Classroom">Classroom & Mentoring</option>
                    <option value="Workshops">Seminars & Workshops</option>
                    <option value="Achievements">Achievements & Felicitations</option>
                    <option value="Library">Library & Study Center</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Campus Photo *</label>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <img
                      src={formData.image || '/images/classroom/classroom_3.jpeg'}
                      alt="Preview"
                      style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                      onError={(e) => { e.target.src = '/images/classroom/classroom_3.jpeg'; }}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ fontSize: '0.85rem' }}
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="/images/classroom/classroom_3.jpeg"
                    className="form-control"
                    value={formData.image}
                    onChange={(e) => setFormData(p => ({ ...p, image: e.target.value }))}
                  />
                  <span style={{ fontSize: '0.74rem', color: '#64748b' }}>Upload an image file directly or enter image path/URL</span>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>Description</label>
                  <textarea
                    rows={2}
                    className="form-textarea"
                    value={formData.description}
                    onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm">Cancel</button>
                  <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                    {submitting ? 'Saving...' : editId ? 'Save Changes' : 'Add Photo'}
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

export default ManageGallery;
