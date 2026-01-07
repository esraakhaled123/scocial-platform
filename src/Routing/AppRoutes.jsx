import { createBrowserRouter } from "react-router-dom";

import Posts from "../pages/posts/Posts";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../components/Layout/Layout";
import ProutectedRoutes from "./ProutectedRoutes";
import ProtectedAuthRouting from "./ProtectedAuthRouting";
import PostDetails from "../components/postDetails/PostDetails";
import Profile from "../pages/profile/Profile";


 export const router = createBrowserRouter([
  {path :'',
     element:<Layout/> ,
      children :[
        {
          index: true,
          element:<ProutectedRoutes>
            <Posts/>
          </ProutectedRoutes>
        },
         {
          path:'/posts',
          element:<ProutectedRoutes>
            <Posts/>
          </ProutectedRoutes>
        },
         {
          path: '/login',
          element:<ProtectedAuthRouting>
            <Login/>
          </ProtectedAuthRouting>
        },
         {
          path: '/register',
          element:<ProtectedAuthRouting>
            <Register/>
          </ProtectedAuthRouting>
        },
         {
          path: '/Profile',
          element:
            <Profile/>
          
        },
        {
          path: '/posts/:id',
          element:<PostDetails/>
        
        },
         {
         path:'*' ,
          element:<NotFound/>
        }
      ]}
])