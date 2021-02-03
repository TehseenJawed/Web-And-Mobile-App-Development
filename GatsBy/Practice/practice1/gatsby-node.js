// exports.createPages = async function ({ actions}) {

//     actions.createPage({
//         path: "products",
//         component: require.resolve(`./src/templates/products.tsx`),
//         context: { 
//             name: "Mango",
//             desc: "This is a Mango."
//          },
//     });
//     console.log("End of Gatsby Node File");
// }

var path = require('path');
exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions
    const result = await graphql(`
    {
        allContentfulMenWear {
            nodes {
              slug
              title
              description {
                raw
              }
            }
          }
    }
    `)
    console.log(JSON.stringify(result));
    result.data.allContentfulMenWear.nodes.forEach((obj) => {
        createPage({
            path: `products/${obj.slug}`,
            component: path.resolve('./src/templates/products.tsx'),
            context:{
                itemDetails:obj
            }
        })
    });
}