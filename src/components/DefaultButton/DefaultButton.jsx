import './DefaultButton.css';

function DefaultButton({label = 'Entrar', onClick}) {

    return (
      <button
				className='default-button-wrapper'
				onClick={onClick}
				data-testid="default-button"
			>
				{label}
			</button>
    );
}

export default DefaultButton;
