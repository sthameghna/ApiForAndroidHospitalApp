const express = require('express');
const bodyParser = require('body-parser');
require('./Database/mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const middleware = require('./Middleware/middleware');
const auth = require('./Middleware/auth');

//require('./db/mongoose')

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); 


const userRouter = require('./Routers/users')
app.use(userRouter)


const appointmentRouter = require('./Routers/appointment')
app.use(appointmentRouter)


app.listen(5000, function(){
});