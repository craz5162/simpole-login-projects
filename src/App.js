import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Books from './Books/Books';
import { async } from '@firebase/util';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Header></Header>,
      children: [
        {
          path: "/", element: <PrivateRouter><Home></Home></PrivateRouter>
        },
        {
          path: "/home", element: <PrivateRouter><Home></Home></PrivateRouter>
        },
        {
          path : "/shop",
           element : <PrivateRouter><Shop></Shop></PrivateRouter>
        },
        {
          path : "/login", element : <Login></Login>
        },
        {
          path : "/register", element : <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
