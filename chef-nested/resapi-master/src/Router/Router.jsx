import {createBrowserRouter}  from 'react-router-dom';
import LayOut from '../layout/LayOut';
import Home from '../Components/Home/Home';
import ResapiInfo from '../Components/ResapiInfo/ResapiInfo';
import Chef from '../Components/Chef/Chef';
import ChifInfo from '../Components/ChifInfo/ChifInfo';
import Login from '../Components/LoginPage/Login';
import Register from '../Components/Registation/Register';
import Private from '../Private/Private';
import Profile from '../Components/Profile/Profile';
const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/resapi/:id",
          element: <Private><ResapiInfo /></Private>,
          loader:({params})=> fetch(`https://cloudy-fish-nightshirt.cyclic.cloud/resapi/${params.id}`)
        },
        {
            path:'/chef',
            element:<Private><Chef/></Private>,
            loader:()=>fetch('https://cloudy-fish-nightshirt.cyclic.cloud/chef')

        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/profile',
            element:<Private><Profile/></Private>
        }
      ],
    }, 
     {
        path:'/chef/:Id',
        element:<ChifInfo/>,
        loader:({params})=> fetch(`https://cloudy-fish-nightshirt.cyclic.cloud/chef/${params.Id}`)
    }
  ]);

  export default router;