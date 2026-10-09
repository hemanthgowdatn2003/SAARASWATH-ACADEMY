import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { AchieverCard } from '../common/AchieverCard';
import { INITIAL_ACHIEVERS } from '../../utils/constants';
import { achievementService } from '../../services/achievementService';
import { ArrowRight, Trophy } from 'lucide-react';

export const AchievementsSection = () => {
  const [achievers, setAchievers] = useState(INITIAL_ACHIEVERS);

  useEffect(() => {
    achievementService.getAllAchievements().then(data => {
      if (Array.isArray(data) && data.length > 0) setAchievers(data);
    }).catch(() => {});
  }, []);

  return (
    <section className="section-py bg-light">
      <div className="container">
        <SectionTitle
          subtitle="Hall of Fame"
          title="Our Top Achievers & Proud Officers"
          description="Dedicated students of Saaraswath Academy who turned their civil service ambitions into reality with focused preparation."
        />

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {achievers.slice(0, 3).map((achiever) => (
            <AchieverCard key={achiever.id} achiever={achiever} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/achievements" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
            <Trophy size={18} /> View All Selections & Testimonials <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
