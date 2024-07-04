import React, { useEffect } from 'react';
import "./worldmap.scss"
import CardValoration from './CardValoration';
const Worldmap = () => {
  useEffect(() => {
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(51.505, -0.09),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 11,
      });

      const waqiMapOverlay = new google.maps.ImageMapType({
        getTileUrl: () => {
          return 'https://tiles.aqicn.org/tiles/{aqi}/{z}/{x}/{y}/55bcd437dd7f26db2151ec0137285945862dd140';
        },
        tileSize: new google.maps.Size(256, 256),
        name: 'Air Quality',
      });

      map.overlayMapTypes.insertAt(0, waqiMapOverlay);
    };

    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC67DJAj1LssGxinHomtpIkjpYQnl9feWY&callback=initMap');
    window.initMap = initMap;
  }, []);
  return (
    <section className="valorations">
      <CardValoration />
      <div className="map" id='map'/>
    </section>
  )
}

export default Worldmap