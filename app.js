const express = require('express');
const app = express();
const mongoose = require("mongoose");
const config = require("dotenv").config({
    debug: process.env.DEBUG
});

const session = require('express-session');
const connect = require('mongo-connect')
const signUp = require('./controller/signup');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const expressMongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');

/* console.log('config', config.parsed);
console.log("process", process); */
//const connStr = "mongodb://192.168.128.2:27017?authSource=admin";

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(xss())
app.use(expressMongoSanitize())
app.use(compression())
app.use(cors())
app.options

mongoose.connect(process.env.connStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then((res) => console.log('....connected to the mongo database....'))
    .catch(console.log)



app.get("/", (req, res, next) => {
    res.send(
        `<h3>App started succesfully</h3>
        <p>Hello World!!!!</p>
        <button onclick="alert(new Date())">show Date</button>
        `)
})

app.post("/signup", signUp)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app started on port ${port}`)
})

app.on('error', console.log)