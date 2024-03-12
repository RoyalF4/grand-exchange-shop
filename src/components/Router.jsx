import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ErrorPage from './ErrorPage';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Home from './Home/Home';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'cart', element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
