import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart, removeItem } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br />
      <Link to='/shop'>Continue Shopping</Link>
    </h2>
  );
  return (
    <Layout
      title='Shopping Cart'
      description='Manage your cart items.  Add remove checkout or continue shopping'
      className='container-fluid'
    >
      <div className='row'>
        <div className='container mb-2'>
          <div className='container-fluid mb-3'>
            <br />

            {items.length > 0 ? showItems(items) : noItemsMessage()}
            <br />
            <Checkout products={items} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
