const nameEl = document.querySelector('#name');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');
const form   = document.querySelector('#submit');
const phoneEl = document.querySelector('#phone');


const checkPhone = () => 
{
  let valid = false;

  const min = 3,
      max = 25;

  const phone = phoneEl.value.trim();

  if (!isRequired(phone)) 
  {
    showError(phoneEl, 'Phone cannot be blank.');
  }
    
  else if (!isBetween(phone.length, min, max)) 
  {
    showError(phoneEl, `Invalid Phone`)
  } 
  else 
  {
    showSuccess(phoneEl);
    valid = true;
  }
  return valid;
};






const checkName = () => 
{
  let valid = false;

  const min = 3,
      max = 25;

  const name = nameEl.value.trim();

  if (!isRequired(name)) 
  {
    showError(nameEl, 'name cannot be blank.');
  }
    
   else if (!isBetween(name.length, min, max)) 
  {
     showError(nameEl, `Invalid name`)
  } 
  else 
  {
    showSuccess(nameEl);
    valid = true;
  }
  return valid;
};




const checkUsername = () => 
{
  let valid = false;

  const min = 3,
      max = 25;

  const username = usernameEl.value.trim();

  if (!isRequired(username)) 
  {
    showError(usernameEl, 'Username cannot be blank.');
  }
    
  else if (!isBetween(username.length, min, max)) 
  {
    showError(usernameEl, `Invalid Username`)
  } 
  else 
  {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};


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

const checkConfirmPassword = () => 
{
  let valid = false;
  
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) 
  {
    showError(confirmPasswordEl, 'Please confirm your password');
  } 
  else if (password !== confirmPassword) 
  {
    showError(confirmPasswordEl, 'Does not match');
  } 
  else 
  {
    showSuccess(confirmPasswordEl);
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
  let isUsernameValid = checkUsername(),
      isEmailValid = checkEmail(),
      isPasswordValid = checkPassword(),
      isConfirmPasswordValid = checkConfirmPassword();
      isNameValid = checkName()
      isPhoneValid = checkPhone()

  let isFormValid = isPhoneValid &&
  isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid;
});