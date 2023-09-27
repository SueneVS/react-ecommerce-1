import DefaultIcon from '../DefaultIcon/DefaultIcon';
import './ProductDisplay.css';
import {FaCartPlus} from 'react-icons/fa';

function ProductDisplay({ product, onAddToCart }) {

	const { brand, title, price, images } = product;
	const firstImage = images[0];

	return (
		<div className="product-display-wrapper">
			<div className="product-display-container">
				<img
					className="product-display-image"
					alt={title}
					src={firstImage}
				/>
			</div>
			<div className="product-display-brand">
			<p>{brand}</p>
			</div>
			<p>{title}</p>
			<p>{price}</p>
			<button className="btn-add-cart" data-testid={`product-display-${product.id}`}onClick={() => onAddToCart(product)}>
				<DefaultIcon Icon={FaCartPlus} Text="Adicionar ao Carrinho" />
			</button>
		</div>
	);
}

export default ProductDisplay;
