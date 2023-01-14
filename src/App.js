
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Contact from './Pages/Contact/Contact';
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
          return fetch (`https://assignment10-educationalwebsite-serverside.vercel.app/courses`)
        },
        element: <Courses></Courses>
      },
      {
        path: "/courses/:id",
        loader: ({ params }) => {
          return fetch(`https://assignment10-educationalwebsite-serverside.vercel.app/courses/${params.id}`)
        },
        element: <Course></Course>
      },
      {
        path: "/faq", element: <FAQ></FAQ>
      },
      {
        path :"/about", element: <About/>
      },
      {
        path: "/login", element: <Login></Login>
      },
      {
          path: "/contact", element: <Contact/>
      },
      {
        path: "/register", element: <Register></Register>
      },
      {
        path: "/checkout/:id",
        loader: ({params}) => {
          return fetch(`https://assignment10-educationalwebsite-serverside.vercel.app/courses/${params.id}`)
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
