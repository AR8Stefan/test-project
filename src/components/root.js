import React, { Component } from 'react';
import { init as firebaseInit } from '../javascripts/firebase';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

export default class Root extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
    this.store = configureStore()
  }

render() {
    return (
    	<Provider store={this.store}>
      		<Routes history={browserHistory}/>
      	</Provider>
    )
  }
}