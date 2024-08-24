import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import UserProfile from "../components/UserProfile/UserProfile";
import Homepage from "../components/Homepage/Homepage"
import GameDetails from "../components/Games/GameDetails";
import CreateGame from "../components/Games/CreateGame";
import UploadImage from "../components/Games/UploadImage";
import Layout from "./Layout";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginFormPage />,
      },
      {
        path: "/signup",
        element: <SignupFormPage />,
      },
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/games",
        element: <Homepage />
      },
      {
        path: "/games/:gameId",
        element: <GameDetails />
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
      }
    ]
  },
  {
    path: "*",
    element: <h1>404 Page not found</h1>
  }
]);
