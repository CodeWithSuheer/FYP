<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");



include("DbConnect.php");
$objDb = new DbConnect;
$conn = $objDb->connect();
// var_dump($conn);

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    case 'POST':
        $raw_data = file_get_contents('php://input');
        $user = json_decode($raw_data);

        if ($user) {
            $sql = "INSERT INTO formdata (firstName, lastName, mobileNo, institute, email, pin, address, city, companyName, userCategory, route, status, created_at) 
            VALUES (:firstName, :lastName, :mobileNo, :institute, :email, :pin, :address, :city, :companyName, :userCategory, :route, :status, :created_at)";


            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
            // Bind parameters
            $stmt->bindParam(':firstName', $user->firstName);
            $stmt->bindParam(':lastName', $user->lastName);
            $stmt->bindParam(':mobileNo', $user->mobileNo);
            $stmt->bindParam(':institute', $user->institute);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':pin', $user->pin);
            $stmt->bindParam(':address', $user->address);
            $stmt->bindParam(':city', $user->city);
            $stmt->bindParam(':companyName', $user->companyName);
            $stmt->bindParam(':userCategory', $user->userCategory);
            $stmt->bindParam(':route', $user->route);
            $stmt->bindParam(':status', $user->status);
            $stmt->bindParam(':created_at', $created_at);

            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'User created successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create user.'];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Invalid JSON data.'];
        }
        break;

    default:
        break;
}
