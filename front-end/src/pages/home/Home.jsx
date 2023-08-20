import React from 'react'
import './home.css'

//components
import Product from "../../components/product/Product";
import Carousel from "react-bootstrap/Carousel";

// Container, Row and Col to apply responsiveness through React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel className="home__image">
          <Carousel.Item>
             <img
              className="d-block w-100"
             src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
             <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" className="d-block w-100" alt="2..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" className="d-block w-100" alt="3..." />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" className="d-block w-100" alt="1..." />
           
          </Carousel.Item>
        </Carousel>
        <div>
          <Container fluid className="home__rowContainer">
             <Row className="home__row">
              <Col sm="12" md="6" lg="3">
                <Product
                  id="22321341"
                  title="Eureka Home Lightweight Stick Vacuum Cleaner, Powerful Suction Corded Multi-Surfaces, 3-in-1 "
                  price={9640}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/517R7MrmXiL._AC_UL400_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="22321344"
                  title="Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                  price={58.98}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/51cGlUCK5WL._AC_UL400_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="142321342"
                  title="Herdio 4 Inch Outdoor Speakers Indoor Wall Mount Speakers "
                  price={11.96}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/713wp2XrATL._AC_SL1500_.jpg"
                />
              </Col>
                <Col sm="12" md="6" lg="3">
                 <Product
                    id="12321341"
                    title="Flygo Womens Fleece 2 Piece Outfits Sweatsuit Casual Half Zip Pullover Sweatshirt Joggers Tracksuit Set"
                    price={13.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81x5S0+wH9L._AC_UL400_.jpg"
                  />
              </Col>
            </Row>
           
             <Row className="home__row">
              <Col sm="6">
                <Product
                            id="23445930"
                            title="Acer Aspire 5 A515-56-36UT, 15.6' Full HD Display, 11th Gen Intel Core i3-1115G4 Processor, 4GB DDR4, 128GB ..."
                            price={389.99}
                            rating={5}
                            image="https://m.media-amazon.com/images/I/71233PTgAjL._AC_UL480_FMwebp_QL65_.jpg"
                        />
                       
              </Col>
              <Col sm="6">
                <Product
                            id="3254354345"
                            title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable ..."
                            price={58.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL480_FMwebp_QL65_.jpg"
                        />
            </Col>
            </Row>
            <Row className="home__row">
              <Col sm="12" md="6" lg="3">
                <Product
                  id="12321341"
                  title="Bluetooth Headset, Bluetooth Earpiece with 400mAh Charging Case "
                  price={11.96}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61-3asUQl2L._AC_SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="12321344"
                  title="2-Pack 15.6 Inch Laptop Screen Protector-Blue Light Filter"
                  price={18.98}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/814zVivKQdL._AC_SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  className="pro1"
                  id="49538094"
                  title="GPD Win 3- 5.5 Inch Mini Handheld Video Game Console "
                  price={239.01}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61QyxwkT3UL._AC_SL1000_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="12321342"
                  title="Herdio 4 Inch Outdoor Speakers Indoor Wall Mount Speakers "
                  price={11.96}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/713wp2XrATL._AC_SL1500_.jpg"
                />
              </Col>
            </Row>
            <Row className="home__row">
              <Col sm="12" md="6" lg="3">
                <Product
                  id="4903851"
                  title="L’Oreal Paris Skincare Revitalift Triple Power Fragrance-Free Face "
                  price={26.99}
                  rating={3}
                  image="https://m.media-amazon.com/images/I/71FdtBbW+cL._SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="4903850"
                  title="Pond's Nourishing Moisturizing Cream, Crema S 14.1 oz"
                  price={199.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/711GgMVyykL._SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="23445930"
                  title="Earth Rated Dog Poop Bags, Guaranteed Leak Proof, 270 Count"
                  price={98.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/71LtXuEA1sL._AC_SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6" lg="3">
                <Product
                  id="3254354345"
                  title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price={598.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/61D+QVKPPSL._AC_SL1200_.jpg"
                />
              </Col>
            </Row>
            <Row className="home__row">
              <Col sm="12" md="6">
                <Product
                  id="49538095"
                  title="DERE Laptop Windows 10 15.6 in Laptop Computer with Full Size Keyboard 12GB DDR4, 512GB SSD, Intel Celeron N5095 CPU, Up to 2.9Ghz 1920x1080 FHD Display"
                  price={239.0}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/71MnxXfgXiL._AC_SL1500_.jpg"
                />
              </Col>
              <Col sm="12" md="6">
                <Product
                  id="12321343"
                  title="Microsoft Surface Laptop Studio - 14.4 in Touchscreen - Intel® Core™ i7 - 32GB Memory - 1TB SSD - Platinum"
                  price={11.96}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/61UGE9cZVlL._AC_SL1500_.jpg"
                />
              </Col>
            </Row>

            <Row className="home__row">
              <Col sm="6">
                <Product
                  id="90829332"
                  title="Summer Outfits for Women, Women V Neck Textured Graphic Shirt Plus Size Dressy Business Blouse Tops"
                  price={14.98}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/71SlP+7dpAL._AC_UL400_.jpg"
                />
              </Col>
              <Col sm="6">
                <Product
                  id="95829332"
                  title="Columbia Women's Benton Springs Full Zip0"
                  price={24.98}
                  rating={3}
                  image="https://m.media-amazon.com/images/I/71F2tjW19JS._AC_UL400_.jpg"
                />
            </Col>
            </Row>
            
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Home;