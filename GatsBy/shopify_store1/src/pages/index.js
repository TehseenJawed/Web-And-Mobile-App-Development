import React from "react"
import { graphql, Link } from "gatsby"
import './index.css';

const IndexPage = ({data}) => {
  console.log('ITs data +++>>>  ',data)
  if(!data && !data.allShopifyProduct){
    return(<h2>Product is Loading...</h2>)
  }
  return(<div className='mainContainer'>
    <h2>MY PRODUCTS</h2>
    {data.allShopifyProduct.edges.map(({node})=>{
      console.log(node)
      return(<Link key={node.shopifyId} to={`/${node.shopifyId}`}>
        <img width='150' src={node.images[0].originalSrc}/>
        <h5>{node.title}</h5>
        <p>Rs. {node.priceRange.minVariantPrice.amount}</p>
        {/* <p>{node.description}</p> */}
      </Link>)
    })}
  </div>)
}
export const query = graphql`
{
  allShopifyProduct(sort: { fields: [title] }) {
    edges {
      node {
        title
        images {
          originalSrc
        }
        shopifyId
        description
        availableForSale
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
}
`

export default IndexPage
