import React, { useState, useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SEO } from '../components/common/SEO';
import { GalleryCard } from '../components/common/GalleryCard';
import { Lightbox } from '../components/common/Lightbox';
import { INITIAL_GALLERY } from '../utils/constants';
import { galleryService } from '../services/galleryService';

export const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState(INITIAL_GALLERY);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    galleryService.getAllImages().then(data => {
      if (Array.isArray(data) && data.length > 0) setGalleryItems(data);
    }).catch(() => {});
  }, []);

  const categories = ['All', 'Classroom', 'Workshops', 'Achievements', 'Students'];

  const filtered = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <PageLayout>
      <SEO
        title="Campus Gallery & Life"
        description="Explore photos of classrooms, study rooms, felicitation meets, and interactive workshops at Saaraswath Academy Mysuru."
      />

      <div style={{ backgroundColor: 'var(--color-primary-900)', color: '#ffffff', padding: '4.5rem 0 3.5rem' }}>
        <div className="container text-center">
          <span className="section-tag" style={{ color: 'var(--color-accent-400)' }}>VISUAL TOUR</span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Campus & Life at Saaraswath
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto' }}>
            An inside look at our state-of-the-art classroom sessions, study environment, and celebratory events.
          </p>
        </div>
      </div>

      <section className="section-py bg-light">
        <div className="container">
          {/* Category Tabs */}
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

          <div className="grid-3" style={{ gap: '2rem' }}>
            {filtered.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onOpen={(img) => setActiveImage(img)}
              />
            ))}
          </div>

          <Lightbox
            isOpen={!!activeImage}
            image={activeImage?.image}
            title={activeImage?.title}
            onClose={() => setActiveImage(null)}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
