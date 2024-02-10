const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

function data(form) {
  const email = form.email.value;
  const message = form.message.value;
  return {
    email,
    message,
  };
}

form.addEventListener('input', event => {
  localStorage.setItem(storageKey, JSON.stringify(data(form)));
});

const getDataFromStorage = () => localStorage.getItem(storageKey);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (localStorage.length !== 0) {
    const object = JSON.parse(getDataFromStorage());
    form.email.value = object.email;
    form.message.value = object.message;
    console.log(JSON.parse(getDataFromStorage()));
    localStorage.clear();
    form.reset();
  }
});
