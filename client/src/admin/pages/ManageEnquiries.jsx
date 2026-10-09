import React, { useState, useEffect } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { AdminTable } from '../components/AdminTable';
import { enquiryService } from '../../services/enquiryService';
import { MessageCircle, Phone, Mail, CheckCircle, Trash2, Eye, Search, Filter, RefreshCw, X, AlertCircle } from 'lucide-react';

export const ManageEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [newCount, setNewCount] = useState(0);

  // Detail Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await enquiryService.getAllEnquiries({
        status: statusFilter,
        search,
        page,
        limit: 15
      });
      if (res.enquiries) {
        setEnquiries(res.enquiries);
        setTotal(res.total || res.enquiries.length);
        setNewCount(res.newCount || 0);
        setTotalPages(res.totalPages || 1);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch enquiries from backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [search, statusFilter, page]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await enquiryService.updateEnquiryStatus(id, newStatus);
      setEnquiries(prev => prev.map(e => (e.id === id || e._id === id) ? { ...e, status: newStatus } : e));
      if (selectedEnquiry && (selectedEnquiry.id === id || selectedEnquiry._id === id)) {
        setSelectedEnquiry(prev => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      alert(err.message || 'Failed to update status');
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete the enquiry from ${name}?`)) {
      try {
        await enquiryService.deleteEnquiry(id);
        fetchEnquiries();
        if (selectedEnquiry && (selectedEnquiry.id === id || selectedEnquiry._id === id)) {
          setSelectedEnquiry(null);
        }
      } catch (err) {
        alert(err.message || 'Failed to delete enquiry');
      }
    }
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'New':
        return { backgroundColor: '#dbeafe', color: '#1e40af' };
      case 'Contacted':
        return { backgroundColor: '#fef3c7', color: '#92400e' };
      case 'Follow-up':
        return { backgroundColor: '#e0e7ff', color: '#3730a3' };
      case 'Closed':
        return { backgroundColor: '#d1fae5', color: '#065f46' };
      default:
        return { backgroundColor: '#f1f5f9', color: '#475569' };
    }
  };

  const columns = [
    {
      header: 'Applicant',
      accessor: 'name',
      render: (row) => (
        <div>
          <div style={{ fontWeight: 700, color: 'var(--color-primary-900)' }}>{row.name}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {new Date(row.createdAt).toLocaleDateString()} {new Date(row.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      )
    },
    {
      header: 'Contact Info',
      accessor: 'phone',
      render: (row) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600 }}>
            <Phone size={13} color="var(--color-primary-600)" />
            <a href={`tel:${row.phone}`} style={{ color: 'var(--color-primary-600)' }}>{row.phone}</a>
          </div>
          {row.email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#64748b' }}>
              <Mail size={12} />
              <span>{row.email}</span>
            </div>
          )}
        </div>
      )
    },
    {
      header: 'Course & Mode',
      accessor: 'courseInterested',
      render: (row) => (
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{row.courseInterested}</div>
          <span className="badge badge-blue" style={{ fontSize: '0.72rem', marginTop: '0.2rem' }}>
            {row.preferredMode || 'Classroom'}
          </span>
        </div>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => {
        const badge = getStatusBadgeStyle(row.status || 'New');
        return (
          <select
            value={row.status || 'New'}
            onChange={(e) => handleStatusChange(row.id || row._id, e.target.value)}
            className="form-select"
            style={{
              padding: '0.3rem 0.6rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              backgroundColor: badge.backgroundColor,
              color: badge.color,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Closed">Closed</option>
          </select>
        );
      }
    }
  ];

  return (
    <>
      <AdminHeader title="Admission Enquiries & Leads" />
      <div style={{ padding: '2rem' }}>
        {/* Top bar with live counters */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
              Candidate Inquiries ({total})
            </h2>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Real-time enquiries stored in MongoDB with {newCount} new/unread requests.
            </p>
          </div>
          <button onClick={fetchEnquiries} className="btn btn-outline btn-sm">
            <RefreshCw size={14} /> Refresh Enquiries
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0' }}>
          <div style={{ position: 'relative', flex: '1 1 250px' }}>
            <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="form-control"
              placeholder="Search candidate name, phone, course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: '2.2rem', fontSize: '0.85rem' }}
            />
          </div>

          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ width: 'auto', fontSize: '0.85rem' }}
          >
            <option value="All">All Statuses ({total})</option>
            <option value="New">New ({newCount})</option>
            <option value="Contacted">Contacted</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {error && (
          <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={18} /> {error}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b' }}>
            Loading candidate enquiries from database...
          </div>
        ) : (
          <AdminTable
            columns={columns}
            data={enquiries}
            actions={(row) => {
              const waText = encodeURIComponent(`Hello ${row.name}, greetings from Saaraswath IAS/KAS Academy, Mysuru regarding your enquiry for ${row.courseInterested}.`);
              return (
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <button
                    onClick={() => setSelectedEnquiry(row)}
                    style={{ background: 'none', border: 'none', color: 'var(--color-primary-600)', cursor: 'pointer', padding: '0.35rem' }}
                    title="View Full Enquiry"
                  >
                    <Eye size={16} />
                  </button>

                  <a
                    href={`https://wa.me/91${String(row.phone).replace(/\D/g, '')}?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-gold"
                    style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                    title="Direct WhatsApp"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>

                  <button
                    onClick={() => handleDelete(row.id || row._id, row.name)}
                    style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.35rem' }}
                    title="Delete Record"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            }}
          />
        )}

        {/* View Full Enquiry Modal */}
        {selectedEnquiry && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '520px', width: '100%', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-deep-navy)' }}>
                    Candidate Enquiry Details
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    Submitted: {new Date(selectedEnquiry.createdAt).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Applicant Name</strong>
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>{selectedEnquiry.name}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Mobile Phone</strong>
                    <a href={`tel:${selectedEnquiry.phone}`} style={{ color: 'var(--color-primary-blue)', fontWeight: 600 }}>{selectedEnquiry.phone}</a>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Email</strong>
                    <span>{selectedEnquiry.email || 'Not provided'}</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Course Interested</strong>
                    <span style={{ fontWeight: 600 }}>{selectedEnquiry.courseInterested}</span>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Preferred Mode</strong>
                    <span>{selectedEnquiry.preferredMode || 'Classroom'}</span>
                  </div>
                </div>

                {selectedEnquiry.qualification && (
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Qualification / College</strong>
                    <span>{selectedEnquiry.qualification}</span>
                  </div>
                )}

                <div>
                  <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Candidate Query / Notes</strong>
                  <div style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', marginTop: '0.25rem', fontSize: '0.88rem' }}>
                    {selectedEnquiry.notes || 'No specific notes provided.'}
                  </div>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '0.78rem', color: '#64748b', marginBottom: '0.3rem' }}>Update Status</strong>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['New', 'Contacted', 'Follow-up', 'Closed'].map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => handleStatusChange(selectedEnquiry.id || selectedEnquiry._id, st)}
                        className={`btn btn-sm ${selectedEnquiry.status === st ? 'btn-primary' : 'btn-outline'}`}
                        style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button onClick={() => setSelectedEnquiry(null)} className="btn btn-outline btn-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageEnquiries;
