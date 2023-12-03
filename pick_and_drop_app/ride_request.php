<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include("DbConnect.php");
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
$response = [];

switch ($method) {
    case 'POST':
        $raw_data = file_get_contents('php://input');
        $requestData = json_decode($raw_data);

        if ($requestData) {
            $sql = "INSERT INTO requests (firstName, lastName, institute, selectedRoute, selectedTransport, created_at) 
                    VALUES (:firstName, :lastName, :institute, :selectedRoute, :selectedTransport, :created_at)";

            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');

            // Bind parameters
            $stmt->bindParam(':firstName', $requestData->firstName);
            $stmt->bindParam(':lastName', $requestData->lastName);
            $stmt->bindParam(':institute', $requestData->institute);
            $stmt->bindParam(':selectedRoute', $requestData->selectedRoute);
            $stmt->bindParam(':selectedTransport', $requestData->selectedTransport);
            $stmt->bindParam(':created_at', $created_at);

            if ($stmt->execute()) {
                $requestId = $conn->lastInsertId(); // Get the auto-incremented Id of the inserted record
                $response = ['status' => 1, 'message' => 'Request created successfully.', 'requestId' => $requestId];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create request.'];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Invalid JSON data.'];
        }
        break;

    case 'GET':
        $sql = "SELECT * FROM requests";
        $stmt = $conn->query($sql);

        if ($stmt) {
            $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response = ['status' => 1, 'data' => $requests];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to retrieve requests.'];
        }
        break;

    case 'PUT':
        $raw_data = file_get_contents('php://input');
        $requestData = json_decode($raw_data);

        if ($requestData) {
            $requestId = $requestData->id;
            $status = $requestData->status;

            $sql = "UPDATE requests SET status = :status WHERE id = :requestId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':status', $status);
            $stmt->bindParam(':requestId', $requestId);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Request status updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update request status.'];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Invalid JSON data for updating status.'];
        }
        break;


    default:
        break;
}

echo json_encode($response);
