import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { INITIAL_COURSES, ACADEMY_INFO, getWhatsAppLink } from '../utils/constants';
import { Clock, BookOpen, CheckCircle, ArrowLeft, Download, Award, MessageCircle } from 'lucide-react';

export const CourseDetails = () => {
  const { id } = useParams();
  const course = INITIAL_COURSES.find((c) => c.id === id) || INITIAL_COURSES[0];

  const courseWhatsAppMsg = `Hello Saaraswath IAS/KAS Academy, I would like to know more about the ${course.title} course and batch schedules.`;

  return (
    <PageLayout whatsappMessage={courseWhatsAppMsg}>
      <SEO
        title={course.title}
        description={course.description}
      />

      {/* Header Banner */}
      <div style={{ backgroundColor: 'var(--color-deep-navy)', color: '#FFFFFF', padding: '4.5rem 0 3.5rem', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <Link to="/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#cbd5e1', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
            <ArrowLeft size={16} /> Back to All Courses
          </Link>
          <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge badge-gold">{course.category}</span>
            {course.badge && <span className="badge badge-blue">{course.badge}</span>}
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em', maxWidth: '850px' }}>
            {course.title}
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#e2e8f0', maxWidth: '750px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {course.description}
          </p>

          <a
            href={getWhatsAppLink(courseWhatsAppMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <MessageCircle size={16} /> Inquire About this Course on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Details and Side Form */}
      <section className="section-py" style={{ backgroundColor: 'var(--color-soft-blue)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Left Column: Course Curriculum & Syllabus */}
            <div>
              {/* Meta details cards */}
              <div className="glass-card" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    <Clock size={16} /> Duration
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginTop: '0.2rem' }}>
                    {course.duration}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary-blue)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    <BookOpen size={16} /> Mode of Study
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginTop: '0.2rem' }}>
                    {course.mode}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    <Award size={16} /> Eligibility
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-deep-navy)', marginTop: '0.2rem' }}>
                    {course.eligibility}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '1.25rem' }}>
                  Program Curriculum & Key Highlights
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {course.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#334155' }}>
                      <CheckCircle size={18} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Batch Timings & Methodology */}
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-deep-navy)', marginBottom: '1rem' }}>
                  Batch Timings & Classroom Infrastructure
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {course.batchTimings}
                </p>
                <div style={{ backgroundColor: '#ffffff', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', border: '1px solid var(--color-border)' }}>
                  <div>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--color-deep-navy)' }}>Official Course Brochure</strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Download complete paper syllabus and book recommendations</div>
                  </div>
                  <a href={ACADEMY_INFO.brochurePath} download className="btn btn-outline btn-sm">
                    <Download size={14} /> Download PDF
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Instant Enquiry Form */}
            <div>
              <EnquiryForm preselectedCourse={course.title} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CourseDetails;
