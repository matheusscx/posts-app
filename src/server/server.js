const express = require('express');
const paht = require('path')
const cors = require('cors');
const app = express();


// Configuración Global
require('./config/config');

//CORS habilitados para todos los origenes
app.use(cors());

// Carpeta public habilitada
app.use(express.static(paht.resolve(__dirname,'../public')));

// parse application/x-www-form-urlencoded 
app.use(express.urlencoded({extended: false}));

// parse application/json
app.use(express.json());


// Rutas 
app.use('/posts',require('../routes/posts.routes'));


// Start Server
app.listen(process.env.PORT,()=> console.log(`Server on Port: ${process.env.PORT}`));