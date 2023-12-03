<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include("DbConnect.php");
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

$response = ['status' => 0, 'message' => 'Unknown error'];

switch ($method) {
    case 'POST':
        $raw_data = file_get_contents('php://input');
        $data = json_decode($raw_data);

        if ($data) {
            $user_id = $data->user_id;

            $sql = "UPDATE formdata SET status = 'rejected' WHERE id = :user_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':user_id', $user_id);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Request rejected successfully'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to reject request'];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Invalid JSON data'];
        }
        break;
}

header('Content-Type: application/json');

echo json_encode($response);
