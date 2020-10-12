import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './CheckOut.scss';
import Logo from 'assets/icons/logo.svg';

import { cleanBag } from 'redux/reducers/bagSlice';
import CheckOutItem from 'common/CommonItem';

toast.configure();

const CheckOut = () => {
  const dispatch = useDispatch();
  const bagState = useSelector(state => state.bag);
  const { user } = useSelector(state => state.auth);

  const totalPrice = bagState.reduce((acc, cur) => {
    return acc + cur.quantity * (cur.price + 0.9);
  }, 0);

  const handleToken = token => {
    if (token) {
      toast('Success! Check your email for details', { type: 'success' });
      dispatch(cleanBag());
    }
  };

  const onCheckUser = () => {
    if(!user) {
      toast('Create an account or log in to continue', { type: 'error' });
    }
    return;
  }

  return (
    <div className="check-out">
      <div className="check-out-items">
        {bagState.length ? (
          bagState.map((item, index) => (
            <CheckOutItem key={index} item={item} />
          ))
        ) : (
          <h2>Your bag is currently empty.</h2>
        )}
      </div>

      {!!bagState.length && (
        <>
          <div className="total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div onClick={onCheckUser} className="check-out-btn">
            <span>Pay now!</span>
            {!!user && (
              <StripeCheckout
                className="hide"
                image={Logo}
                name="Perseus Clothes Ltd."
                panelLabel="Pay Now"
                description={`Your total is $${totalPrice.toFixed(2)}`}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice.toFixed(2) * 100}
              />
            )}
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default CheckOut;
