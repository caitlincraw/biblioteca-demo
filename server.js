require('dotenv').config();

const express = require('express');
const app = express();   
const bodyParser = require('body-parser');
const session = require('express-session');
const mainRouter = require('./routers/main');
const hbRouter = require('./routers/apiHeartbeat');
const booksRouter = require('./routers/apiBooks');
const auth = require('./auth');
const passport = require('./auth/passport');

// USING MIDDLEWARE 
app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use(bodyParser.json());

// Set up sessions with cookies
app.use(session({
    secret: 'super secret',
    cookie: {maxAge: 60000}
}))

// Attach Passport to Express and Sessions
app.use(passport.initialize())
app.use(passport.session())

// USING ALL THE ROUTERS 
app.use(mainRouter);
app.use("/api", hbRouter);
app.use("/api", booksRouter);
app.use("/auth", auth);

app.listen(process.env.PORT, () => {
    console.log(`Server started at Port ${process.env.PORT}`)
});