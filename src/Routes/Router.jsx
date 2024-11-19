import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home';
import AdventureDetails from '../components/AdventureDetails';  // Adventure Details component
import AdventureExperiences from '../components/AdventureExperience';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/adventure.json'), // Fetch all adventures for Home
       },

       {
        path: '/adventure/:id', // Dynamic path for adventure details
        element: <AdventureDetails />,
        loader: () => fetch('/adventure.json'),
        },
    ],
  },
]);

export default router;
