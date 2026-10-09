import React, { useState, useEffect } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { BookOpen, Users, Trophy, Image, Inbox, FileText, ArrowUpRight, CheckCircle, Clock, RefreshCw, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dashboardService } from '../../services/dashboardService';

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalFaculty: 0,
    totalAchievers: 0,
    totalGallery: 0,
    totalEnquiries: 0,
    newEnquiries: 0,
    totalQuestionPapers: 0,
    totalStudyNotes: 0,
    totalStudyMaterials: 0,
    recentMaterials: [],
    recentEnquiries: []
  });

  const loadMetrics = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await dashboardService.getStats();
      if (res && res.stats) {
        setStats(res.stats);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch dashboard metrics from backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMetrics();
  }, []);

  const cards = [
    { title: 'Total Student Enquiries', count: stats.totalEnquiries, subtitle: `${stats.newEnquiries} New / Unread`, icon: Inbox, color: '#16a34a', link: '/admin/enquiries' },
    { title: 'Question Papers', count: stats.totalQuestionPapers, subtitle: 'UPSC & KAS Vault', icon: FileText, color: '#d97706', link: '/admin/study-materials' },
    { title: 'Study Notes', count: stats.totalStudyNotes, subtitle: 'Subject Summaries', icon: BookOpen, color: '#2563eb', link: '/admin/study-materials' },
    { title: 'Active Courses', count: stats.totalCourses, subtitle: 'Brochure Programs', icon: BookOpen, color: '#0891b2', link: '/admin/courses' },
    { title: 'Faculty Members', count: stats.totalFaculty, subtitle: 'Senior Mentors', icon: Users, color: '#4f46e5', link: '/admin/faculty' },
    { title: 'Gallery Assets', count: stats.totalGallery, subtitle: 'Campus & Events', icon: Image, color: '#7c3aed', link: '/admin/gallery' },
  ];

  return (
    <>
      <AdminHeader title="Executive Dashboard" />
      <div style={{ padding: '2rem' }}>
        {/* Top welcome banner */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
              Academy Overview & Lead Center
            </h2>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              Real-time analytics and management for Saaraswath IAS/KAS Academy.
            </p>
          </div>
          <button
            onClick={loadMetrics}
            className="btn btn-outline btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <RefreshCw size={14} /> Refresh Data
          </button>
        </div>

        {error && (
          <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle size={18} /> {error}
          </div>
        )}

        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: `${c.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: c.color,
                  }}>
                    <Icon size={20} />
                  </div>
                  <Link to={c.link} style={{ color: '#94a3b8' }}>
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
                    {loading ? '...' : c.count}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                    {c.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.2rem' }}>
                    {c.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout: Recent Enquiries & Recent Materials */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem' }}>
          {/* Recent Enquiries Table */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '1.75rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
                  Recent Student Enquiries
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Latest admission requests received</span>
              </div>
              <Link to="/admin/enquiries" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-600)' }}>
                View All →
              </Link>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: '#94a3b8' }}>Loading inquiries...</div>
            ) : stats.recentEnquiries.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: '#94a3b8' }}>No enquiries received yet.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {stats.recentEnquiries.map((enq) => (
                  <div
                    key={enq.id || enq._id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-900)' }}>
                        {enq.name}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                        {enq.phone} • {enq.courseInterested}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: enq.status === 'New' ? '#dbeafe' : enq.status === 'Contacted' ? '#fef3c7' : '#d1fae5',
                        color: enq.status === 'New' ? '#1e40af' : enq.status === 'Contacted' ? '#92400e' : '#065f46'
                      }}
                    >
                      {enq.status || 'New'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Study Materials Uploaded */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '1.75rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
                  Recently Uploaded Materials
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Question papers & study notes</span>
              </div>
              <Link to="/admin/study-materials" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-600)' }}>
                View All →
              </Link>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: '#94a3b8' }}>Loading materials...</div>
            ) : stats.recentMaterials.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: '#94a3b8' }}>No materials uploaded yet.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {stats.recentMaterials.map((mat) => (
                  <div
                    key={mat.id || mat._id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-primary-900)', maxWidth: '280px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {mat.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        {mat.resourceType} • {mat.examination} ({mat.fileSize || '1.5 MB'})
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.5rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: mat.isPublished ? '#d1fae5' : '#f1f5f9',
                        color: mat.isPublished ? '#065f46' : '#64748b'
                      }}
                    >
                      {mat.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
