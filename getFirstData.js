const axios = require('axios')

let url1 = "https://random-data-api.com/api/food/random_food";
let url2 = "https://random-data-api.com/api/name/random_name";

Promise.race([
    axios.get(url1),
    axios.get(url2)
]).then(function (firstResult) {
    console.log(firstResult.data)
});