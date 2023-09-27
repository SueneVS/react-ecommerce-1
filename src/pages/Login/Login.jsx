import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import DefaultButton from '../../components/DefaultButton/DefaultButton';


function Login() {
	const navigate = useNavigate();
	const handleSubmit = useCallback((event) => {
		event.preventDefault();
		navigate('/');
	}, [navigate]);

	return (
		<div onSubmit={handleSubmit}>
			<div className="container">
				<div className="container-login">
					<div className="wrap-login">
						<form className="login-form">
							<span className="login-form-title"> Olá, acesse sua conta! </span>
							<p className='txt1'>Faça o seu login preenchendo os campos abaixo:</p>

							<div className="wrap-input">
								<label htmlFor="input-email">E-mail</label>
								<input required
									className='input'
									type="email"
									placeholder="Digite seu e-mail"
									id="input-email"
								/>
							</div>

							<div className="wrap-input">
								<label htmlFor="input-password">Senha</label>
								<input
									className='input'
									type="password"
									placeholder="Digite sua senha"
									id="input-password"
									required
								/>
							</div>
							<div className="text-justify">
							<Link> Esqueceu a senha?</Link>
								<div className='btn'>
									<DefaultButton>
										<Link to="/MyAccount"></Link>
									</DefaultButton>
								</div>
							</div>
							<div className="text-center">
								<span className="txt1">Não possui conta? </span>
								<Link to="/Register" className='txt2'>Cadastre-se</Link>
							</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	);

}

export default Login;
