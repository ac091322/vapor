import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import UserProfile from '../components/UserProfile/UserProfile';
import Homepage from '../components/HomePage/Homepage';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import CreateGame from '../components/Games/CreateGame';
import UploadImage from '../components/Games/UploadImage';
import Layout from './Layout';
import UploadPicture from '../components/Games/UploadImage';


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
      },
      {
        path: "/user",
        element: <UserProfile />
      },
      {
        path: "/create-game",
        element: <CreateGame />
      },
      {
        path: "/add-image",
        element: <UploadPicture />
      }
    ]
  },
  {
    path: "*",
    element: <h1>404 Page not found</h1>
  }
]);
