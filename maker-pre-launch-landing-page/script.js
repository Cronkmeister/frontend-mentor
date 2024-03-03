// document
//   .getElementById("submit-Btn")
//   .addEventListener("click", validateEmail());

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email");
  const errorText = document.getElementById("error-text");

  // Regular expression for validating email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email.value)) {
    email.classList.remove("invalid");
    errorText.classList.add("hidden");
  } else {
    email.classList.add("invalid");
    errorText.classList.remove("hidden");
  }
});
