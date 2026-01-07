
import './App.css'


import {  RouterProvider } from 'react-router-dom'
import { router } from './Routing/AppRoutes'
import AuthContextProvider from './components/Context/AuthContext'
import { ToastContainer } from 'react-toastify'


// import { RouterProvider } from 'react-router-dom'
// import { router } from './assets/Routing/AppRoutes'

function App() {
 

  return (
    <>
    <AuthContextProvider>
<RouterProvider router={router}/>
{/* <ToastContainer/> */}
    </AuthContextProvider>
      
   
    </>
  )
}

export default App
