
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blog from './Pages/Blog/Blog';
import Courses from './Pages/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ';

const router = createBrowserRouter([
  {
    path: "/", element: <Main></Main>, children: [
      {
        path: "/courses", element: <Courses></Courses>
      },
      {
        path: "/faq", element: <FAQ></FAQ>
      },
      {
        path :"/blog", element: <Blog></Blog>
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
