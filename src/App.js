import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./components/Dashboard/DashBoard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import PrivateRoute from "./Route/PrivateRoute";
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
          path: '/dashboard', element: <PrivateRoute><DashBoard /></PrivateRoute>
        },
        {
          path: '/products', element: <PrivateRoute><Products /></PrivateRoute>
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
