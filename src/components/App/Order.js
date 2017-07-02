import React, { Component } from 'react';
import SectionList from './section-list.js';
import { Button } from 'react-bootstrap'

import './Order.css';

// const MenuItem = ({text}) => (

//   <Button>{text}</Button>

// );

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
      prices: 0
    }
  }

// Reset/Update state when an item is selected.
  handleSelection(e) {
    this.setState({
      selectedItemKey: e.target.value
    });
    console.log(e.target.value);
  }

  changeSelection(e) {
    this.setState({
      quantity: e.target.value
    });
    console.log(e.target.value);
  }

  handleAmountChange(e, i, value) {
    this.setState({
      // handleSelection: !this.state.handleSelection,
      // changeSelection: !this.state.changeSelection
      prices: e.target.value
    });
    console.log(e.target.value);
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
        <p onChange={(e) => this.handleAmountChange(e)} >Price: ${this.menu[this.state.prices].price}</p>
       
        <button type="submit" >Submit </button>
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