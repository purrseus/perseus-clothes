import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './CommonItem.scss';
import { addToBag, removeProduct } from 'redux/reducers/bagSlice';

const CheckOutItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="check-out-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="name">{item.name}</div>
      <div className="price">USD ${item.price}.90</div>
      {!!item.quantity && (
        <div className="quantity">
          <button onClick={() => dispatch(removeProduct(item))}>-</button>
          <div className="count">{item.quantity}</div>
          <button onClick={() => dispatch(addToBag(item))}>+</button>
        </div>
      )}
    </div>
  );
};

CheckOutItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }),
};

export default CheckOutItem;
