import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { validateEnquiryForm } from '../../utils/validators';
import { enquiryService } from '../../services/enquiryService';
import { CheckCircle2, Send, MessageCircle, AlertCircle } from 'lucide-react';
import { INITIAL_COURSES, ACADEMY_INFO } from '../../utils/constants';

export const EnquiryForm = ({ preselectedCourse = '', onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    courseInterested: preselectedCourse || '',
    preferredContactMethod: 'Phone',
    preferredMode: 'Classroom',
    qualification: '',
    notes: '',
    consent: true,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverMsg, setServerMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    if (!formData.consent) {
      setErrors(prev => ({ ...prev, consent: 'Please consent to the privacy policy to proceed.' }));
      return;
    }

    setLoading(true);
    setServerMsg('');

    try {
      const res = await enquiryService.submitEnquiry(formData);
      if (res && res.success) {
        setSuccess(true);
        if (onSuccess) onSuccess();
      } else {
        setServerMsg(res.message || 'Submission could not be completed. Please try again.');
      }
    } catch (err) {
      setServerMsg(err.message || 'Unable to submit enquiry. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    const whatsappText = encodeURIComponent(`Hello Saaraswath Academy, I am ${formData.name}. I just enquired for the ${formData.courseInterested || 'UPSC/KAS'} program. Please guide me regarding admission and new batches.`);
    const whatsappUrl = `https://wa.me/91${ACADEMY_INFO.whatsappNumber}?text=${whatsappText}`;

    return (
      <div className="form-card text-center" style={{ padding: '3rem 2rem' }}>
        <CheckCircle2 size={54} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-900)' }}>
          Admission Enquiry Submitted!
        </h3>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
          Thank you, <strong>{formData.name}</strong>. Your enquiry has been registered in our admission portal. Our senior academic desk will contact you via <strong>{formData.preferredContactMethod || 'Phone'}</strong> at <strong>{formData.phone}</strong> shortly.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <MessageCircle size={18} /> Chat with Counseling Desk on WhatsApp
          </a>
          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                courseInterested: '',
                preferredContactMethod: 'Phone',
                preferredMode: 'Classroom',
                qualification: '',
                notes: '',
                consent: true,
              });
            }}
            className="btn btn-outline"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  const courseOptions = INITIAL_COURSES.map(c => ({
    value: c.title,
    label: `${c.category} - ${c.title}`
  }));

  return (
    <div className="form-card">
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-900)' }}>
          Book Free Mentorship & Admission Call
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
          Get personalized guidance on exam patterns, optional selection, and scholarship discounts.
        </p>
      </div>

      {serverMsg && (
        <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}>
          <AlertCircle size={18} />
          <span>{serverMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name *"
          name="name"
          placeholder="e.g. Ramesh Gowda"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <div className="grid-2" style={{ gap: '1rem' }}>
          <FormInput
            label="Mobile Number *"
            name="phone"
            type="tel"
            placeholder="10-digit Mobile number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />

          <FormInput
            label="Email Address (Optional)"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <div className="grid-2" style={{ gap: '1rem' }}>
          <FormInput
            label="Program Interested *"
            name="courseInterested"
            as="select"
            placeholder="Select a Program"
            options={courseOptions}
            value={formData.courseInterested}
            onChange={handleChange}
            error={errors.courseInterested}
            required
          />

          <FormInput
            label="Preferred Contact Method"
            name="preferredContactMethod"
            as="select"
            options={[
              { value: 'Phone', label: 'Phone Call' },
              { value: 'WhatsApp', label: 'WhatsApp Message' },
              { value: 'Email', label: 'Email' }
            ]}
            value={formData.preferredContactMethod}
            onChange={handleChange}
          />
        </div>

        <div className="grid-2" style={{ gap: '1rem' }}>
          <FormInput
            label="Preferred Learning Mode"
            name="preferredMode"
            as="select"
            options={[
              { value: 'Classroom', label: 'Offline Classroom (Kuvempunagar, Mysuru)' },
              { value: 'Hybrid/Online', label: 'Hybrid / Online Live' },
              { value: 'Weekend Batch', label: 'Exclusive Weekend Batch (Working/Degree)' }
            ]}
            value={formData.preferredMode}
            onChange={handleChange}
          />

          <FormInput
            label="Highest Qualification / College"
            name="qualification"
            placeholder="e.g. Final Year B.A. / B.E. / Graduate"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>

        <FormInput
          label="Any Specific Question or Goal?"
          name="notes"
          as="textarea"
          rows={3}
          placeholder="Mention your target exam year (e.g., KAS 2026/2027), optional subject interest, or hostel inquiry."
          value={formData.notes}
          onChange={handleChange}
        />

        {/* Consent Checkbox */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.82rem', color: '#475569', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              style={{ marginTop: '3px' }}
            />
            <span>
              I agree to receive course syllabus updates and academic counseling calls/messages, and consent to the academy privacy policy.
            </span>
          </label>
          {errors.consent && (
            <div style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem' }}>
              {errors.consent}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.9rem' }}
          disabled={loading}
        >
          {loading ? (
            'Registering Details...'
          ) : (
            <>
              <Send size={18} /> Request Admission Counseling
            </>
          )}
        </button>

        <div style={{ textAlign: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
          <a
            href={`https://wa.me/91${ACADEMY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Saaraswath Academy, I would like to inquire about course admissions and batch timings.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.85rem',
              color: '#16a34a',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none'
            }}
          >
            <MessageCircle size={15} /> Or chat with counseling desk on WhatsApp (+91 {ACADEMY_INFO.whatsappNumber})
          </a>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
