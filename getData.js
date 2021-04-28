const fetch = require("node-fetch");

let url = "https://random-data-api.com/api/users/random_user";

async function getResponse() {
    let response = await fetch(url);
    let content = await response.json()

    return content;
}

getResponse();

