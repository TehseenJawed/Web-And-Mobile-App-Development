import React, { ReactNode } from  'react';
import { Link } from 'gatsby';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

type LayoutProps = {
    children : ReactNode
}

export default ({children}: LayoutProps)=>{
    return(
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}