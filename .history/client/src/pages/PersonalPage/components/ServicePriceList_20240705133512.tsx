import React, { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';

const ServicePriceList = () => {
  const [mapboxGl, setMapboxGl] = useState<any>(null);

  useEffect(() => {
    const loadMapboxGl = async () => {
      const mapboxglModule = await import('../../../../config-overrides.js'); // Đường dẫn tới file worker tùy chỉnh
      const mapboxgl = mapboxglModule.default;
      mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';
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
      >
        <Marker longitude={105.854444} latitude={21.028511} />
      </Map>
    </div>
  );
};

export default ServicePriceList;