import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './Order.css';


class Order extends Component {
  componentDidMount() {
    
  }

  onSubmit = (e) => {
    e.preventDefault()
    let ref = this.refs['section-name']
    let sectionName = ref.value
    this.props.createSection(sectionName)
    ref.value = ''
  }


render() {
    return (
      <div className="order-form">
      	<h1>Order text</h1>

        <form onSubmit={this.onSubmit}>
          <input ref="section-name"/>
          <button>Add new section</button>
        </form>
      </div>
    );
  }
}

export default Order;