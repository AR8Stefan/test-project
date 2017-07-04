import React, { Component } from 'react';
import SectionList from './section-list.js';
import { Button } from 'react-bootstrap'
import * as firebase from 'firebase';
import hat from 'hat';

import './Order.css';

// let database;
export const config = () => {
  
}

// Set default state for selected items.
class Order extends Component {
  constructor(props) {
    super(props);

    this.menu = [
      {name: "Apple",
       price: 2},
      {name: "Orange",
       price: 4},
      {name: "Water",
       price: 10}
    ]

    this.state = {
      selectedItemKey: 0,
      quantity: 1,
      selectedPrice: 0
    }

    let config = {
      apiKey: "AIzaSyAhJXZJzLBEcbcYLMXE_EzOTQpc9j6kayU",
      authDomain: "streetfood-f9d75.firebaseapp.com",
      databaseURL: "https://streetfood-f9d75.firebaseio.com",
      projectId: "streetfood-f9d75",
      storageBucket: "streetfood-f9d75.appspot.com",
      messagingSenderId: "993553484350"
    }
    firebase.initializeApp(config);

    this.database = firebase.database();
  }

// Reset/Update state when an item is selected.
  handleSelection(e) {
    this.setState({
      selectedItemKey: e.target.value,
      selectedPrice: e.target.value
    });
    console.log(e.target.value);
  }

  changeSelection(e) {
    this.setState({
      quantity: e.target.value
    });
    console.log(e.target.value);
  }

  sendData() {
    const item = this.menu[this.state.selectedItemKey];
    const quantity = this.state.quantity;
    const price = this.menu[this.state.selectedPrice].price * this.state.quantity;
   
    this.database.ref('orders/' + hat()).set({
      item: item,
      totalPrice: price,
      quantity: quantity
    });
  }

// Line.59: Select item in menu and show in Summary.
// Line.65: Select number of menu items to purchase.
// Line.69: Shows items selected and amount to be purchased.
  render() {
    return (
      <div className="order-form">
      	<h1>New Order</h1>

        <h3>What would you like to order?</h3>
        {this.menu.map((meal, i) =>
          <button onClick={(e) => this.handleSelection(e)} value={i} key={i}>{meal.name} ${meal.price}</button>
        )}

        <h3>How many would you like?</h3>
        <input type="number" onChange={(e) => this.changeSelection(e)} />


        <h3>Summary</h3>

        <p>Item: {this.menu[this.state.selectedItemKey].name}</p>
        <p>Amount: x{this.state.quantity}</p>

        <p onChange={(e) => this.handlePriceChange(e)}>Total Price: ${this.menu[this.state.selectedPrice].price * this.state.quantity}</p>        
       
        <button onClick={this.sendData.bind(this)} type="submit" >Submit </button>
      </div>
    );
  }
}

export default Order;


  // componentDidMount() {
  //   // this.props.loadSections()
  // }

  // onSubmit = (e) => {
  //   e.preventDefault()
  //   // let ref = this.refs['section-name']
  //   let ref = this.textInput
  //   let sectionName = ref.value
  //   // this.props.createSection(sectionName)
  //   ref.value = ''
  //   console.log('onSubmit')
  // }

// <input ref={(input) => { this.textInput = input; }} />