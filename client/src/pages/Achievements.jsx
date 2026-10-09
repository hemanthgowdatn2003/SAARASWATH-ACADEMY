import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { AchieverCard } from '../components/common/AchieverCard';
import { INITIAL_ACHIEVERS } from '../utils/constants';
import { achievementService } from '../services/achievementService';
import { Trophy, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Achievements = () => {
  const [achievers, setAchievers] = useState(INITIAL_ACHIEVERS);

  useEffect(() => {
    achievementService.getAllAchievements().then(data => {
      if (Array.isArray(data) && data.length > 0) setAchievers(data);
    }).catch(() => {});
  }, []);
  return (
    <PageLayout>
      <SEO
        title="Hall of Fame & Top Achievers"
        description="Discover the IAS, CAR, PSI, and Teacher recruitment rank holders from Saaraswath IAS/KAS Academy Mysuru."
      />

      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-accent-400)' }}>RESULTS & MILESTONES</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Top Achievers & Officers
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto' }}>
            Inspiring stories of perseverance, guidance, and triumph by our alumni serving across Karnataka and India.
          </p>
        </div>
      </div>

      <section className="section-py bg-light">
        <div className="container">
          {/* Highlight banner */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem', background: 'linear-gradient(135deg, #ffffff, #fffbeb)', border: '1px solid #fde68a' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Trophy size={32} color="#d97706" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
                  Consistent Selections Across Civil Services & State Exams
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b' }}>
                  From UPSC IAS to KPSC KAS, Police Sub-Inspector, and Education exams since 2019.
                </p>
              </div>
            </div>
            <Link to="/admissions" className="btn btn-gold btn-sm">
              Start Your Preparation
            </Link>
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {achievers.map((achiever) => (
              <AchieverCard key={achiever.id} achiever={achiever} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Achievements;
