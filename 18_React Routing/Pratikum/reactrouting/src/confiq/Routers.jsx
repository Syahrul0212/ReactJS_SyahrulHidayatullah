import CreateProduct from "../organism/CreateProduct";
import LandingPage from "../organism/LandingPage";


const Routers = [
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct/>,
  },
];

export default Routers;
