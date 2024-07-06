import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';

const ServicePriceList = () => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [locationInput, setLocationInput] = useState('');

    // Initialize map on component mount
    React.useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';

        const newMap = new mapboxgl.Map({
            container: 'map', // ID của container
            style: 'mapbox://styles/mapbox/streets-v11', // URL của style
            center: [105.854444, 21.028511], // vị trí bắt đầu [lng, lat] (ví dụ: Hà Nội)
            zoom: 12 // mức zoom ban đầu
        });

        const newMarker = new mapboxgl.Marker().setLngLat([105.854444, 21.028511]).addTo(newMap);

        setMap(newMap);
        setMarker(newMarker);

        // Cleanup function
        return () => {
            if (newMap) newMap.remove();
        };
    }, []);

    // Function to update map based on location input
    const updateMap = () => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationInput)}.json?access_token=${mapboxgl.accessToken}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.features && data.features.length > 0) {
                    const coords = data.features[0].center;
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
    };

    // Event handler for input change
    const handleInputChange = (event) => {
        setLocationInput(event.target.value);
    };

    return (
        <div>
            <div id="search-container">
                <input
                    type="text"
                    id="location-input"
                    placeholder="Nhập vị trí..."
                    value={locationInput}
                    onChange={handleInputChange}
                />
                <button onClick={updateMap}>Cập nhật bản đồ</button>
            </div>
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default ServicePriceList;