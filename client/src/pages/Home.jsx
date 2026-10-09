import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { CoursesSection } from '../components/home/CoursesSection';
import { StudyMaterialSection } from '../components/study-materials/StudyMaterialSection';
import { FounderSection } from '../components/home/FounderSection';
import { AdmissionCTA } from '../components/home/AdmissionCTA';

export const Home = () => {
  return (
    <PageLayout>
      <SEO
        title="Home"
        description="Saaraswath IAS/KAS Academy Mysuru. Premier coaching institute for UPSC Civil Services, KPSC KAS, and competitive exams. Founded in 2019 by Dr. Vasanth Kumar N."
      />
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: About Academy */}
      <AboutPreview />

      {/* Section 3: Our Courses */}
      <CoursesSection />

      {/* Section 4: Previous Year Papers & Study Notes */}
      <StudyMaterialSection />

      {/* Section 5: Founder */}
      <FounderSection />

      {/* Section 6: Contact / Admission Enquiry */}
      <AdmissionCTA />
    </PageLayout>
  );
};

export default Home;
