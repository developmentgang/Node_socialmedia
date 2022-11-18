// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://shubham:XfkfqvIRepmSrEQe@cluster0.raclfdf.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//  client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// module.exports = client



const mongoose = require('mongoose')

const url = `mongodb+srv://shubham:RfviBBkDEmJ9cJU8@cluster0.raclfdf.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')

    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
 
module.exports = mongoose