import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <PageLayout>
      <SEO title="Page Not Found - 404" />
      <div style={{ textAlign: 'center', padding: '6rem 1.5rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--color-primary-600)', lineHeight: 1 }}>
          404
        </span>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '1rem 0 0.5rem', color: 'var(--color-primary-900)' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '460px', marginBottom: '2rem' }}>
          The page you are looking for does not exist or may have been moved. Return to the homepage to explore courses and admissions.
        </p>
        <Link to="/" className="btn btn-primary">
          <Home size={18} /> Return to Homepage
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
