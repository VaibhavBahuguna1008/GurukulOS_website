<?php
$username = $_POST['username'];
$password = $_POST['password'];

// Now, you need to validate and sanitize the input.
// You should also consider hashing and salting the password.
// For simplicity, we'll use plain text here, but it's not recommended for production.
// You'd typically use password_hash() and password_verify() for secure password handling.

// Perform a MySQL query to check if the user exists and the password matches.
$db = new mysqli('localhost', 'username', 'password', 'database_name');

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}

$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $db->query($query);

if ($result->num_rows == 1) {
    // Authentication successful
    // Redirect the user to a dashboard or a success page
    header('Location: dashboard.php');
} else {
    // Authentication failed
    // Redirect back to the login page with an error message
    header('Location: login.php?error=1');
}

$db->close();
?>