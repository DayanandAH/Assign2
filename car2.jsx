import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Home = () => {
  return (
    <div className='container-fluid' >
      <Carousel>
        <Carousel.Item style={{ 'height': "300px" }} >
          <img src=" https://media.istockphoto.com/vectors/modern-3d-illustration-of-online-shopping-vector-id1362508125?s=612x612" style={{ 'height': "300px" }}
            className="d-block w-100 h-200"
          />
          <Carousel.Caption>
            <h3>First Demo </h3>
          </Carousel.Caption>
        </Carousel.Item  >
        <Carousel.Item style={{ 'height': "300px" }}>
          <img style={{ 'height': "300px" }}
            className="d-block h-100 w-100"
            src="https://media.istockphoto.com/vectors/modern-3d-illustration-of-online-shopping-vector-id1362508125?s=612x612" />
          <Carousel.Caption>
            <h3>Second Demo</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ 'height': "300px" }}>
          <img style={{ 'height': "300px" }}
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/10/08/11/31/learn-977543_960_720.jpg" />
          <Carousel.Caption>
            <h3>Third Demo</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default Home