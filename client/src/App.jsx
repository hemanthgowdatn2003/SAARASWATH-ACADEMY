import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import UPSC from './pages/UPSC';
import KAS from './pages/KAS';
import Faculty from './pages/Faculty';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import StudyMaterials from './pages/StudyMaterials';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Admin Pages & Layout
import AdminLogin from './admin/pages/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import ProtectedRoute from './admin/components/ProtectedRoute';
import Dashboard from './admin/pages/Dashboard';
import ManageStudyMaterials from './admin/pages/ManageStudyMaterials';
import ManageCourses from './admin/pages/ManageCourses';
import ManageFaculty from './admin/pages/ManageFaculty';
import ManageAchievements from './admin/pages/ManageAchievements';
import ManageGallery from './admin/pages/ManageGallery';
import ManageEnquiries from './admin/pages/ManageEnquiries';
import ManageSyllabus from './admin/pages/ManageSyllabus';
import ManageBrochure from './admin/pages/ManageBrochure';
import ManageHomepage from './admin/pages/ManageHomepage';
import Settings from './admin/pages/Settings';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/upsc" element={<UPSC />} />
        <Route path="/kas" element={<KAS />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="study-materials" element={<ManageStudyMaterials />} />
            <Route path="courses" element={<ManageCourses />} />
            <Route path="faculty" element={<ManageFaculty />} />
            <Route path="achievements" element={<ManageAchievements />} />
            <Route path="gallery" element={<ManageGallery />} />
            <Route path="enquiries" element={<ManageEnquiries />} />
            <Route path="syllabus" element={<ManageSyllabus />} />
            <Route path="brochure" element={<ManageBrochure />} />
            <Route path="homepage" element={<ManageHomepage />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
