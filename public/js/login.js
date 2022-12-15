const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const passwordHash = document.querySelector('#password-login').value.trim();
  
    // if (email && passwordHash) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          passwordHash
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert("Incorrect email or password");
      }
    // }
  };
  

  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
