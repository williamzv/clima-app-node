const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciuadad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}