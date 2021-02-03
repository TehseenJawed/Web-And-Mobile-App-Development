import React from  'react';
import { Link } from 'gatsby';
import Style from './navbar.module.css';

export default ()=>{
    return(
        <div className={Style.navContainer}>
            <Link to='/'>Home</Link>
            <Link to='/products/'>Product</Link>
            <Link to='/about/'>About</Link>
            <Link to='/contact/'>Contact</Link>
            
        </div>
    )
}