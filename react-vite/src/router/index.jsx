import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import UserProfile from "../components/UserProfile/UserProfile";
import Homepage from "../components/HomePage/Homepage";
import GameDetails from "../components/Games/GameDetails";
import CreateGame from "../components/Games/CreateGame";
import EditGame from "../components/UserProfile/EditGame";
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
        path: "/user",
        element: <UserProfile />
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
        path: "/games/:gameId/edit",
        element: <EditGame />
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
