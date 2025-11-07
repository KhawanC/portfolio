import { useEffect } from 'react';

const MetaTags = () => {
  useEffect(() => {
    const currentUrl = window.location.origin + window.location.pathname;
    const ogImageUrl = currentUrl + '/og-image.png';

    const updateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`) || 
                 document.querySelector(`meta[name="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property.startsWith('og:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:image', ogImageUrl);
    updateMetaTag('twitter:image', ogImageUrl);
  }, []);

  return null;
};

export default MetaTags;

