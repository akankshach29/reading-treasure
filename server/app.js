const express = require('express');
const graphqlHTTP = require('express-graphql'); // this is a middleware
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// allowing cross-origin requests
app.use(cors());

// connect to mLab database
mongoose.connect('mongodb://coder_chachi:bunglow_91@ds163254.mlab.com:63254/my-projects')
mongoose.connection.once('open', ()=> {
    console.log('connected to db')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening on 4000');
    
})