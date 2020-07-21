const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv/config")

const app = express();

app.use(cors());
app.use(bodyParser.json())
// app.use('/customers', () => {
//     console.log('In get method');
// });

const userRoute = require('./routes/user');

app.use('/user', userRoute);

const customerRoute = require('./routes/customer');

app.use('/customers', customerRoute);


app.get('/', (req, res) => {
    res.send("Please provide correcct resource url to access the onboarding service e.g /customers");
});

mongoose.connect("mongodb+srv://mdbadmin:Incorrect@cluster0-el86i.azure.mongodb.net/Onboarding?retryWrites=true&w=majority",
    { useNewUrlParser: true ,useUnifiedTopology: true  },() =>{
    console.log("DB Connected - Local")    
})

app.listen(3001, () => {
    logger.info("xpress Application Server");
    console.log("Express Application Server Is Running At Port 3001");
});
