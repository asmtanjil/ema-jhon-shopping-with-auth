import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;