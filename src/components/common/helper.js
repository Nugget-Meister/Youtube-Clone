const URL = import.meta.env.VITE_BASE_API_KEY
const BASE_URL = "https://youtube.googleapis.com/youtube/v3"

const getMovie = () => {}

const getSearchResults = (query) => {
    // console.log(query, URL)
    return fetch(`${BASE_URL}/search?q=${query}&part=snippet&key=${URL}`)
    .then(res => res.json())
    .then(json => json.items)
    .catch(err => console.error(err))
}


export {
    getMovie,
    getSearchResults,
}