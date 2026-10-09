import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { StudyMaterialCard } from '../components/study-materials/StudyMaterialCard';
import { StudyMaterialFilters } from '../components/study-materials/StudyMaterialFilters';
import { studyMaterialService } from '../services/studyMaterialService';
import { FileText, BookOpen, AlertCircle, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

export const StudyMaterials = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'All';
  const initialExam = searchParams.get('exam') || 'All';

  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filter States
  const [search, setSearch] = useState('');
  const [examination, setExamination] = useState(initialExam);
  const [resourceType, setResourceType] = useState(initialType);
  const [subject, setSubject] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl) setResourceType(typeFromUrl);
    const examFromUrl = searchParams.get('exam');
    if (examFromUrl) setExamination(examFromUrl);
  }, [searchParams]);

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
    'CSAT & Mental Ability'
  ];

  const fetchMaterials = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await studyMaterialService.getPublicMaterials({
        search,
        examination,
        resourceType,
        subject,
        page,
        limit: 12
      });

      if (res.materials) {
        setMaterials(res.materials);
        setTotal(res.total || res.materials.length);
        setTotalPages(res.totalPages || 1);
      }
    } catch (err) {
      setError(err.message || 'Failed to load study materials. Please verify backend connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, [search, examination, resourceType, subject, page]);

  const resetFilters = () => {
    setSearch('');
    setExamination('All');
    setResourceType('All');
    setSubject('All');
    setPage(1);
  };

  return (
    <PageLayout>
      <SEO
        title="Previous Year Question Papers & Study Notes"
        description="Download authentic UPSC & KPSC KAS previous year question papers, high-yield study notes, Karnataka GK summaries, and model answers from Saaraswath Academy."
      />

      {/* Header Banner */}
      <div style={{ backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-gold)' }}>
            OFFICIAL KNOWLEDGE & QUESTION VAULT
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Previous Year Question Papers & Study Notes
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '720px', margin: '0 auto' }}>
            Free, verified question banks and comprehensive revision notes curated by faculty mentors of Saaraswath IAS/KAS Academy, Mysuru.
          </p>
        </div>
      </div>

      <section className="section-py" style={{ backgroundColor: 'var(--color-soft-blue, #F3F8FF)' }}>
        <div className="container">
          {/* Filters Bar */}
          <StudyMaterialFilters
            search={search}
            setSearch={setSearch}
            examination={examination}
            setExamination={setExamination}
            resourceType={resourceType}
            setResourceType={setResourceType}
            subject={subject}
            setSubject={setSubject}
            subjectsList={subjectsList}
            resetFilters={resetFilters}
          />

          {/* Results Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>
              Showing {materials.length} of {total} Published Documents
            </div>
            <button
              onClick={fetchMaterials}
              className="btn btn-sm"
              style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#475569', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}
            >
              <RefreshCw size={14} /> Refresh Catalog
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '1.25rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>Loading study materials & question papers...</div>
            </div>
          ) : materials.length === 0 ? (
            /* Empty State */
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '4rem 2rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-light-cyan)', color: 'var(--color-primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <FileText size={32} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.5rem' }}>
                No Documents Match Your Filters
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                Try adjusting your search query, examination category, or clearing filters to view all documents.
              </p>
              <button onClick={resetFilters} className="btn btn-primary btn-sm">
                Clear Filters
              </button>
            </div>
          ) : (
            /* Documents Grid */
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
                {materials.map((item) => (
                  <StudyMaterialCard key={item.id || item._id} material={item} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    disabled={page <= 1}
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    className="btn btn-sm btn-outline"
                    style={{ padding: '0.45rem 0.8rem', opacity: page <= 1 ? 0.5 : 1 }}
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>

                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-deep-navy)' }}>
                    Page {page} of {totalPages}
                  </span>

                  <button
                    disabled={page >= totalPages}
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    className="btn btn-sm btn-outline"
                    style={{ padding: '0.45rem 0.8rem', opacity: page >= totalPages ? 0.5 : 1 }}
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default StudyMaterials;
