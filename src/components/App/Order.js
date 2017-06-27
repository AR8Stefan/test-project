import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionList from './section-list.js';
import { 
  loadSections,
  createSection
} from '../../actions/todo';

import './Order.css';


class Order extends Component {
  componentDidMount() {
    this.props.loadSections()
  }

  onSubmit = (e) => {
    e.preventDefault()
    // let ref = this.refs['section-name']
    let ref = this.textInput
    let sectionName = ref.value
    this.props.createSection(sectionName)
    ref.value = ''
  }


  render() {
    return (
      <div className="order-form">
      	<h1>Order text</h1>

        <form onSubmit={this.onSubmit} >
          <input ref={(input) => { this.textInput = input; }} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.todo.sections
  }
}

export default connect(mapStateToProps, { loadSections, createSection })(Order)
