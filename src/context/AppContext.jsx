import { createContext, useCallback, useEffect, useState } from 'react';

export const AppContext = createContext ({});

const loadCart = () => {
	const localCart = localStorage.getItem('cart');
	if (!localCart) {
		return [];
	}
	const parsed = JSON.parse(localCart);
	return parsed;
};

export const AppProvider = ({children}) => {
	const[cart, setCart] = useState(loadCart());

	const addToCart = useCallback((product) => {
		product['quantity'] = 1;
		const targetIndex = cart.findIndex((element) => element.id === product.id);
		const exists = targetIndex != -1;
		if (exists) {
			const temp = [ ...cart];
			temp[targetIndex] = {
				...temp[targetIndex],
				quantity: temp[targetIndex]['quantity'] + 1
			};
			setCart(temp);
		} else {
			setCart([ ...cart, product]);
		}
	}, [cart]);

	const removeFromCart = useCallback ((target) => {
		const filtered = cart.filter((product) => product.id !== target.id);
		setCart(filtered);
	}, [cart]);

	useEffect(() => {
		const parsed = JSON.stringify(cart);
		localStorage.setItem('cart', parsed);
	}, [cart]);

	return (
		<AppContext.Provider value={{cart, addToCart, removeFromCart}}>
			{children}
		</AppContext.Provider>
	);
};
