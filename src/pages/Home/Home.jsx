import SimpleDisplay from '../../components/SimpleDisplay';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import SliderHome from '../../components/SliderHome/SliderHome';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
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
		fetch('https://dummyjson.com/products?limit=4')
			.then((response) => response.json())
			.then((data) => {
				const { products } = data;
				setProducts(products);
			});
	}, []);

	return (
		<div>
			<main className='conteiner'>
				<section>
					<SliderHome/>
				</section>
				<section >
					<h1> Produtos mais vendidos em nosso site!</h1>
					<SimpleDisplay products={products} />
				</section>
				<section className='product-display-link'>
					<Link to="/product">Veja todos os nossos produtos!</Link>
				</section>
			</main>
		</div>
	);
}

export default Home;
