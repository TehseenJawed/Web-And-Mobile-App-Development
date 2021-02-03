import React from 'react';
import {Link} from 'gatsby'
import './layout.css'
const Layout = () =>{
  return(
    <nav className='navContainer'>
      <h2>Working</h2>
      <Link to='/product'>
      <i class="fas fa-cart-plus"></i><label>0</label>
      </Link>
    </nav>
  )
}
export default Layout