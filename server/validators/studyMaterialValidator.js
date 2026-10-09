const validateStudyMaterial = (data) => {
  const errors = {};

  if (!data.title || typeof data.title !== 'string' || data.title.trim().length < 3) {
    errors.title = 'Document title is required (minimum 3 characters)';
  }

  const validTypes = ['Question Paper', 'Study Notes'];
  if (!data.resourceType || !validTypes.includes(data.resourceType)) {
    errors.resourceType = 'Resource type must be "Question Paper" or "Study Notes"';
  }

  const validExams = ['UPSC', 'KAS', 'Other'];
  if (!data.examination || !validExams.includes(data.examination)) {
    errors.examination = 'Examination must be "UPSC", "KAS", or "Other"';
  }

  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 2) {
    errors.subject = 'Subject is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

module.exports = { validateStudyMaterial };
