import React from 'react';

export const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center', // 'center', 'left'
  dark = false,
  className = '',
}) => {
  return (
    <div className={`section-header ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && <span className="section-tag">{subtitle}</span>}
      <h2 className={`section-title ${dark ? 'text-white' : ''}`}>
        {title}
      </h2>
      <div
        className="title-underline"
        style={{ margin: align === 'center' ? '0.75rem auto 0' : '0.75rem 0 0' }}
      />
      {description && (
        <p className={`section-desc mt-3 ${dark ? 'text-light' : 'text-muted'}`} style={{ marginTop: '0.85rem' }}>
          {description}
        </p>
      )}
    </div>
  );
};
