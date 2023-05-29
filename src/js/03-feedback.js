import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

let userForm = {};

onLocalSaveForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  if (input.value === '' || textarea.value === '') {
    return;
  }

  console.log(userForm);
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
}

function onInput() {
  userForm = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userForm));
}

function onLocalSaveForm() {
  const saveForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveForm) {
    input.value = saveForm.email;
    textarea.value = saveForm.message;
  }
}
