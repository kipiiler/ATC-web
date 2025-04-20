import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Portfolio from "./page/Portfolio";
import Blog from "./page/Blog";
import DefaultLauyout from "./layout/default";
import BlogPost from "./page/BlogDetail";
import Directory from "./page/Directory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <DefaultLauyout>
          <Home />
        </DefaultLauyout>
      ),
    },
    {
      path: "/blog/:blogId",
      element: (
        <DefaultLauyout>
          <BlogPost />
        </DefaultLauyout>
      ),
    },

    {
      path: "/blogs",
      element: (
        <DefaultLauyout>
          <Blog />
        </DefaultLauyout>
      ),
    },
    {
      path: "/portfolio",
      element: (
        <DefaultLauyout>
          <Portfolio />
        </DefaultLauyout>
      ),
    },
    {
      path: "/people",
      element: (
        <DefaultLauyout>
          <Directory />
        </DefaultLauyout>
      ),
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
