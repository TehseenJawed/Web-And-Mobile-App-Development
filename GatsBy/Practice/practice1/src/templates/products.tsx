import React from 'react';
import Layout from "../components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Fruit({pageContext}){
    console.log(pageContext)
    const {slug, title} = pageContext.itemDetails
    return(<div>
        <Layout>
            <p><b>Slug: </b>{slug}</p>
            <p><b>Title: </b>{title}</p>
        </Layout>
    </div>)
}