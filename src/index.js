const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// PARA TENER LOS ACCESOS A MI API CONTROLADOS
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
    origin: (origin,callback) => {
        if(whitelist.includes(origin) || origin){
            callback(null,true);
        }else {
            callback(new Error ('no permitido'));
        }
    }
}
app.use(cors());
// AQUI TERMINA

app.get('/', (req,res)=>{
    res.send('home');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Mi port' +  port);
  });