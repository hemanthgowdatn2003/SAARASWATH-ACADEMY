import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Trophy,
  Image,
  Inbox,
  FileText,
  FileCode,
  Home,
  Settings,
  LogOut,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { getAssetUrl } from '../../utils/helpers';

export const AdminSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Study Materials', path: '/admin/study-materials', icon: FileText },
    { name: 'Courses', path: '/admin/courses', icon: BookOpen },
    { name: 'Faculty', path: '/admin/faculty', icon: Users },
    { name: 'Achievements', path: '/admin/achievements', icon: Trophy },
    { name: 'Gallery', path: '/admin/gallery', icon: Image },
    { name: 'Enquiries', path: '/admin/enquiries', icon: Inbox },
    { name: 'Syllabus', path: '/admin/syllabus', icon: FileCode },
    { name: 'Brochure', path: '/admin/brochure', icon: FileCode },
    { name: 'Homepage Content', path: '/admin/homepage', icon: Home },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <aside style={{
      width: '260px',
      backgroundColor: '#0a1128',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #1e293b',
      minHeight: '100vh',
      flexShrink: 0
    }}>
      {/* Brand Header */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={getAssetUrl('/images/logo/saaraswath_logo.png')}
            alt="Logo"
            style={{ width: '36px', height: '36px', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
              SAARASWATH
            </div>
            <div style={{ fontSize: '0.68rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase' }}>
              ADMIN PORTAL
            </div>
          </div>
        </div>
      </div>

      {/* Nav List */}
      <nav style={{ padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flex: 1, overflowY: 'auto' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.88rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#ffffff' : '#94a3b8',
                backgroundColor: isActive ? 'var(--color-primary-600)' : 'transparent',
                transition: 'all 0.15s ease'
              })}
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div style={{ padding: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.82rem', padding: '0.5rem 0.75rem', textDecoration: 'none' }}
        >
          <ExternalLink size={15} /> Visit Public Site
        </a>
        <button
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            width: '100%',
            padding: '0.6rem 0.75rem',
            background: 'none',
            border: 'none',
            color: '#f87171',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 600,
            borderRadius: 'var(--radius-md)',
            textAlign: 'left'
          }}
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </aside>
  );
};
