const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const routes = require('./routes/exec');

app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());

app.use((req, response, next) => {
    response.header('Access-Control-Allow-Origin', '*'); /* aqui va el origen permitido */
    response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use("/", routes);

app.listen(5000, () => {
    console.log('hey estoy escuchando linkin park');
})