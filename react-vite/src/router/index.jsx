import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import UserProfile from "../components/UserProfile/UserProfile";
import Homepage from "../components/HomePage/Homepage";
import GameDetails from "../components/Games/GameDetails";
import CreateGameForm from "../components/Games/CreateGameForm";
import EditGameForm from "../components/UserProfile/EditGameForm";
import Checkout from "../components/Checkout/Checkout";
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
        element: <EditGameForm />
      },
      {
        path: "/create-game",
        element: <CreateGameForm />
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  },
  {
    path: "*",
    element: <h1>404 Page not found</h1>
  }
]);
