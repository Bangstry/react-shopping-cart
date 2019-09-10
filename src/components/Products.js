import React, { useContext } from 'react';
import ProductText from "../contexts/ProductText";

import Product from './Product';

const Products = () => {
	return(
	<ProductText.Consumer>
		{context => (<div className="products-container">
			{context.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={context.addItem}
				/>
			))}
		</div>)}
	</ProductText.Consumer>
	)
};

export default Products;