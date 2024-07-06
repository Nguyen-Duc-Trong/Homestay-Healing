import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
const ServicePriceList = () => {

  useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';
      const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11', 
          center: [105.854444, 21.028511],
          zoom: 12 // starting zoom
      });
      map.addControl(new mapboxgl.NavigationControl());
      return () => map.remove();
  }, []); 
  return (
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default ServicePriceList;