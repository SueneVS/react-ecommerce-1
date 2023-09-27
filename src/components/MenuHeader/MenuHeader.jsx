import { useState } from 'react';
import {FaBars, FaTimes, FaGlobe, FaSignInAlt, FaUserCircle, FaUsers, FaAddressCard} from 'react-icons/fa';
import './MenuHeader.css';
import { Link } from 'react-router-dom';
import DefaultIcon from '../DefaultIcon/DefaultIcon';


function MenuHeader () {
	const[sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const Sidebar = ({active}) => {
	const closeSidebar = () => {
		active(false);
	};

	return (
    <div className='MenuHeader-sidebar'>
      <FaTimes onClick={closeSidebar}  className='MenuHeader-close-sidebar'/>
			<ul className='MenuHeader-sidebar-item'>
				<li><Link to="/product"><DefaultIcon Icon={FaGlobe} Text="Todos os produtos" /></Link></li>
        <li><Link to="/login"><DefaultIcon Icon={FaUserCircle} Text="Área do cliente" /></Link></li>
        <li><Link to="/register"><DefaultIcon Icon={FaSignInAlt} Text="Cadastre-se" /></Link></li>
				<li><Link to="/aboutUs"><DefaultIcon Icon={FaUsers} Text="Quem somos"/></Link></li>
				<li><Link to="/contactUs"><DefaultIcon Icon={FaAddressCard} Text="Entre em contato" /></Link></li>
			</ul>
    </div>
  );

	};

	return (
		<div className='default-MenuHeader-wrapper'>
			<FaBars onClick={showSidebar}/>
			{sidebar && <Sidebar active={setSidebar} />}
		</div>
	);
}

export default MenuHeader;
