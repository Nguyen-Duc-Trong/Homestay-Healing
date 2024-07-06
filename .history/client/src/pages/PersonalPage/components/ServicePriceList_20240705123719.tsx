import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
const ServicePriceList = () => {

  useEffect(() => {
      mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';
      var map = new mapboxgl.Map({
        container: 'map', // ID của container
        style: 'mapbox://styles/mapbox/streets-v11', // URL của style
        center: [105.854444, 21.028511], // vị trí bắt đầu [lng, lat] (ví dụ: Hà Nội)
        zoom: 12, // mức zoom ban đầu
        worker: false // Tắt sử dụng Worker
    });
      map.addControl(new mapboxgl.NavigationControl());
      return () => map.remove();
  }, []); 
  return (
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default ServicePriceList;