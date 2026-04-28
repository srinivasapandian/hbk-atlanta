import { useEffect } from 'react';

export default function SeoHead({ title, description, keywords = [] }) {
  useEffect(() => {
    if (title) document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute('content', description);
  }, [title, description]);

  return null;
}

export const seoConfig = {
  home: {
    title: 'Home - Authentic South Indian Restaurant',
    description: 'Discover authentic South Indian cuisine with traditional recipes, signature flavors, and a warm dine-in experience.',
  },
  menu: {
    title: 'Menu - South India Restaurant | Full Menu',
    description: 'Explore our full South Indian menu with appetizers, mains, desserts, and popular signature dishes.',
  },
  events: {
    title: 'Events - South India Restaurant',
    description: 'Explore ongoing events, seasonal offers, and festive dining experiences at our South Indian restaurant.',
  },
  contact: {
    title: 'Contact Us - South India Restaurant',
    description: 'Reach us for reservations, private events, and general enquiries.',
  },
};
