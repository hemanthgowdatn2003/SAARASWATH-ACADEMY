import React from 'react';

export const AdminTable = ({ columns = [], data = [], actions, emptyMessage = 'No records found.' }) => {
  return (
    <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>
              {columns.map((col, idx) => (
                <th key={idx} style={{ padding: '0.85rem 1.25rem', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {col.header}
                </th>
              ))}
              {actions && (
                <th style={{ padding: '0.85rem 1.25rem', textAlign: 'right', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0)} style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIdx) => (
                <tr key={row._id || row.id || rowIdx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} style={{ padding: '1rem 1.25rem', color: '#334155', verticalAlign: 'middle' }}>
                      {col.render ? col.render(row) : row[col.accessor]}
                    </td>
                  ))}
                  {actions && (
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right', verticalAlign: 'middle' }}>
                      {actions(row)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
