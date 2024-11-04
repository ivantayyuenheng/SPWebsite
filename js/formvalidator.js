/*
FED CA2 Assignment
    Assignment Theme: "Save the Earth"
  
    Javascript for form.html (to validate form)
    Author: IVAN TAY YUEN HENG
    Date: 08/05/2023

     Filename: formvalidator.js
*/


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      // If any of the validation is wrong, the submission will stopped and the error window alert will appear.
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        window.alert('Please kindly enter all the input or make sure your input is correct!');
      }

      // If the validation is correct, the submission will continue and the correct window alert will appear.
      else {
        window.alert('Thank you for your feedback! Your feedback will be evaluate and act accordinly to further improve my website. Again, thank you for your time and have a great day!')
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


