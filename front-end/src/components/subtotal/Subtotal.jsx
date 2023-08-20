import React from 'react'
import './subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../stateprovider";
import { Link } from 'react-router-dom';

function Subtotal() {
    const [{ basket,user }, dispatch] = useStateValue();
    const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => {
      return parseFloat(item.price) + amount;
    }, 0);
    }
  return (
    
      <div className='subtotal center'>
          <CurrencyFormat
              renderText={(value) => (
                <div>
                    <p>
                      Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
              <input style={{height: '20px'}} type="checkbox" /> This order contains a gift
                    </small>
                </div>
                )}
                 decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to={ user? '/payment':'/login'  }>
      <button  className='btn btn-warning mt-3 mb-3 center'>  Process to checkout</button>
      </Link>
      </div>
  )
}

export default Subtotal