import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/Dashboard/DashBoard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import MainLayout from "./Tempelate/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        {
          path: '/', element: <Home />
        },
        {
          path: '/login', element: <Login />
        },
        {
          path: '/register', element: <Register />
        },
        {
          path: '/dashboard', element: <DashBoard />
        },
        {
          path: '/products', element: <Products />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
