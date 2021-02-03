var faunadb= require(`faunadb`),
  q = faunadb.query;

exports.handler = async (event, context) => {
    try{
        const messageBody = JSON.parse(event.body);
        var adminClient = new faunadb.Client({ secret: 'fnAEAVzUCIACBS0ajwJNhLHbmt5h3GwiAXEWuVN5' });

        adminClient.query(
            q.CreateDatabase(
                q.Collection('messages'),
                {data : {detail : messageBody.message}},
            )
          )
        const result = event.queryStringParameters.name || 'World'
        return {
            statusCode: 200,
            body: JSON.stringify({message: result.ref.id}),
        }
    }
    catch(err) {
        return {
            statusCode: 500, body:err.toString()
        }
    }
}