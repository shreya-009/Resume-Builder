<?php
$servername = "localhost"; // Change to your MySQL 8.0 server address if different
$username = "root";        // MySQL 8.0 username (default is root)
$password = "Program#mysql09";            // MySQL 8.0 password (default is blank)
$database = "resume_builder"; // Name of your MySQL 8.0 database

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>