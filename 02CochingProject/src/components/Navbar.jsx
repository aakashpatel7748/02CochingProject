import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-start gap-4 py-4 px-8 text-2xl  items-center bg-blue-300 text-black'>

      <NavLink
        to={"/"}
        className={(e) => e.isActive ? "text-red-400" : ""}>
        Home
      </NavLink>

      <NavLink
        to={"/recipes"}
        className={(e) => e.isActive ? "text-red-400" : ""}>
        Recipes
      </NavLink>

    

      <NavLink
        to={"/favroite"}
        className={(e) => e.isActive ? "text-red-400" : ""}>
        Favroite
      </NavLink>

      <NavLink
        to={"/about"}
        className={(e) => e.isActive ? "text-red-400" : ""}>
        About
      </NavLink>



      {/* <NavLink to={"/pagenotfound"} className={(e) => e.isActive ? "text-red-400" : ""}>
        PageNotfound
      </NavLink> */}
    </div>
  )
}

export default Navbar