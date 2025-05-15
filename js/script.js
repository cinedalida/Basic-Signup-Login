function showLogin() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}

function showSignup() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "block";
}

// Hardcoded credentials for demo purposes
function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMessage = document.getElementById("login-error-message");

  if (username === "testUser" && password === "Strong1") {
    alert("Login Successful");
    window.location.href = "home.html";
    return false;
  } else {
    errorMessage.textContent = "Incorrect username or password.";
    return false;
  }
}

function validateSignup() {
  let username = document.getElementById("signup-username").value;
  let password = document.getElementById("signup-password").value;
  let errorMessage = document.getElementById("signup-error-message");

  let usernameRegex = /^[a-zA-Z0-9_]+$/;

  let passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$/;

  // Validate username
  if (!usernameRegex.test(username)) {
    alert("Username can only contain letters, numbers, and underscores.");
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    alert(
      "Password must contain at least 1 uppercase letter, 1 number, and be between 6-10 charaacters."
    ); // Show error as alert
    return false;
  }

  // Display success message (for now just a simulation)
  alert("Sign up successful! Your details have been saved.");

  // Go back to login page after signup
  showLogin();

  return false;
}

function forgotPassword() {
  alert("Password recovery coming soon..");
}
