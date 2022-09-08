import React from "react";
import { connect } from "react-redux";
import "./Product.scss";
import { addQuantityOfProduct, addToCart, removeFromCart } from '../../redux/actions'

function Product({ product,cart,addQuantityOfProduct,addToCart,removeFromCart}) {

  const convertToINRCurrency = (amount) => {
    return Number(amount).toLocaleString("en-IN", {
      maximumFractionDigits: 0,
      style: "currency",
      currency: "INR",
    });
  };
  const isProductAdded=cart.filter((pr)=>pr._id===product._id).length>0
  
  const addProductToCart=()=>{
    if(isProductAdded) addQuantityOfProduct(product._id)
    else addToCart({...product,quantity:1})
  }

  const removeProductFromCart=()=>{
    if(!isProductAdded) return
    removeFromCart(product._id)
  }

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__image">
          <img src={product.images.medium} alt="" srcSet="" />
        </div>
        <div className="product__detail">
          <h4 className="product__detail__title" title={product.title}>
            {product.title}
          </h4>
          <p className="product__detail__brand">{product.brand}</p>
          {product.priceDropped ? (
            <h5 className="product__detail__price">
              {convertToINRCurrency(product.dropPrice)}{" "}
              <span className="product__drop__price">
                {convertToINRCurrency(product.price)}
              </span>
            </h5>
          ) : (
            <h5 className="product__detail__price">
              {convertToINRCurrency(product.price)}
            </h5>
          )}
        </div>
      </div>
      {isProductAdded?
        <button
          onClick={removeProductFromCart}
          className="btn__cart btn__remove__from__cart"
        >
          Remove from cart
        </button>
      :
        <button
          onClick={addProductToCart}
          className="btn__cart btn__add__to__cart"
        >
          Add to cart
        </button>
      }
      
    </div>
  );
}

const mapStateToProps = (state) => ({cart:state.cart})

const mapDispatchToProps = (dispatch)=>({
  addToCart:(payload)=>dispatch(addToCart(payload)),
  addQuantityOfProduct:(payload)=>dispatch(addQuantityOfProduct(payload)),
  removeFromCart:(payload)=>dispatch(removeFromCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)