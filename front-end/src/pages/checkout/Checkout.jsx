import React from 'react'
import './checkout.css'
import { useStateValue } from '../../stateprovider';

//components
import Subtotal from "../../components/subtotal/Subtotal";
import SelectedProduct from "../../components/selectedProduct/SelectedProduct";





const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

   return (
    <div className="checkout row">
      <div className="checkout__left col-8">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>
            Hello,
            {user?.email}
          </h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item, i) => (
            <SelectedProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              key={i}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right col-4">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout