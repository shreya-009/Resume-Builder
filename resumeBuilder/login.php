<?php
session_start();

include 'connection.php'; //Include the database connection script


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if email exists in the signup_details table
    $sql = "SELECT SignUpID, Email, Password FROM signup_details WHERE Email='$email'";

    $result = $conn->query($sql);

// Check if a row was returned
if ($result->num_rows == 1) {
    // Retrieve the hashed password from the result
    $row = $result->fetch_assoc();

    // Use $hashedPassword for verification
    // For example, you can verify the password like this:
    if (password_verify($password, $row['Password'])) {
        // Password matches, start session and store user information
        $_SESSION['user_id'] = $row['SignUpID'];
        $_SESSION['email'] = $row['Email'];
    
    // Insert login details into login_details table
    $sql = "INSERT INTO login_details (Email, Password) VALUES ('$email', '$row[Password]')";
    if ($conn->query($sql) === TRUE) {
        // Login details inserted successfully
        // Redirect to another page
        $_SESSION['is_authenticated'] = true;
        header("Location: selectTemplate.html");
        exit();
    } else {
        echo "Error inserting login details: " . $conn->error;
      }
    } else {
    echo "Invalid email or password.";
      }
} else {
      echo "Invalid email or password.";
     }
}
// Close the database connection
$conn->close();
?>