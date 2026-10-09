import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { INITIAL_COURSES } from '../../utils/constants';
import { courseService } from '../../services/courseService';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export const CoursesSection = () => {
  const [courses, setCourses] = useState(INITIAL_COURSES);

  useEffect(() => {
    courseService.getAllCourses().then(data => {
      if (Array.isArray(data) && data.length > 0) setCourses(data);
    }).catch(() => {});
  }, []);

  return (
    <section className="section-py bg-light" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          subtitle="Our Academic Programs"
          title="Courses Crafted for Consistent Success"
          description="Designed to take aspirants from foundational basics to rank-winning performance."
        />

        <div className="courses-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          marginBottom: '2.5rem'
        }}>
          {courses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="course-simple-card"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg, 16px)',
                padding: '1.75rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>{course.category}</span>
                {course.badge && <span className="badge badge-blue" style={{ fontSize: '0.72rem' }}>{course.badge}</span>}
              </div>

              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--color-deep-navy, #173568)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {course.title}
              </h3>

              <p style={{ color: 'var(--color-text-muted, #536b8e)', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                {course.description.length > 110 ? `${course.description.substring(0, 110)}...` : course.description}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} color="var(--color-gold)" />
                  {course.duration.split(' ')[0]} {course.duration.split(' ')[1] || ''}
                </span>

                <Link
                  to={`/courses/${course.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--color-primary-blue, #2457A7)',
                    fontWeight: 700,
                    fontSize: '0.88rem'
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
            <span>Explore All Courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
