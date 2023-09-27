const getTotalProducts = (products) => {
	let total = 0;
	products.forEach((product) => {
		total = total + product.quantity;
	});
	return total;
};

const getTotalPrice = (products) => {
	let total = 0;
	products.forEach((product) => {
		total = total + product.price * product.quantity;
	});
	return total;
};


const productUtils = {
	getTotalProducts,
	getTotalPrice
};

export default productUtils;
