import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home sitename="ReactJS template" />,
  },
  {
    path: "/login",
    element: <Login sitename="ReactJS template" />,
  },
  {
    path: "/signup",
    element: <Signup sitename="ReactJS template" />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
