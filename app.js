/**
 * https://developers.google.com/maps/
 * https: //home.openweathermap.org/
 */

const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${temp} grados Celsios`;
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }

}

getInfo(argv.direccion)
    .then(mens => console.log(mens))
    .catch(err => console.error(err));