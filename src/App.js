import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
// import NavComponent from './NavComponent/NavComponent.js'
import { Link } from 'react-router-dom'
import GoogleMap from 'google-map-react';
// import google from 'google-map-react';
import GoogleMapMarkers from 'google-map-react';

import MenuLists from './Menus/MainMenu.js';
require('dotenv').config();


const AnyReactComponent = ({text}) => (
  
  <GoogleMapMarkers className="Marker" onClick={this.burgerToggle}><Link className="LinkText" to="/menus/mainmenu"><Button>{text}</Button></Link>
  </GoogleMapMarkers>

);



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: []
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className='MainMap'>
            <GoogleMap
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
              defaultCenter={{lat: 34.052235, lng: -118.243683}}
              defaultZoom={9}
            >
            <AnyReactComponent
              lat={34.113319}
              lng={-118.008499}
              text={'The Mediteranian'}
            />
            <AnyReactComponent
              lat={34.012123}
              lng={-118.239731}
              text={'The UK'}
            />
            <AnyReactComponent
              lat={33.915873}
              lng={-118.044213}
              text={'The Far East'}
            />
            <AnyReactComponent
              lat={34.050244}
              lng={-118.419121}
              text={'South of the Boarder'}
            />
            <AnyReactComponent
              lat={34.130992}
              lng={-118.202141}
              text={'The Caribbean'}
            />

            </GoogleMap>

          </div>

        </div>

      

      </div>
    );
  }
}

export default App;
