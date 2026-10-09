import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorMessage = ({ message = 'An error occurred while loading content.', retry }) => {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      borderRadius: 'var(--radius-md)',
      textAlign: 'center',
      margin: '2rem auto',
      maxWidth: '600px'
    }}>
      <AlertCircle size={36} color="#ef4444" style={{ margin: '0 auto 0.75rem' }} />
      <h3 style={{ color: '#991b1b', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Notice</h3>
      <p style={{ color: '#b91c1c', fontSize: '0.9rem', marginBottom: retry ? '1rem' : 0 }}>{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="btn btn-primary btn-sm"
          style={{ marginTop: '0.75rem' }}
        >
          Try Again
        </button>
      )}
    </div>
  );
};
