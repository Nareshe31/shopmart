import React from "react";
import { connect } from "react-redux";
import {
    addQuantityOfProduct,
    addToCart,
    removeFromCart,
    removeQuantityOfProduct,
} from "../../redux/actions";
import "./CardItem.scss";

export const CartItem = ({ product,removeQuantityOfProduct,removeFromCart,addQuantityOfProduct}) => {
    const convertToINRCurrency = (amount) => {
        return Number(amount).toLocaleString("en-IN", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "INR",
        });
    };

    const addQuantityToCart=()=>{
        addQuantityOfProduct(product._id)
      }
    
    const removeQuantityFromProduct=()=>{
        removeQuantityOfProduct(product._id)
      }
    
      const removeProductFromCart=()=>{
        removeFromCart(product._id)
      }

    return (
        <div className="product__cart__item">
            <div className="content__left">
                <div className="product__add__remove__quantity">
                    <button onClick={addQuantityToCart} className="product__add__quantity">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <title />
                            <g id="plus">
                                <line className="cls-1" x1="16" x2="16" y1="7" y2="25" />
                                <line className="cls-1" x1="7" x2="25" y1="16" y2="16" />
                            </g>
                        </svg>
                    </button>
                    <button
                        onClick={removeQuantityFromProduct}
                        disabled={product.quantity === 1}
                        className="product__remove__quantity"
                    >
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <title />
                            <g id="minus">
                                <line class="cls-1" x1="7" x2="25" y1="16" y2="16" />
                            </g>
                        </svg>
                    </button>
                </div>
                <div className="product__image">
                    <img src={product.images.small} alt="" srcSet="" />
                </div>
                <div className="product__title">{product.title}</div>
            </div>
            <div className="content__right">
                <div className="product__sub__total">
                    {convertToINRCurrency(
                        product.priceDropped
                            ? product.dropPrice * product.quantity
                            : product.price * product.quantity
                    )}
                </div>
                <button onClick={removeProductFromCart} className="product__remove">
                    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="none" height="256" width="256" />
                        <line
                            stroke="#333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                            x1="200"
                            x2="56"
                            y1="56"
                            y2="200"
                        />
                        <line
                            stroke="#333"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                            x1="200"
                            x2="56"
                            y1="200"
                            y2="56"
                        />
                    </svg>
                </button>
            </div>

        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (payload) => dispatch(addToCart(payload)),
    addQuantityOfProduct: (payload) => dispatch(addQuantityOfProduct(payload)),
    removeQuantityOfProduct: (payload) => dispatch(removeQuantityOfProduct(payload)),
    removeFromCart: (payload) => dispatch(removeFromCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
