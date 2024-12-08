const scriptURL = 'https://script.google.com/macros/s/AKfycbx53foWy7n1eB4vmi1YEaCboV659F2wNuWDs4p2dQRkPvVu9cJLAbsIelu8vFRaiCb52Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})