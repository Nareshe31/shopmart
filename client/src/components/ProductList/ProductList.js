import React from 'react'
import Product from '../../molecules/Product/Product'

const ProductList = ({products,title,loading}) => {

  return (
    <section className='products__section'>
        <header>
          <h3>{title}</h3>
        </header>
        {loading?
          <div className='products__loading'>
            <h3>loading...</h3>
          </div>
        :
          <>
          {products.length?
            <div className='products__container'>
              {products.map((product)=><Product key={product._id} product={product} />)}
            </div>
            :
              <div className='no__items'>
                  <p>No results</p>
              </div>
            }
          </>
        }
      </section>
  )
}

export default ProductList;