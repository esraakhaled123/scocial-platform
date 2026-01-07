import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import AppFooter from '../footer/Footer'
import AppNavbar from '../Navbar/Navbar'





export default function Layout() {
  return (
    <main className='bg-gray-900 dark:text-gray-100 capitalize '>
    <AppNavbar/>
    <div className=' min-h-screen'>
  <Outlet/>  
    </div>
                 
    <AppFooter/>
    </main>
  )
}
