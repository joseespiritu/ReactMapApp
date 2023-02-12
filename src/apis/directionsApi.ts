import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        // TODO: GET ACCESS_TOKEN
        access_token: 'TOKEN_MAPBOX'
    }
});

export default directionsApi;