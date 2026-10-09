import React from 'react';
import { Award, Quote } from 'lucide-react';
import { getAssetUrl } from '../../utils/helpers';

export const AchieverCard = ({ achiever }) => {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-lg)',
      padding: '1.75rem',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--color-gold)',
          boxShadow: 'var(--shadow-md)',
          flexShrink: 0,
          backgroundColor: 'var(--color-light-cyan)'
        }}>
          <img
            src={getAssetUrl(achiever.image)}
            alt={achiever.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = getAssetUrl('/images/founder/dr-vasanth-kumar.jpg');
            }}
          />
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.2rem' }}>
            {achiever.name}
          </h3>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--color-deep-navy)',
            backgroundColor: 'var(--color-light-gold)',
            border: '1px solid var(--color-gold)',
            padding: '0.2rem 0.55rem',
            borderRadius: '4px'
          }}>
            <Award size={13} color="var(--color-gold)" />
            <span>{achiever.exam}</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.3rem', fontWeight: 500 }}>
            {achiever.role || achiever.batch}
          </div>
        </div>
      </div>

      {achiever.quote && (
        <div style={{
          marginTop: 'auto',
          position: 'relative',
          backgroundColor: 'var(--color-soft-blue)',
          padding: '1rem 1rem 1rem 2.2rem',
          borderRadius: 'var(--radius-md)',
          borderLeft: '3px solid var(--color-primary-blue)'
        }}>
          <Quote size={18} color="var(--color-primary-blue)" style={{ position: 'absolute', top: '0.75rem', left: '0.6rem' }} />
          <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--color-deep-navy)', lineHeight: 1.55 }}>
            "{achiever.quote}"
          </p>
        </div>
      )}
    </div>
  );
};

export default AchieverCard;
