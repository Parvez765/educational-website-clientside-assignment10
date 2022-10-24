
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path: "/", element: <Main></Main>, children: [
      
    ]
  }
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
