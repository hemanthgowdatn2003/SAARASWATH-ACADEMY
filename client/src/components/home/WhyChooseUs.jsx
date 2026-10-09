import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ShieldCheck, UserCheck, BookOpen, Clock, Award, FileSpreadsheet } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Direct Founder Mentorship",
      desc: "Direct guidance and continuous progress tracking by Dr. Vasanth Kumar N, ensuring every student has an actionable daily blueprint."
    },
    {
      icon: BookOpen,
      title: "Standard Reference Pedagogy",
      desc: "Curriculum strictly mapped with authoritative texts (Bipin Chandra, Satish Chandra, Dr. Ranganath, Orient BlackSwan Atlas, and Economic Survey)."
    },
    {
      icon: FileSpreadsheet,
      title: "Rigorous Test Series & Analysis",
      desc: "Weekly chapter-wise prelims tests and mains answer-writing workshops with detailed line-by-line evaluative feedback."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      desc: "Consistent selections in UPSC Civil Services (IAS), KPSC KAS, Bangalore CAR, and Karnataka PSI batches since 2019."
    },
    {
      icon: Clock,
      title: "Flexible Timings for Degree/Working",
      desc: "Convenient morning, evening, and dedicated weekend batches for degree students and working professionals."
    },
    {
      icon: ShieldCheck,
      title: "Peaceful Kuvempunagar Campus",
      desc: "Conducive study environment, library facility, discussion zones, and prime connectivity in Mysuru."
    }
  ];

  return (
    <section className="section-py bg-white">
      <div className="container">
        <SectionTitle
          subtitle="Why Saaraswath"
          title="The Academy of Choice in Mysuru"
          description="Everything civil services aspirants need under one roof for strategic preparation and disciplined execution."
        />

        <div className="grid-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, var(--color-primary-100), var(--color-primary-50))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: 'var(--color-primary-600)'
                }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary-900)', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
