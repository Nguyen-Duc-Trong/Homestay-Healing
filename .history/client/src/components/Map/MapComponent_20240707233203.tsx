import React, { useEffect, useRef } from 'react';

const MapComponent = (prop:any) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const {location} = prop
  const updateMap = ()=>{
    // let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxgl.accessToken}`;
    
    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.features && data.features.length > 0) {
    //             let coords = data.features[0].center;
    //             map.flyTo({
    //                 center: coords,
    //                 zoom: 12
    //             });
    //             marker.setLngLat(coords);
    //         } else {
    //             alert('Không tìm thấy vị trí');
    //         }
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         alert('Đã xảy ra lỗi khi tìm kiếm vị trí');
    //     });
}

  useEffect(() => {
    if (window.mapboxgl) {
      window.mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';
      const map = new window.mapboxgl.Map({
        container: mapContainerRef.current!,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [105.8412, 21.0245], 
        zoom: 12,
        workerSourceURL: null 
      });
      const marker = new window.mapboxgl.Marker().setLngLat([105.8412, 21.0245]).addTo(map);



      return () => map.remove();
    }
  }, []);
  useEffect(() => {
    updateMap();
  }, [location]);
  return (<div ref={mapContainerRef} style={{ width: '100%', height: '500px' }}>

  </div>);
};

export default MapComponent;
