import './Footer.css';
import DefaultIcon from '../DefaultIcon';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-display-wrapper'>
			<div>
				<h2>Dúvidas</h2>
				<p>Perguntas Frequentes</p>
				<p>Formas de Pagamento</p>
				<p>Frete e Entrega</p>
				<p>Trocas e Devoluções</p>
			</div>

			<div>
				<h2>Institucional</h2>
				<Link to="/aboutUs">Sobre nós</Link>
				<p>Trabalho conosco</p>
				<p>Política de Privacidade</p>
				<p>Regulamento de Compras</p>
			</div>

			<div>
				<h2>Contato</h2>
				<Link to="/contactUs">Entre em contato</Link>
				<div>
					<p>Siga nossas Redes Sociais!</p>
					<div className='footer-display-icon'>
					<DefaultIcon Icon={FaInstagram}/>
					<DefaultIcon Icon={FaTwitter}/>
					<DefaultIcon Icon={FaFacebook}/>
					<DefaultIcon Icon={FaYoutube}/>
					</div>

				</div>
			</div>
    </div>
  );
}

export default Footer;
