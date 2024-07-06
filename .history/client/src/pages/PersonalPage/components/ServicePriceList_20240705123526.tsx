import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
const ServicePriceList = () => {

  useEffect(() => {
      mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
      
      // Create a map instance
      const map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [105.854444, 21.028511], // starting position [lng, lat]
          zoom: 12 // starting zoom
      });

      // Add navigation control (optional)
      map.addControl(new mapboxgl.NavigationControl());

      // Clean up
      return () => map.remove(); // Optional cleanup function
  }, []); // Empty dependency array means this effect runs only once

  return (
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default ServicePriceList;