import React from 'react';
import mapboxgl from 'mapbox-gl'; // Import mapboxgl

const ServicePriceList: React.FC = () => {
    const updateMap = () => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';

        var map = new mapboxgl.Map({
          container: 'map', // ID của container
          style: 'mapbox://styles/mapbox/streets-v11', // URL của style
          center: [105.854444, 21.028511], // vị trí bắt đầu [lng, lat] (ví dụ: Hà Nội)
          zoom: 12, // mức zoom ban đầu
          worker: false // Tắt sử dụng Worker
      });
        var marker = new mapboxgl.Marker().setLngLat([105.854444, 21.028511]).addTo(map);
        // Kiểm tra null trước khi sử dụng getElementById
        let locationInput = document.getElementById('location-input') as HTMLInputElement | null;
        if (locationInput) {
            let location = locationInput.value;
            let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${mapboxgl.accessToken}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.features && data.features.length > 0) {
                        let coords = data.features[0].center;
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
        } else {
            alert('Không tìm thấy phần tử với ID location-input');
        }
    }
    return (
        <div>
            <div>ServicePriceList</div>
            <div id="search-container">
                <input type="text" id="location-input" placeholder="Nhập vị trí..." />
                <button onClick={updateMap}>Cập nhật bản đồ</button> {/* Remove () here */}
            </div>
            <div id="map" style={{ width: '100%', height: '400px' }}></div> {/* Container for map */}
        </div>
    );
}

export default ServicePriceList;