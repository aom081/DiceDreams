import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import Post from "../components/Post";
import CreatePost from "../components/CcreatePost";
import Rules from "../pages/Rule";
import LoginPage from "../pages/login/loginRegister"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "rules",
        element: <Rules />
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path:"/",
        element: <Post />
      },
      {
        path:"/create-post", 
        element:< CreatePost />
      },
    ]
  }
]);

export default router;
