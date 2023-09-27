import './DefaultIcon.css';

function DefaultIcon({ Icon, Text }) {

		return (
			<div className="DefaultIcon-display-wrapper">
				<div className='DefaultIcon-display-icon'>
					<Icon />
				</div>
				<div className='DefaultIcon-display-text'>
					{Text}
				</div>
			</div>
		);
	}


export default DefaultIcon;
