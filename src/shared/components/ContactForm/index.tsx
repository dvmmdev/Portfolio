import React from 'react';
import './styles.scss';

const ContactForm: React.FC = () => {
	return (
		<div className='contact-form'>
			<form action='' autoComplete='off'>
				<div className='field'>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							className='input'
							type='text'
							name='name'
							id='contact-email'
						/>
					</div>
				</div>
				<div className='field'>
					<div>
						<label htmlFor='email'>Email</label>
						<input
							className='input'
							type='email'
							name='email'
							id='contact-name'
						/>
					</div>
				</div>
				<div className='field'>
					<div>
						<label htmlFor='message'>Message</label>
						<textarea
							className='input'
							name='message'
							id='contact-msg'
							cols={32}
							rows={10}
						></textarea>
					</div>
				</div>
				<div className='submit-button'>
					<input type='submit' value='Send' className='button' />
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
