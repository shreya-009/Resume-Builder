function validateForm() {
    var name = document.forms["signupForm"]["name"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;

    if (name == "" || email == "" || password == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}