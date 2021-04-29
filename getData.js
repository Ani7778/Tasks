const axios = require('axios')

let url = "https://random-data-api.com/api/users/random_user";

async function getResponse() {
    let response = await axios.get(url);
    let content = await response.data

    return content;
}

getResponse();


axios.get(url)
.then(function (response) {
    response.data
})
.catch(function (err)  {
    console.error("Failed", err);
})


