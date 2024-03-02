function validateForm() {
  var email = document.forms["loginForm"]["email"].value;
  var password = document.forms["loginForm"]["password"].value;

  if (email == "" || password == "") {
      alert("Email and password must be filled out");
      return false;
  }
  return true;
}