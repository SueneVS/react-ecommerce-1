import { useState } from 'react';
import {FaBars, FaTimes, FaUserAlt,  FaChartBar, FaInfoCircle} from 'react-icons/fa';
import './MenuHeader.css';

function MenuHeader () {
	const[sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const Sidebar = ({active}) => {
	const closeSidebar = () => {
		active(false);
	};
	const SidebarItem = ({ Icon, Text }) => {
		return (
			<div>
				<Icon />
				{Text}
			</div>
		);
	};
	return (
    <div className='MenuHeader-sidebar'>
      <FaTimes onClick={closeSidebar} />
			<ul className='MenuHeader-sidebar-item'>
				<li><SidebarItem Icon={FaChartBar} Text="Quem somos"/></li>
				<li><SidebarItem Icon={FaUserAlt} Text="Todos os produtos" /></li>
        <li><SidebarItem Icon={FaUserAlt} Text="Área do cliente" /></li>
        <li><SidebarItem Icon={FaInfoCircle} Text="Cadastre-se" /></li>
				<li><SidebarItem Icon={FaInfoCircle} Text="Contato" /></li>
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
