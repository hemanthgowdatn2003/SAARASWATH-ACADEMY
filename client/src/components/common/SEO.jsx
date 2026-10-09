import { useEffect } from 'react';

export const SEO = ({ title, description }) => {
  useEffect(() => {
    const defaultTitle = "Saaraswath IAS/KAS Academy Mysuru | The Success Blueprint";
    document.title = title ? `${title} | Saaraswath Academy` : defaultTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};
