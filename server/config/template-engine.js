import ExpHbs from "express-handlebars";
import path from 'path';

// Exportando una funcion de configuracion
export default (app) => {
    //1registrar el motor de plantillas
    app.engine('hbs' , ExpHbs({
        extname: '.hbs',
        defaultLayout: 'main',
    }

    ));

    //2 seleccionar el moto de plantillas registrado en el paso 1
    app.set('view engine', 'hbs');
    //3 estableciendo ruta de las vistas
    app.set('views', path.join(__dirname, '..', 'views'));

    //retomando el valor de entrada
    return app;
};