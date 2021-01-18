/* src/App.js */
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from "./Map.module.css";

mapboxgl.accessToken = "pk.eyJ1Ijoiam9oYW5ha2VybWFuIiwiYSI6ImNraTljbW9zajBlZ2ozMGw3ejB0bmt3Y3oifQ.J5ymjt92FoNxg2x090xByw";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [18.0649, 59.33258], 
      zoom: 10.5,
      dragPan: false,

    });

        var marker = new mapboxgl.Marker()
        .setLngLat([18.0649, 59.33258])
        .addTo(map);
    
        map.scrollZoom.disable();

    // clean up on unmount
    return () => map.remove();
  }, []);

  return <div className={styles.mapContainer} ref={mapContainerRef} />;
};

export default Map; 