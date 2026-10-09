import React from 'react';
import { Maximize2 } from 'lucide-react';
import { getAssetUrl } from '../../utils/helpers';

export const GalleryCard = ({ item, onOpen }) => {
  return (
    <div
      className="glass-card"
      onClick={() => onOpen(item)}
      style={{
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        aspectRatio: '4/3',
      }}
    >
      <img
        src={getAssetUrl(item.image)}
        alt={item.title || 'Saaraswath Academy'}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
        className="gallery-thumb-img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = getAssetUrl('/images/classroom/classroom_1.jpeg');
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10, 17, 40, 0.85) 0%, rgba(10, 17, 40, 0.2) 60%, transparent 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '1.25rem',
          color: '#ffffff',
          transition: 'all 0.3s ease'
        }}
      >
        {item.category && (
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            {item.category}
          </span>
        )}
        <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.25rem' }}>
          {item.title}
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#cbd5e1' }}>
          <Maximize2 size={13} />
          <span>Click to view</span>
        </div>
      </div>
    </div>
  );
};
