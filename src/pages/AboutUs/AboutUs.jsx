

import './AboutUs.css';
import brand2 from '../../../public/assets/brand2.png';
import { FaBookOpen, FaHandHoldingHeart, FaHandshake } from 'react-icons/fa';
import DefaultIcon from '../../components/DefaultIcon/DefaultIcon';


function AboutUs() {

	return (
		<div className="aboutUs-wrapper">
				<div className='aboutUs-l'>
					<h1>Quem Somos</h1>
					<img src={brand2} className='aboutUs-img'/>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae cum exercitationem iste animi, perferendis ex, vel est sed cumque soluta illo sunt saepe harum aliquid aliquam id, ut voluptatem veniam?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste, praesentium sint iusto provident debitis perferendis consequatur quaerat, maiores voluptas est ipsum quia suscipit. Illum numquam quod recusandae alias! Culpa.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam suscipit quibusdam ratione minus voluptatum non voluptate, totam animi laudantium nemo corrupti culpa atque maiores aspernatur eius facilis! Dolores, labore deleniti.</p>
				</div>
				<div className='aboutUs-r'>
					<h2>História</h2>
					<DefaultIcon Icon={FaBookOpen} />
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque illo ullam necessitatibus commodi tenetur eveniet recusandae sint voluptatibus nulla libero, dolor neque, non, distinctio perspiciatis sit nobis. Delectus, eum commodi!</p>
					<h2>Missão</h2>
					<DefaultIcon Icon={FaHandshake} />
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt corrupti natus atque cum praesentium! Expedita delectus culpa iste aut distinctio dignissimos, obcaecati libero fugit mollitia quod, inventore quis voluptatem debitis.</p>
					<h2>Valores</h2>
					<DefaultIcon Icon={FaHandHoldingHeart} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo praesentium architecto quos commodi. Nobis cumque quis quidem autem mollitia porro optio. Nostrum unde similique distinctio architecto ipsum, veniam tempore.
					</p>
				</div>
		</div>

	);
}

export default AboutUs;
