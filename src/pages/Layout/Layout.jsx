import React, { Children } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
        <Header/>
        <main>
        {children}
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout