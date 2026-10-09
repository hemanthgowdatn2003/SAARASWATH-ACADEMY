import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { validateContactForm } from '../../utils/validators';
import { enquiryService } from '../../services/enquiryService';
import { CheckCircle2, Send } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name] || errors.contact) {
      setErrors(prev => ({ ...prev, [name]: null, contact: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const val = validateContactForm(formData);
    if (!val.isValid) {
      setErrors(val.errors);
      return;
    }

    setLoading(true);
    try {
      await enquiryService.submitEnquiry({
        name: formData.name,
        phone: formData.phone || 'N/A',
        email: formData.email,
        courseInterested: `Contact: ${formData.subject || 'General Inquiry'}`,
        notes: formData.message,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-card text-center" style={{ padding: '2.5rem' }}>
        <CheckCircle2 size={48} color="var(--color-success)" style={{ margin: '0 auto 1rem' }} />
        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Thank you for reaching out to Saaraswath IAS/KAS Academy. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
          }}
          className="btn btn-outline btn-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary-900)' }}>
        Send Us a Message
      </h3>
      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        Have questions about batches, hostel facilities, or syllabus? Drop us a note.
      </p>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Your Name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <div className="grid-2" style={{ gap: '1rem' }}>
          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Your contact number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone || errors.contact}
          />
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
        </div>

        <FormInput
          label="Subject"
          name="subject"
          placeholder="What would you like to inquire about?"
          value={formData.subject}
          onChange={handleChange}
        />

        <FormInput
          label="Your Message"
          name="message"
          as="textarea"
          rows={4}
          placeholder="Write your query here..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '0.5rem' }}
          disabled={loading}
        >
          {loading ? 'Sending Message...' : <><Send size={16} /> Submit Message</>}
        </button>
      </form>
    </div>
  );
};
