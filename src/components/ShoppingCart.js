import React, { useContext } from 'react';
import CartText from "../contexts/CartText";

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const cartValue = useContext(CartText);
	const getCartTotal = () => {
		return cartValue.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<CartText.Consumer>
			{context => (
				<div className="shopping-cart">
					{context.cart.map(item => (
						<Item key={item.id} {...item} />
					))}

					<div className="shopping-cart__checkout">
						<p>Total: ${getCartTotal()}</p>
						<button>Checkout</button>
					</div>
				</div>
			)}
		</CartText.Consumer>
	);
};

export default ShoppingCart;
