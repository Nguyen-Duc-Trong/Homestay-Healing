import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
const ServicePriceList = () => {
  var marker = new mapboxgl.Marker().setLngLat([105.854444, 21.028511]).addTo(map);
    const updateMap = ()=>{
      var location = document.getElementById('location-input').value;
      var url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxgl.accessToken}`;
      
      fetch(url)
          .then(response => response.json())
          .then(data => {
              if (data.features && data.features.length > 0) {
                  var coords = data.features[0].center;
                  map.flyTo({
                      center: coords,
                      zoom: 12
                  });
                  marker.setLngLat(coords);
              } else {
                  alert('Không tìm thấy vị trí');
              }
          })
          .catch(err => {
              console.error(err);
              alert('Đã xảy ra lỗi khi tìm kiếm vị trí');
          });
  }
  const show = ()=>{
      mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';
      var map = new mapboxgl.Map({
          container: 'map', // ID của container
          style: 'mapbox://styles/mapbox/streets-v11', // URL của style
          center: [105.854444, 21.028511], // vị trí bắt đầu [lng, lat] (ví dụ: Hà Nội)
          zoom: 12 // mức zoom ban đầu
      });
  }
    return (
        <div>
            <div>ServicePriceList</div>
            <div id="search-container">
                <input type="text" id="location-input" placeholder="Nhập vị trí..." />
                <button  onClick={updateMap}>Cập nhật bản đồ</button>
            </div>
             <div id="map">
                {show}
             </div>
        </div>
    );
}

export default ServicePriceList;