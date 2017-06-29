import React, { Component } from 'react';
import SectionList from './section-list.js';
import { Button } from 'react-bootstrap'

import './Order.css';

// const MenuItem = ({text}) => (

//   <Button>{text}</Button>

// );

// Setting default state for selected items.
class Order extends Component {
  constructor(props) {
    super(props);

    this.menu = [
      {name: "apple", price: 2},
      {name: "orange", price: 4},
      {name: "water", price: 10}
    ]

    this.state = {
      selectedItem: this.menu[0],
      quantity: 1
    }
  }

// Reset/Update state when an item is selected.
  handleSelection(e) {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    });
  }

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


// Line.59: Select item in menu and show in Summary.
// Line.65: Select number of menu items to purchase.
// Line.69: Shows items selected and amount to be purchased.
  render() {
    return (
      <div className="order-form">
      	<h1>New Order</h1>

        <h3>What would you like to order?</h3>
        {this.menu.map((meal, i) =>
          <button onClick={(e) => this.handleSelection(e)} value={meal} key={i}>{meal.name} ${meal.price}</button>
        )}

        <h3>How many would you like?</h3>
        <input type="number" />

        <h3>Summary</h3>
        <p>{this.state.selectedItem.name.bind(this)} x{this.state.quantity} $$$</p>
       
        <button>Submit</button>
      </div>
    );
  }
}

export default Order;
