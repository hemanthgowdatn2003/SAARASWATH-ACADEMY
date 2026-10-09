export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-IN', options);
};

export const truncate = (str, len = 100) => {
  if (!str) return '';
  return str.length > len ? str.substring(0, len) + '...' : str;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  let cleanPath = path;

  // If already starts with cleanBase (e.g. /SAARASWATH-ACADEMY/), return immediately
  if (cleanPath.startsWith(cleanBase)) {
    return cleanPath;
  }

  // Strip leading slash
  if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }

  // If cleanPath starts with base without leading slash, strip it
  const baseNoSlash = cleanBase.startsWith('/') ? cleanBase.slice(1) : cleanBase;
  if (baseNoSlash && cleanPath.startsWith(baseNoSlash)) {
    cleanPath = cleanPath.slice(baseNoSlash.length);
    if (cleanPath.startsWith('/')) {
      cleanPath = cleanPath.slice(1);
    }
  }

  return `${cleanBase}${cleanPath}`;
};
