const URL_SCHEME = 'http'
const API_URL = 'localhost:3000'

export default {
    buildUrl: function(path) {
        /*  builds url to a backend resource with
            the appropriate url scheme and api url */
        return `${URL_SCHEME}://${API_URL}${path}`
    },

    getMusicVideos: function() {
        /*  loads all music video projects from
            the backend */
        return window
            .fetch(this.buildUrl('/api/projects/musicvideos'))
            .then(async response => {
                if (response.ok) {
                    // get response data
                    const data = await response.json()
                    return data
                } else {
                    // reject promise if error
                    const errorMessage = await response.text()
                    return Promise.reject(new Error(errorMessage))
                }
            })
    }
}
