// Function to validate alphabet input allowing spaces
function validateAndFilterAlphabet(event) {
  const input = event.target;
  let inputValue = input.value;

  // Remove non-alphabet and non-space characters using regex
  inputValue = inputValue.replace(/[^A-Za-z ]/g, '');

  // Update the input value
  input.value = inputValue;
}














// Event listener to trigger validation and filtering on input
document.getElementById('nameInput').addEventListener('input', validateAndFilterAlphabet);


function validatePhoneNumber(event) {
  const input = event.target;
  let inputValue = input.value;

  // Remove non-numeric characters using regex
  inputValue = inputValue.replace(/\D/g, ''); // \D matches any non-digit character

  // Update the input value
  input.value = inputValue;
}

// Event listener to trigger validation on input
document.getElementById('phoneInput').addEventListener('input', validatePhoneNumber);














document.addEventListener("DOMContentLoaded", function() {
  var dateInputMobi = document.getElementById('dateInput-mobi');

  // Function to calculate the max date (today + 7 days)
  function getMaxDate() {
    var today = new Date();
    var maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 7);
    return maxDate;
  }

  // Set the min and max attributes of dateInput-mobi
  dateInputMobi.setAttribute('min', formatDate(new Date())); // Minimum date is today
  dateInputMobi.setAttribute('max', formatDate(getMaxDate())); // Maximum date is today + 7 days

  // Function to format the date as yyyy-mm-dd
  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; // January is 0
    var year = date.getFullYear();

    // Ensure day and month are two digits
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return year + '-' + month + '-' + day;
  }

  // Handle the toggle between text and date input on focus and blur
  dateInputMobi.addEventListener('focus', function() {
    this.type = 'date';
    this.focus();
  });

  dateInputMobi.addEventListener('blur', function() {
    if (!this.value) {
      this.type = 'text';
    }
  });

});



























document.addEventListener("DOMContentLoaded", function() {
  var peoplesInput = document.getElementById('peoplesInput');

  // Add input event listener to validate input
  peoplesInput.addEventListener('input', function() {
    var value = parseInt(this.value);

    // Check if value is not a number or negative
    if (isNaN(value) || value < 0) {
      this.value = ''; // Clear the input if invalid
    }

    // Check if value exceeds maximum allowed (50)
    if (value > 50) {
      this.value = '50'; // Set value to maximum allowed
    }
  });
});















document.addEventListener('DOMContentLoaded', () => {

  // Function to validate all required inputs
  function checkInputs() {
      const inputs = document.querySelectorAll('input[required]');
      const submitBtn = document.querySelector('.form-btn');
      let allFilled = true;

      inputs.forEach(input => {
          if (!input.value.trim()) {
              allFilled = false;
          }
      });

      if (allFilled) {
          submitBtn.removeAttribute('disabled');
      } else {
          submitBtn.setAttribute('disabled', 'disabled');
      }
  }

  // Event listener to check inputs on change
  document.querySelectorAll('input[required]').forEach(input => {
      input.addEventListener('input', checkInputs);
  });
});




















document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form'); // Select the form element
const submitBtn = form.querySelector('.form-btn'); // Select the submit button

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Change button text to "ENQUIRY SUBMITTED!"
  submitBtn.textContent = 'ENQUIRY SUBMITTED!';

  // Reset button text after 1 second
  setTimeout(function() {
    submitBtn.textContent = 'ENQUIRE NOW';
    form.submit(); // Proceed with the default form submission
  }, 1000); // 1000 milliseconds = 1 second delay
});
});