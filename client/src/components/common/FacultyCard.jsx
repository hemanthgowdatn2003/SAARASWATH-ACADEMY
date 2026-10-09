import React, { useState } from 'react';
import { BookOpen, Award } from 'lucide-react';
import { getAssetUrl } from '../../utils/helpers';

export const FacultyCard = ({ faculty }) => {
  const [imgError, setImgError] = useState(false);

  // Compute initials for clean fallback if photo is unavailable
  const initials = faculty.name
    ? faculty.name.replace(/^(Dr\.|Prof\.|Sri)\s+/i, '').split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'FA';

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg, 16px)',
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform var(--transition-smooth), box-shadow var(--transition-smooth)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
    >
      {/* Portrait image container with careful object-position to preserve heads and faces */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '270px',
        backgroundColor: 'var(--color-light-cyan, #EAF7FF)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '2px solid var(--color-light-gold, #FFF5D6)'
      }}>
        {!imgError && faculty.image ? (
          <img
            src={getAssetUrl(faculty.image)}
            alt={`${faculty.name} - ${faculty.specialization} Faculty`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              display: 'block',
              transition: 'transform 0.4s ease'
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--color-deep-navy, #173568) 0%, var(--color-primary-blue, #2457A7) 100%)',
            color: '#FFFFFF'
          }}>
            <div style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              backgroundColor: 'rgba(233, 174, 32, 0.2)',
              border: '2px solid var(--color-gold, #E9AE20)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.65rem',
              fontWeight: 800,
              color: 'var(--color-gold, #E9AE20)'
            }}>
              {initials}
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '0.55rem', color: '#e2e8f0' }}>
              {faculty.specialization}
            </div>
          </div>
        )}
        
        {/* Role label overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(23, 53, 104, 0.9) 0%, rgba(23, 53, 104, 0.4) 60%, transparent 100%)',
          padding: '1.25rem 1rem 0.6rem',
          color: '#FFFFFF'
        }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--color-gold, #E9AE20)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            {faculty.role || 'Resource Person'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: 'var(--color-deep-navy)',
          marginBottom: '0.4rem',
          letterSpacing: '-0.01em'
        }}>
          {faculty.name}
        </h3>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          color: 'var(--color-primary-blue)',
          fontSize: '0.88rem',
          fontWeight: 700,
          marginBottom: '0.65rem'
        }}>
          <BookOpen size={16} color="var(--color-primary-blue)" style={{ flexShrink: 0 }} />
          <span>{faculty.specialization}</span>
        </div>

        {faculty.experience && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--color-text-muted)',
            fontSize: '0.82rem',
            marginBottom: '0.85rem'
          }}>
            <Award size={15} color="var(--color-gold)" style={{ flexShrink: 0 }} />
            <span>{faculty.experience}</span>
          </div>
        )}

        {faculty.bio && (
          <p style={{
            fontSize: '0.86rem',
            color: 'var(--color-text-muted)',
            lineHeight: 1.55,
            marginTop: 'auto',
            paddingTop: '0.5rem',
            borderTop: '1px solid #f1f5f9'
          }}>
            {faculty.bio}
          </p>
        )}
      </div>
    </div>
  );
};

export default FacultyCard;
