
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Course from './Pages/Courses/Course/Course';
import Courses from './Pages/Courses/Courses';
import Error from './Pages/Error/Error';
import FAQ from './Pages/FAQ/FAQ';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>, children: [
      {
        path : "/", element: <Home></Home>
      },
      {
        path: "/courses",
        loader: () => {
          return fetch (`http://localhost:5000/courses`)
        },
        element: <Courses></Courses>
      },
      {
        path: "/courses/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.id}`)
        },
        element: <Course></Course>
      },
      {
        path: "/faq", element: <FAQ></FAQ>
      },
      {
        path :"/blog", element: <Blog></Blog>
      },
      {
        path: "/login", element: <Login></Login>
      },
      {
        path: "/register", element: <Register></Register>
      },
      {
        path: "/checkout/:id",
        loader: ({params}) => {
          return fetch(`http://localhost:5000/courses/${params.id}`)
        },
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      }
    ]
  }
])

function App() {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
