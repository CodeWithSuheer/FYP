<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include("DbConnect.php");
$objDb = new DbConnect;
$conn = $objDb->connect();
// var_dump($conn);

$method = $_SERVER['REQUEST_METHOD'];

$response = ['status' => 0, 'message' => 'Unknown error', 'data' => []];

switch ($method) {
    case 'GET':
        // Retrieve requests with a pending status from the database.
        $sql = "SELECT * FROM formdata WHERE status = 'pending'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($results) {
            $response = ['status' => 1, 'message' => 'Requests fetched successfully', 'data' => $results];
        } else {
            $response = ['status' => 0, 'message' => 'No pending requests found', 'data' => []];
        }
        break;
}

// Set the Content-Type header to indicate JSON response
header('Content-Type: application/json');

// Send the response as JSON
echo json_encode($response);
