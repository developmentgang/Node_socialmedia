const mongoose = require('mongoose')

// const url = `mongodb+srv://shubham:RfviBBkDEmJ9cJU8@cluster0.socialmedia.mongodb.net/?retryWrites=true&w=majority`;
const url = `mongodb+srv://shubham:RfviBBkDEmJ9cJU8@cluster0.raclfdf.mongodb.net/socialmedia?retryWrites=true&w=majority`;

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