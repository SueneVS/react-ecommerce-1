import { FaArrowLeft } from 'react-icons/fa';
import './BackButton.css';
import { Link } from 'react-router-dom';

function BackButton() {
	const SidebarItem = ({ Icon, Text }) => {
		return (
			<div>
				<Icon />
				{Text}
			</div>
		);
	};

    return (
			<div className='container'>
				<button  className='back-button'>
					<Link className='text' to="/"> <SidebarItem Icon={FaArrowLeft} Text="Voltar ao início" /></Link>
				</button>
			</div>
    );
}

export default BackButton;
