const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=06dc933a0f6d55f2b7c9c632c17f3d54`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}