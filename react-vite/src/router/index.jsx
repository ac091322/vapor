import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Homepage from '../components/HomePage/Homepage';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import UploadImage from '../components/Games/UploadImage';
import Layout from './Layout';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/banner",
        element: <HomeBanner />
      },
      {
        path: "/login",
        element: <LoginFormPage />,
      },
      {
        path: "/signup",
        element: <SignupFormPage />,
      },
      {
        path: "/games/upload",
        element: <UploadImage />
      }
    ]
  },
  {
    path: "*",
    element: <h1>404 Page not found</h1>
  }
]);
