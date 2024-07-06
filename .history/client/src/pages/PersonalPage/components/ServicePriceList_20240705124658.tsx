import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const ServicePriceList = () => {
  useEffect(() => {
    // Cấu hình access token cho mapbox-gl
    mapboxgl.accessToken = 'pk.eyJ1IjoidG1jNDYzIiwiYSI6ImNseTgybTJ5azBiY3gybHNhZWdtZnUwejEifQ.ZX8PcIuIWAgYHMrJ4OVKSQ';
    
    // Tắt sử dụng Worker trong mapbox-gl để tránh lỗi CSP
    (mapboxgl as any).config.workerOptions = {
      worker: false
    };

    // Tạo bản đồ mapbox-gl
    var map = new mapboxgl.Map({
      container: 'map', // ID của container
      style: 'mapbox://styles/mapbox/streets-v11', // URL của style
      center: [105.854444, 21.028511], // vị trí bắt đầu [lng, lat] (ví dụ: Hà Nội)
      zoom: 12 // mức zoom ban đầu
    });

    // Thêm control điều hướng vào bản đồ
    map.addControl(new mapboxgl.NavigationControl());

    // Hàm cleanup, xóa bản đồ khi component bị unmount
    return () => map.remove();
  }, []); // useEffect sẽ chỉ gọi một lần sau khi component được render

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default ServicePriceList;