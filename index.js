//Cargamos la dependencia express
const express = require('express');
//Creamos una nueva app con express
const app = express();

app.set('view engine', 'ejs')
//Definir el puerto
const port = 3000;

const specialDay = 31;
const specialMonth = 9;

//When base url is requested(/)
//HTTP GET Method
//COnfigurar la respuesta del servidor cuando se pide la
//url raiz con GET
app.get('/', (req, res) => {
    let currentdate = new Date();

    let currentDayOfTheMonth = currentdate.getDate();

    let currentMonth = currentdate.getMonth();

    if (currentDayOfTheMonth === specialDay && currentMonth === specialMonth){
        //res.send('YES');
        res.render('index', {message: 'YES'});
    }else{
        //res.send('NO');
        res.render('index', {message: 'NO'});
    }

});

//Arrancar el servidor en el puerto indicado 
app.listen(port, () => {
    //Funcion que se mada a llamar cuando el servidor 
    //arranca
    //console.log('Server listening on port' + port);
    console.log(`Server listening on port + ${port}`);
});

