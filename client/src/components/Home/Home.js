import React, { useEffect, useState } from 'react'
import ProductList from '../ProductList/ProductList'
import './Home.scss'

function Home() {

  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const res=await fetch("/api/v1/allproducts")
        const data=await res.json()
        setproducts(data.products)
        setloading(false)
      } catch (error) {
        
      } 
    }
    getData()
  }, [])

  return (
    <main className='main__content'>
      <ProductList loading={loading} title={"All Products"} products={products} />
    </main>
  )
}

export default Home;