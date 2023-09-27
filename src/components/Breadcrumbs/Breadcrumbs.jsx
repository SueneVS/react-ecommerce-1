import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';


function Breadcrumbs() {
	const location = useLocation();

	let currentLink = [];

	const crumbs = location.pathname.split('/')
		.filter(crumb => crumb !=='')
		.map(crumb => {
			currentLink.push(`/${crumb}`);

			return (
				<div key={crumb} className="crumb">
					<div className='crumb-back'>
					<Link to="/"> Voltar à página inicial </Link>
					</div>
					<div>
					<Link  to={currentLink.join('')}>{crumb}</Link>
					</div>
				</div>
			);
		});

    return (
			<div className="breadcrumbs">
				{crumbs}
			</div>
    );
}

export default Breadcrumbs;
