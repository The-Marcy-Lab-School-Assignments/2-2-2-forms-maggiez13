/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  
  const userValue = document.getElementById("results-username");
  userValue.innerHTML = formObj.username

  const codingLevel = document.getElementById("results-coding-level");
  codingLevel.innerHTML = formObj.codingLevel;

  const location = document.getElementById("results-location");
  location.innerHTML = formObj.location;

  const enjoyAssignment = document.getElementById("results-did-like-assignment");
  enjoyAssignment.innerHTML = formObj.didLikeAssignment === "on" ? "Yes" : "No";

  form.reset();
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

