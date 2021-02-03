var faunadb = require('faunadb'),
  q = faunadb.query;
 
 
  (async()=>{
    var adminClient = new faunadb.Client({ secret: 'fnAEAVzUCIACBS0ajwJNhLHbmt5h3GwiAXEWuVN5' });

    try{
      const result =await adminClient.query(
        q.CreateDatabase({ name: 'my_app' })
      );
      console.log(result)
    }
    catch(err){
      console.log(err)
    }

  })();