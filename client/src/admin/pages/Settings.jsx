import React, { useState } from 'react';
import { AdminHeader } from '../components/AdminHeader';
import { Save, CheckCircle2, Shield } from 'lucide-react';
import { ACADEMY_INFO } from '../../utils/constants';

export const Settings = () => {
  const [settings, setSettings] = useState({
    name: ACADEMY_INFO.name,
    address: ACADEMY_INFO.address,
    phone1: ACADEMY_INFO.phoneNumbers[0],
    phone2: ACADEMY_INFO.phoneNumbers[1],
    email: ACADEMY_INFO.email,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [savedSettings, setSavedSettings] = useState(false);
  const [savedPassword, setSavedPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedSettings(true);
    setTimeout(() => setSavedSettings(false), 3000);
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }
    setPasswordError('');
    setSavedPassword(true);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setTimeout(() => setSavedPassword(false), 3000);
  };

  return (
    <>
      <AdminHeader title="Platform & Academy Settings" />
      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1000px' }}>
        {/* Contact Info Settings */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
            Academy Profile & Contact
          </h2>

          {savedSettings && (
            <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <CheckCircle2 size={16} /> Contact settings updated!
            </div>
          )}

          <form onSubmit={handleSaveSettings}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Academy Name</label>
              <input
                type="text"
                className="form-control"
                value={settings.name}
                onChange={(e) => setSettings(p => ({ ...p, name: e.target.value }))}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Campus Address</label>
              <textarea
                rows={2}
                className="form-textarea"
                value={settings.address}
                onChange={(e) => setSettings(p => ({ ...p, address: e.target.value }))}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Primary Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={settings.phone1}
                  onChange={(e) => setSettings(p => ({ ...p, phone1: e.target.value }))}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Secondary Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={settings.phone2}
                  onChange={(e) => setSettings(p => ({ ...p, phone2: e.target.value }))}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Official WhatsApp</label>
                <input
                  type="text"
                  className="form-control"
                  value={settings.whatsappNumber || ACADEMY_INFO.whatsappNumber}
                  onChange={(e) => setSettings(p => ({ ...p, whatsappNumber: e.target.value }))}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={settings.email}
                  onChange={(e) => setSettings(p => ({ ...p, email: e.target.value }))}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-sm">
              <Save size={15} /> Save Academy Profile
            </button>
          </form>
        </div>

        {/* Change Admin Password */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary-900)', marginBottom: '1.25rem' }}>
            Security & Password
          </h2>

          {savedPassword && (
            <div style={{ backgroundColor: '#d1fae5', color: '#065f46', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              <CheckCircle2 size={16} /> Password updated successfully!
            </div>
          )}

          {passwordError && (
            <div style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.85rem' }}>
              {passwordError}
            </div>
          )}

          <form onSubmit={handleSavePassword}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Current Password</label>
              <input
                type="password"
                required
                className="form-control"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData(p => ({ ...p, currentPassword: e.target.value }))}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>New Password</label>
              <input
                type="password"
                required
                className="form-control"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData(p => ({ ...p, newPassword: e.target.value }))}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem' }}>Confirm New Password</label>
              <input
                type="password"
                required
                className="form-control"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData(p => ({ ...p, confirmPassword: e.target.value }))}
              />
            </div>

            <button type="submit" className="btn btn-outline btn-sm">
              <Shield size={15} /> Update Admin Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
