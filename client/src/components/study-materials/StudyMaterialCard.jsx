import React from 'react';
import { FileText, Download, ExternalLink, Calendar, BookOpen, Layers } from 'lucide-react';

export const StudyMaterialCard = ({ material }) => {
  const isQuestionPaper = material.resourceType === 'Question Paper';
  const downloadUrl = `/api/study-materials/${material.id || material._id}/download`;

  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.75rem',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(23, 53, 104, 0.08)';
        e.currentTarget.style.borderColor = 'var(--color-gold)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      {/* Top subtle category ribbon */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem' }}>
        <span
          className={isQuestionPaper ? 'badge badge-gold' : 'badge badge-blue'}
          style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}
        >
          {material.resourceType}
        </span>

        <span
          style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            color: 'var(--color-deep-navy)',
            backgroundColor: 'var(--color-light-cyan)',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-full)'
          }}
        >
          {material.examination}
        </span>
      </div>

      {/* Main Document Info */}
      <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: isQuestionPaper ? 'var(--color-light-gold)' : 'var(--color-soft-blue)',
              color: isQuestionPaper ? 'var(--color-gold)' : 'var(--color-primary-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            {isQuestionPaper ? <FileText size={22} /> : <BookOpen size={22} />}
          </div>
          <div>
            <h3
              style={{
                fontSize: '1.08rem',
                fontWeight: 700,
                color: 'var(--color-deep-navy)',
                lineHeight: 1.35,
                marginBottom: '0.35rem'
              }}
            >
              {material.title}
            </h3>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              {material.subject}
            </div>
          </div>
        </div>

        {material.description && (
          <p
            style={{
              fontSize: '0.84rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {material.description}
          </p>
        )}

        {/* Metadata pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', fontSize: '0.78rem', color: '#64748b' }}>
          {material.year && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Calendar size={13} color="var(--color-gold)" /> Exam Year: {material.year}
            </span>
          )}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <Layers size={13} /> {material.fileSize || '1.8 MB'}
          </span>
        </div>
      </div>

      {/* Action Buttons: View PDF & Download PDF */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.75rem',
          paddingTop: '1rem',
          borderTop: '1px solid #f1f5f9'
        }}
      >
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
          style={{ justifyContent: 'center', fontSize: '0.82rem', padding: '0.55rem' }}
          title="Open document PDF in browser"
        >
          <ExternalLink size={14} /> View PDF
        </a>

        <a
          href={downloadUrl}
          download={material.fileName || `${material.title}.pdf`}
          className="btn btn-primary btn-sm"
          style={{ justifyContent: 'center', fontSize: '0.82rem', padding: '0.55rem' }}
          title="Download document PDF"
        >
          <Download size={14} /> Download
        </a>
      </div>
    </div>
  );
};

export default StudyMaterialCard;
