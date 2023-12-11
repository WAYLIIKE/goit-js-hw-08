import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', throttle(handleInput, 500));

let dataResult = {};
initForm();

function handleInput(event) {
  dataResult = localStorage.getItem('feedback-form-state');
  if (dataResult) {
    dataResult = JSON.parse(dataResult);
  } else {
    dataResult = {};
  }

  dataResult[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataResult));
}

function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = event.target.elements;

  if (!email.value || !message.value) {
    return alert('Enter email and message!');
  }
  console.log(dataResult);
  form.reset();
  localStorage.clear();
}

function initForm() {
  let initValues = localStorage.getItem('feedback-form-state');

  if (initValues) {
    initValues = JSON.parse(initValues);

    Object.entries(initValues).forEach(([name, value]) => {
      dataResult[name] = value;
      form.elements[name].value = value;
    });
  }
}
