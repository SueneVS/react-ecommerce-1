import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MyAccount() {
	const navigate = useNavigate();
	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		navigate('/');
	}, [navigate]);

	return (
		<div>
			<div onSubmit={handleSubmit}>
				<h2>My account display</h2>
			</div>
			<Link to="/">Voltar</Link>
		</div>
	);
}

export default MyAccount;
