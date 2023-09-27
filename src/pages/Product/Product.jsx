import SimpleDisplay from '../../components/SimpleDisplay';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import './Product.css';


function Product() {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const localData = localStorage.getItem('cart');
		if (localData) {
			const parsed = JSON.parse(localData);
			dispatch(cartActions.init(parsed));
		}
	}, [dispatch]);

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then((response) => response.json())
			.then((data) => {
				const { products } = data;
				setProducts(products);
			});
	}, []);

	return (
		<div className='allProducts-conteiner'>
			<div className='allProducts-text'>
				<h1>Conheça todos os nosso produtos!</h1>
				<p>Aqui você encontra todos os nosso produtos, ou seja, nosso site todo em um só lugar! Conheça as nossas ofertas, novidades e os produtos mais vendido em nossa loja online!</p>
			</div>
			<div>
				<SimpleDisplay products={products} />
			</div>
		</div>
	);
}

export default Product;
