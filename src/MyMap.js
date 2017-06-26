import React from 'react';
// import { Link } from 'react-router-dom'

import {
  withGoogleMap,
  GoogleMap,
  // InfoWindow,
  // Marker
} from "react-google-maps";
// import GoogleMapMarkers from 'google-map-react';

import './App.css';
// import { Button } from 'react-bootstrap'


// const MapMarkers = ({text}) => (
  
//   <MapMarker className="Marker">
//   </MapMarker>

// );

  const InitialMap = withGoogleMap(props => {

    return(
      <div className="MainMap">
        <GoogleMap 
          ref={props.onMapLoad}
          defaultZoom={9}
          defaultCenter={{lat: 34.052235,
            lng: -118.243683}}
        > 
          
        </GoogleMap>
      </div>
    )
  });

export default InitialMap;