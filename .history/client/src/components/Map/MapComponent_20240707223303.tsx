import React, { useEffect, useRef } from 'react';

const MapComponent = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (window.mapboxgl) {
        window.mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';
        const map = new window.mapboxgl.Map({
          container: mapContainerRef.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [105.8412, 21.0245], 
          zoom: 12
        });
  
        // Cleanup map when component unmounts
        return () => map.remove();
      }
    }, []);
  
    return <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />;
  };

export default MapComponent;
