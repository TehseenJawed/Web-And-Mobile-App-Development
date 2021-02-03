import React from "react";
import{Link} from 'gatsby'
import './post.css'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default ({pageContext}) => {
  console.log("Page Context: " + JSON.stringify(pageContext));
  return (<>
  <Link to='/'>Back</Link>
    <div className='mainContainer'>
        <img width='250' src={pageContext.images[0].originalSrc}/>
        <h5>{pageContext.title}</h5>
        <p>Rs. {pageContext.priceRange.minVariantPrice.amount}</p>
        <p>{pageContext.description}</p>
    </div>
    </>)
}