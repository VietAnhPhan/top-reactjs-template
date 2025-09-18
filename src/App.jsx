import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
