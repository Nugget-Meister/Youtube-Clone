const URL = import.meta.env.VITE_BASE_API_KEY
const BASE_URL = "https://youtube.googleapis.com/youtube/v3"

const getMovie = () => {}

const getSearchResults = (query) => {
    // console.log(query, URL)
    fetch(`${BASE_URL}/search?q=${query}&part=snippet&key=${URL}`)
    .then(res => res.json())
    .catch(err => console.err(err))
}


export {
    getMovie,
    getSearchResults,
}