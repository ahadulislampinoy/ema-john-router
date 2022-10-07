import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./layout/Main";
import { productAndCartLoader } from "./Loader/productAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Shop /> },
        {
          path: "shop",
          element: <Shop />,
          loader: () => productAndCartLoader(),
        },
        {
          path: "orders",
          element: <Orders />,
          loader: () => productAndCartLoader(),
        },
        { path: "inventory", element: <Inventory /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
