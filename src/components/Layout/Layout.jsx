
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";

export default function Layout() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <Navbar />
            <Outlet />
          </>
        ),
        children: [
          { index: true, element: <Home /> },
          { path: "Home", element: <Home /> },
          { path: "About", element: <About /> },
          { path: "Menu", element: <Menu /> },
          { path: "Contact", element: <Contact /> },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    }
  );

  return <RouterProvider router={router} />;
}
