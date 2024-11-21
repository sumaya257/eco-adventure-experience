import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Define titles for each route
    const titles = {
      '/': 'Eco Adventure - Home',
      '/login': 'Eco Adventure - Login',
      '/myprofile': 'Eco Adventure - My Profile',
      '/updateprofile': 'Eco Adventure - Update Profile',
    };

    // Default title if no match is found
    let title = titles[location.pathname] || 'Eco Adventure';

    // Special case for dynamic routes
    if (location.pathname.startsWith('/adventure/')) {
      title = 'Eco Adventure - Adventure Details';
    }

    // Set the document title
    document.title = title;
  }, [location]); // Runs whenever the route changes

  return null; // This component doesn't render anything
};

export default DynamicTitle;
