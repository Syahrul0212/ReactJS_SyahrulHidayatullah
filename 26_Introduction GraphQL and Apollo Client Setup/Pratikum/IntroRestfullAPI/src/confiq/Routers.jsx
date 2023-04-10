import CreateProduct from "../organism/CreateProduct";
import LandingPage from "../organism/LandingPage";
import Login from "../component/login";
import Register from "../component/register";
import { useState } from "react";

const [isSignedIn, setSignedIn] = useState(false)

const Routers = [
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
];

export default Routers;
