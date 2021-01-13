var axios = require('axios');
module.exports = async (lang,city) => {
var data = await axios.get(`https://jobs.github.com/positions.json?description=${lang}&location=${city}`)
}