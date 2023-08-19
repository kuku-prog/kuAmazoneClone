import React, { useState, useEffect } from "react";
import './orders.css'

import { useStateValue } from "../../stateprovider";
import { db } from "../../firebase";
import Order from "../../components/order/Order";



function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);
  // console.log(orders);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      // console.log(snapshot);
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order order={order} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Orders;