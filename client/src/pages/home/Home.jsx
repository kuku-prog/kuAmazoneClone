import React from 'react'
import './home.css'

//components
import Carousel from '../../components/carousel/Carousel'
import Row from '../../components/row/Row'

const Home = () => {
  return (
    <div className='home'>
      < Carousel />
      <Row />
      {/* <Row />
      <Row /> */}

    </div>
  )
}

export default Home