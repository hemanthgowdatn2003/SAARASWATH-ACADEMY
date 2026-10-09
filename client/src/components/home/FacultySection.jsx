import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { FacultyCard } from '../common/FacultyCard';
import { INITIAL_FACULTY } from '../../utils/constants';
import { facultyService } from '../../services/facultyService';
import { ArrowRight, Users } from 'lucide-react';

export const FacultySection = () => {
  const [facultyList, setFacultyList] = useState(INITIAL_FACULTY);

  useEffect(() => {
    facultyService.getAllFaculty().then(data => {
      if (Array.isArray(data) && data.length > 0) setFacultyList(data);
    }).catch(() => {});
  }, []);

  // Show top 6 resource persons on homepage
  const featuredFaculty = facultyList.slice(0, 6);

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--color-soft-blue)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          subtitle="Distinguished Mentors"
          title="Learn from Karnataka's Top Subject Specialists"
          description="Experienced resource persons providing syllabus mastery, map-based explanations, and answer-structuring skills."
        />

        {/* Responsive Grid: 3 cards desktop, 2 tablet, 1 mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {featuredFaculty.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>

        {/* View All Faculty Button */}
        <div className="text-center">
          <Link
            to="/faculty"
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <Users size={20} /> View All Faculty Members <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
