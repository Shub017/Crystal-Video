
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar />
          {/* Outlet is where the child routes will be rendered */}
          <Outlet />
        </div>
      ),
      children: [
        {
          path: 'contact',
          element: (
            <div>
              <h1>7017594900</h1>
            </div>
          ),
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path:'home',
          element: <Home />
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
