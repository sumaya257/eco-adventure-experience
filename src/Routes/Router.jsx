import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home';
import AdventureDetails from '../components/AdventureDetails';  // Adventure Details component
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import MyProfile from '../pages/MyProfile';
import UpdatingProfile from '../pages/UpdatingProfile';

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
        element: (<PrivateRoute>
        <AdventureDetails />
        </PrivateRoute>),
        loader: () => fetch('/adventure.json'),
        },
        {
            path: '/login',
            element:<Login></Login>,
        },
        
        {
            path: '/register',
            element:<Register></Register>,
          },

          {
            path: '/myprofile',
            element:(<PrivateRoute>
              <MyProfile/>
              </PrivateRoute>),
          },

          {
            path: '/updateprofile',

            element:(<PrivateRoute>
              <UpdatingProfile/>
              </PrivateRoute>),
          },

    ],
    
     
  }

  
]);

export default router;
