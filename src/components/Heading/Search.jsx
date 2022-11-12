import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.svg"

const Search = () => {
  const cart = useSelector((state) => state.cart);

  return (
      <section className='search'>
          <div className="container">
          <Link to='/' className='link'>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>

            <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='search' className="searchInput" />
            <span>All Categories</span>
            </div>

            <div className="icons">
            <i className='fa fa-user'></i> 
            <Link to='/cart' className='link'>
            <span className="cartIcon">
            <i className='fa fa-shopping-bag'></i> 
            <span className="count">{cart.length}</span>
            </span>
            </Link>
          </div>

          </div>
      </section>
  )
}

export default Search
