/* src/App.js */
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import styles from "./Map.module.css";

mapboxgl.accessToken = "pk.eyJ1Ijoiam9oYW5ha2VybWFuIiwiYSI6ImNraTljbW9zajBlZ2ozMGw3ejB0bmt3Y3oifQ.J5ymjt92FoNxg2x090xByw";




const Map = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/light-v10",
      center: [18.0649, 59.33258], //Center of Stockholm
      zoom: 11.5,

    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className={styles.mapContainer} ref={mapContainerRef} />;
};

export default Map;