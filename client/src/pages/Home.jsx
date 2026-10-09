import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { CoursesSection } from '../components/home/CoursesSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { UPSCKASSection } from '../components/home/UPSCKASSection';
import { StudyMaterialSection } from '../components/study-materials/StudyMaterialSection';
import { FounderSection } from '../components/home/FounderSection';
import { FacultySection } from '../components/home/FacultySection';
import { AchievementsSection } from '../components/home/AchievementsSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { AdmissionCTA } from '../components/home/AdmissionCTA';

export const Home = () => {
  return (
    <PageLayout>
      <SEO
        title="Home"
        description="Saaraswath IAS/KAS Academy Mysuru. Premier coaching institute for UPSC Civil Services, KPSC KAS, PSI, PC and Competitive Exams. Founded in 2019 by Dr. Vasanth Kumar N."
      />
      <HeroSection />
      <AboutPreview />
      <CoursesSection />
      <WhyChooseUs />
      <UPSCKASSection />
      <StudyMaterialSection />
      <FounderSection />
      <FacultySection />
      <AchievementsSection />
      <GalleryPreview />
      <AdmissionCTA />
    </PageLayout>
  );
};

export default Home;
