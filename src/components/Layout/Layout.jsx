import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";

export default function Layout() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Menu", element: <Menu /> },
        { path: "Contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}