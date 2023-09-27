import { useCallback, useState } from 'react';
import Cart from '../Cart';
import './Header.css';
import { productUtils } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import { Link } from 'react-router-dom';
import MenuHeader from '../../components/MenuHeader';
import brand2 from '../../../public/assets/brand2.png';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import { FaCartArrowDown, FaUserCircle } from 'react-icons/fa';

function Header() {
	const [showCart, setShowCart] = useState(false);
	const dispatch = useDispatch ();
	const cart = useSelector((context) => context.cart);
	const products = cart;
	const toggleCart = useCallback((show) => {
		setShowCart(show);
	}, []);
	const handleRemoveFromCart = useCallback((product) => {
		dispatch(cartActions.remove(product));
	}, [dispatch]);

	return (
		<>
			<div className="header-wrapper">
				<div className='header-menu'>
					<MenuHeader />
				</div>
				<div className='header-logo'>
					<Link to="/">
					<img src={brand2} className='header-logo-img' />
					</Link>
					</div>
				<div className="header-search">
					<input className="header-search-input" placeholder="O que você procura hoje?" />
				</div>
				<div className='header-login'>
					<Link
					to="/login"
					className='header-login-button'>
					<DefaultIcon Icon={FaUserCircle} Text={'Minha conta'}/>
					</Link>
				</div>
				<div className='header-cart'>
					<button
					className="header-cart-button"
					onClick={() => toggleCart(true)}
					data-testid="header-cart-button"
					>
					<DefaultIcon Icon={FaCartArrowDown} Text={productUtils.getTotalProducts(products)}/>
					</button>
				</div>
			</div>
			<Cart
			show={showCart}
			onHide={() => toggleCart(false)}
			products={products}
			onRemoveProduct={handleRemoveFromCart}
			/>
		</>
	);
}

export default Header;
