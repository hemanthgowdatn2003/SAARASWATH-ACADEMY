import React, { useState } from 'react';
import { ACADEMY_INFO, getWhatsAppLink } from '../../utils/constants';

export const FloatingWhatsApp = ({ customMessage }) => {
  const whatsappUrl = getWhatsAppLink(customMessage);
  const callUrl = `tel:+91${ACADEMY_INFO.phoneNumbers[0]}`;
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <aside aria-label="Quick Contact Dock" style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'flex-end',
      zIndex: 9999
    }}>
      {/* 1. Mobile Icon for Call */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {hoveredBtn === 'call' && (
          <div style={{
            position: 'absolute',
            right: '68px',
            backgroundColor: 'var(--color-deep-navy, #173568)',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.82rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            pointerEvents: 'none'
          }}>
            Call +91 {ACADEMY_INFO.phoneNumbers[0]}
          </div>
        )}
        <a
          href={callUrl}
          aria-label="Call Saaraswath Academy"
          title={`Call Saaraswath Academy: +91 ${ACADEMY_INFO.phoneNumbers[0]}`}
          onMouseEnter={() => setHoveredBtn('call')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#2457A7',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 16px rgba(36, 87, 167, 0.45)',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            textDecoration: 'none',
            border: '2px solid #FFFFFF',
            transform: hoveredBtn === 'call' ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
          }}
        >
          {/* Mobile phone handset icon */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

      {/* 2. Official WhatsApp Icon */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {hoveredBtn === 'whatsapp' && (
          <div style={{
            position: 'absolute',
            right: '68px',
            backgroundColor: '#075E54',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.82rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            pointerEvents: 'none'
          }}>
            Chat on WhatsApp
          </div>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Saaraswath Academy on WhatsApp"
          title={`Chat with Saaraswath Academy on WhatsApp (+91 ${ACADEMY_INFO.whatsappNumber})`}
          onMouseEnter={() => setHoveredBtn('whatsapp')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 18px rgba(37, 211, 102, 0.5)',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            textDecoration: 'none',
            border: '2px solid #FFFFFF',
            transform: hoveredBtn === 'whatsapp' ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
          }}
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ fill: '#ffffff' }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default FloatingWhatsApp;

