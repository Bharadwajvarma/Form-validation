

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.emailError');

email.addEventListener('input', emailValidation);

function emailValidation()
{
  if (email.validity.valid) 
  {
    emailError.textContent = ''; 
    emailError.className = 'emailError';
  } 
  else 
  {
    showEmailError();
  }
}

function showEmailError() 
{
  if(email.validity.valueMissing) 
  {
    emailError.textContent = 'You need to enter a cognizant e-mail address.';
  } 

  else if(email.validity.typeMismatch) 
  {
    emailError.textContent = 'Entered value needs to be a cognizant e-mail address.';
  } 
  
  emailError.className = 'emailErrorActive';
}


const password=document.getElementById('pass');
password.addEventListener('input', passwordValidation);
const passwordError = document.querySelector('#pass + span.passwordError');


function passwordValidation()
{
  if (password.validity.valid) 
  {
    passwordError.textContent = ''; 
    passwordError.className = 'passwordError';
  } 
  else 
  {
    showPasswordError();
  }
}

function showPasswordError()
{
  
 
  if(password.validity.tooShort)
  {
    passwordError.textContent='Password is too short. Enter atleast 8 characters.';
  }

  else if (password.value.search(/[a-z]/) < 0) 
  {
    passwordError.textContent="Your password must contain at least one lowercase letter."; 
  }

  else if (password.value.search(/[A-Z]/) < 0) 
  {
    passwordError.textContent="Your password must contain at least one uppercase letter."; 
  }

  else if (password.value.search(/[a-z]/) < 0) 
  {
    passwordError.textContent="Your password must contain at least one lowercase letter."; 
  }

  else if (password.value.search(/[0-9]/) < 0) 
  {
    passwordError.textContent=("Your password must contain at least one digit.");
  }
  
  else if (password.value.search(/[@$!%*?&]/) < 0)
  {
     passwordError.textContent=("Your password must contain at least one special character.");
  } 
  else
  {
    passwordError.textContent = ''; 
    passwordError.className = 'passwordError';
  }

  passwordError.className = 'passwordErrorActive';
}


const confirmpassword=document.getElementById("confirmpass");
confirmpassword.addEventListener("input", confirmPasswordValidation);
const confirmPasswordError = document.querySelector('#confirmpass + span.confirmPassError');

function confirmPasswordValidation()
{

  if(password.value!=confirmpassword.value)
  {
    confirmPasswordError.textContent="Password do not match. Enter same password as above.";
    confirmPasswordError.className = 'confirmPasswordErrorActive';
  }
  else
  {
    confirmPasswordError.textContent = ''; 
    confirmPasswordError.className = 'confirmPassError';
  }

}

const form  = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function (event) {

  if(!email.validity.valid) 
  {
  showEmailError();
  event.preventDefault();
  }

  if(!password.validity.valid)
  {
    showPasswordError();
    event.preventDefault();
  }

  alert("User Registered Successfully !");
  
});



