const inputField = document.querySelector('#name-input');
const outputSpan = document.querySelector('#name-output');

inputField.addEventListener('input', () => {
  const trimmedValue = inputField.value.trim();
  outputSpan.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
