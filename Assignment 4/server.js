require('dotenv').config();// call first //enviroment
//Broke the middleware and doing arrangment

const express = require('express'); // require package
const app = express(); // express.js minimal setup/container
//BoilerPlate
const middleware = require('./middleware'); // middle wares 

const config =require('./config');//configuration
const routes = require('./routes');

//middleware
app.use(middleware.env);
app.use(middleware.bodyParser);
app.use(routes.user);

console.log(process.env.PORT);
// Application PORT
const PORT = config.PORT;



// Dummy database



app.listen(PORT, (err) =>{
  if(err) console.log(err);
  else console.log('Server is Running on PORT 3000  ${PORT}');
}); 


//API - Application Programming Interface
//API (GET, POST, PATCH, PUT , DELETE)

//semicolon is optional

//GET API - Send response to browser/frontend

