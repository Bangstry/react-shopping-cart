import React, { useContext } from 'react';
import CartText from "../contexts/CartText";
import { NavLink } from 'react-router-dom';


const Navigation = props => {
	const { cart } = useContext(CartText);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
