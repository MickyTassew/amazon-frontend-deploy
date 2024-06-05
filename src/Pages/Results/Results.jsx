import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import Layout from '../../components/Layout/Layout'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const {catagoryName} =useParams()
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${catagoryName}`)
    .then((res) =>{
      setResults(res.data)
      setIsLoading(false)
      // console.log(res.data)
  }).catch((err) => {
    console.log(err)
    setIsLoading(false)
  })
  }, [])
  
  return (
    <Layout>
      {isLoading? (<Loader/>): (
        <section>
        <h1 style={{ padding: "30px"}}>Results</h1>
        <p style={{padding: "30px"}}>Category / {catagoryName}</p>
        <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
              key={product.id}

              product={product}
              renderDesc={false}
              renderAdd={true}
              />
            ))}

          </div>
      </section>
      )}
      
    </Layout>
  )
}

export default Results