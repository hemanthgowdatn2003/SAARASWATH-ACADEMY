import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../common/SectionTitle';
import { StudyMaterialCard } from './StudyMaterialCard';
import { studyMaterialService } from '../../services/studyMaterialService';
import { FileText, BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export const StudyMaterialSection = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All'); // 'All', 'Question Paper', 'Study Notes'

  useEffect(() => {
    let isMounted = true;
    const fetchMaterials = async () => {
      try {
        const res = await studyMaterialService.getPublicMaterials({ limit: 6 });
        if (isMounted && res.materials) {
          setMaterials(res.materials);
        }
      } catch (err) {
        console.warn('Study material fetch fallback notice:', err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchMaterials();
    return () => { isMounted = false; };
  }, []);

  const filtered = activeTab === 'All'
    ? materials
    : materials.filter(m => m.resourceType === activeTab);

  return (
    <section className="section-py" style={{ backgroundColor: 'var(--color-soft-blue, #F3F8FF)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 2.5rem' }}>
          <span className="section-tag" style={{ color: 'var(--color-gold)' }}>
            DIGITAL LEARNING & QUESTION VAULT
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Previous Year Question Papers & Study Notes
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Access useful study resources to support your UPSC, KAS, and competitive examination preparation.
          </p>
        </div>

        {/* Category Toggle Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveTab('All')}
            className={`btn btn-sm ${activeTab === 'All' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: 'var(--radius-full)', padding: '0.55rem 1.4rem' }}
          >
            All Resources ({materials.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('Question Paper')}
            className={`btn btn-sm ${activeTab === 'Question Paper' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: 'var(--radius-full)', padding: '0.55rem 1.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <FileText size={15} /> Previous Year Question Papers
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('Study Notes')}
            className={`btn btn-sm ${activeTab === 'Study Notes' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: 'var(--radius-full)', padding: '0.55rem 1.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <BookOpen size={15} /> High-Yield Study Notes
          </button>
        </div>

        {/* Category overview banner pills */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-gold)', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <FileText size={16} color="var(--color-gold)" /> Previous Year Question Papers
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>
              UPSC Prelims & Mains • KPSC KAS Prelims & Mains • Other Competitive Examination Papers
            </p>
          </div>

          <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-primary-blue)', boxShadow: 'var(--shadow-sm)' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-deep-navy)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <BookOpen size={16} color="var(--color-primary-blue)" /> Core Study Notes
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>
              History • Polity • Geography • Economy • Science & Tech • Environment • Karnataka GK • CSAT
            </p>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--color-text-muted)' }}>
            Loading official academy materials...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-xl)' }}>
            <p style={{ color: 'var(--color-text-muted)' }}>No published documents in this category yet.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {filtered.map((item) => (
              <StudyMaterialCard key={item.id || item._id} material={item} />
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/study-materials"
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2.2rem' }}
          >
            <span>View All Study Materials</span> <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialSection;
