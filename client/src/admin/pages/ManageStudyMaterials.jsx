import React, { useState, useEffect } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { AdminTable } from '../components/AdminTable';
import { studyMaterialService } from '../../services/studyMaterialService';
import { Plus, Edit2, Trash2, FileText, CheckCircle2, Eye, Download, Search, AlertCircle, RefreshCw, UploadCloud } from 'lucide-react';

export const ManageStudyMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    resourceType: 'Question Paper',
    examination: 'UPSC',
    subject: 'General Studies',
    year: '2026',
    description: '',
    isPublished: true,
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const subjectsList = [
    'General Studies',
    'Indian Polity',
    'History',
    'Geography',
    'Indian Economy',
    'Science & Technology',
    'Environment & Ecology',
    'Karnataka General Knowledge',
    'Current Affairs',
    'CSAT & Mental Ability',
    'Essay & Answer Writing'
  ];

  const fetchMaterials = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await studyMaterialService.getAdminMaterials({
        search,
        status: statusFilter,
        resourceType: typeFilter,
        limit: 100
      });
      if (res.materials) {
        setMaterials(res.materials);
      }
    } catch (err) {
      setError(err.message || 'Failed to load study materials');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, [search, statusFilter, typeFilter]);

  const openCreateModal = () => {
    setEditId(null);
    setFormData({
      title: '',
      resourceType: 'Question Paper',
      examination: 'UPSC',
      subject: 'General Studies',
      year: '2026',
      description: '',
      isPublished: true,
    });
    setSelectedFile(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditId(item.id || item._id);
    setFormData({
      title: item.title,
      resourceType: item.resourceType || 'Question Paper',
      examination: item.examination || 'UPSC',
      subject: item.subject || 'General Studies',
      year: item.year || '',
      description: item.description || '',
      isPublished: item.isPublished !== undefined ? item.isPublished : true,
    });
    setSelectedFile(null);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('resourceType', formData.resourceType);
      data.append('examination', formData.examination);
      data.append('subject', formData.subject);
      data.append('year', formData.year);
      data.append('description', formData.description);
      data.append('isPublished', String(formData.isPublished));

      if (selectedFile) {
        data.append('file', selectedFile);
      }

      if (editId) {
        await studyMaterialService.updateMaterial(editId, data);
      } else {
        await studyMaterialService.createMaterial(data);
      }

      setModalOpen(false);
      fetchMaterials();
    } catch (err) {
      setError(err.message || 'Operation failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This will permanently remove the record and its document file.`)) {
      try {
        await studyMaterialService.deleteMaterial(id);
        fetchMaterials();
      } catch (err) {
        alert(err.message || 'Failed to delete');
      }
    }
  };

  const handleTogglePublish = async (id, currentStatus) => {
    try {
      await studyMaterialService.togglePublish(id, !currentStatus);
      fetchMaterials();
    } catch (err) {
      alert(err.message || 'Failed to update publish status');
    }
  };

  const columns = [
    {
      header: 'Title & Type',
      accessor: 'title',
      render: (row) => (
        <div>
          <div style={{ fontWeight: 700, color: 'var(--color-primary-900)', fontSize: '0.92rem' }}>{row.title}</div>
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.25rem' }}>
            <span className={row.resourceType === 'Question Paper' ? 'badge badge-gold' : 'badge badge-blue'} style={{ fontSize: '0.7rem' }}>
              {row.resourceType}
            </span>
            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>• {row.examination}</span>
            {row.year && <span style={{ fontSize: '0.7rem', color: '#64748b' }}>• {row.year}</span>}
          </div>
        </div>
      )
    },
    { header: 'Subject', accessor: 'subject' },
    {
      header: 'File & Size',
      accessor: 'fileSize',
      render: (row) => (
        <div style={{ fontSize: '0.8rem' }}>
          <div>{row.fileSize || '1.5 MB'}</div>
          <a
            href={`/api/study-materials/${row.id || row._id}/download`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-primary-600)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.2rem' }}
          >
            <Eye size={12} /> View PDF
          </a>
        </div>
      )
    },
    {
      header: 'Status',
      accessor: 'isPublished',
      render: (row) => (
        <button
          type="button"
          onClick={() => handleTogglePublish(row.id || row._id, row.isPublished)}
          style={{
            border: 'none',
            borderRadius: 'var(--radius-full)',
            padding: '0.3rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: row.isPublished ? '#d1fae5' : '#f1f5f9',
            color: row.isPublished ? '#065f46' : '#64748b'
          }}
          title="Click to toggle published / draft"
        >
          {row.isPublished ? 'Published' : 'Draft'}
        </button>
      )
    }
  ];

  return (
    <>
      <AdminHeader title="Manage Study Materials & Question Papers" />
      <div style={{ padding: '2rem' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
              Document Vault ({materials.length})
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Upload, edit, publish, and delete previous year papers and faculty notes.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={fetchMaterials} className="btn btn-outline btn-sm">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={openCreateModal} className="btn btn-primary btn-sm">
              <Plus size={16} /> Upload Study Material
            </button>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0' }}>
          <div style={{ position: 'relative', flex: '1 1 250px' }}>
            <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="form-control"
              placeholder="Search by title, subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: '2.2rem', fontSize: '0.85rem' }}
            />
          </div>

          <select
            className="form-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            style={{ width: 'auto', fontSize: '0.85rem' }}
          >
            <option value="All">All Types</option>
            <option value="Question Paper">Question Papers</option>
            <option value="Study Notes">Study Notes</option>
          </select>

          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ width: 'auto', fontSize: '0.85rem' }}
          >
            <option value="All">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
          </select>
        </div>

        {error && (
          <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <AdminTable
          columns={columns}
          data={materials}
          actions={(row) => (
            <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => openEditModal(row)}
                style={{ background: 'none', border: 'none', color: 'var(--color-primary-600)', cursor: 'pointer', padding: '0.35rem' }}
                title="Edit Document"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => handleDelete(row.id || row._id, row.title)}
                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.35rem' }}
                title="Delete Document"
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}
        />

        {/* Create / Edit Modal */}
        {modalOpen && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '580px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: 'var(--shadow-xl)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--color-deep-navy)' }}>
                {editId ? 'Edit Study Material' : 'Upload New Study Material'}
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    Document Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. UPSC CSE Prelims 2024 - GS Paper I"
                    value={formData.title}
                    onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Resource Type *
                    </label>
                    <select
                      className="form-select"
                      value={formData.resourceType}
                      onChange={(e) => setFormData(p => ({ ...p, resourceType: e.target.value }))}
                    >
                      <option value="Question Paper">Question Paper</option>
                      <option value="Study Notes">Study Notes</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Examination *
                    </label>
                    <select
                      className="form-select"
                      value={formData.examination}
                      onChange={(e) => setFormData(p => ({ ...p, examination: e.target.value }))}
                    >
                      <option value="UPSC">UPSC Civil Services</option>
                      <option value="KAS">KPSC KAS</option>
                      <option value="Other">Other Competitive Exams</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Subject *
                    </label>
                    <select
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                    >
                      {subjectsList.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      Examination Year (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2024 or 2025"
                      className="form-control"
                      value={formData.year}
                      onChange={(e) => setFormData(p => ({ ...p, year: e.target.value }))}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    Description
                  </label>
                  <textarea
                    rows={2}
                    className="form-textarea"
                    placeholder="Short summary of topics or question paper details..."
                    value={formData.description}
                    onChange={(e) => setFormData(p => ({ ...p, description: e.target.value }))}
                  />
                </div>

                {/* PDF File Upload */}
                <div style={{ marginBottom: '1.25rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px dashed #cbd5e1' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    PDF Document File {editId ? '(Leave empty to keep existing file)' : '*'}
                  </label>
                  <input
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={(e) => setSelectedFile(e.target.files[0] || null)}
                    style={{ fontSize: '0.85rem' }}
                  />
                  <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '0.25rem' }}>
                    Only authentic PDF documents accepted (max 50MB).
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    id="isPublished"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData(p => ({ ...p, isPublished: e.target.checked }))}
                  />
                  <label htmlFor="isPublished" style={{ fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' }}>
                    Publish immediately on website
                  </label>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm">
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                    {submitting ? 'Saving...' : editId ? 'Update Document' : 'Publish Document'}
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

export default ManageStudyMaterials;
