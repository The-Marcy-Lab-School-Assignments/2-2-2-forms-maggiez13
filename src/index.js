/** GENERAL FEEDBACK:
 * Great job getting all test cases to pass! Love the use of the formsData API!
 * Love the use of comments for documentation and overall your code is very clean!
 */

const handleSubmit = (event) => {
  event.preventDefault();

  // turns form inputs into an object
  const form = event.target;
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  
  // reassigning results values 
  const userValue = document.getElementById("results-username");
  /** FEEDBACK: Instead of innerHTML, you can use textContent! */
  userValue.innerHTML = formObj.username;

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

