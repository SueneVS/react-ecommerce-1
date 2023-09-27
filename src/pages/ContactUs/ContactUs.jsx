import brand2 from '../../../public/assets/brand2.png';
import './ContactUs.css';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import DefaultIcon from '../../components/DefaultIcon';


function ContactUs() {

	return (
		<div className='contactUs-wrapper'>
					<div className='contactUs-l'>
						<h1>Entre em contato conosco</h1>
						<img src={brand2} className='contactUs-img'/>
						<div>
									<label htmlFor="input-nome">Nome</label>
									<input required
										type="text"
										placeholder="Digite o seu nome completo"
										id="input-nome"
										className='input'
									/>
								</div>

								<div>
									<label htmlFor="input-email">E-mail</label>
									<input required
										className='input'
										type="email"
										placeholder="Digite seu e-mail"
										id="input-email"
									/>
								</div>

								<div>
									<label htmlFor="input-nome">Assunto</label>
									<input required
										className='input'
										type="text"
										id="input-nome"
										placeholder="Digite o assunto"
									/>
								</div>

								<div>
									<label htmlFor="input-message">Mensagem</label>
									<textarea
										className='input'
										type="text"
										placeholder="Digite a sua mensagem"
										rows="5"
										cols="50"
										id="message"
										required
									/>
								</div>
								<DefaultButton/>
					</div>

					<div className='contactUs-r'>
						<h3>Ligue para nós</h3>
						<p> 48- 9- 9999-9999</p>
						<p> 48- 9- 8888-8888</p>
						<h3>Localização</h3>
						<p>R:Lorem ipsum, SC</p>
						<p>000-000, Basil</p>
						<h3>Horário de atendimento</h3>
						<p>Seg-Sext....8h-20h</p>
						<p>Sáb, Dom....8h-12h</p>
						<h3>Siga Nossas Redes Sociais!</h3>
						<div className='contactUs-display-icon'>
							<DefaultIcon Icon={FaInstagram}/>
							<DefaultIcon Icon={FaTwitter}/>
							<DefaultIcon Icon={FaFacebook}/>
							<DefaultIcon Icon={FaYoutube}/>
						</div>
					</div>
		</div>
	);
}

export default ContactUs;
