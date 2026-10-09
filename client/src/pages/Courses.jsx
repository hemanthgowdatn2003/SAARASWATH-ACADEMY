import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { CourseCard } from '../components/common/CourseCard';
import { INITIAL_COURSES } from '../utils/constants';
import { courseService } from '../services/courseService';
import { Download, HelpCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../utils/constants';

export const Courses = () => {
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    courseService.getAllCourses().then(data => {
      if (Array.isArray(data) && data.length > 0) setCourses(data);
    }).catch(() => {});
  }, []);

  const categories = ['All', 'UPSC', 'KAS', 'Police Services', 'Foundation', 'Optional'];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <PageLayout>
      <SEO
        title="Courses & Programs"
        description="Explore comprehensive courses for UPSC CSE, KPSC KAS, PSI/PC, Degree Integrated Foundation, and Kannada Literature Optional at Saaraswath Academy Mysuru."
      />

      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-accent-400)' }}>ACADEMIC CATALOG</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Our Coaching Programs
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 1.5rem' }}>
            Structured curriculums, standard reference mappings, and consistent test series designed for victory.
          </p>

          <a
            href={ACADEMY_INFO.brochurePath}
            download="Saaraswath-Academy-Brochure.pdf"
            className="btn btn-gold btn-sm"
            style={{ display: 'inline-flex', gap: '0.4rem' }}
          >
            <Download size={15} /> Download Full Course Syllabus (PDF)
          </a>
        </div>
      </div>

      <section className="section-py bg-light">
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: 'var(--radius-full)', padding: '0.55rem 1.4rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* FAQ Section */}
          <div className="glass-card" style={{ padding: '3rem', maxWidth: '850px', margin: '0 auto', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <HelpCircle size={24} color="var(--color-primary-600)" />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary-900)' }}>
                Frequently Asked Questions
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary-900)', marginBottom: '0.35rem' }}>
                  Are classes conducted in English or Kannada medium?
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                  We provide bilingual instruction. Key concepts, notes, and question banks are provided in both English and Kannada, allowing students to comfortably write exams in their preferred language.
                </p>
              </div>

              <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary-900)', marginBottom: '0.35rem' }}>
                  Can working professionals and college students attend?
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                  Yes, we offer specialized Weekend Batches (Saturdays and Sundays) and Early Morning (7:30 AM) / Evening (5:30 PM) sessions specifically accommodating college attendees and employees.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-primary-900)', marginBottom: '0.35rem' }}>
                  Is hostel facility available near the academy in Mysuru?
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                  Yes! Kuvempunagar has numerous verified student PGs and hostels within walking distance of the academy with food and Wi-Fi amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Courses;
