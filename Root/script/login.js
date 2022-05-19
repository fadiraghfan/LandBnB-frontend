const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const form   = document.querySelector('#submit');

const checkEmail = () => 
{
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) 
  {
    showError(emailEl, 'Email cannot be blank.');
  } 
  else if (!isEmailValid(email)) 
  {
    showError(emailEl, 'Email is not valid.')
  } 
  else 
  {
    showSuccess(emailEl);
    valid = true;
  }

  return valid;
};

const checkPassword = () => 
{
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) 
  {
    showError(passwordEl, 'Password cannot be blank.');
  } 
  else if (!isPasswordSecure(password)) 
  {
    showError(passwordEl, 'password must conatin atleast 8 characters (uppercase or lowercase, symbols and numbers');
  }
  else 
  {
    showSuccess(passwordEl);
    valid = true;
  }

  return valid;
};

const isEmailValid = (email) => 
{
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("[a-zA-Z0-9]{8,}");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => 
{
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => 
{
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) 
{
  e.preventDefault();
  //check fields before submitting
  let isEmailValid = checkEmail(),isPasswordValid = checkPassword();
  let isFormValid = isEmailValid && isPasswordValid;
});