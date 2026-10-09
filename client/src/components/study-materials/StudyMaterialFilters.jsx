import React from 'react';
import { Search, Filter, X } from 'lucide-react';

export const StudyMaterialFilters = ({
  search,
  setSearch,
  examination,
  setExamination,
  resourceType,
  setResourceType,
  subject,
  setSubject,
  subjectsList = [],
  resetFilters
}) => {
  const exams = ['All', 'UPSC', 'KAS', 'Other'];
  const types = ['All', 'Question Paper', 'Study Notes'];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        padding: '1.5rem 2rem',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid var(--color-border)',
        marginBottom: '2.5rem'
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', alignItems: 'center' }}>
        {/* Search Input */}
        <div style={{ position: 'relative' }}>
          <Search
            size={18}
            color="#94a3b8"
            style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Search by title, subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        {/* Resource Type Filter */}
        <div>
          <select
            className="form-select"
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
          >
            <option value="All">All Resource Types</option>
            <option value="Question Paper">Previous Year Question Papers</option>
            <option value="Study Notes">Comprehensive Study Notes</option>
          </select>
        </div>

        {/* Examination Filter */}
        <div>
          <select
            className="form-select"
            value={examination}
            onChange={(e) => setExamination(e.target.value)}
          >
            <option value="All">All Examinations</option>
            <option value="UPSC">UPSC Civil Services</option>
            <option value="KAS">KPSC KAS Probationers</option>
            <option value="Other">Other Competitive Exams</option>
          </select>
        </div>

        {/* Subject Filter */}
        <div>
          <select
            className="form-select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="All">All Subjects</option>
            {subjectsList.map((sub, i) => (
              <option key={i} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick pill tabs below */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b', marginRight: '0.5rem' }}>
            Exam Quick Filter:
          </span>
          {exams.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => setExamination(ex)}
              className={`btn btn-sm ${examination === ex ? 'btn-primary' : 'btn-outline'}`}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '0.3rem 0.9rem',
                fontSize: '0.78rem'
              }}
            >
              {ex}
            </button>
          ))}
        </div>

        {(search || examination !== 'All' || resourceType !== 'All' || subject !== 'All') && (
          <button
            type="button"
            onClick={resetFilters}
            className="btn btn-sm"
            style={{
              backgroundColor: '#f1f5f9',
              color: '#475569',
              fontSize: '0.78rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <X size={14} /> Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default StudyMaterialFilters;
