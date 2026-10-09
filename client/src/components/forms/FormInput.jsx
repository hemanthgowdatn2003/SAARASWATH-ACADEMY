import React from 'react';

export const FormInput = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  as = 'input', // 'input', 'select', 'textarea'
  options = [],
  rows = 4,
  ...props
}) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id || name} className="form-label">
          {label} {required && <span style={{ color: 'var(--color-danger)' }}>*</span>}
        </label>
      )}

      {as === 'textarea' ? (
        <textarea
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="form-textarea"
          required={required}
          {...props}
        />
      ) : as === 'select' ? (
        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          className="form-select"
          required={required}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt, i) => (
            <option key={i} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control"
          required={required}
          {...props}
        />
      )}

      {error && <p className="form-error">{error}</p>}
    </div>
  );
};
