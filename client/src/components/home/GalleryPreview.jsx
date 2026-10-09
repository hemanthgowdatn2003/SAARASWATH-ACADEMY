import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { GalleryCard } from '../common/GalleryCard';
import { Lightbox } from '../common/Lightbox';
import { INITIAL_GALLERY } from '../../utils/constants';
import { galleryService } from '../../services/galleryService';
import { ArrowRight, Image } from 'lucide-react';

export const GalleryPreview = () => {
  const [galleryItems, setGalleryItems] = useState(INITIAL_GALLERY);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    galleryService.getAllImages().then(data => {
      if (Array.isArray(data) && data.length > 0) setGalleryItems(data);
    }).catch(() => {});
  }, []);

  return (
    <section className="section-py bg-white">
      <div className="container">
        <SectionTitle
          subtitle="Campus & Life"
          title="Academy Life & Interactive Sessions"
          description="Take a visual tour through our learning spaces, workshops, interactive mentor sessions, and celebration ceremonies."
        />

        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {galleryItems.slice(0, 3).map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onOpen={(img) => setActiveImage(img)}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.5rem' }}>
            <Image size={18} /> View Complete Academy Gallery <ArrowRight size={16} />
          </Link>
        </div>

        {/* Modal lightbox */}
        <Lightbox
          isOpen={!!activeImage}
          image={activeImage?.image}
          title={activeImage?.title}
          onClose={() => setActiveImage(null)}
        />
      </div>
    </section>
  );
};
