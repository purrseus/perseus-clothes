import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Cart.scss';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg';

import CartItem from './CartItem';

const Cart = () => {
	const cartState = useSelector(state => state.cart);
	const [isHiddenCart, setIsHiddenCart] = useState(true);
	const quantityProductInCart = cartState.reduce((acc, cur) => {
		return acc + cur.quantity;
	}, 0);

	return (
		<div className="wrap-cart">
			<div className="cart" onClick={() => setIsHiddenCart(!isHiddenCart)}>
				<CartIcon className="cart-icon" />
				<span className="count">{quantityProductInCart}</span>
			</div>
			<ArrowIcon className="arrow" />

			{!isHiddenCart && (
				<div className="cart-dropdown">
					<div className="content">
						{!quantityProductInCart ? (
							<span className="nothing">Nothing here!</span>
						) : (
							<div className="cart-items">
								{cartState.map((product, index) => (
									<CartItem key={index} product={product} />
								))}
							</div>
						)}
					</div>
					<Link
						className="check-out-btn"
						onClick={() => setIsHiddenCart(!isHiddenCart)}
						to="/cart"
					>
						Go to check-out
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
