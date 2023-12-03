<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

session_start();

// Check if the user is logged in
if (isset($_SESSION['user'])) {
    // Clear the session to log the user out
    session_destroy();
    $response = ['status' => 1, 'message' => 'User logged out successfully'];
} else {
    $response = ['status' => 0, 'message' => 'User is not logged in'];
}

// Set the Content-Type header to indicate JSON response
header('Content-Type: application/json');

// Send the response as JSON
echo json_encode($response);
