import React, { useEffect, useState } from 'react';
import Map, { MapRef } from 'react-map-gl';

const ServicePriceList = () => {
  const [mapboxGl, setMapboxGl] = useState<any>(null);
  useEffect(() => {
    const loadMapboxGl = async () => {
      const mapboxgl = await import('mapbox-gl');
      setMapboxGl(mapboxgl);
    };
    loadMapboxGl();
  }, []);

  if (!mapboxGl) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Map
        mapLib={mapboxGl}
        initialViewState={{
          longitude: 105.854444,
          latitude: 21.028511,
          zoom: 12
        }}
        style={{ width: '100%', height: '400px' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      />
    </div>
  );
};

export default ServicePriceList;