import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg';
import './Cart.scss';

const Cart = () => {
	const [isHiddenCart, setIsHiddenCart] = useState(true);

	return (
		<div className="wrap-cart">
			<div className="cart" onClick={() => setIsHiddenCart(!isHiddenCart)}>
				<CartIcon className="cart-icon" />
				<span className="count">0</span>
			</div>
			{ !isHiddenCart && <ArrowIcon className="arrow" /> }
			{!isHiddenCart && (
				<div className="cart-dropdown">
					<div className="content">
						<span className="nothing">Nothing here!</span>
					</div>
					<Link className="check-out-btn" to="/cart/check-out">
						Go to check-out
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
