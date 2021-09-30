module.exports = {
    //1. especificando el archivo de entrada 
    entry: './client/index.js',
    //2 especificar el archivo de salida 

    output: {
        path: '/public' ,//3 la ruta absoluta de la salida
        filename: 'bundle.js' //4 nombre del archivo de salida 
    },
    devServer: {
        contentBase: './public'
    }
}