import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Product from '../../pages/Product/Product';
import Login from '../../pages/Login/Login';
import Error from '../../pages/Error/Error';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Register from '../../pages/Register/Register';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import Breadcrumbs from '../Breadcrumbs';

function Router() {
	return (
		<BrowserRouter>
			<Header/>
			<Breadcrumbs/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/login" element={<Login />} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="/MyAccount" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/contactUs" element={<ContactUs/>} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer/>
		</BrowserRouter>

	);
}

export default Router;
