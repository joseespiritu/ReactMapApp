import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        // TODO: GET ACCESS_TOKEN
        access_token: 'TOKEN_MAPBOX'
    }
});

export default searchApi;