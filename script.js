const registerPass = document.getElementById("registerPassword");
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("error");
    const err = input.nextElementSibling;
    err.style.display = "none";
    if (input.value.trim() === "") {
      input.classList.add("error");
      err.textContent = `${input.placeholder} is required.`;
      err.style.display = "block";
      isValid = false;
    } else if (input.id === "loginEmail" || input.id === "registerEmail") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value)) {
        input.classList.add("error");
        err.textContent = "Please enter a valid email address.";
        err.style.display = "block";
        isValid = false;
      }
    } else if (input.id === "confirmPassword") {
      if (input.value !== registerPass.value) {
        input.classList.add("error");
        err.textContent = "Passwords do not match.";
        err.style.display = "block";
        isValid = false;
      }
    }
  });
  return isValid;
}
const fiorm = document.getElementById("fiorm");
fiorm.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm(fiorm);
});
