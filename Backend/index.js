'use strict' // Activa el modo estricto 

var mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/api_rest_blog",{ useNewUrlParser: true })
        .then(() => {
                console.log("La conexion a la base de datos se ha realizdo correctamente");

});
