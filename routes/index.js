var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author:'Gerardo', appName: 'Webapp', Company: 'Awsome Software'});
});

/* Agregando nueva ruta */
router.get('/greeting', function(req , res, next){
  res.status(200).json({message:'Que pasa chaval'})
})

/* Agregando nueva ruta */
router.get('/Reto', function(req , res, next){
  res.send('Reto completado')
})


module.exports = router;
