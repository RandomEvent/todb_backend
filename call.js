const axios = require('axios');
const { apilink, places } = require('./settings');

// define api handler, default to London Embankment Office
const CallApi = async(loc = places.london) => {
    res = await axios.get(apilink(loc));
    const content = res.data;
    const all_comp = content.list[0].components;
    const dt = content.list[0].dt;

    result = [];
    for (let key in all_comp) {
        record = {
            "metadata": { 'location': loc, 'component': key },
            "dt": new Date(dt * 1000),
            'reading': all_comp[key]
        };
        result.push(record);
    };
    return { result };
};

if (require.main === module) {
    (async() => {
        const res = await CallApi(places.london);
        console.log(res.result);
    })();
};


module.exports = {
    CallApi
};