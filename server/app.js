import createError from 'http-errors';
import express  from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import winston from '@server/config/winston';

import indexRouter from '@s-routes/index';
import usersRouter from '@s-routes/users';

//importando configuraciones
import configTemplateEngine from '@s-config/template-engine.js'


//Importando los modulos de webpack
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.config';
import webpackDevConfig from '../webpack.dev.config';

//Consultar el modo en el que se esta ejecutando la apliacion
const env = process.env.NODE_ENV || 'development'

// se crea la aplicacion express
var app = express();

//verificando el modo de ejecuccion de la aplicacion
if(env === 'development'){
  console.log('> Executing in development mode: webpack hot reloading');
    //Paso 1 .agregando la ruta de hot mode reloading
    //reload=true : habilita la recarga del frontend cuando hay cambios en el codigo fuente 
    //del frontend
    //timeout=1000: tiempo de espera entre recarga y recarga de la pagina 
    webpackConfig.entry = ['webpack-hot-middleware/client?reload=true&timeout=1000',webpackConfig.entry];
    
    //paso 2. agregando pluging 
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    //Paso 3 Crear el compilador de webpack
    const compiler = webpack(webpackConfig);

    //Paso 4 Agregando el middleware a la cadena de middleware 
    // de nuestra aplicacion
    app.use(webpackDevMiddleware(compiler,{
      publicPath: webpackDevConfig.output.publicPath
    }));

    //Paso 5.  Agregando el webpackhotmiddleware
    app.use(webpackHotMiddleware(compiler));
}else{
  console.log('>executing in Production Mode...');
  }

// view engine setup
configTemplateEngine(app)

app.use(morgan('dev', { stream : winston.stream })); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..','public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //log
  winston.console.error(`Code 404, Message: Page Not found, URL: ${req.originalUrl},Method: ${req.method} `) ;
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //Loggeando con winston
  winston.error(
    `status: ${err.status || 500}, Message: ${err.message}, Method: ${
      req.method
    }, IP:${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
