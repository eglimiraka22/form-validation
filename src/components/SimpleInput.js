import { useState } from 'react';

import useInput from '../hooks/use-input';

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid:enteredNameisValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset:resetNameInput
	} = useInput((value) => value.trim() !== '');

	const {
		value:enteredEmail,
		isValid:enteredEmailisValid,
		hasError:emailInputHasError,
		valueChangeHandler:emailChangeHandler,
		inputBlurHandler:emailBlurHandler,
		reset:resetEmailInput

	} = useInput ((value) => emailRegex.test(value))


	



	let formIsValid = false;
	if (enteredNameisValid && enteredEmailisValid) {
		formIsValid = true;
	}

	



	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (!enteredNameisValid) {
			return;
		}
		console.log(enteredName);
		resetNameInput()
		resetEmailInput()
	};
	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control ';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control ';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be emppty</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className='error-text'>Please enter a valid email</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
