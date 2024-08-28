import { createBrowserRouter } from "react-router-dom";
import AboutUs from './Pages/AboutUs/AboutUs'
import Clients from './Pages/Clients';
import Services from './Pages/Services/Services';
import SingleService from './Pages/SingleService/SingleService';
//Pages
import Home from "./Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Clients",
    element: <Clients/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/Services/:id",
    element: <SingleService/>,
  },
]);

export default router;
