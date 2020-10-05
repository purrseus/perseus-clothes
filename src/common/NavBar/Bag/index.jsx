import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Bag.scss';
import { ReactComponent as ArrowIcon } from 'assets/icons/up-arrow.svg';
import { ReactComponent as BagIcon } from 'assets/icons/bag.svg';

import ItemInBag from './ItemInBag';

const Bag = () => {
  const bagState = useSelector(state => state.bag);

  const quantityProductInBag = bagState.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  // Disable bag-dropdown when location.pathname = /bag.
  const location = useLocation();

  return (
    <div
      className="wrap-bag"
    >
      <div className="bag">
        <BagIcon className="bag-icon" />
        <span className="bag__quantity">{quantityProductInBag || ''}</span>
      </div>
      <ArrowIcon className="arrow" />

      {location.pathname !== '/bag' && (
        <div className="bag-dropdown">
          <div className="bag-content">
            {!quantityProductInBag ? (
              <span className="empty">Your bag is empty!</span>
            ) : (
              <div className="bag-items">
                {bagState.map((product, index) => (
                  <ItemInBag key={index} product={product} />
                ))}
              </div>
            )}
          </div>
          {!!quantityProductInBag && (
            <Link
              className="checkout-btn"
              to="/bag"
            >
              Checkout
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Bag;
