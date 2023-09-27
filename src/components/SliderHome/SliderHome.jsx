import {register} from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import {Swiper, SwiperSlide} from 'swiper/react';
import './SliderHome.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function SliderHome() {
	const data =[
		{
			id:'1',
			image:'./assets/Fig1.jpg'
		},
		{
			id:'2',
			image:'./assets/Fig2.jpg'
		},
		{
			id:'3',
			image:'./assets/Fig3.jpg'
		}
	];

	return (
			<div className='slider-wrapper'>
				<Swiper
				slidesPerView={1}
				pagination={{clickable: true}}
				navigation
				autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
				modules={[Autoplay, Pagination, Navigation]}
				>
					{data.map( (item) => (
						<SwiperSlide key={item.id}>
							<img
							src={item.image}
							alt="Slider"
							className='slide-item'
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
	);
}

export default SliderHome;
