import CreateProduct from "../organism/CreateProduct";
import LandingPage from "../organism/LandingPage";
import Login from "../component/Login";
import Register from "../component/Register";
import { AllProduct } from "../organism/AllProduct";

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
  {
    path: "/AllProduct",
    element: <AllProduct/>,
  },
];

export default Routers;
