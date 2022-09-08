import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../../molecules/CartItem/CartItem'
import './Cart.scss'

export const Cart = ({cart}) => {

  const convertToINRCurrency = (amount) => {
    return Number(amount).toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
    });
  };
  const total=cart.reduce((total,pr)=>pr.priceDropped?
  Number(total)+(Number(pr.dropPrice)*Number(pr.quantity))
  :
  Number(total)+(Number(pr.price)*Number(pr.quantity))
  ,0)

  return (
    <main className='main__content'>
        <section className='cart__items__container'>
            <header>
                <h2>My Cart</h2>
            </header>
            {cart.length?
              <div>
                  <div>
                    {cart.map(product=><CartItem key={product._id} product={product} />)}
                  </div>
                  <div>
                    <p>Sub total: <strong>{convertToINRCurrency(Number(total))}</strong></p>
                    <button className='btn__checkout'>
                      Checkout
                    </button>
                  </div>
              </div>
            :
              <div className='cart__no__items'>
                <p>No items in cart</p>
              </div>
            }
        </section>
    </main>
  )
}

const mapStateToProps = (state) => ({cart:state.cart})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)