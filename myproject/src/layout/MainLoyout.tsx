// import React from 'react'

import { Children } from "react"
import About from "../Components/About"
import Footer from "../Components/Footer"
import Header from "../Components/Headers"
import Products from "../Components/Product"
import { Outlet } from "react-router-dom"

const MainLoyout = () => {


  return (
    <div>
        <div>
            <Header/>
        </div>
        <main>
           <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default MainLoyout