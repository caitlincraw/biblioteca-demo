require('dotenv').config();

const express = require('express');
const app = express();   
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const mainRouter = require('./routers/main');
const hbRouter = require('./routers/apiHeartbeat');
const booksRouter = require('./routers/apiBooks');
// const authRouter = require('./routers/auth');

// USING MIDDLEWARE 
app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use(bodyParser.json());

// USING ALL THE ROUTERS 
app.use(mainRouter);
app.use("/api", hbRouter);
app.use("/api", booksRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started at Port ${process.env.PORT}`)
});