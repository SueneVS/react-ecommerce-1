
import { Link } from 'react-router-dom';
import './Register.css';
import DefaultButton from '../../components/DefaultButton/DefaultButton';


function Register() {

	return (
		<div className="container">
			<div className="container-register">
				<div className="wrap-register">
					<form className="register-form">
						<span className="register-form-title"> Cadastre-se! </span>
						<p className='txt1'>Faça o seu cadastro preenchendo os campos abaixo:</p>

						<div className="wrap-input">
							<label htmlFor="input-nome">Nome</label>
							<input required
								className='input'
								type="text"
								placeholder="Digite o seu nome completo"
								id="input-nome"
							/>
						</div>

						<div className="wrap-input">
							<label htmlFor="input-date">Data de nascimento</label>
							<input
								className='input'
								type="date"
								placeholder="Digite sua data de nascimento"
								id="input-date"
								required
							/>
						</div>

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

						<div className="wrap-input">
							<label htmlFor="input-password">Confirmar senha</label>
							<input
								className='input'
								type="password"
								placeholder="Confirme sua senha"
								id="input-confirm-password"
								required
							/>
						</div>

						<div className='btn'>
							<DefaultButton>
								<Link to="/myAccount"></Link>
							</DefaultButton>
						</div>

						<div className="text-center">
							<span className="txt1">Já possui conta? </span>
							<Link className='txt2'>Acesse aqui</Link>
						</div>
				</form>
				</div>
			</div>
		</div>
	);

}
export default Register;
