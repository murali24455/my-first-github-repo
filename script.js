// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Basic validation
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    // Dummy login credentials (for testing)
    const validUsername = "admin";
    const validPassword = "123456";

    if (username === validUsername && password === validPassword) {
      alert("Login successful!");
      // Redirect or perform any other action
      // window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});
