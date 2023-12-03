<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include("DbConnect.php");
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM formdata WHERE userCategory = 'Service Provider'";
        $stmt = $conn->prepare($sql);

        if ($stmt->execute()) {
            $serviceProviders = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response = ['status' => 1, 'serviceProviders' => $serviceProviders];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to fetch service providers.'];
        }
        break;

    default:
        break;
}

echo json_encode($response);
