import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Current Path:', location.pathname); // Debug log
    const setTitle = () => {
      switch (location.pathname) {
        case '/':
          return 'Eco Adventure - Home';
        case '/login':
          return 'Eco Adventure - Login';
        case '/profile':
          return 'Eco Adventure - My Profile';
        case '/update-profile':
          return 'Eco Adventure - Update Profile';
        default:
          if (location.pathname.startsWith('/adventure/')) {
            return 'Eco Adventure - Adventure Details';
          }
          return 'Eco Adventure';
      }
    };

    const newTitle = setTitle();
    console.log('Setting Document Title:', newTitle); // Debug log
    document.title = newTitle;
  }, [location]);

  return null;
};

export default DynamicTitle;
