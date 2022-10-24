
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blog from './Pages/Blog/Blog';
import Course from './Pages/Courses/Course/Course';
import Courses from './Pages/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/", element: <Main></Main>, children: [
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
          return fetch(`http://localhost:5000/courses/category/${params.id}`)
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
