import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'gold', 'outline', 'outline-gold', 'outline-white'
  size = 'md', // 'sm', 'md', 'lg'
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  icon: Icon = null,
  ...props
}) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const variantClass = `btn-${variant}`;
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {Icon && <Icon size={18} />}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && <Icon size={18} />}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};
