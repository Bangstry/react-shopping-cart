import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import ProductText from "./contexts/ProductText";
import CartText from "./contexts//CartText";


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	console.log(products);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductText.Provider value={{ products, addItem }}>
			<CartText.Provider value={{ cart }}>
				<div className="App">
					<Navigation cart={cart} />

					<Route exact path="/" component={Products}/>
					<Route path="/cart" component={ShoppingCart}/>
				</div>
			</CartText.Provider>
		</ProductText.Provider>
	);
}

export default App;