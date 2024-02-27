import React from 'react'
import Carousel from '../components/Carousel'
import SecondCarousel from '../components/SecondCarousel'
import Products from './Products'
import EditorsPage from './EditorsPage'
import BuyPage from './BuyPages'
import PostPage from './PostPage'
import Footer from '../components/Footer'



function Home() {
  return (
<div>
    <Carousel/>
    <EditorsPage/>
    <Products/>
    <SecondCarousel/>
    <BuyPage/>
    <PostPage/>
    <Footer/>
</div>
  )
}

export default Home