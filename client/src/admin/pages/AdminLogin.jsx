import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Lock, Mail, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';

export const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: 'admin@saaraswath.com',
    password: 'Admin@123',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(credentials);
      navigate('/admin/dashboard');
    } catch (err) {
      // If server is not responding, allow simulated bypass login for administrative demonstration
      if (err.message.includes('Unable to connect') || err.message.includes('fetch')) {
        localStorage.setItem('saaraswath_admin_token', 'demo_mock_jwt_token_2026');
        localStorage.setItem('saaraswath_admin_user', JSON.stringify({
          name: 'Super Admin',
          email: credentials.email,
          role: 'admin'
        }));
        window.location.href = '/admin/dashboard';
        return;
      }
      setError(err.message || 'Invalid administrator credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a1128',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-xl)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        padding: '2.5rem',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
          }}>
            <Lock size={30} color="var(--color-primary-600)" />
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
            Admin Portal
          </h1>
          <p style={{ fontSize: '0.86rem', color: '#64748b', marginTop: '0.25rem' }}>
            Saaraswath IAS/KAS Academy Content Management
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#b91c1c',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.85rem',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ShieldAlert size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
              Admin Email
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="admin@saaraswath.com"
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', fontWeight: 700 }}
            disabled={loading}
          >
            {loading ? 'Authenticating...' : <><ShieldCheck size={18} /> Sign In to Dashboard</>}
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
          <Link to="/" style={{ fontSize: '0.85rem', color: '#64748b' }}>
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
