import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const Lightbox = ({ isOpen, image, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '-2.5rem',
            right: 0,
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          <X size={28} />
        </button>
        <img src={image} alt={title || 'Saaraswath Academy'} className="lightbox-image" />
        {title && (
          <div style={{ marginTop: '0.75rem', textAlign: 'center', color: '#ffffff', fontSize: '1rem', fontWeight: 500 }}>
            {title}
          </div>
        )}
      </div>
    </div>
  );
};
