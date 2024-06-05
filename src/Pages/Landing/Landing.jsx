import React from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import Catagory from '../../components/Catagory/Catagory'
import Product from '../../components/Product/Product'

function Landing() {
  return (
    <Layout>
        <Carousel />
        <Catagory />
        <Product />
    </Layout>
  )
}

export default Landing