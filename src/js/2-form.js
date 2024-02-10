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
const object = JSON.parse(getDataFromStorage());

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.email.value == 0 || form.message.value == 0) {
    window.alert('All the fields must be filled in!');
  } else {
    console.log(JSON.parse(getDataFromStorage()));
    localStorage.clear();
    form.reset();
  }
});
if (localStorage.length !== 0) {
  form.email.value = object.email;
  form.message.value = object.message;
}
