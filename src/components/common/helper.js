const URL = import.meta.env.VITE_BASE_API_KEY
const BASE_URL = "https://youtube.googleapis.com/youtube/v3"

const getMovie = () => {}

const getSearchResults = (query) => {
    return fetch(`${BASE_URL}/search?q=${query}&part=snippet&maxResults=8&key=${URL}`)
    .then(res => {
        let code = res.status
        if(code == 200){
            return res.json()
        } else {
            return code
        }
    })
    .then(json => {
        if(typeof json != "number"){
            return json.items
        } else {
            return json
        }
    }) 
    .catch(err => console.error(err))
}


export {
    getMovie,
    getSearchResults,
}