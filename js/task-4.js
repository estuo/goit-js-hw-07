document
  .querySelector('.login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const email = this.elements.email.value.trim();
    const password = this.elements.password.value.trim();

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
    }

    console.log({ email, password });
    this.reset();
  });
