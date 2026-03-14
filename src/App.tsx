import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';



const router = createBrowserRouter([
  // {
  //   path: "/signin",
  //   element: <Signin />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },

  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />
    },


    ]
  }
]);
function App() {



  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App