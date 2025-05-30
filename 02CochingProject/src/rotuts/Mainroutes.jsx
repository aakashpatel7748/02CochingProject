import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Create from "../pages/Create"
import About from "../pages/About"
import Favroite from "../pages/Favroite"
import PageNotFound from "../pages/PageNotFound"
import Recips from "../pages/Recips"
import Update from "../pages/Update"
import Recip from "../pages/Recip"

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<Recips />} />
      <Route path='/recipes/create-recipe' element={<Create />} />
      <Route path='/recipes/details/:id' element={<Recip />} />
      <Route path='/recipes/update-recipe/:id' element={<Update />} />
      
      <Route path='/favroite' element={<Favroite />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Mainroutes