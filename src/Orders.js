import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from './Firebase';
import Order from './Order'; 
import { useStateValue } from './StateProvider';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="Orders">
      <h1 className='Orders_title'>Your Orders</h1>
      <div className="Orders_order">
        {orders?.map((order,i) => (
          <Order key={i} order={order}/>
        ))}
      </div>
    </div>
  );
}

export default Orders;