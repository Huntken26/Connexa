const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName-signup').value.trim();
    const lastName = document.querySelector('#lastName-signup').value.trim();
    const userName = document.querySelector('#userName-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const passwordHash = document.querySelector('#password-signup').value.trim();
  
    if (firstName && lastName && userName && email && passwordHash) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, userName, email, passwordHash }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);