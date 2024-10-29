import {createBrowserRouter} from 'react-router-dom'
import Home from '../component/Home/Home';
import InterFace from '../component/InterFace/InterFace';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import More from '../component/more/More';
import Timer from '../component/Timer/Timer';
import Profile from '../component/Profile/Profile'
import Private from '../Private/Private';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <InterFace></InterFace>,
         loader:()=>fetch('http://localhost:3000/iphone'),
         errorElement: <div>404</div>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/oppo",
          element: <Timer></Timer>,
        },
        {
          path: "/samsung",
          element: <Timer></Timer>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
        {
          path: "/phone/:id",
          element: <Private><More></More></Private>,
          loader:({params})=>fetch(`http://localhost:3000/iphone/${params.id}`)
        },
      ],
    },
  ]);

  export default router;