import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { User, Bell } from 'lucide-react';

export const AdminHeader = ({ title = 'Dashboard' }) => {
  const { user } = useAuth();

  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div>
        <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
          {title}
        </h1>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-100)',
            color: 'var(--color-primary-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.85rem'
          }}>
            {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
          </div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-primary-900)' }}>
              {user?.name || 'Administrator'}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
              {user?.email || 'admin@saaraswath.com'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
