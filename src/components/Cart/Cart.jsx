import {useMemo } from 'react';
import './Cart.css';
import { productUtils } from '../../utils';
import { FaTimes, FaTrashAlt } from 'react-icons/fa';
import DefaultIcon from '../DefaultIcon/DefaultIcon';

function Cart({ products = [], show, onHide, onRemoveProduct }) {
	const productsMap = useMemo(() => products.map((product) => {
		return (
			<div
				key={product.id}
				data-testid={`cart-product-${product.id}`}
				className='cart-products-card'>
				<p>{product.title}</p>
				<div className='cart-products-card-quantity'>
				{`${product.quantity}`}
				<p>{`${product.price*product.quantity}`}</p>
				</div>
				<button
				data-testid={`button-remove-cart-product-${product.id}`}
				onClick={() => onRemoveProduct(product)}
				className='cart-btn'
				>
				<DefaultIcon Icon={FaTrashAlt} Text="Remover" />
				</button>
			</div>
		);
	}), [onRemoveProduct, products]);

	return (
		<div className={`cart-wrapper${show ? ' cart-show' : ''}`} data-testid="cart">
			<div className="cart-header">
				<p className='cart-header-text'>Itens no carrinho: {productUtils.getTotalProducts(products)}</p>
				<FaTimes onClick={onHide} className='cart-header-close'/>
			</div>
			<div className="cart-products">
				{productsMap}
			</div>
			<div className="cart-footer">
				<p>Total: USD$ {productUtils.getTotalPrice(products)}</p>
				<button className='cart-btn'>Finalizar Compra</button>
				<button className='cart-btn'>Continuar Comprando</button>
			</div>
		</div>
	);

}

export default Cart;
