import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { CourseCard } from '../common/CourseCard';
import { INITIAL_COURSES } from '../../utils/constants';
import { courseService } from '../../services/courseService';
import { ArrowRight } from 'lucide-react';

export const CoursesSection = () => {
  const [courses, setCourses] = useState(INITIAL_COURSES);

  useEffect(() => {
    courseService.getAllCourses().then(data => {
      if (Array.isArray(data) && data.length > 0) setCourses(data);
    }).catch(() => {});
  }, []);

  return (
    <section className="section-py bg-light">
      <div className="container">
        <SectionTitle
          subtitle="Our Academic Programs"
          title="Courses Crafted for Consistent Success"
          description="Designed to take aspirants from foundational basics to rank-winning performance with systematic test series and personalized feedback."
        />

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses" className="btn btn-outline btn-lg" style={{ display: 'inline-flex', gap: '0.5rem' }}>
            View All Courses & Optional Modules <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
