import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ message = 'Loading...', size = 36 }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', minHeight: '200px' }}>
      <Loader2 size={size} style={{ animation: 'spin 1s linear infinite', color: 'var(--color-primary-600)', marginBottom: '0.75rem' }} />
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{message}</p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
