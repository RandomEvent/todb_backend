// define locations
const places = { london: 'london', belfast: 'belfast' };
const london = [51.50778978179946, -0.12407923141772743];
const belfast = [54.597170488996916, -5.932660415922603];
const locations = { london, belfast };

// get my key
const my_key = process.env.WEATHERKEY;

// define the api link
const apilink = (location = places.london, api_key = my_key) => {
    const loc = locations[location]
    const lat = loc[0]
    const lon = loc[1]
    return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;
};

// define the geo code link
const geocodelink = (lat, lon, limit = 5, api_key = my_key) => {
    return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${api_key}`;
};


module.exports = {
    places,
    locations,
    london,
    belfast,
    apilink,
    geocodelink
};