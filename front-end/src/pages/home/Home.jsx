import React from "react";
import "./home.css";

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
							src="https://m.media-amazon.com/images/I/61cTxPoc3LL._SX1500_.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src="https://m.media-amazon.com/images/I/71+OQR1z9sL._SX3000_.jpg"
							className="d-block w-100"
							alt="2..."
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src="https://m.media-amazon.com/images/I/61kRWwDRV6L._SX3000_.jpg"
							className="d-block w-100"
							alt="3..."
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							src="https://m.media-amazon.com/images/I/61d-b+rPGcL._SX3000_.jpg"
							className="d-block w-100"
							alt="1..."
						/>
					</Carousel.Item>
				</Carousel>
				<div>
					<Container fluid className="home__rowContainer">
						<Row className="home__row">
							<Col sm="12" md="6" lg="3">
								<Product
									id="111"
									title="EFAN Womens Oversized Full Zip Up Sweatshirts Fall Jackets Outfits for Women Fashion 2023 Winter Trendy Cothes with Pocket "
									price={34}
									rating={4}
									image="https://m.media-amazon.com/images/I/51Ck5NGZnEL._AC_UY741_.jpg"
								/>
							</Col>
							<Col sm="12" md="6" lg="3">
								<Product
									id="222"
									title="Devoko Egg Chair Indoor Outdoor Hanging Swing Chair Wicker Rattan Patio Hammock Chair with Stand Soft (Tan)"
									price={119}
									rating={5}
									image="https://m.media-amazon.com/images/I/91EZh8qmPhL._AC_SX522_.jpg"
								/>
							</Col>
							<Col sm="12" md="6" lg="3">
								<Product
									id="333"
									title="Vonanda Sofa Couch, Sectional Couch Convertible Sectional Sofa L Shaped Couch with Reversible Chaise and Bolster Pillows "
									price={399}
									rating={5}
									image="https://m.media-amazon.com/images/I/71q0P00Ev2L._AC_SY450_.jpg"
								/>
							</Col>
							<Col sm="12" md="6" lg="3">
								<Product
									id="444"
									title="Double Diamond 3.4 Eau De Perfume Spray Women"
									price={9}
									rating={5}
									// image="https://m.media-amazon.com/images/I/91BsCfUIMML._AC_SX569_.jpg"
									image="https://m.media-amazon.com/images/I/41aT22Wap9L._SX569_.jpg"
								/>
							</Col>
						</Row>

						<Row className="home__row">
							<Col sm="6">
								<Product
									id="555"
									title="VGAzer Magnetic Levitating Floating Wireless LED Light Bulb"
									price={79.99}
									rating={5}
									image="https://m.media-amazon.com/images/I/61p3M0XZ4AL._AC_SX679_.jpg"
								/>
							</Col>
							<Col sm="6">
								<Product
									id="666"
									title="Z-Edge 27-inch Curved Gaming Monitor, Full HD 1080P 1920x1080 LED Backlight Monitor"
									price={179}
									rating={4}
									// image="https://m.media-amazon.com/images/I/41aT22Wap9L._SX569_.jpg"
									image="https://m.media-amazon.com/images/I/91BsCfUIMML._AC_SX569_.jpg"
								/>
							</Col>
						</Row>
						<Row className="home__row">
							<Col sm="12" md="6" lg="3">
								<Product
									id="777"
									title="Genrenyen Ice Bath Tub No Installation 40 Seconds Automatic Inflatable Portable Foldable Bathtub for Adults, PVC Hot Bathtub for Shower Stall, SPA Separate Family Soaking Bathtub… "
									price={11.96}
									rating={5}
									image="https://m.media-amazon.com/images/I/71JhbQwETiL._AC_SX522_.jpg"
								/>
							</Col>
							<Col sm="12" md="6" lg="3">
								<Product
									id="888"
									title="watrue Floor Lamp with Shelves, Shelf Floor Lamp for Living Room, Modern Tall Corner Shelves Floor Lamp for Bedroom Office"
									price={44}
									rating={5}
									image="https://m.media-amazon.com/images/I/71ZyT2D9l-L._AC_SX679_.jpg"
								/>
							</Col>
							<Col sm="12" md="6" lg="3">
								<Product
									className="pro1"
									id="999"
									title="Dr Teal's Foaming Bath with Pure Epsom Salt, Soothe & Sleep with Lavender, 34 fl oz (Pack of 4) (Packaging May Vary) "
									price={23.56}
									rating={4}
									image="https://m.media-amazon.com/images/I/71XxxVhvX5L._SX679_.jpg"
								/>
							</Col>
							<Col sm="12" md="6" lg="3">
								<Product
									id="12321342"
									title="Rove R2-4K Dash Cam Built in WiFi GPS Car top Dashboard Camera Recorder with UHD 2160P, 2.4"
									price={79.99}
									rating={5}
									image="https://m.media-amazon.com/images/I/81Qi6a1mzuL._AC_SX679_.jpg"
								/>
							</Col>
						</Row>
						{/* <Row className="home__row">
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
						</Row> */}
					</Container>
				</div>
			</div>
		</div>
	);
};

export default Home;
