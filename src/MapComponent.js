import {
	default as React,
	Component,
} from 'react';

// import _ from "lodash";
import axios from "axios";
// import Helmet from 'react-helmet';

// import {
//   withGoogleMap,
//   GoogleMap,
//   InfoWindow,
//   Marker
// } from "react-google-maps";
import MenuLists from './Menus/MainMenu.js';
import InitialMap from './MyMap.js'

export default class MainMap extends Component {

	constructor(props) {
		super(props);

		this.state = {
			markers: [],
		}

	};

	componentDidMount() {
		axios.get('/api')
		// .then(response => {

		// })
	};

	render() {
		return (
			<div>
				<div style={{height: "50%"}}>
					<InitialMap
						containerElement={
							<div style={{ height: '50vh', width: 'auto' }} />
						}
						mapElement={
							<div style={{ height: '50vh', width: '100vw' }} />
						}
					/>

				</div>

				<MenuLists />
			</div>
		);
	}

}