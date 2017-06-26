import React, {Component} from 'react';
import {init as firebaseInit} from 'javascripts/firebase';
import {browserHistory} from 'react-router';
import Routes from './routes';

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