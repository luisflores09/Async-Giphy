require('dotenv').config();
let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}`

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

async function getImages(query) {
    let queryLink = `&q=${query}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    let response = await fetch(endpoint+queryLink);
    let data = await response.json();
    console.log(data);
    return data;
}
console.log(getImages('cats'));