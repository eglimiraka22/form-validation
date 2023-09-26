import useInput from '../hooks/use-input';


const BasicForm = (props) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


  const {
    value:enteredFirstName,
    isValid:enteredFirstNameIsValid,
    hasError:firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameBlurHandler,
    reset:resetFirstName
  } =useInput( (value) => value.trim() !== '')

  const {
    value:enteredLastName,
    isValid:enteredLastNameIsValid,
    hasError:lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastName
  } =useInput((value) => value.trim() !== '')

  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmail 
  } =useInput((value) => emailRegex.test(value))


	let formIsValid = false;
if (enteredFirstNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
  formIsValid=true
  
}

  const formSubmitHandler = (event) =>{

    event.preventDefault()
    if (!enteredFirstNameIsValid || !enteredEmailIsValid || !enteredLastNameIsValid) {
      return;
      
    }
    console.log({enteredEmail , enteredFirstName , enteredLastName})

    resetFirstName();
    resetLastName();
    resetEmail();
  }


  const FirstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control' 
  const LastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control' 
  const EmailInputClasses = emailHasError ? 'form-control invalid' : 'form-control' 

  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={FirstNameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' value={enteredFirstName}  onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameHasError && <p className='error-text'>Please enter your First Name</p>}
        </div>
        <div className={LastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={enteredLastName}  onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className='error-text'>Please enter your Last Name</p>}
        </div>
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email'  value={enteredEmail}  onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailHasError && <p className='error-text'>Please enter a valid email address</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
