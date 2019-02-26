import React, { Component } from 'react'
import './App.css'
import CheckoutButton from './components/CheckoutButton'
import CartItem from './components/CartItem'
import Clock from 'react-live-clock'


export default class App extends Component {
  state = {
    products: [
      {
          id: 1,
          name: "Prada Shoes",
          price: 570,
          quantity: 0
      },
      {
          id: 2,
          name: "Rolex Watch",
          price: 649,
          quantity: 0
      },
      {
          id: 3,
          name: "Paper clips",
          price: 0.1,
          quantity: 0
      }
  ],
    total: 0
  }

  incrementQuantity = (id) => {
    const updatedList = this.state.products.map(
      product => {
        if (product.id === id) {
          product.quantity ++
        }

        return product
      }
    )

    this.setState({products: updatedList})
  }

  renderProduct = (product) => {
    return (
      <CartItem 
        id={product.id}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        onPlusClick={this.incrementQuantity}
        />
    )
  }

  checkout = () => {
    const getTotal = this.state.products.reduce((acc, el) => acc + (el.price * el.quantity), 0)
    this.setState({total: getTotal})
    
     
  }


  render() {
    return (
      <div className="App">
        <main>
        <div className="clock"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} /></div>
          <div className="list">
          <ul>
            {
              this.state.products
                .map(this.renderProduct)
            }
            <CheckoutButton checkout={this.checkout}/>
            {
            this.state.total > 0 ? <p>Total value: {this.state.total} </p> : ''}
            
          </ul>
          </div>
        </main>
      </div>
    )
  }
}

