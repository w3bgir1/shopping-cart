import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CartItem.css'

export default class CartItem extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        onPlusClick: PropTypes.func.isRequired 
    }

    handleIncrement = () => {
        this.props.onPlusClick(this.props.id)
    }

    render() {
      return (
       <p> <li><span className="quantity">{this.props.quantity}</span> {this.props.name}   Price: {this.props.price} <button onClick={this.handleIncrement}>+</button></li> 
        </p>
      )
    }
}