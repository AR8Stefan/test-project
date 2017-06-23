import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  // InfoWindow,
  Marker
} from "react-google-maps";

import './App.css';
// import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import GoogleMapMarkers from 'google-map-react';


  const InitialMap = withGoogleMap(props => {

    return(
      <GoogleMap 
        ref={props.onMapLoad}
        defaultZoom={10}
        defaultCenter={{lat: 34.052235,
          lng: -118.243683}}
      >
        <Marker>

        </Marker>
      </GoogleMap>
    )
  });

export default InitialMap;