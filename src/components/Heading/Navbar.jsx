import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className='navbar d-flex'>
      <div className="container d-flex">
        <div className="categories">
          <i className="fa-solid fa-border-all"></i>
          <label>Categories</label>
        </div>

        <ul className={(mobileMenu) ? "navlinksMobile" : "navlinks"} onClick={() => {setMobileMenu(false)}}>
        <Link to={"/"} className="link"><li>Home</li></Link>
        <Link to={"/pages"} className="link"><li>Pages</li></Link> 
        <Link to={"/user"} className="link"> <li>User Account</li></Link>
        <Link to={"/vendor"} className="link"> <li> Vendor Account </li></Link>
        <Link to={"/track"} className="link"><li>  Track My Order </li></Link>
        <Link to={"/contact"} className="link"><li>Contact</li> </Link>
        </ul>

      <button onClick={() => {setMobileMenu( ! mobileMenu )}}>

      {(mobileMenu) ? <i className='fas fa-times close home-bth'></i> : <i className='fas fa-bars open'></i>}


      </button>

      </div>
    </div>
  )
}

export default Navbar
