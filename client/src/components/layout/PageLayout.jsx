import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';

export const PageLayout = ({ children, whatsappMessage }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F3F8FF' }}>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp customMessage={whatsappMessage} />
    </div>
  );
};

export default PageLayout;
