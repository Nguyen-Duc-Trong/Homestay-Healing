import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
export default mapboxgl;