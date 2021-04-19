const express = require('express'); // con esto traigo express
const app = express(); 
const morgan = require('morgan'); // con esto traigo morgan

//settings
app.set('port',process.env.PORT || 3000); //defino un puerto de nombre port, si defino un puerto por la nube q lo tome y sino q tome el puert 3000 por defecto
app.set('json spaces', 2);

//middlewares
app.use( morgan('dev')); //con morgan traigo las peticiones al servidor a la consola
//app.use( morgan('combined')); //con morgan traigo las peticiones al servidor a la consola pero mas especifico
app.use(express.urlencoded({extended: false})); //vamos a tratar de tomar los datos q vengan desde forms o inputs
app.use(express.json()); // le permite al servidor empezar a usar formatos .json y entenderlos

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));




app.listen(app.get('port'), ()=>{ //escuche puerto 3000
    console.log(`Server on port ${app.get('port')}`);
});
