import React from 'react';
import mapboxgl from 'mapbox-gl';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation');
}

// TODO: GET ACCESS_TOKEN
mapboxgl.accessToken = 'TOKEN_MAPBOX';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
