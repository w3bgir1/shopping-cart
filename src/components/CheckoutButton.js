import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CheckoutButton.css'

export default class CheckoutButton extends Component {

  static propTypes = {
    checkout: PropTypes.func.isRequired 
}

  handleCheckout = () => {
    this.props.checkout()
  }

    render() {
      return (
        <button onClick={this.handleCheckout}>Checkout</button>
      )
    }
}