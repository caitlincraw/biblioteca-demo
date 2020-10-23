require('dotenv').config();

const express = require('express');
const app = express();   
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const mainRouter = require('./routers/main');
// const authRouter = require('./routers/auth');

app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use(bodyParser.json());

app.use(mainRouter);

app.get("/heartbeat", function(req, res) {
    res.json({
      is: "working"
    });
  });

app.listen(process.env.PORT, () => {
    console.log(`Server started at Port ${process.env.PORT}`)
});