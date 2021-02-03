const faunadb = require('faunadb'),
  q = faunadb.query;

exports.handler = async (event, context) => {
  try {

    // Only allow POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    let reqObj = JSON.parse(event.body);

    var client = new faunadb.Client({ secret: 'fnAEAuihLhACB8XVSd7yfhKLfSaNexZDJkmzRJJf' });

    var result = await client.query(
      q.Create(
        q.Collection('directory'),
        { data: { name: reqObj.name, age: reqObj.age } },
      )
    );
    
    console.log("Entry Created and Inserted in Container: " + result.ref.id);
   
    
    return {
      statusCode: 200,
      body: JSON.stringify({ id: `${result.ref.id}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}