import React from 'react';
import { useSelector } from 'react-redux';

import './CheckOut.scss';

import CheckOutItem from 'common/CommonItem';
import useTotalPrice from 'hooks/useTotalPrice';

const CheckOut = () => {
  const bagState = useSelector(state => state.bag);
  const totalPrice = useTotalPrice();

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

          <button className="check-out-btn">Buy now!</button>
        </>
      )}
    </div>
  );
};

export default CheckOut;
