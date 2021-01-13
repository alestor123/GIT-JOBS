var axios = require('axios'),
arr = [];

module.exports = async (lang,city) => {
var { data }= await axios.get(`https://jobs.github.com/positions.json?description=${lang}&location=${city}`)
data.map(main => arr.push({id:main.id,description:removehtml(main.description),apply:removehtml(main.how_to_apply),title:main.title,type:main.type,url:main.url,posted:main.created_at,company:main.company,companyurl:main.company_url,location:main.location}))
return arr
// console.log(data[0].description.replace( /(<([^>]+)>)/ig, ''))
}
function removehtml(main) {
return main.replace( /(<([^>]+)>)/ig, '')
}