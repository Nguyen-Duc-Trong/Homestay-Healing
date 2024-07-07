import React, { useEffect, useRef } from 'react';

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Kiểm tra xem Mapbox đã được tải chưa
    if (window.mapboxgl) {
      // Thiết lập Mapbox
      window.mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
      const map = new window.mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [105.8412, 21.0245], // Tọa độ trung tâm (Hà Nội)
        zoom: 12
      });

      // Cleanup map khi component bị unmount
      return () => map.remove();
    }
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;
