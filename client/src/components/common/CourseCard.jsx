import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export const CourseCard = ({ course }) => {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem' }}>
          <span className="badge badge-gold">{course.category}</span>
          {course.badge && <span className="badge badge-blue">{course.badge}</span>}
        </div>

        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-primary-900)' }}>
          {course.title}
        </h3>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {course.description}
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--color-text-main)', marginBottom: '1.25rem', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '0.75rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={16} color="var(--color-accent-600)" />
            <span>{course.duration}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <BookOpen size={16} color="var(--color-primary-600)" />
            <span>{course.mode}</span>
          </div>
        </div>

        {course.features && course.features.length > 0 && (
          <div style={{ marginBottom: '1.5rem', flex: 1 }}>
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              Key Highlights:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {course.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '0.4rem', color: '#334155' }}>
                  <CheckCircle size={15} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
          <Link
            to={`/courses/${course.id}`}
            className="btn btn-outline btn-sm"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            Details <ArrowRight size={15} />
          </Link>
          <Link
            to={`/admissions?course=${encodeURIComponent(course.title)}`}
            className="btn btn-primary btn-sm"
            style={{ flex: 1, justifyContent: 'center' }}
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};
