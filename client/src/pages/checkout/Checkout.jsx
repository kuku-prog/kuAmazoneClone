import React from 'react'
import './checkout.css'
import { useStateValue} from '../../stateprovider'
//components
import Subtotal from '../../components/subtotal/Subtotal'
import Row from '../../components/row/Row'
import Product from '../../components/product/Product'
import SelectedProducts from '../../components/selectedProducts/SelectedProducts'
//images
const src1 = 'https://m.media-amazon.com/images/I/41t9U5Qs7SL._AC_SY200_.jpg'
const src2 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
const src3 = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
const src4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"

const src5 = "https://m.media-amazon.com/images/I/41TDepC-WlL._AC_SY200_.jpg"



const Checkout = () => {
 const [{ basket }, dispatch] = useStateValue();


  return (
    <div className='checkout d-flex'>
      <div className="checkout__left col-8 mr-5">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h1>Shopping Cart</h1>
          <hr />

          {basket.map((item) => (
              <SelectedProducts
                id={item.id}
                title={item.title}
                source={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

 
  

      </div>



      <div className="checkout__right ms-5 col-3">
        <Subtotal  className='subtotal'/>
        <div className='onset'>
         <Product
          title='apple product'
          price='67'
          rating='3'
          image={src1}

        />
          <Product
          title='apple product'
          price='67'
          rating='3'
          image={src5}

        />
          <Product
          title='Samsung product'
          price='607'
          rating='6'
          image={src2}

        />
          
          
          
          <Product
          title='apple product'
          price='67'
          rating='3'
          image={src4}

        />
          <Product
          title='apple product'
          price='67'
          rating='3'
          image={src1}

        />
          <Product
          title='Samsung product'
          price='607'
          rating='6'
          image={src3}

        />

        </div>




      </div>


    </div>
  )
}

export default Checkout